import { useMovies } from "../hooks/useMovies";
import { MovieItem } from "./MovieItem";
import "./MovieList.css";

export const MoviesList = ({ searchInput }) => {
  const { searchResults } = useMovies(searchInput);

  return searchResults && searchResults.length > 0 ? (
    <ul className="movielist">
      {searchResults.map((movie) => (
        <MovieItem
          key={movie.id}
          title={movie.title}
          year={movie.year}
          src={movie.src}
        />
      ))}
    </ul>
  ) : (
    <p>No hay resultados</p>
  );
};
