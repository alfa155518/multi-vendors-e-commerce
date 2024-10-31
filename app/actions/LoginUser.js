import Cookies from "js-cookie";
import Notification from "../_components/Notification";

export default async function LoginUser(
  { email, password },
  setLoading,
  setFormData
) {
  const ApiUrl = process.env.NEXT_PUBLIC_API_URL;
  try {
    const response = await fetch(`${ApiUrl}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
      cache: "no-store",
    });
    const data = await response.json();
    if (response.ok) {
      Notification("success", "Successfully Login", "Happy To See You!");
      const { password, ...userData } = data.user;
      Cookies.set("userData", JSON.stringify(userData));
      Cookies.set("token", JSON.stringify(data.token));
      window.location.href = "/";
    } else {
      Notification("error", "An Error Ocurred", data.message);
    }
    return data;
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
    setFormData("");
  }
}
