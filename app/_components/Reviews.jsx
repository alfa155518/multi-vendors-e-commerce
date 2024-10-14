"use client";

import { useContext } from "react";
import { UserContext } from "../_context/usersManagement";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import "@/css/reviews.css";
import useInViewAnimation from "../_hooks/useInViewAnimation";
import LazyLoadImg from "./LazyLoadImg";
export default function Reviews() {
  const { reviews } = useContext(UserContext);
  const [ref, inView] = useInViewAnimation();
  return reviews.map((review) => (
    <div
      ref={ref}
      key={review._id}
      className={`review ${
        inView ? "animate__animated animate__fadeInDown" : ""
      }`}>
      <LazyLoadImg>
        <div className="user-img">
          <Image
            src={review.user_img}
            alt={"user img"}
            width={200}
            height={200}
          />
        </div>
      </LazyLoadImg>
      <div className="rating">
        {Array.from({ length: Math.floor(review.rating) }, (_, i) => (
          <FaStar key={i} />
        ))}
        {review.rating % 1 > 0 && <FaRegStarHalfStroke />}
        <span>({review.rating})</span>
      </div>
      <p className="comment">{review.comment}</p>
      <strong className="review-date">
        {new Date(review.created_at).toLocaleDateString()}
      </strong>
    </div>
  ));
}
