import React from "react"
import styles from "./Show.module.css"
import MovieImg from "../icons/film-solid.svg"
import SeriesImg from "../icons/tv.png"
import { Link } from "react-router-dom"
import { Image } from 'react-image-and-background-image-fade'
import Spinner from "./Spinner"

const ShowTrend = ({movie}) => {
  return (
    <main>
    <div>
      <div className = {styles["image-container"]}>
        <Image 
        className = {styles["imgs"]}
        src = {`../${movie.url}`} 
        alt = {movie.title} 
        width = "100%"
         height= "100%"
        renderLoader={({ hasLoaded, hasFailed }) => (
          <div className='MyAwesomeLoader'>
            <Spinner />
            {hasFailed && <span>But I have failed</span>}
            {hasLoaded && (
              <span>
                I'll be here for {`${8}s`}  milliseconds after load
              </span>
            )}
            </div>
            )}
        />
      </div>
   
   <div className = {styles["movie-details"]}>
      <div className = {styles["movie-title"]}>
        {movie.title}
      </div>
      <div className = {styles["movie-year"]}>
        {movie.year}
      </div>
       <div className = {styles["yeartype"]}>
        <div className = {styles["case"]}>
       {
            movie.type === "Movies" ? 
            <img 
            src = {MovieImg} 
            alt = "movies" 
            className = {styles["movies"]}
            /> : 
            <img 
            src = {SeriesImg} 
            alt = "series" 
            className = {styles["movies"]}
            />
          }
      </div>
         <div>
        {movie.type}
      </div>
      </div>
   </div>
   </div>
   <div className = {styles["movie-desc"]}>
    {
      movie.desc
    }
   </div>
   <Link to = "/" className = {styles["btn-wrapper"]} >
    <button className = {styles["btn"]}> BACK TO HOME </button>
   </Link>
  
   </main>
    )
}

export default ShowTrend;