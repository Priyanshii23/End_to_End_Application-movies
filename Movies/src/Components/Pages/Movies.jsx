import React, { useEffect, useState } from "react";
import axios from "axios";
const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  console.log(movies)
  useEffect(() => {
    setLoading(true);
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          "https://frill-shard-licorice.glitch.me/movies"
        );
        console.log(response);
        console.log(movies)
        setMovies(response.data.movies);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setError(err.response.data.message);
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div className="movies-container">
      <h1> Movie Explorer</h1>
      <div className="movies-list">
        {movies.map((movie) => (
          <div>
            <img src={movie.poster} alt={movie.title} />
            <h3>{movie.title} </h3>
            <p>{movie.releaseDate} </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
