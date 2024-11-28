import Cookies from "js-cookie";
import Notification from "../_components/Notification";

export default async function createVendor(
  { name, email, country, phone, storeLogo, description, storeName },
  token,
  setIsLoading,
  setIsConfettiVisible,
  setFormData
) {
  const ApiUrl = process.env.NEXT_PUBLIC_API_URL;
  try {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("country", country);
    formData.append("storeLogo", storeLogo);
    formData.append("storeDetails.description", description);
    formData.append("storeDetails.storeName", storeName);

    const response = await fetch(`${ApiUrl}/vendors`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    const data = await response.json();
    if (response.ok) {
      Cookies.set("vendor", JSON.stringify(data.vendor));
      Cookies.set("tokenVendor", JSON.stringify(data.token));
      setIsConfettiVisible(true);
      setTimeout(() => {
        setIsConfettiVisible(false);
        window.location.href = "/vendor";
      }, 10000);
      setFormData("");
      Notification(
        "success",
        "Vendor created successfully",
        "You can now manage your store"
      );
    } else {
      return Notification(
        "error",
        "An error occurred",
        `${data.message === "fail" ? data.errors[0] : data.message}`
      );
    }
  } catch (error) {
    throw new Error("Failed to create vendor");
  } finally {
    setIsLoading(false);
  }
}
