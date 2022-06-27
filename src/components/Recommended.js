import React, { useContext } from "react";
import RecommendedMovies from "./RecommendedMovies"
import styles from "./Trending.module.css"
import classes from "./RecMovies.module.css"
import BookmarkedContext from "./BookmarkedContext"



const Recommended = () => {
  const { recommendedMovies } = useContext(BookmarkedContext)
  return (
    <>
      <div className = {styles["span"]}> RECOMMENDED FOR YOU </div>
    <div className = {classes["recomend-wrapper"]}>
     
    {
      recommendedMovies.map(movie => {
        return <RecommendedMovies 
        movie = { movie } 
        key = {movie.id}
        />;
      })
    }
    </div>
    </>
    )
    
}

export default Recommended;