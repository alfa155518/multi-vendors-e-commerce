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
