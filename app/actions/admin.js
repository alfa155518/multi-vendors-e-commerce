const Api = process.env.NEXT_PUBLIC_API_URL;

// Fetch all products And Filter
export async function filterProductByCategories(
  formData,
  allData,
  setAllProducts
) {
  const category = formData.get("categories");
  const price = parseInt(formData.get("prices"));

  // Apply category filter if not "All"
  if (category && category !== "all") {
    const filteredProducts = allData.products.filter((product) => {
      if (category === "all") {
        return setAllProducts(allData.products);
      }
      return product.category.toLowerCase() === category.toLowerCase();
    });
    return setAllProducts(filteredProducts);
  }

  // Apply price filter if specified
  if (price && price !== "all") {
    const filteredProducts = allData.products.filter((product) => {
      if (price === 100) {
        return product.price >= 100;
      } else if (price === 99) {
        return product.price <= 100;
      } else {
        return setAllProducts(allData.products);
      }
    });
    return setAllProducts(filteredProducts);
  }
}

// Fetch all users
export async function allUsers(token) {
  try {
    const res = await fetch(`${Api}/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();

    return data.users;
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
}
