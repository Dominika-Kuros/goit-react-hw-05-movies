import { useState, useEffect } from "react";
import { useSearchParams, useLocation, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { fetchMovieByTitle } from "../../services/api";
import SearchMovies from "../../components/SearchMovies/SearchMovies";
import css from "../Movies/Movies.module.css";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const query = searchParams.get("query");
    if (!query) return;

    const getMovie = async () => {
      try {
        const { results } = await fetchMovieByTitle(query);

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
    <div className={css.moviePageDiv}>
      <h2 className={css.moviePageTitle}>Movies Page</h2>

      <SearchMovies onSubmit={handleSubmit} />

      <ul className={css.moviePageList}>
        {movies.map((movie) => {
          const { id, poster_path } = movie;
          return (
            <li key={id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                <img
                  className={css.moviePageImg}
                  src={`https://image.tmdb.org/t/p/w400/${poster_path}`}
                />
                {/* {movie.title} */}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Movies;
