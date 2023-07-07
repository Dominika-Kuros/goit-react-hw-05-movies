import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchTrendingMovies } from "../../services/api";
import css from "../Home/Home.module.css";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchTrendingMovies()
      .then((data) => {
        setMovies([...data.results]);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <>
      <h1 className={css.homeTitle}>Trending today</h1>
      <ul className={css.homeList}>
        {movies.map((film) => {
          const { id, poster_path } = film;

          return (
            <li key={id} className={film}>
              <Link to={`movies/${id}`} state={{ from: location }}>
                <img src={`https://image.tmdb.org/t/p/w400/${poster_path}`} />
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Home;
