import { useContext, useEffect, useState } from "react";
import SendButton from "./SendButton";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";
import { ReviewsContext } from "../_context/reviewsManagement";
import { postReview } from "../actions/reviews";
import Notification from "./Notification";
export default function UserReview({ product }) {
  const [hoveredRating, setHoveredRating] = useState(0);
  const starColors = ["red", "#e67e22", "#f1c40f", "lightgreen", "#1abc9c"];

  let { review, setReview, handleInputChange, token } =
    useContext(ReviewsContext);

  // Initialize productId in the context state
  useEffect(() => {
    setReview((prev) => ({
      ...prev,
      product,
    }));
  }, [product, setReview]);

  // Handle Submit Review
  const submitReview = async (e) => {
    e.preventDefault();
    try {
      await postReview(review, token, Notification);
      setReview({
        product: "",
        rating: 0,
        message: "",
      });
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="form-review">
      <textarea
        placeholder="Your Review..."
        rows={5}
        value={review.message}
        onChange={handleInputChange}
        name="message"
      />
      <div className="review-stars">
        {Array.from({ length: 5 }, (_, i) => (
          <span
            className="stars-rating"
            key={i}
            onMouseEnter={() => setHoveredRating(i + 1)}
            onMouseLeave={() => setHoveredRating(0)}
            onClick={() =>
              setReview((prev) => ({
                ...prev,
                rating: i + 1,
              }))
            }
            style={{
              color:
                review.rating > i || hoveredRating > i
                  ? starColors[i]
                  : "white",
            }}>
            {i < (hoveredRating || review.rating) ? <FaStar /> : <FaRegStar />}
          </span>
        ))}
      </div>
      <div onClick={submitReview} role="button" tabIndex={0}>
        <SendButton>Send</SendButton>
      </div>
    </form>
  );
}
