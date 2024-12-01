export async function getAllProducts(currentPage) {
  try {
    const API = process.env.NEXT_PUBLIC_API_URL;
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
    const API = process.env.NEXT_PUBLIC_API_URL;
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
    const API = process.env.NEXT_PUBLIC_API_URL;
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
