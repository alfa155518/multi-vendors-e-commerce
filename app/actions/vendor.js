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

// Delete vendor
export async function logoutVendor(token, Notification) {
  try {
    const response = await fetch(`${API}/vendors`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      Notification(
        "error",
        "An error occurred",
        `${data.message === "fail" ? data.errors[0] : data.message}`
      );
    }
  } catch (error) {
    console.error("Failed to delete vendor:", error);
    throw error;
  }
}

// Update Vendor Basic Details
export async function updateVendorBasicDetails(
  vendorData,
  token,
  id,
  setLoading,
  Notification
) {
  try {
    const response = await fetch(`${API}/vendors/details/${id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(vendorData),
    });

    const data = await response.json();
    if (response.ok) {
      Notification("success", "Don!", "Vendor details updated successfully");
      window.location.href = "/vendor";
    }
    if (!response.ok) {
      Notification(
        "error",
        "An error occurred",
        `${data.message === "fail" ? data.errors[0] : data.message}`
      );
    }
    return data;
  } catch (error) {
    console.error("Failed to update vendor basic details:", error);
    throw new Error("Fail");
  } finally {
    setLoading(false);
  }
}

// Update Store  Details
export async function updateStoreDetails(
  vendorData,
  token,
  id,
  setLoading,
  Notification
) {
  try {
    const response = await fetch(`${API}/vendors/store/${id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(vendorData),
    });

    const data = await response.json();
    if (response.ok) {
      Notification("success", "Don!", "Vendor details updated successfully");
      window.location.href = "/vendor";
    }
    if (!response.ok) {
      Notification(
        "error",
        "An error occurred",
        `${data.message === "fail" ? data.errors[0] : data.message}`
      );
    }
    return data;
  } catch (error) {
    console.error("Failed to update vendor basic details:", error);
    throw new Error("Fail");
  } finally {
    setLoading(false);
  }
}
