import { useEffect, useState } from "react";
import { useParams, Outlet, useLocation, Link } from "react-router-dom";
import MovieCard from "../../components/MovieCard/MovieCard";
import { fetchMovieById } from "../../services/api";
import css from "../MovieDetails/MovieDetails.module.css";
const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [selectedMovie, setSelectedMovie] = useState({});

  useEffect(() => {
    const getMovieDetails = async (movieId) => {
      try {
        const movieData = await fetchMovieById(movieId);
        setSelectedMovie(movieData);
      } catch (error) {
        console.log(error);
      }
    };

    getMovieDetails(movieId);
  }, [movieId]);
  if (!selectedMovie.title) {
    return;
  }

  return (
    <div>
      <Link to={location.state?.from ?? "/"}>
        <button className={css.moviesGoBackButton} type="button">
          Go back
        </button>
      </Link>
      <MovieCard movie={selectedMovie} />
      <Outlet />
    </div>
  );
};
export default MovieDetails;
