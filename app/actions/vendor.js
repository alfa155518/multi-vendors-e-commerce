const API = process.env.NEXT_PUBLIC_API_URL;

export async function getVendors(token) {
  try {
    const response = await fetch(`${API}/vendors`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      "error",
        "An error occurred",
        `${data.message === "fail" ? data.errors[0] : data.message}`;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch vendors:", error);
    throw error;
  }
}
