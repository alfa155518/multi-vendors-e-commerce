"use client";

import { useContext } from "react";
import { vendorContext } from "../_context/vendorManagement";
import useInViewAnimation from "../_hooks/useInViewAnimation";

export default function VendorTopSelling() {
  const { products } = useContext(vendorContext);
  const [ref, inView] = useInViewAnimation();
  return (
    <section
      ref={ref}
      className={`top-selling ${
        inView ? "animate__animated animate__zoomIn" : ""
      }`}>
      <h2>Top Selling Products</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Sales</th>
            <th>Revenue</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product, i) => (
            <tr key={i}>
              <td className="product-name">{product.name}</td>
              <td className="price">${product.price}</td>
              <td className="sales">{product.sales}</td>
              <td className="price">
                ${(product.price * product.sales).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
