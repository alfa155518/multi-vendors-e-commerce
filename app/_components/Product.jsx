"use client";
import "@/css/product.css";
import { FaShoppingCart } from "react-icons/fa";
import LazyLoadImageAnimation from "./ImageAnimation";
import Link from "next/link";
import useInViewAnimation from "../_hooks/useInViewAnimation";
import { useContext } from "react";
import { CartContext } from "../_context/cartManageMent";
import Loading from "./Laoding";

const Product = ({ product }) => {
  const [ref, inView] = useInViewAnimation();
  const { addToCart, loading } = useContext(CartContext);

  if (loading) {
    return <Loading />;
  }

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
          vendor:<strong>{product.vendor[0].name}</strong>
        </span>
      </div>
      <div className="actions">
        <button className="btn-cart" onClick={(e) => addToCart(e, product._id)}>
          <span className="IconContainer">
            <FaShoppingCart className="icon" />
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
