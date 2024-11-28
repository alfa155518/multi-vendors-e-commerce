"use client";

import { useContext, useEffect, useState } from "react";
import ReviewsDistribution from "./ReviewsDistribution";
import { ReviewsContext } from "../_context/reviewsManagement";
import { FaStar } from "react-icons/fa6";
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import "../../css/all-reviews-of-product.css";
import LazyLoadImageAnimation from "./ImageAnimation";
import BtnClose from "./BtnClose";
import { useParams } from "next/navigation";
import { disLikeOnReview, formatDate, likeOnReview } from "../actions/reviews";
import Notification from "./Notification";
import Cookies from "js-cookie";

export default function AllReviewOfProduct() {
  const { productId } = useParams();
  const { token } = useContext(ReviewsContext);
  const userId = JSON.parse(Cookies.get("userData"));
  const [filteredReviews, setFilteredReviews] = useState([]);

  let {
    showReviewsPopup,
    setShowReviewsPopup,
    allReviews = [],
  } = useContext(ReviewsContext) || {};

  // Date Of Review
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
      date
    );
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  // like Action On Review
  const handleLike = async (id) => {
    await likeOnReview(id, token, Notification);
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  // Dis Like Action On Review
  const handleDislike = async (id) => {
    await disLikeOnReview(id, token, Notification);
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  // Filtered Review depended On Current Product
  useEffect(() => {
    if (allReviews.length > 0) {
      const filteredReview = allReviews.filter((review) => {
        return review.product === productId;
      });
      return setFilteredReviews(filteredReview);
    }
  }, [allReviews, productId]);

  return (
    <div
      className={`reviews__popup__wrapper  ${
        showReviewsPopup && "active__popup"
      }`}>
      <div
        className="btn-close"
        onClick={() => setShowReviewsPopup((status) => !status)}>
        <BtnClose />
      </div>
      <section className="reviews__popup">
        <div className="reviews__analytics">
          <h2>Rating Distribution</h2>
          <ReviewsDistribution filteredReview={filteredReviews} />
        </div>
        {/* All Reviews */}
        <div className="all__reviews">
          {filteredReviews.length <= 0 ? (
            <></>
          ) : (
            filteredReviews.slice(0, 8).map((review, i) => {
              return (
                <div className="single__review" key={i}>
                  <div className="details">
                    <div className="user">
                      <LazyLoadImageAnimation
                        src={review?.reviewer?.photo?.url}
                        alt="user img"
                        width={50}
                        height={50}
                      />
                      <div className="info">
                        <strong className="review__name">
                          {review?.reviewer?.name}
                        </strong>
                        {review.created_at && (
                          <span className="review__date">
                            Reviewed on: {formatDate(review?.createdAt)}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="stars">
                      {Array.from({ length: review.rating }, (_, i) => {
                        return (
                          <span key={i}>
                            <FaStar />
                          </span>
                        );
                      })}
                    </div>
                  </div>
                  <div className="comment">
                    <p>{review?.message}</p>
                  </div>
                  <div className="actions">
                    <button
                      className={`like ${
                        review?.fans?.includes(userId._id) && "marked"
                      }`}
                      onClick={() => handleLike(review._id)}>
                      <SlLike />
                      <span>{review.like || 0}</span>
                    </button>
                    <button
                      className={`dislike ${
                        review?.fans?.includes(userId._id) && "marked"
                      }`}
                      onClick={() => handleDislike(review._id)}>
                      <SlDislike />
                      <span>{review.dislike || 0}</span>
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>
    </div>
  );
}
