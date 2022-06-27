import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
//import Trending from "../trending.json"
import ShowTrend from "./ShowTrend"
import Spinner from "./Spinner"


const SingleTrending = () => {
   let params = useParams()
   
   const [single, setSingle] = useState([])
 
  
  useEffect(() => {
    getSingleMovie(params.type)
  }, [params.type])
  
  const getSingleMovie = async (title) => {
    const url =  `https://miniflixdatabase.herokuapp.com/trending?title=${params.type}`
    const api = await fetch(url)
    const singleMovie = await api.json()
    
    setSingle(...singleMovie)
  }
  
  if(single.length === 0){
    return <Spinner />
  }
  
  return (
        <ShowTrend movie = {single} />
    )
}

export default SingleTrending