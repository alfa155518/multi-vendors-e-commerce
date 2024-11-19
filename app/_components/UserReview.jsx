import { useState } from "react";
import SendButton from "./SendButton";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";
export default function UserReview() {
  const [hoveredRating, setHoveredRating] = useState(0);
  const [selectedRating, setSelectedRating] = useState(0);
  const starColors = ["red", "#e67e22", "#f1c40f", "lightgreen", "#1abc9c"];
  return (
    <form className="form-review">
      <textarea placeholder="Your Review..." rows={5} name="review" />
      <div className="review-stars">
        {Array.from({ length: 5 }, (_, i) => (
          <span
            className="stars-rating"
            key={i}
            onMouseEnter={() => setHoveredRating(i + 1)}
            onMouseLeave={() => setHoveredRating(0)}
            onClick={() => setSelectedRating(i + 1)}
            style={{
              color:
                selectedRating > i || hoveredRating > i
                  ? starColors[i]
                  : "white",
            }}>
            {i < (hoveredRating || selectedRating) ? <FaStar /> : <FaRegStar />}
          </span>
        ))}
      </div>
      <SendButton>Send</SendButton>
    </form>
  );
}
