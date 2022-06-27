import React, { useState, useEffect, useContext } from "react"
import styles from "./RecMovies.module.css"
import BookmarkedContext from "./BookmarkedContext"
import SearchShow from "./SearchShow"

const SearchMovie = () => {
  /*const { input,setInput,  } = useContext(BookmarkedContext)
  const [recommendedFilter, setRecommendedFilter] = useState([])
  const [trendingFilter, setTrendingFilter] = useState([])
  
  
    useEffect(() => {
    getRecFiltered()
    setInput("")
  },[])
  
  const getRecFiltered = async () => {
    let url = `https://miniflixdatabase.herokuapp.com/recommended?q=${input}`
    const api = await fetch(url)
    const data = await api.json()
    
    setRecommendedFilter(data)
  }
  
  useEffect(() => {
    getTreFiltered()
    setInput("")
  },[])
  
  const getTreFiltered = async () => {
    let url = `https://miniflixdatabase.herokuapp.com/trending?q=${input}`
    const api = await fetch(url)
    const data = await api.json()
    
    setTrendingFilter(data)
  }*/
 const { trendingMovies, recommendedMovies, input, setInput } = useContext(BookmarkedContext)
  
  
  const totalMovies = [...trendingMovies, ...recommendedMovies]
  
  const filteredMovies = totalMovies.filter(movie => {
    return movie.title.toLowerCase().includes(input.toLowerCase());
  })
  return (
     <div className = {styles["recomend-wrapper"]}>
    {
    filteredMovies.map(search => {
      return <SearchShow key = {search.id} search = {search}/>
    } )
    }
    </div>
    )
}

export default SearchMovie