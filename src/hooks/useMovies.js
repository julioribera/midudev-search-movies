import { useState, useEffect } from "react";

export const useMovies = (searchInput) => {
  const [searchResults, setSearchResults] = useState([]);
  const [debouncedSearchInput, setDebouncedSearchInput] = useState(searchInput);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchInput(searchInput);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [searchInput]);

  useEffect(() => {
    console.log("fetching movies");
    fetch(`http://www.omdbapi.com/?apikey=2f6435d9&s=${searchInput}`)
      .then((response) => response.json())
      .then((data) => {
        const movies = data.Search;
        const mappedMovies = movies.map((movie) => {
          return {
            title: movie.Title,
            year: movie.Year,
            id: movie.imdbID,
            src: movie.Poster,
          };
        });
        setSearchResults(mappedMovies);
      });
  }, [debouncedSearchInput]);

  return { searchResults };
};
