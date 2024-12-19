"use client";

import React, {
  createContext,
  use,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { ProductContext } from "./manageProducts";
import { allUsers, filterProductByCategories } from "../actions/admin";
import { UserContext } from "./usersManagement";

export const AdminContext = createContext([]);

export function AdminManagement({ children }) {
  const { token } = useContext(UserContext);
  const { allData } = useContext(ProductContext);
  const [allProducts, setAllProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [showFilterPopup, setShowFilterPopup] = useState(false);

  // Function to toggle filter popup
  const toggleFilterPopup = () => {
    setShowFilterPopup(!showFilterPopup);
  };

  // Function to apply filters on Products
  const filterProducts = (formData) => {
    filterProductByCategories(formData, allData, setAllProducts);
  };

  // Function to get all users
  const getAllUsers = useCallback(() => {
    if (token) {
      allUsers(token).then((data) => {
        setUsers(data);
      });
    }
  }, [token]);

  useEffect(() => {
    getAllUsers();
  }, [getAllUsers]);

  useEffect(() => {
    if (allData && allData.products) {
      setAllProducts(allData.products);
    }
  }, [allData]);

  return (
    <AdminContext.Provider
      value={{
        users,
        showFilterPopup,
        allProducts,
        toggleFilterPopup,
        filterProducts,
      }}>
      {children}
    </AdminContext.Provider>
  );
}
