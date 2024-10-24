"use client";
import "@/css/product.css";
import { FaShoppingCart } from "react-icons/fa";
import LazyLoadImageAnimation from "./ImageAnimation";
import Link from "next/link";
import useInViewAnimation from "../_hooks/useInViewAnimation";
const Product = ({ product }) => {
  const [ref, inView] = useInViewAnimation();
  return (
    <div
      ref={ref}
      className={`product text-white text-center relative ${
        inView ? "animate__animated animate__fadeInUp" : ""
      }`}>
      <LazyLoadImageAnimation
        src={product.photo.url}
        alt={product.name}
        width={100}
        height={100}
      />
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
            {/* <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 576 512"
              className="icon"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
            </svg> */}
          </span>
          <p className="second-text">add to cart</p>
        </button>

        <button className="btn btn-secondary">
          <Link href={`/products/${product._id}`}> view details </Link>
        </button>
      </div>
      <strong className={product.rating > 4.6 ? `discount` : ""}>
        {product.rating > 4.6 && `20%`}
      </strong>
    </div>
  );
};

export default Product;
