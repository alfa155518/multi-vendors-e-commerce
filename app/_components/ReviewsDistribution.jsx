"use client";

import Distribution from "./distribution";

export default function ReviewsDistribution({ filteredReview }) {
  // Step 1: Initialize an array for 5 star categories
  const distributionData = Array(5)
    .fill(0)
    .map((_, index) => {
      const stars = 5 - index; // Start from 5 stars down to 1 star
      const matchingReviews = filteredReview.filter(
        (review) => Math.round(review.rating) === stars
      );

      const usersNumber = matchingReviews.length; // Total number of users with this star rating
      const totalValue = matchingReviews.reduce(
        (sum, review) => sum + (review.value || 0), // Aggregate value (or default to 0)
        0
      );

      return {
        starsNumber: stars,
        usersNumber,
        value: totalValue,
      };
    });

  // Step 2: Render the 5 distributions dynamically
  return (
    <div className="all__distribution">
      {distributionData.map((data, index) => (
        <Distribution
          key={index}
          value={data.value}
          starsNumber={data.starsNumber}
          usersNumber={data.usersNumber}
        />
      ))}
    </div>
  );
}
