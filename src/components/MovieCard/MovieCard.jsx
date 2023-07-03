import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import {
  Container,
  Img,
  MovieInfo,
  Overview,
  AdditionalInfo,
  Title,
} from "./MovieCard.styled";

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
    <>
      <Container>
        <Img src={posterUrl} alt={`{title} poster`} />
        <MovieInfo>
          <Title>
            <h1>
              {" "}
              {title} {releaseYear}
            </h1>
          </Title>
          <span>User score: {userScore}</span>

          <Overview>
            <h2>Overview:</h2>
            {overview}
            <h2>Genres:</h2> {genres.map((genre) => genre.name).join(", ")}
          </Overview>
        </MovieInfo>
      </Container>
      <AdditionalInfo>
        Additional information
        <ul>
          <li>
            {" "}
            <Link to="cast" state={{ from: location?.state?.from ?? "/" }}>
              Cast
            </Link>
          </li>
          <li>
            {" "}
            <Link to="reviews" state={{ from: location?.state?.from ?? "/" }}>
              Reviews
            </Link>
          </li>
        </ul>
      </AdditionalInfo>
    </>
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
