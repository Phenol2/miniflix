import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Movies from "./components/Movies"
import TvSeries from "./components/TvSeries"
import Bookmarked from "./components/Bookmarked"
import Single from "./components/Single"
import SingleTrending from "./components/SingleTrending"
import SharedLayout from "./components/SharedLayout"
import SearchedMovie from "./components/SearchMovie"
import './App.css';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path = "/" element = { <SharedLayout /> } >
          <Route index element = {<Home />} />
          <Route path = "movies" element = {<Movies />} />
          <Route path = "tvseries" element = {<TvSeries />} />
          <Route path = "bookmarked" element = {<Bookmarked />} />
           <Route path = "movie/:type" element = {<Single />} />
              <Route path = "movi/:type" element = {<SingleTrending />} />
                <Route path = "searched/:search" element = {<SearchedMovie />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
