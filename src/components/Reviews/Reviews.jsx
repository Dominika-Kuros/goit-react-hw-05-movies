import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../services/api";
import css from "../Reviews/Reviews.module.css";

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const { results } = await fetchMovieReviews(movieId);
        setReviews(results);
      } catch (error) {
        console.log(error);
      }
    };

    getReviews();
  }, [movieId]);

  return (
    <div>
      <h2 className={css.reviewsTitle}>Reviews</h2>

      {reviews.length ? (
        <ul className={css.reviewsList}>
          {reviews.map((review) => (
            <li className={css.reviewsListItem} key={review.id}>
              <h3>Author: {review.author}</h3>
              {review.content}
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie yet.</p>
      )}
    </div>
  );
};

export default Reviews;
