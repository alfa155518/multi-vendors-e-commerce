"use client";

const { createContext } = require("react");

export const vendorContext = createContext({});

const vendorManageMent = ({ children }) => {
  return <vendorContext.Provider>{children}</vendorContext.Provider>;
};

export default vendorManageMent;
