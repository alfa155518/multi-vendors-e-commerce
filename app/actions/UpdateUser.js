import Notification from "../_components/Notification";

export async function UpdateDetails(
  { name, email, photo, role },
  token,
  setLoading,
  hasVendorAccount
) {
  try {
    setLoading(true);

    const API = process.env.NEXT_PUBLIC_API_URL;

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("photo", photo);
    formData.append("role", role);
    console.log(formData);

    const response = await fetch(`${API}/users`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });
    const data = await response.json();

    if (response.ok) {
      if (data) {
        window.location.href = "/profile";
      }
      return Notification("success", "Details updated successfully", "Done!");
    } else {
      return Notification(
        "error",
        "An error occurred",
        `${data.message === "fail" ? data.errors[0] : data.message}`
      );
    }
  } catch (error) {
    console.error("UpdateDetails error:", error);
  } finally {
    setLoading(false);
  }
}

export async function UpdatePassword(userId, token, passwordData, setLoading) {
  try {
    const API = process.env.NEXT_PUBLIC_API_URL;
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
