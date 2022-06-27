import React, { useContext } from "react"
import BookmarkedContext from "./BookmarkedContext"
import search from "../icons/searchengin-brands.svg"
import styles from "./Search.module.css"
import { useNavigate } from "react-router-dom"

const Search = () => {
  
  const { input, setInput } = useContext(BookmarkedContext)
  
  const navigate = useNavigate()
  
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input)
    //setInput("")
  }
  
  return (
    <form onSubmit = {submitHandler} >
          <div className = {styles["search-container"]}>
      <button type = "submit">
      <img src = {search} alt = "search" />
      </button>
          <input 
        type = "text" 
        placeholder = "Search for movies and Tv series"
        onChange = {(e) => setInput(e.target.value)}
        value = {input}
        />
        </div>
        </form>
    )
}

export default Search;