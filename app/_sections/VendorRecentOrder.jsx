"use client";

import { useContext } from "react";
import { vendorContext } from "../_context/vendorManagement";
import Order from "../_components/Order";

export default function VendorRecentOrder() {
  const { recentOrder } = useContext(vendorContext);
  return <Order recentOrder={recentOrder} />;
}
