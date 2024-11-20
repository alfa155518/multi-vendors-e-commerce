"use client";
import React, { createContext, useEffect, useState } from "react";
import { getVendorById, getVendors } from "../actions/vendor";
import Cookies from "js-cookie";
import Notification from "../_components/Notification";
export const VendorsContext = createContext();

export default function VendorsManageMent({ children }) {
  const [allVendors, setAllVendors] = useState([]);
  const [singleVendor, setSingleVendor] = useState({});

  useEffect(() => {
    const token = Cookies.get("token")
      ? JSON.parse(Cookies.get("token"))
      : null;

    if (token) {
      const getAllVendors = async (token, Notification) => {
        try {
          const { vendors } = await getVendors(token, Notification);
          setAllVendors(vendors);
        } catch (error) {
          console.error(error);
        }
      };
      getAllVendors(token, Notification);
    }
  }, []);

  useEffect(() => {
    const tokenVendor = Cookies.get("tokenVendor")
      ? JSON.parse(Cookies.get("tokenVendor"))
      : null;

    const vendor = Cookies.get("vendor")
      ? JSON.parse(Cookies.get("vendor"))
      : null;

    const vendorId = vendor ? vendor._id : null;
    if (vendor && tokenVendor) {
      const getAllVendors = async (tokenVendor, vendorId, Notification) => {
        try {
          const data = await getVendorById(tokenVendor, vendorId, Notification);
          setSingleVendor(data);
        } catch (error) {
          console.error(error);
        }
      };
      getAllVendors(tokenVendor, vendorId, Notification);
    }
  }, []);
  return (
    <VendorsContext.Provider value={{ allVendors, singleVendor }}>
      {children}
    </VendorsContext.Provider>
  );
}
