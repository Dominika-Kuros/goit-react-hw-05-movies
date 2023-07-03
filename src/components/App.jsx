import { lazy } from "react";

import { Route, Routes } from "react-router-dom";
import SharedLayout from "../components/SharedLayout/SharedLayout";

// import Cast from "../components/Cast/Cast";
// import Reviews from "../components/Reviews/Reviews";
// import Home from "../pages/Home";
// // import MovieDetails from "../pages/MovieDetails";
// import Movies from "../pages/Movies";

const Cast = lazy(() => import("./Cast/Cast"));
const Reviews = lazy(() => import("./Reviews/Reviews"));
const Home = lazy(() => import("../pages/Home"));
const MovieDetails = lazy(() => import("../pages/MovieDetails"));
const Movies = lazy(() => import("../pages/Movies/"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />

        <Route path="/movies" element={<Movies />} />

        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="movies/:movieId/cast" element={<Cast />} />
          <Route path="movies/:movieId/reviews" element={<Reviews />} />
        </Route>

        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
