"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { ProductContext } from "./manageProducts";
import { filterProductByCategories } from "../actions/admin";

export const AdminContext = createContext([]);

export function AdminManagement({ children }) {
  const [showFilterPopup, setShowFilterPopup] = useState(false);
  const { allData } = useContext(ProductContext);
  const [allProducts, setAllProducts] = useState([]);

  // Function to toggle filter popup
  const toggleFilterPopup = () => {
    setShowFilterPopup(!showFilterPopup);
  };

  // Function to apply filters on Products
  const filterProducts = (formData) => {
    filterProductByCategories(formData, allData, setAllProducts);
  };

  useEffect(() => {
    if (allData && allData.products) {
      setAllProducts(allData.products);
    }
  }, [allData]);

  return (
    <AdminContext.Provider
      value={{
        showFilterPopup,
        toggleFilterPopup,
        filterProducts,
        allProducts,
      }}>
      {children}
    </AdminContext.Provider>
  );
}
