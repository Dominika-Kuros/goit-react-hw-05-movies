import PropTypes from "prop-types";
import { toast } from "react-toastify";
import css from "../SearchMovies/SearchMovies.module.css";

const SearchMovies = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const query = e.target.elements.query.value;
    if (!query) {
      toast.error("Start searching");
      return;
    }

    onSubmit(query);
  };

  return (
    <form className={css.searchForm} onSubmit={handleSubmit}>
      <input
        className={css.input}
        name="query"
        type="text"
        placeholder="Search movies"
      />
      <button className={css.searchButton} type="submit">
        Search
      </button>
    </form>
  );
};

SearchMovies.propTypes = { onSubmit: PropTypes.func.isRequired };

export default SearchMovies;
