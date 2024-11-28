"use client";
import { useContext, useMemo } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import useInViewAnimation from "../_hooks/useInViewAnimation";
import LazyLoadImg from "./LazyLoadImg";
import { ReviewsContext } from "../_context/reviewsManagement";
import "@/css/reviews.css";
import { useParams } from "next/navigation";

export default function Reviews() {
  const { allReviews = [] } = useContext(ReviewsContext);
  const { productId } = useParams();
  const [ref, inView] = useInViewAnimation();

  // Filtered Products
  const filteredReviews = useMemo(() => {
    if (allReviews.length === 0 || !productId) return [];
    return allReviews.filter((review) => review.product === productId);
  }, [allReviews, productId]);

  return filteredReviews.slice(0, 3).map((review, i) => (
    <div
      ref={ref}
      key={i}
      className={`review ${
        inView ? "animate__animated animate__fadeInDown" : ""
      }`}>
      <LazyLoadImg>
        <div className="user-img">
          <Image
            src={review?.reviewer?.photo?.url}
            alt={"user img"}
            width={200}
            height={200}
          />
          <strong className="user-name">{review?.reviewer?.name}</strong>
        </div>
      </LazyLoadImg>
      <div className="rating">
        {Array.from({ length: Math.floor(review?.rating) }, (_, i) => (
          <FaStar key={i} />
        ))}
        {review.rating % 1 > 0 && <FaRegStarHalfStroke />}
        <span>({review?.rating})</span>
      </div>
      <p className="comment">{review?.message}</p>
      <strong className="review-date">
        {new Date(review.createdAt).toLocaleDateString()}
      </strong>
    </div>
  ));
}
