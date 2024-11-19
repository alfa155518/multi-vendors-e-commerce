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
