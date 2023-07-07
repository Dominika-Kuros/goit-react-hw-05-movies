import axios from "axios";
const baseUrl = "https://api.themoviedb.org";
const API_KEY = "465bab10917ee0618ec1147fd7a20e21";

export const fetchTrendingMovies = async () => {
  const { data } = await axios.get(
    `${baseUrl}/3/trending/movie/day?api_key=${API_KEY}`
  );

  return data;
};

export const fetchMovieByTitle = async (query) => {
  const { data } = await axios.get(
    `${baseUrl}/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );

  return data;
};

export const fetchMovieById = async (movieId) => {
  const { data } = await axios.get(
    `${baseUrl}/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );

  return data;
};

export const fetchMovieCast = async (movieId) => {
  const { data } = await axios.get(
    `${baseUrl}/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );

  return data;
};

export const fetchMovieReviews = async (movieId) => {
  const { data } = await axios.get(
    `${baseUrl}/3/movie/${movieId}}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );

  return data;
};
