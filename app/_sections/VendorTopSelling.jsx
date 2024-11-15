"use client";

import { useContext } from "react";
import { vendorContext } from "../_context/vendorManagement";
import { motion } from "framer-motion";

export default function VendorTopSelling() {
  const { products } = useContext(vendorContext);
  return (
    <section className="top-selling">
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
            <motion.tr
              key={i}
              initial={{ opacity: 0, scale: 0.9, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 100 }}>
              <td className="product-name">{product.name}</td>
              <td className="price">${product.price}</td>
              <td className="sales">{product.sales}</td>
              <td className="price">
                ${(product.price * product.sales).toFixed(2)}
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
