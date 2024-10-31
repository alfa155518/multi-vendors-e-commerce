"use client";
import { createContext, useEffect, useState } from "react";
import AllReviews from "@/data/reviews";
import React from "react";
import Cookies from "js-cookie";
export const UserContext = createContext({});

export default function UsersManageMent({ children }) {
  // All reviews
  const [reviews, setReviews] = useState(AllReviews);

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    async function fetchUserData() {
      try {
        if (Cookies.get("userData")) {
          const data = await JSON.parse(Cookies.get("userData"));
          return setUserData(data);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }
    fetchUserData();
  }, []);

  return (
    <UserContext.Provider value={{ reviews, userData }}>
      {children}
    </UserContext.Provider>
  );
}
