"use client";

import BtnAdd from "@/app/_components/BtnAdd";
import BtnRemove from "@/app/_components/RemoveBtn";
import UpdateBtn from "@/app/_components/UpdateBtn";
import { vendorContext } from "@/app/_context/vendorManagement";
import useInViewAnimation from "@/app/_hooks/useInViewAnimation";
import Link from "next/link";
import { useContext } from "react";

export default function Products() {
  const { products } = useContext(vendorContext);
  const [ref, inView] = useInViewAnimation();
  return (
    <section className="products">
      <h2>Products ({products.length})</h2>
      <table
        ref={ref}
        className={`${inView ? "animate__animated animate__fadeInDown" : ""}`}>
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
            <tr key={product.id}>
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
            </tr>
          ))}
        </tbody>
      </table>
      <Link className="btn-add" href={"/"}>
        <BtnAdd />
      </Link>
    </section>
  );
}
