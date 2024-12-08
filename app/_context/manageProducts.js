"use client";
import { createContext, useEffect, useState, useMemo } from "react";
import React from "react";
import Cookies from "js-cookie";
import { getAllProducts, getProductById } from "../actions/products";
import Notification from "../_components/Notification";
export const ProductContext = createContext({});

export function ProductProvider({ children }) {
  const [allData, setAllData] = useState({ products: [] });
  const [allProducts, setAllProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [featuredProducts, setFeaturedProducts] = useState([]);

  // User Token
  const token = Cookies.get("token") ? JSON.parse(Cookies.get("token")) : null;
  // Vendor Token
  const vendorToken = Cookies.get("tokenVendor")
    ? JSON.parse(Cookies.get("tokenVendor"))
    : null;

  // Fetch products
  useEffect(() => {
    async function fetchAllProducts(currentPage) {
      const data = await getAllProducts(currentPage);
      setAllData(data);
    }
    fetchAllProducts(currentPage);
  }, [token, currentPage]);

  // Sync allProducts with allData
  useEffect(() => {
    if (allData.products) {
      setAllProducts(allData.products);
    }
  }, [allData]);

  // Update featuredProducts
  useEffect(() => {
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

    // Show Product Depend On Categories
    const productsByCategory = allCategories.reduce((acc, category) => {
      const productsInCategory = allData.products.filter(
        (product) => product.category === category
      );
      acc[category] = productsInCategory.slice(0, 4);
      return acc;
    }, {});
    setFeaturedProducts(Object.values(productsByCategory).flat());
  }, [allData.products]);

  // Suggestions
  const suggestions = useMemo(() => {
    const uniqueCategories = new Set();
    return allData.products.reduce((acc, prod) => {
      if (!uniqueCategories.has(prod.category) && acc.length < 5) {
        uniqueCategories.add(prod.category);
        acc.push(prod);
      }
      return acc;
    }, []);
  }, [allData.products]);

  // Handle search
  const handleSearch = (e) => {
    const searchQuery = e.target.value.toLowerCase();
    const filteredProducts = allData.products.filter((product) =>
      product.category.toLowerCase().includes(searchQuery)
    );
    setAllProducts(filteredProducts);
  };

  // Single Product by ID
  const singleProduct = async (id, Notification) => {
    const { product } = await getProductById(id, Notification);
    return product;
  };

  // Handle pagination
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <ProductContext.Provider
      value={{
        featuredProducts,
        allProducts,
        setAllProducts,
        allData,
        handleSearch,
        singleProduct,
        suggestions,
        handlePageChange,
        currentPage,
        token,
        vendorToken,
        Notification,
      }}>
      {children}
    </ProductContext.Provider>
  );
}
