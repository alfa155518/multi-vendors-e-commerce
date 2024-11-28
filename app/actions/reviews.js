const API = process.env.NEXT_PUBLIC_API_URL;

// Post A Review
export async function postReview(data, token, Notification) {
  try {
    const response = await fetch(`${API}/reviews`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const review = await response.json();
    if (response.ok) {
      Notification("success", "Done!", "Thanks for Your Opinion");
    } else {
      Notification("error", "Failed to Submit", data.message);
    }

    return review;
  } catch (error) {
    console.log(error);
  }
}

// Get All Reviews
export async function getAllReviews() {
  try {
    const response = await fetch(`${API}/reviews`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: {
        revalidate: 1,
      },
    });
    const reviews = await response.json();
    return reviews;
  } catch (error) {
    console.log(error);
  }
}

// Like Action
export async function likeOnReview(id, token, Notification) {
  try {
    const response = await fetch(`${API}/reviews/like/${id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    const review = await response.json();
    if (response.ok) {
      Notification("success", "Done!", "Thanks for Your Opinion");
    } else {
      Notification("error", "Failed to Submit", review.message);
    }
    return review;
  } catch (error) {
    console.log(error);
  }
}

// Dis Like Action
export async function disLikeOnReview(id, token, Notification) {
  try {
    const response = await fetch(`${API}/reviews/dislike/${id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    const review = await response.json();
    if (response.ok) {
      Notification("success", "Done!", "Thanks for Your Opinion");
    } else {
      Notification("error", "Failed to Submit", review.message);
    }
    return review;
  } catch (error) {
    console.log(error);
  }
}
