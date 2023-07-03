import { useState, useEffect } from "react";
import { useSearchParams, useLocation, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { fetchMovieByName } from "../services/api";
import SearchMovies from "../components/SearchMovies/SearchMovies";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const query = searchParams.get("query");
    if (!query) return;

    const getMovie = async () => {
      try {
        const { results } = await fetchMovieByName(query);

        if (results.length === 0) {
          toast.dismiss();
          toast.error("No movies found");
          setMovies([]);
        } else {
          setMovies(results);
        }
      } catch (error) {
        toast.error(error.message);
        setMovies([]);
      }
    };

    getMovie();
  }, [searchParams]);

  const handleSubmit = (query) => {
    setSearchParams({ query });
  };

  return (
    <main>
      <h2>Movies Page</h2>

      <SearchMovies onSubmit={handleSubmit} />

      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Movies;
