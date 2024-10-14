"use client";
import React from 'react'
import { createContext, useState } from "react";
import AllData from "@/data/product";
export const ProductContext = createContext({});

export function ProductProvider({ children }) {
  // All products
  const [allProducts, setAllProducts] = useState(AllData);

  // Suggestion Products
  const uniqueCategories = new Set();
  const suggestions = [];

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
      const productsInCategory = AllData.filter(
        (product) => product.category === category
      );
      acc[category] = productsInCategory.slice(0, 4);
      return acc;
    }, {});
    return Object.values(productsByCategory).flat();
  });

  // Filter products by Search
  const handleSearch = (e) => {
    const searchQuery = e.target.value.toLowerCase();
    const filteredProducts = AllData.filter((product) =>
      product.category.toLowerCase().includes(searchQuery)
    );
    setAllProducts(filteredProducts);
  };

  // Filter products by Price
  const filterProductsByPrice = (e) => {
    setAllProducts(
      AllData.filter((product) => product.price >= e.target.value)
    );
  };

  // Filter products by Categories
  const filterByCategories = (e) => {
    const categoric = e.target.value.toLowerCase();
    const filteredProducts = AllData.filter((product) =>
      product.category.toLowerCase().includes(categoric)
    );
    return setAllProducts(filteredProducts);
  };

  // Single Product by ID
  const singleProduct = (id) => AllData.find((product) => product._id === id);

  // Suggested Product
  AllData.forEach((prod) => {
    if (!uniqueCategories.has(prod.category) && suggestions.length < 5) {
      uniqueCategories.add(prod.category);
      suggestions.push(prod);
    }
  });
  return (
    <ProductContext.Provider
      value={{
        featuredProducts,
        allProducts,
        setAllProducts,
        AllData,
        handleSearch,
        filterProductsByPrice,
        singleProduct,
        suggestions,
        filterByCategories
      }}>
      {children}
    </ProductContext.Provider>
  );
}
