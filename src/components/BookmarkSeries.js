import React, { useContext } from "react"
import BookmarkedContext from "./BookmarkedContext"
import FilteredBookmarkSeries from "./filteredBookmarkSeries"
import classes from "./RecMovies.module.css"




const BookmarkSeries = () => {
  const { bookmarked,recBookmarked }  = useContext(BookmarkedContext)
  
  //trending and recommended bookmarked movies
  let overallBookmark = [...bookmarked, ...recBookmarked]
  
  const filteredSeries = overallBookmark.filter( filteredSerie => {
     return filteredSerie.type === "Tv series"
  })
  
  return (
     <div className = {classes["recomend-wrapper"]}>
     <div className = {classes["headings"]}>
      <div>
     Bookmarked TV series 
      </div>
     </div>
     {
      filteredSeries.map(movie => {
         return <FilteredBookmarkSeries key = {movie.id} movie = { movie }/>
      })
    }
    </div>
    )
}

export default BookmarkSeries;