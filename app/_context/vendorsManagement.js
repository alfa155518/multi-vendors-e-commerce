"use client";
import React, { createContext, useEffect, useState } from "react";
import { getVendors } from "../actions/vendor";
import Cookies from "js-cookie";
import Notification from "../_components/Notification";
export const VendorsContext = createContext();

export default function VendorsManageMent({ children }) {
  const [allVendors, setAllVendors] = useState([]);

  useEffect(() => {
    const token = Cookies.get("token")
      ? JSON.parse(Cookies.get("token"))
      : null;

    if (token) {
      const getAllVendors = async () => {
        try {
          const { vendors } = await getVendors(token, Notification);
          setAllVendors(vendors);
        } catch (error) {
          console.error(error);
        }
      };
      getAllVendors();
    }
  }, []);

  return (
    <VendorsContext.Provider value={{ allVendors, setAllVendors }}>
      {children}
    </VendorsContext.Provider>
  );
}
