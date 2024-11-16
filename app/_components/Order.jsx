"use client";

import Link from "next/link";
import UpdateBtn from "./UpdateBtn";
import BtnDetails from "./BtnDetails";
import BtnRemove from "./RemoveBtn";
import { usePathname } from "next/navigation";
import useInViewAnimation from "../_hooks/useInViewAnimation";

export default function Order({ recentOrder }) {
  const pathName = usePathname();
  const [ref, inView] = useInViewAnimation();
  return (
    <section
      ref={ref}
      className={`orders text-neutralColor_2 ${
        inView ? "animate__animated animate__fadeInUp" : ""
      }`}>
      {pathName === "/vendor" ? (
        <h2>Recent Order</h2>
      ) : (
        <h2>Order Management</h2>
      )}
      <table>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Date</th>
            <th>Status</th>
            <th>Total</th>
            <th>Items</th>
            {pathName === "/vendor" ? (
              <></>
            ) : (
              <>
                <th>Details</th>
                <th>Update Status</th>
                <th>Delete</th>
              </>
            )}
          </tr>
        </thead>
        <tbody>
          {recentOrder.map((order, i) => (
            <tr key={i}>
              <td className="customer-name">{order.customerName}</td>
              <td className="date">{order.date}</td>
              <td
                className={
                  order.status.includes("pending") ? "pending" : "delivered"
                }>
                {order.status}
              </td>
              <td className="price">${order.total}</td>
              <td className="count">{order.count}</td>
              {pathName === "/vendor" ? (
                <></>
              ) : (
                <>
                  <td>
                    <BtnDetails />
                  </td>
                  <td>
                    <div className="update">
                      <Link href={`/orders/${order.id}`} className="edit">
                        <UpdateBtn />
                      </Link>
                    </div>
                  </td>
                  <td>
                    <div className="remove">
                      <BtnRemove />
                    </div>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
