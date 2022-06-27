import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
//import { Image } from 'react-image-and-background-image-fade'
import Show from "./Show.js"
import Spinner from "./Spinner"


const Single = () => {
   let params = useParams()
   
   const [single, setSingle] = useState([])
 
  
  useEffect(() => {
    getSingleMovie(params.type)
  }, [params.type])
  
  const getSingleMovie = async (title) => {
    const url =  `https://miniflixdatabase.herokuapp.com/recommended?title=${params.type}`
    const api = await fetch(url)
    const singleMovie = await api.json()
    
    //console.log(...singleMovie)
    setSingle(...singleMovie)
  }
  
    
  if(single.length === 0){
    return <Spinner />
  }
  
  
  return (
        <Show movie = {single} />
    )
}

export default Single