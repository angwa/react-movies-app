import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

const API_URL = "http://www.omdbapi.com?apikey=3204406e";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] =  useState('');

  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovie("Spiderman");
  }, []);

  console.log(movies);
  return (
    <div className="app">
      <h1>Benue Movies</h1>
      <div className="search">
        <input
          placeholder="Search for movie"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <img src={SearchIcon} alt="Search Icon" onClick={() => searchMovie(searchTerm)} />
      </div>

      {
        movies?.length > 0 ? (
          <div className="container">
            {
              movies.map((movie) => {
                return <MovieCard movie1={movie} />
              })
            }
          </div>
        ) : (
          <div className="empty">
            <h2>No movie found</h2>
          </div>
        )
      }
    </div>
  );
};

export default App;
