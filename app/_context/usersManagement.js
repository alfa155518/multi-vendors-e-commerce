"use client";
import { createContext, useState } from "react";
import AllReviews from "@/data/reviews";
import React from "react";

export const UserContext = createContext({});

export default function UsersManageMent({ children }) {
  const [reviews, setReviews] = useState(AllReviews);

  return (
    <UserContext.Provider value={{ reviews }}>{children}</UserContext.Provider>
  );
}
