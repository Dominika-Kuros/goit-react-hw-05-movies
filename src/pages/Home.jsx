import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchTrendingMovies } from "../services/api";

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
      <h1>Trending today</h1>
      <ul>
        {movies.map((film) => {
          const { original_title, id } = film;
          return (
            <li key={id} className={film}>
              <Link to={`movies/${id}`} state={{ from: location }}>
                {original_title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Home;
