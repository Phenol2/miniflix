import React, {  useContext, useEffect } from "react"
import styles from "./Trending.module.css"
import { MdTurnedInNot, MdTurnedIn} from "react-icons/md"
import { Link } from "react-router-dom"
import MovieImg from "../icons/film-solid.svg"
import SeriesImg from "../icons/tv.png"
import BookmarkedContext from "./BookmarkedContext"


const Movie = ({ movie }) => {
  const { trendingMovies, setTrendingMovies, setBookmarked } = useContext(BookmarkedContext)
  
  
  
  const setBookmarkHandler = () => {
    
      setTrendingMovies(trendingMovies.map(item => {
        if(item.id === movie.id){
          return {
            ...item, 
            isBookmarked: !movie.isBookmarked,
          }
        }
        return item
      }))
    
    
    //console.log(bookmarked)
  }
  
  useEffect(() => {
    setBookmarked(trendingMovies.filter(movie => {
     return  movie.isBookmarked 
    }))
    
  },[setBookmarked,trendingMovies])
  
  
  
  return (
    <div className = {styles["movie-container"]}>
    <div className = {styles["case"]}>
    { movie.isBookmarked === true ?
     <MdTurnedIn 
     className = {styles["size"]} 
     onClick = {setBookmarkHandler}
     /> :
      <MdTurnedInNot
      className = {styles["imgs"]} 
      onClick = {setBookmarkHandler}
      />
    }
     </div>
      <Link to = {`/movi/${movie.title}`}>
      <img src = { movie.url } alt = "movies" className = {styles["img"]}/>
      </Link>
      <div className = {styles["movie-details"]}>
        <div> 
          <div className = {styles["yeartype"]} >
           <div className = {styles["year"]}>
             {movie.year}
           </div>
          <div className = {styles["type"]}>
          
          {
            movie.type === "Movies" ? 
            <img 
            src = {MovieImg} 
            alt = "movies" 
            className = {styles["movies"]}
            /> : 
            <img 
            src = {SeriesImg} 
            alt = "series" 
            className = {styles["movies"]}
            />
          }
            <span> {movie.type} </span>
            
          </div>
        </div>
         <div className = {styles["title"]}> 
         {movie.title} 
         </div>
        </div>
        <div className = { styles["mark"]}>
        {
    // using ternary operator to render content...
          movie.mark === "PG" 
          ?  "PG"  
          : ((movie.mark === "E") 
          ?  "E"  
          : "18+"
          )
        }
        </div>
      </div>
    </div>
    )
}

export default Movie;