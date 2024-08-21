import { useParams } from "react-router-dom";
import "./Review.css";

function Review({ reviews }) {
  const params = useParams();
  let id = params.reviewId;
  id = id - 1;

  return (
    <div className="review">
      {reviews && (
        <div className="review__item">
          <h3>{reviews[id]?.title}</h3>
          <p>{reviews[id]?.text}</p>
          <p className="review__rating">Final rating:{reviews[id]?.rating}/5</p>
        </div>
      )}
    </div>
  );
}

export default Review;
