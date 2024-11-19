"use client";

import "../../../css/products.css";
import NoData from "../../_components/NoData";
import Product from "../../_components/Product";
import { ProductContext } from "../../_context/manageProducts";
import SectionName from "../../_components/SectionName";
import { useContext } from "react";
import Pagination from "@/app/_components/Bagination";
export default function AllProducts() {
  const { allProducts, handlePageChange } = useContext(ProductContext);
  return (
    <>
      {allProducts.length <= 0 ? (
        <NoData />
      ) : (
        <>
          <SectionName>All Products</SectionName>
          <div className="products-container">
            <section className="all-products">
              <div className="products-list">
                {allProducts?.map((product, i) => (
                  <Product key={i} product={product} />
                ))}
              </div>
              <Pagination totalPages={12} onPageChange={handlePageChange} />
            </section>
          </div>
        </>
      )}
    </>
  );
}
