"use client";
import BtnAdd from "@/app/_components/BtnAdd";
import Loading from "@/app/_components/Laoding";
import BtnRemove from "@/app/_components/RemoveBtn";
import UpdateBtn from "@/app/_components/UpdateBtn";
import { VendorsContext } from "@/app/_context/vendorsManagement";
import useInViewAnimation from "@/app/_hooks/useInViewAnimation";
import Link from "next/link";
import { useContext } from "react";

export default function Products() {
  const { singleVendor } = useContext(VendorsContext);
  const products = singleVendor?.products || [];
  const [ref, inView] = useInViewAnimation();


  return (
    <section className="products">
      <h2>Products ({products.length})</h2>
      {products ? (
        <table
          ref={ref}
          className={inView ? "animate__animated animate__fadeInDown" : ""}>
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
            {products.map((product, i) => {
              const stockClass =
                product.stock <= 10
                  ? "text-dangerColor"
                  : "text-secondaryColor_1";
              return (
                <tr key={i}>
                  <td className="product-name">{product.name}</td>
                  <td className="price">${product.price}</td>
                  <td className={stockClass}>{product.stock}</td>
                  <td className="sales">{product.sales}</td>
                  <td>
                    <Link href={`/orders/${product._id}`}>
                      <UpdateBtn />
                    </Link>
                  </td>
                  <td>
                    <div className="remove__btn">
                      <BtnRemove />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <Loading />
      )}
      <Link className="btn-add" href={"/vendor/add-product"}>
        <BtnAdd />
      </Link>
    </section>
  );
}
