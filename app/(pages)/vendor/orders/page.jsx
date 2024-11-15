"use client";

import { useContext } from "react";
import Order from "@/app/_components/Order";
import { vendorContext } from "@/app/_context/vendorManagement";

export default function Orders() {
  const { recentOrder } = useContext(vendorContext);
  return <Order recentOrder={recentOrder} />;
}
