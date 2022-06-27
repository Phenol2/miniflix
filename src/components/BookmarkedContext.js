import React, { createContext, useState, useEffect } from "react"
import MainSpinner from "./MainSpinner"



const BookmarkedContext = createContext()

export const BookmarkedProvider = ({ children }) => {
  const [input, setInput] = useState("")
  const [trendingMovies, setTrendingMovies] = useState([])
  const [recommendedMovies, setRecommendedMovies] = useState([])
 const [bookmarked, setBookmarked] = useState([])
  const [recBookmarked, setRecBookmarked] = useState([])
  
  useEffect(() => {
    getRecMovies()
  },[])
  
  const getRecMovies = async () => {
    let url = "https://miniflixdatabase.herokuapp.com/recommended"
    const api = await fetch(url)
    const data = await api.json()
    
    setRecommendedMovies(data)
  }
  
  useEffect(() => {
    getTreMovies()
  },[])
  
  const getTreMovies = async () => {
    let url = "https://miniflixdatabase.herokuapp.com/trending"
    const api = await fetch(url)
    const data = await api.json()
    
    setTrendingMovies(data)
  }
  
  if(trendingMovies.length === 0){
    return <MainSpinner />
  }
  if(recommendedMovies.length === 0){
    return (
      <MainSpinner />
      
      )
  }
  
  return (
    <BookmarkedContext.Provider 
    value = {{ trendingMovies, 
              setTrendingMovies, 
              bookmarked, 
              setBookmarked, 
              recommendedMovies, 
              setRecommendedMovies, 
              recBookmarked, 
              setRecBookmarked,
              input,
              setInput
            }}
    >
      { children }
    </BookmarkedContext.Provider>
    )
}

export default BookmarkedContext;