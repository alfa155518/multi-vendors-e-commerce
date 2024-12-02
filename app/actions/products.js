const API = process.env.NEXT_PUBLIC_API_URL;

export async function getAllProducts(currentPage) {
  try {
    const response = await fetch(
      `${API}/products?limit=20&page=${currentPage}`,
      {
        method: "GET",
        next: {
          revalidate: 1,
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch products");
  }
}
export async function getProductById(productId, Notification) {
  try {
    const response = await fetch(`${API}/products/${productId}`, {
      method: "GET",
      next: {
        revalidate: 1,
      },
    });
    const data = await response.json();
    if (!response.ok) {
      return Notification(
        "error",
        "An error occurred",
        `${data.message === "fail" ? data.errors[0] : data.message}`
      );
    }
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch products");
  }
}

export async function addProduct(
  { name, description, category, photo, price, stock },
  vendorToken,
  Notification,
  setLoading
) {
  const formData = new FormData();
  formData.append("name", name);
  formData.append("description", description);
  formData.append("category", category);
  formData.append("photo", photo);
  formData.append("price", price);
  formData.append("stock", stock);
  try {
    const response = await fetch(`${API}/products`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${vendorToken}`,
      },
      body: formData,
      next: {
        revalidate: 1,
      },
    });
    const product = await response.json();
    if (response.ok) {
      return Notification("success", "Product Created successfully", "Done!");
    }
    if (!response.ok) {
      return Notification(
        "error",
        "An error occurred",
        `${product.message === "fail" ? product.errors[0] : product.message}`
      );
    }
    return product;
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
}

export async function updateProduct(
  productData,
  productId,
  vendorToken,
  setIsLoading,
  Notification
) {
  setIsLoading(true);
  // FormData
  const formData = new FormData();
  Object.keys(productData).forEach((key) => {
    if (key === "photo") {
      if (productData.photo.file) {
        formData.append("photo", productData.photo.file); // File upload
      } else {
        formData.append("photo", JSON.stringify(productData.photo)); // Existing photo object
      }
    } else {
      formData.append(key, productData[key]);
    }
  });

  try {
    const response = await fetch(`${API}/products/${productId}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${vendorToken}`,
      },
      body: formData,
    });

    const data = await response.json();

    if (response.ok) {
      Notification("success", "Product Updated successfully", "Done!");
      window.location.href = "/vendor/products";
    } else {
      Notification(
        "error",
        "An error occurred",
        `${data.message === "fail" ? data.errors[0] : data.message}`
      );
    }

    return data;
  } catch (error) {
    console.error(error);
  } finally {
    setIsLoading(false);
  }
}

export async function deleteProduct(
  productId,
  vendorToken,
  Notification,
  setIsLoading
) {
  try {
    const response = await fetch(`${API}/products/${productId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${vendorToken}`,
      },
    });

    const data = await response.json();
    if (response.ok) {
      Notification("success", "Product Deleted successfully", "Done!");
      window.location.href = "/vendor/products";
    }

    if (!response.ok) {
      Notification(
        "error",
        "An error occurred",
        `${data.message === "fail" ? data.errors[0] : data.message}`
      );
    }
  } catch (error) {
    console.error(error);
  } finally {
    setIsLoading(false);
  }
}
