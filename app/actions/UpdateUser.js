import Notification from "../_components/Notification";
const API = process.env.NEXT_PUBLIC_API_URL;

export async function UpdateDetails(userData, token, setLoading) {
  try {
    setLoading(true);

    const formData = new FormData();

    // Dynamically append fields from userData
    Object.keys(userData).forEach((key) => {
      if (key === "photo") {
        if (userData.photo.file) {
          formData.append("photo", userData.photo.file); // File upload
        } else {
          formData.append("photo", JSON.stringify(userData.photo)); // Existing photo object
        }
      } else {
        formData.append(key, userData[key]);
      }
    });

    const response = await fetch(`${API}/users`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    const data = await response.json();
    if (response.ok) {
      const updatedUser = {
        ...data.user,
        photo: userData.photo, // Reuse the photo from userData
      };

      Notification("success", "Details updated successfully", "Done!");

      window.location.reload();
      return updatedUser;
    } else {
      return Notification(
        "error",
        "An error occurred",
        `${data.message === "fail" ? data.errors[0] : data.message}`
      );
    }
  } catch (error) {
    console.error("UpdateDetails error:", error);
    Notification("error", "Update failed", "An unexpected error occurred.");
  } finally {
    setLoading(false);
  }
}
export async function UpdatePassword(userId, token, passwordData, setLoading) {
  try {
    const response = await fetch(`${API}/users/${userId}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(passwordData),
    });
    const data = await response.json();
    if (response.ok) {
      if (data) {
        window.location.reload();
      }
      return Notification("success", "Password updated successfully", "Done!");
    } else {
      return Notification(
        "error",
        "An error occurred",
        `${data.message === "fail" ? data.errors[0] : data.message}`
      );
    }
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
}
