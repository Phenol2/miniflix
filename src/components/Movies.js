import React, { useContext } from "react";
import BookmarkedContext from "./BookmarkedContext"
import classes from "./RecMovies.module.css"
import OverallMovies from "./OverallMovies"

const Movies = () => {
  const { trendingMovies, recommendedMovies } = useContext(BookmarkedContext)
  const overallMovies = [...trendingMovies, ...recommendedMovies]
  
  
  const filteredMovies = overallMovies.filter(movie => {
    return movie.type === "Movies"
  })
  
  
  return (
      <div className = {classes["recomend-wrapper"]}>
     {
      filteredMovies.map(movie => {
        return <OverallMovies key = {movie.id} movie = { movie } overall = { overallMovies }/>
         
      })
    }</div>
    )
}

export default Movies;