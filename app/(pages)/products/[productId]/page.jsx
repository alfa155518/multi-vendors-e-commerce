"use client";
import "../../../../css/single-product.css";
import { useContext, useEffect, useState } from "react";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import Image from "next/image";
import LazyLoadImg from "@/app/_components/LazyLoadImg";
import Link from "next/link";
import Product from "@/app/_components/Product";
import { ProductContext } from "@/app/_context/manageProducts";
import Reviews from "@/app/_components/Reviews";
import SectionName from "@/app/_components/SectionName";
import UserReview from "@/app/_components/UserReview";
import DefaultProductImg from "@/public/default-product.webp";
import Loading from "@/app/_components/Laoding";
import Notification from "@/app/_components/Notification";
export default function ProductInfo({ params }) {
  const productId = params.productId;
  const [product, setProduct] = useState(null);
  const { singleProduct, suggestions } = useContext(ProductContext);

  useEffect(() => {
    const fetchProductData = async () => {
      if (productId) {
        try {
          const data = await singleProduct(productId, Notification);
          if (data) {
            setProduct(data);
          }
        } catch (error) {
          console.error("Failed to fetch product data:", error);
        }
      }
    };
    fetchProductData();
  }, [productId, singleProduct]);

  if (!product) {
    return <Loading />;
  }

  const {
    name = "Product Name",
    description = "No description available",
    price = 0,
    stock = 0,
    photo = {},
    rating = 0,
    vendor = [{}],
  } = product;

  return (
    <section className="product-wrapper text-white">
      <div className="single-product">
        <div className="product-image">
          <LazyLoadImg>
            <Image
              src={photo.url || DefaultProductImg}
              alt={"product"}
              width={200}
              height={200}
            />
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
            <strong>({`${rating} rating`})</strong>
          </div>
          <div className="stock">({`stock ${stock}`})</div>
          <div className="product-vendor">
            <span>Vendor:</span>
            <Link href={"/"}>{vendor[0]?.name || "Unknown Vendor"}</Link>
          </div>
        </div>
      </div>
      <div className="reviews">
        <Reviews />
      </div>
      <div className="suggested-products">
        {suggestions && suggestions.length > 0 ? (
          suggestions.map((pr) => <Product product={pr} key={pr._id} />)
        ) : (
          <div>No suggestions available</div>
        )}
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
