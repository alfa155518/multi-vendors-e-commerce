"use client";

import Product from "@/app/_components/Product";
import { ProductContext } from "@/app/_context/manageProducts";
import { useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import Reviews from "@/app/_components/Reviews";
import SectionName from "@/app/_components/SectionName";
import "@/css/single-product.css";
import UserReview from "@/app/_components/UserReview";
import LazyLoadImg from "@/app/_components/LazyLoadImg";
export default function ProductInfo({ params }) {
  const productId = +params.productId;
  const { singleProduct, suggestions } = useContext(ProductContext);
  const productInfo = singleProduct(productId);
  const { name, description, price, stock, photo, rating } = productInfo;

  return (
    <section className="product-wrapper text-white">
      <div className="single-product">
        <div className="product-image">
          <LazyLoadImg>
            <Image src={photo.url} alt={"product"} width={200} height={200} />
          </LazyLoadImg>
        </div>
        <div className="product-details">
          <h1>{name}</h1>
          <p>{description}</p>
          <div className="product-price">
            <span>Price:</span>
            <strong>${price}</strong>
          </div>
          <div className="product-rating">
            <span className="stars">
              {Array.from({ length: Math.floor(rating) }, (_, i) => (
                <FaStar key={i} />
              ))}
              {rating % 1 > 0 && <FaRegStarHalfStroke />}
            </span>
            <strong>({`${productInfo.rating} rating`})</strong>
          </div>
          <div className="stock">({`stock ${stock}`})</div>
          <div className="product-vendor">
            <span>Vendor:</span>
            <Link href={"/"}>Ahmed</Link>
          </div>
        </div>
      </div>
      <div className="reviews">
        <Reviews />
      </div>
      <div className="suggested-products">
        {suggestions.map((pr, i) => {
          return <Product product={pr} key={i} />;
        })}
      </div>
      <>
        <SectionName>Write A Review</SectionName>
        <div className="user-review">
          <UserReview />
        </div>
      </>
    </section>
  );
}
