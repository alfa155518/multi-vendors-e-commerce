"use client";

import React, { createContext, useEffect, useMemo, useState } from "react";

export const ReviewsContext = createContext();
import Cookies from "js-cookie";
import { getAllReviews } from "../actions/reviews";
export default function ReviewsManagement({ children }) {
  const [allReviews, setAllReviews] = useState();
  const token = Cookies.get("token") ? JSON.parse(Cookies.get("token")) : null;
  const [showReviewsPopup, setShowReviewsPopup] = useState(false);
  const [review, setReview] = useState({
    product: "", // Initialize product ID
    rating: 0, // Initialize rating
    message: "", // Initialize review message
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReview((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Get All Reviews
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const { reviews } = await getAllReviews();
        return setAllReviews(reviews);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  const contextValue = useMemo(
    () => ({
      allReviews,
      showReviewsPopup,
      review,
      token,
      setAllReviews,
      setShowReviewsPopup,
      setReview,
      handleInputChange,
    }),
    [allReviews, showReviewsPopup, review, token]
  );
  return (
    <ReviewsContext.Provider value={contextValue}>
      {children}
    </ReviewsContext.Provider>
  );
}
