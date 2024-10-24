"use client";

import "../../../css/products.css";
import NoData from "../../_components/NoData";
import Product from "../../_components/Product";
import { ProductContext } from "../../_context/manageProducts";
import SectionName from "../../_components/SectionName";
import { useContext } from "react";
import useInViewAnimation from "../../_hooks/useInViewAnimation";
export default function AllProducts() {
  const { allProducts, filterProductsByPrice, filterByCategories } =
    useContext(ProductContext);
  const [ref, inView] = useInViewAnimation();
  return (
    <>
      {allProducts.length <= 0 ? (
        <NoData />
      ) : (
        <>
          <SectionName>All Products</SectionName>
          <div className="products-container flex ">
            <section className="all-products flex-2">
              <div className="products-list">
                {allProducts?.map((product, i) => (
                  <Product key={i} product={product} />
                ))}
              </div>
              <div className="pagination">
                <button disabled={allProducts.length <= 10}>Previous</button>
                <button disabled={allProducts.length <= 10}>Next</button>
              </div>
            </section>
            <section
              ref={ref}
              className={`filter-container flex-2 flex flex-col text-center items-center ${
                inView ? "animate__animated animate__backInDown" : ""
              }`}>
              <div className="range-container">
                <div className="price-range">
                  <label htmlFor="price">Price Range</label>
                  <input
                    type="range"
                    id="price"
                    name="price"
                    min="0"
                    max="2500"
                    step="10"
                    onChange={(e) => filterProductsByPrice(e)}
                  />
                </div>
                <div className="categories-options">
                  <label htmlFor="categories">Categories</label>
                  <select
                    id="categories"
                    name="categories"
                    onChange={(e) => filterByCategories(e)}>
                    <option value="">All Categories</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Chocolate">Chocolate</option>
                    <option value="Foods">Foods</option>
                    <option value="Furniture">Furniture</option>
                    <option value="Glasses">Glasses</option>
                    <option value="Jewelry">Jewelry</option>
                    <option value="Technology">Technology</option>
                    <option value="Fashion">Fashion</option>
                    <option value="Cosmetics">Cosmetics</option>
                  </select>
                </div>
              </div>
            </section>
          </div>
        </>
      )}
    </>
  );
}
