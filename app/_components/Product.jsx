"use client";
import { FaShoppingCart } from "react-icons/fa";
import Image from "next/image";
import "@/css/product.css";
import LazyLoadImg from "./LazyLoadImg";
import useInViewAnimation from "../_hooks/useInViewAnimation";
const Product = ({ product }) => {
  const [ref, inView] = useInViewAnimation();
  return (
    <div
      ref={ref}
      className={`product text-white text-center relative ${
        inView ? "animate__animated animate__fadeInUp" : ""
      }`}>
      <LazyLoadImg>
        <div className="img">
          <Image
            src={product.photo.url}
            alt={product.name}
            width={100}
            height={100}
            priority
          />
        </div>
      </LazyLoadImg>

      <h2 className="name text-secondaryColor_2">{product.name}</h2>
      <strong className="price text-accentColor_1">${product.price}</strong>
      <p className="description text-neutralColor_1">{product.description}</p>
      <div className="info">
        <span className="rating">
          rating: <strong>({product.rating})</strong>
        </span>
        <span className="vendor">
          vendor: <strong>Ahmed</strong>
        </span>
      </div>
      <div className="actions">
        <button className="btn-cart">
          <span className="IconContainer">
            <FaShoppingCart className="icon" />
          </span>
          <p className="second-text">add to cart</p>
        </button>

        <button className="btn btn-secondary">
          <a href={`/product/${product._id}`}>view details</a>
        </button>
      </div>
      <strong className={product.rating > 4.6 ? `discount` : ""}>
        {product.rating > 4.6 && `20%`}
      </strong>
    </div>
  );
};

export default Product;
