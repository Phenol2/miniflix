import React from "react";
import { NavLink } from "react-router-dom"
import { MdTurnedIn, MdTv, MdTheaters } from "react-icons/md"
import { AiFillHome } from "react-icons/ai"
import styles from "./Navbar.module.css"



const Navbar = () => {
  return (
     <nav className = {styles["nav-menus"]}>
     
     <NavLink to = "/"  activeClassName = {styles["fish"]} style={({isActive}) => {
       return { color: isActive ? "white" : "#3765b0"};
     }}> 
      <span className = {styles["icon-container"]}>
       <AiFillHome className = {styles["icon"]}/>
      </span>
     </NavLink>
     
     <NavLink to = "/movies" style={({isActive}) => {
       return { color: isActive ? "white" : "#3765b0"};
     }}>
      <span>
      <MdTheaters className = {styles["icon"]}/>
      </span>
     </NavLink>
    
       <NavLink to = "/tvseries" style={({isActive}) => {
       return { color: isActive ? "white" : "#3765b0"};
     }}>
        <span>
           <MdTv className = {styles["icon"]}/>
        </span>
     </NavLink>
      
       <NavLink to = "/bookmarked" style={({isActive}) => {
       return { color: isActive ? "white" : "#3765b0"};
     }}>
       <span>
         <MdTurnedIn className = {styles["icon"]}/>
         </span>
     </NavLink>
      
     </nav>
    )
}

export default Navbar;