import React from "react";
import Logo from "../icons/Flix2.png"
import User from "../icons/Moses.jpg"
import Navbar from "./Navbar"
import styles from "./Header.module.css"


const Header = () => {
  return (
    <div className = {styles["header"]}>
      <div className = {styles["logo-container"]}> <img src = {Logo} alt = "logo" /></div>
      <Navbar />
      <div className = {styles["user-container"]}> <img src = {User} alt = "user" /></div>
    </div>
    )
}

export default Header;