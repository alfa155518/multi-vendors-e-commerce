"use client";
import React, { createContext, useEffect, useState } from "react";
import { getVendors } from "../actions/vendor";
import Cookies from "js-cookie";
import Notification from "../_components/Notification";
export const VendorsContext = createContext();

export default function VendorsManageMent({ children }) {
  const API = process.env.NEXT_PUBLIC_API_URL;
  const [allVendors, setAllVendors] = useState([]);
  const [singleVendor, setSingleVendor] = useState({});
  const tokenVendor = Cookies.get("tokenVendor")
    ? JSON.parse(Cookies.get("tokenVendor"))
    : null;
  const vendor = Cookies.get("vendor") ? JSON.parse(Cookies.get("vendor")) : {};

  // All Vendors
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

  // Single Vendor
  useEffect(() => {
    async function fetchVendorData() {
      try {
        if (Cookies.get("vendor")) {
          const data = await JSON.parse(Cookies.get("vendor"));
          const response = await fetch(
            `${API}/vendors/${data._id}`,
            {
              headers: { Authorization: `Bearer ${tokenVendor}` },
            },
            {
              next: {
                revalidate: 1,
              },
            }
          );
          if (response.ok) {
            const data = await response.json();
            if (data) {
              Cookies.set("vendor", JSON.stringify(data.vendor));
            }
            return setSingleVendor(data.vendor);
          } else {
            throw new Error("Failed to fetch user vendor");
          }
        }
      } catch (error) {
        console.error("Error fetching vendor data:", error);
      }
    }
    fetchVendorData();
  }, [tokenVendor, API]);

  // Logout Vendor
  const logout = async (e) => {
    e.preventDefault();
    console.log(44);
    // try {
    //   await logoutVendor(tokenVendor, Notification);
    //   Cookies.remove("vendor");
    //   Cookies.remove("tokenVendor");
    //   window.location.href = "/signup";
    // } catch (error) {
    //   console.log(error);
    // }
  };
  return (
    <VendorsContext.Provider
      value={{ allVendors, logout, singleVendor, tokenVendor, vendor }}>
      {children}
    </VendorsContext.Provider>
  );
}
