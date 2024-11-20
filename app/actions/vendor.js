const API = process.env.NEXT_PUBLIC_API_URL;
// Get All Vendors
export async function getVendors(token, Notification) {
  try {
    const response = await fetch(`${API}/vendors`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      next: {
        revalidate: 1,
      },
    });

    if (!response.ok) {
      Notification(
        "error",
        "An error occurred",
        `${data.message === "fail" ? data.errors[0] : data.message}`
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch vendors:", error);
    throw error;
  }
}

// Get Vendor by ID
export async function getVendorById(token, vendorId, Notification) {
  try {
    const response = await fetch(`${API}/vendors/${vendorId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      next: {
        revalidate: 1,
      },
    });

    if (!response.ok) {
      Notification(
        "error",
        "An error occurred",
        `${data.message === "fail" ? data.errors[0] : data.message}`
      );
    }

    const { vendor } = await response.json();
    return vendor;
  } catch (error) {
    console.error("Failed to fetch vendor:", error);
    throw error;
  }
}
