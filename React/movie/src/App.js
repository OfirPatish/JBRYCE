import React, { useState } from "react";

import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";

// API endpoint
const API_URL = "http://www.omdbapi.com/?apikey=6d123963&";

const App = () => {
  // State for the search term
  const [searchTerm, setSearchTerm] = useState("");
  // State for the movies data
  const [movies, setMovies] = useState([]);
  // State to check if a search has been made
  const [hasSearched, setHasSearched] = useState(false);
  // State to check if data is currently being fetched
  const [isLoading, setIsLoading] = useState(false);

  // Function to search for movies
  const searchMovies = async (title) => {
    // Set hasSearched to true when a search is made
    setHasSearched(true);
    // Set isLoading to true before starting the fetch request
    setIsLoading(true);
    // Fetch movies data
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    // Update the movies state with the fetched data
    setMovies(data.Search);
    // Set isLoading to false after the fetch request is complete
    setIsLoading(false);
  };

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search for movies" />
        <img src={SearchIcon} alt="search" onClick={() => searchMovies(searchTerm)} />
      </div>

      {/* Conditional rendering based on the state */}
      {!hasSearched ? (
        <div className="empty">
          <h2>Please search for a movie</h2>
        </div>
      ) : isLoading ? (
        <div className="empty">
          <h2>Loading...</h2>
        </div>
      ) : movies?.length > 0 ? (
        <div className="container">
          {/* Map through the movies data and render a MovieCard for each movie */}
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
