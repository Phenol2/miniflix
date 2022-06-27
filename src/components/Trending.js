import React, { useContext } from "react";
import Movie from "./Movie"
import styles from "./Trending.module.css"
import BookmarkedContext from "./BookmarkedContext"



const Trending = () => {
  const { trendingMovies } = useContext(BookmarkedContext)
  return (
    <>
      <div className = {styles["span"]}> TRENDING </div>
    <div className = {styles["movies-container"]}>
     
    {
      trendingMovies.map(movie => {
        return <Movie 
        movie = { movie } 
        key = {movie.id}
        />;
      })
    }
    </div>
    </>
    )
    
}

export default Trending;