import React, { useContext } from "react"
import BookmarkedContext from "./BookmarkedContext"
import FilteredBookmarkMovies from "./filteredBookmarkMovies"
import classes from "./RecMovies.module.css"



const BookmarkMovies = () => {
  const { bookmarked,recBookmarked }  = useContext(BookmarkedContext)
  
  //trending and recommended bookmarked movies
  let overallBookmark = [...bookmarked, ...recBookmarked]
  
  const filteredMovies = overallBookmark.filter( filteredMovie => {
     return filteredMovie.type === "Movies"
  })
  
  return (
     <div className = {classes["recomend-wrapper"]}>
     <div className = {classes["headings"]}>
      <div>
     Bookmarked Movies 
      </div>
     </div>
     {
      filteredMovies.map(movie => {
        return <FilteredBookmarkMovies key = {movie.id} movie = { movie }/>
         
      })
    }</div>
    )
}

export default BookmarkMovies;