"use client";
import { createContext, useEffect, useState } from "react";

import React from "react";
import Cookies from "js-cookie";

export const UserContext = createContext({});

export default function UsersManageMent({ children }) {
  const token = Cookies.get("token") ? JSON.parse(Cookies.get("token")) : null;

  const API = process.env.NEXT_PUBLIC_API_URL;

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    async function fetchUserData() {
      try {
        if (Cookies.get("userData")) {
          const data = await JSON.parse(Cookies.get("userData"));
          const response = await fetch(
            `${API}/users/${data._id}`,
            {
              headers: { Authorization: `Bearer ${token}` },
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
              Cookies.set("userData", JSON.stringify(data.user));
            }
            return setUserData(data.user);
          } else {
            throw new Error("Failed to fetch user data");
          }
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }
    fetchUserData();
  }, [API, token]);

  return (
    <UserContext.Provider value={{ userData, token }}>
      {children}
    </UserContext.Provider>
  );
}
