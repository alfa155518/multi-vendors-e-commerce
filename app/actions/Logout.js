import Cookies from "js-cookie";

export default async function Logout(e) {
  e.preventDefault();
  const ApiUrl = process.env.NEXT_PUBLIC_API_URL;
  const token = await JSON.parse(Cookies.get("token"));
  const { _id } = await JSON.parse(Cookies.get("userData"));
  console.log(token);
  console.log(_id);
  try {
    const response = await fetch(`${ApiUrl}/users/logout/${_id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      Cookies.remove("userData");
      Cookies.remove("token");
      Cookies.remove("vendor");
      Cookies.remove("vendorToken");
      Notification("success", "Successfully logged out", "See you again soon!");
      window.location.href = "/signup";
    }
  } catch (err) {
    console.error(err);
  }
}