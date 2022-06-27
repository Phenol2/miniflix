import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import styles from "./RecMovies.module.css"
import { MdTurnedInNot, MdTurnedIn} from "react-icons/md"
import BookmarkedContext from "./BookmarkedContext"
import MovieImg from "../icons/film-solid.svg"
import SeriesImg from "../icons/tv.png"

const RecommendedMovies = ({ movie }) => {
    const { recommendedMovies, setRecommendedMovies, setRecBookmarked } = useContext(BookmarkedContext)
  
  
  
  const setBookmarkHandler = () => {
    
      setRecommendedMovies(recommendedMovies.map(item => {
        if(item.id === movie.id){
          return {
            ...item, 
            isBookmarked: !movie.isBookmarked,
          }
        }
        return item
      }))
    
  }
  
  useEffect(() => {
    setRecBookmarked(recommendedMovies.filter(movie => {
     return  movie.isBookmarked 
    }))
    
  },[setRecBookmarked,recommendedMovies])
  
  
  return (
        <div className = {styles["movie-wrapper"]}>
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
        <Link to = {`/movie/${movie.title}`}>
          <div className = {styles["image-wrapper"]}>
           <img src = {movie.url} alt = "images"/>
          </div>
          </Link>
          <div className = { styles["movie-details"]}>
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
            <div className = {styles["movie-title"]}>
              { movie.title}
            </div>
          </div>
        </div>
    )
}

export default RecommendedMovies