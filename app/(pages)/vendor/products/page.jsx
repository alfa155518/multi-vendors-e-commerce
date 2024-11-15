"use client";

import BtnAdd from "@/app/_components/BtnAdd";
import BtnRemove from "@/app/_components/RemoveBtn";
import UpdateBtn from "@/app/_components/UpdateBtn";
import { vendorContext } from "@/app/_context/vendorManagement";
import Link from "next/link";
import { useContext } from "react";
import { motion } from "framer-motion";

export default function Products() {
  const { products } = useContext(vendorContext);
  console.log(products);
  return (
    <section className="products">
      <h2>Products ({products.length})</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Sales</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <motion.tr
              key={product.id}
              initial={{ opacity: 0, scale: 0.9, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 100 }}>
              <td className="product-name">{product.name}</td>
              <td className="price">${product.price}</td>
              <td
                className={
                  product.stock <= 10
                    ? "text-dangerColor"
                    : "text-secondaryColor_1"
                }>
                {product.stock}
              </td>
              <td className="sales">{product.sales}</td>
              <td>
                <div className="update">
                  <Link href={`/orders/${product.id}`}>
                    <UpdateBtn />
                  </Link>
                </div>
              </td>
              <td>
                <div className="remove">
                  <BtnRemove />
                </div>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
      <Link className="btn-add" href={"/"}>
        <BtnAdd />
      </Link>
    </section>
  );
}
