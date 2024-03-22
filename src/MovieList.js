import React, { useEffect } from "react";
import Movie from "./Movie";

export default function MovieList() {
  const [movies, setMovies] = React.useState([]);
  const getMovies = async () => {
    try {
      const response = await fetch(
        "https://server-lac-three.vercel.app/get"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setMovies(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="movie-list">
      {movies.map((mov) => (
        <div key={mov.id}>
          <Movie movieTake={mov} getMovies={getMovies} />
        </div>
      ))}
    </div>
  );
}