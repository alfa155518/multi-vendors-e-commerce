import Notification from "../_components/Notification";

export default async function signUpUser(
  { name, email, password, photo, role },
  setLoading,
  setFormData
) {
  const ApiUrl = process.env.NEXT_PUBLIC_API_URL;

  // Create a FormData object to hold the user information
  const formData = new FormData();
  formData.append("name", name);
  formData.append("email", email);
  formData.append("password", password);
  formData.append("photo", photo);
  formData.append("role", role);

  try {
    // Send a POST request to the signup endpoint
    const response = await fetch(`${ApiUrl}/users/signup`, {
      method: "POST",
      body: formData,
    });

    // Parse the JSON response
    const data = await response.json();

    // Check if the response indicates success
    if (response.ok) {
      Notification("success", "User created successfully", "You can now login");
      setTimeout(() => {
        window.location.href = "/login";
      }, 3000);
    } else {
      // Handle errors returned from the server
      return Notification(
        "error",
        "An error occurred",
        `${data.message === "fail" ? data.errors[0] : data.message}`
      );
    }

    return data;
  } catch (error) {
    console.error("Error in signup:", error);
    Notification("error", "An error occurred", "Please try again later.");
  } finally {
    setLoading(false);
    setFormData("");
  }
}
