"use client";

import { useContext } from "react";
import { vendorContext } from "../_context/vendorManagement";
import useInViewAnimation from "../_hooks/useInViewAnimation";

export default function AdminRecentOrders() {
  const { recentOrder } = useContext(vendorContext);
  const [ref, inView] = useInViewAnimation();

  return (
    <div className="recent-orders-table">
      <table>
        <thead>
          <tr>
            <th>Customer</th>
            <th>Date</th>
            <th>Total</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {recentOrder?.map((order) => (
            <tr
              ref={ref}
              className={inView ? "animate__animated animate__fadeInDown" : ""}
              key={order.id}>
              <td className="customer-name">{order.customerName}</td>
              <td className="date">
                {new Date(order.date).toLocaleDateString()}
              </td>
              <td className="price">${order.total}</td>
              <td
                className={
                  order.status.includes("pending") ? "pending" : "delivered"
                }>
                {order.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
