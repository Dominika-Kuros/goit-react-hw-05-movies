import { useLocation, Outlet, Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Suspense } from "react";
import Loader from "../Loader/Loader";

import css from "./MovieCard.module.css";

const MovieCard = ({ movie }) => {
  const { title, release_date, poster_path, vote_average, overview, genres } =
    movie;
  const location = useLocation();
  const releaseDate = new Date(release_date);

  const releaseYear = isNaN(releaseDate)
    ? "Unknown"
    : releaseDate.getFullYear();

  const posterUrl = poster_path
    ? `https://image.tmdb.org/t/p/w400/${poster_path}`
    : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg";

  const userScore = vote_average
    ? `${(vote_average * 10).toFixed(0)}%`
    : "Not rated yet";

  return (
    <div>
      <div className={css.container}>
        <img className={css.img} src={posterUrl} alt={`{title} poster`} />
        <div className={css.movieInfo}>
          <div className={css.title}>
            <h1>
              {" "}
              {title} / {releaseYear}
            </h1>
          </div>
          <span>User score: {userScore}</span>

          <div className={css.overview}>
            <h2>Overview:</h2>
            {overview}
            <h2>Genres:</h2> {genres.map((genre) => genre.name).join(", ")}
          </div>
        </div>
      </div>
      <div className={css.additionalInfo}>
        <h2>Additional information</h2>
        <ul className={css.list}>
          <li>
            {" "}
            <Link
              className={css.link}
              to="cast"
              state={{ from: location?.state?.from ?? "/" }}
            >
              Cast
            </Link>
          </li>
          <li>
            {" "}
            <Link
              className={css.link}
              to="reviews"
              state={{ from: location?.state?.from ?? "/" }}
            >
              Reviews
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MovieCard;
MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({ name: PropTypes.string.isRequired })
    ),
  }).isRequired,
};
