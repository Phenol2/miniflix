import React from "react";
import { Outlet } from "react-router-dom"
import Header from "./Header"
import Search from "./Search"


const Home = () => {
  return (
    <>
      <Header />
      <Search />
      <Outlet />
    </>
    )
}

export default Home;