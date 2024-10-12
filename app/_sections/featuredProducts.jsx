"use client";

import { useContext } from "react";
import { ProductContext } from "../_context/manageProducts";
import Product from "../_components/Product";
import SectionName from "../_components/SectionName";

export default function FeaturedProducts() {
  const { featuredProducts } = useContext(ProductContext);
  return (
    <section className="featured-container">
      <SectionName>Featured Products</SectionName>
      <div className="featured-products">
        {featuredProducts.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
}
