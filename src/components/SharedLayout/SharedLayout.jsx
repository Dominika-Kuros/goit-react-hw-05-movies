import { Outlet, Link } from "react-router-dom";
import { Suspense } from "react";
import Loader from "../Loader/Loader";
import css from "../SharedLayout/SharedLayout.module.css";

const SharedLayout = () => {
  return (
    <div className={css.container}>
      <header className={css.header}>
        <nav>
          <Link className={css.link} to="/">
            Home
          </Link>
          <Link className={css.link} to="/movies">
            Movies
          </Link>
        </nav>
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default SharedLayout;
