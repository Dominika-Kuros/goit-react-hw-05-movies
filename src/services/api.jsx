import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
axios.defaults.params = {
  api_key: "465bab10917ee0618ec1147fd7a20e21",
  language: "en-US",
  page: 1,
};

export const fetchTrendingMovies = async () => {
  try {
    const { data } = await axios.get(`/trending/movie/day?`);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchMovieByTitle = async (query) => {
  try {
    const { data } = await axios.get(`/search/movie?&query=${query}`);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchMovieById = async (movieId) => {
  try {
    const { data } = await axios.get(`/movie/${movieId}?`);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchMovieCast = async (movieId) => {
  try {
    const { data } = await axios.get(`/movie/${movieId}/credits?`);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchMovieReviews = async (movieId, page) => {
  try {
    const { data } = await axios.get(`/movie/${movieId}/reviews?&${page}`);
    return data;
  } catch (error) {
    console.error(error);
  }
};
