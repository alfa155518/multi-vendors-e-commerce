import Notification from "../_components/Notification";

export default async function ContactUs(formData, setIsLoading, token) {
  try {
    const Api = process.env.NEXT_PUBLIC_API_URL;
    const response = await fetch(`${Api}/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    if (response.ok) {
      return Notification(
        "success",
        "Successfully Submitted",
        "Thanks we well received your request"
      );
    } else {
      Notification("error", "Failed to Submit", data.message);
    }
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  } finally {
    setIsLoading(false);
  }
}
