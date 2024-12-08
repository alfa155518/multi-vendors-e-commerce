"use client";
import { useContext } from "react";
import LazyLoadImageAnimation from "@/app/_components/ImageAnimation";
import { CartContext } from "@/app/_context/cartManageMent";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { FaTrashCan } from "react-icons/fa6";
import CartSummary from "./CartSummary";
import "../../../css/cart.css";
import NoData from "@/app/_components/NoData";

export default function Cart() {
  const {
    allProductsInCart,
    plusProductQuantity,
    minusProductQuantity,
    handelRemoveProduct,
  } = useContext(CartContext);

  if (allProductsInCart.length === 0) {
    return <NoData />;
  }

  return (
    <section className="cart__page">
      <h1>Shopping Cart</h1>
      <div className="cart__container">
        <div className="cart__items">
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {allProductsInCart.map((product, i) => {
                return (
                  <tr key={i} className="product">
                    <td>
                      <div className="product__img">
                        <LazyLoadImageAnimation
                          src={product.product.photo.url}
                          alt="product img"
                          width={50}
                          height={50}
                        />
                        <div className="product__info">
                          <strong>{product.product.name}</strong>
                          <span>vendor: {product.product.vendor[0].name}</span>
                        </div>
                      </div>
                    </td>
                    <td className="price">${product.product.price}</td>
                    <td>
                      <div className="product__quantity">
                        <button
                          className={`${
                            product.quantity <= 1 ? "not__active" : "active"
                          }`}
                          disabled={product.quantity <= 1}
                          onClick={(e) =>
                            minusProductQuantity(
                              e,
                              product.product._id,
                              product.quantity
                            )
                          }>
                          <FaMinus />
                        </button>
                        <span>{product.quantity}</span>
                        <button
                          className={`${
                            product.quantity === 10 ? "not__active" : "active"
                          }`}
                          disabled={product.quantity === 10}
                          onClick={(e) =>
                            plusProductQuantity(
                              e,
                              product.product._id,
                              product.quantity
                            )
                          }>
                          <FaPlus />
                        </button>
                      </div>
                    </td>
                    <td className="total__price">
                      ${(product.product.price * product.quantity).toFixed(2)}
                    </td>
                    <td>
                      <button
                        className="remove__product"
                        onClick={(e) =>
                          handelRemoveProduct(e, product.product._id)
                        }>
                        <FaTrashCan />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="cart__summary">
          <CartSummary allProductsInCart={allProductsInCart} />
        </div>
      </div>
    </section>
  );
}
