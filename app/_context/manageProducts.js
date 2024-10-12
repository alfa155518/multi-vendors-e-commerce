"use client";

import { createContext, useState } from "react";
import AllProducts from "@/data/product";
export const ProductContext = createContext({});

export function ProductProvider({ children }) {
  const allCategories = [
    "Technology",
    "Glasses",
    "Furniture",
    "Foods",
    "Fashion",
    "Electronics",
    "Cosmetics",
    "Chocolate",
  ];

  // featuredProducts
  const [featuredProducts] = useState(() => {
    const productsByCategory = allCategories.reduce((acc, category) => {
      const productsInCategory = AllProducts.filter(
        (product) => product.category === category
      );
      acc[category] = productsInCategory.slice(0, 4);
      return acc;
    }, {});
    return Object.values(productsByCategory).flat();
  });
  return (
    <ProductContext.Provider value={{ featuredProducts }}>
      {children}
    </ProductContext.Provider>
  );
}
