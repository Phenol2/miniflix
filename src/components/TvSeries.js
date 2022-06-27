import React, { useContext } from "react";
import BookmarkedContext from "./BookmarkedContext"
import classes from "./RecMovies.module.css"
import OverallSeries from "./OverallSeries"

const TvSeries = () => {
  const { trendingMovies, recommendedMovies } = useContext(BookmarkedContext)
  const overallMovies = [...trendingMovies, ...recommendedMovies]
  
  
  const filteredMovies = overallMovies.filter(movie => {
    return movie.type === "Tv series"
  })
  
  
  return (
      <div className = {classes["recomend-wrapper"]}>
     {
      filteredMovies.map(movie => {
        return <OverallSeries key = {movie.id} movie = { movie }/>
         
      })
    }</div>
    )
}

export default TvSeries;