"use client";

import React, { createContext, useEffect, useState } from "react";
import {
  addProductToCart,
  minusProductQuantityInCart,
  plusProductQuantityInCart,
  productsInCart,
  removeProductFromCart,
} from "../actions/cart";
import Cookies from "js-cookie";
import Notification from "../_components/Notification";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [allProductsInCart, setAllProductsInCart] = useState([]);
  // User Token
  const token = Cookies.get("token") ? JSON.parse(Cookies.get("token")) : null;

  // Get All Product From Cart Automatic
  useEffect(() => {
    async function getProductInCart() {
      const cartItems = await productsInCart(token, setLoading, Notification);
      setAllProductsInCart(cartItems.products);
    }
    if (token) {
      getProductInCart();
    }
  }, [token]);

  // Add Product To Cart
  const addToCart = async (e, productId) => {
    setLoading(true);
    e.preventDefault();
    // Check if product Id exit in setAllProduct
    const productExists = allProductsInCart.some(
      (product) => product.id === productId
    );
    if (productExists) {
      Notification("error", "fail", "Product Already Exit In Cart");
      setLoading(false);
      window.location.reload();
    }
    await addProductToCart(token, productId, Notification, setLoading);
  };

  // remove product from cart
  const handelRemoveProduct = async (e, productId) => {
    e.preventDefault();
    const updatedCart = await removeProductFromCart(
      token,
      productId,
      Notification,
      setLoading
    );
    if (!updatedCart) {
      return;
    }
    if (updatedCart) {
      const filteredData = allProductsInCart.filter((product) => {
        return product.product._id !== productId;
      });
      return setAllProductsInCart(filteredData);
    }
    window.location.reload();
  };

  // Plus Product Quantity
  const plusProductQuantity = async (e, productId, currentQuantity) => {
    e.preventDefault();
    const updatedProduct = await plusProductQuantityInCart(
      token,
      productId,
      currentQuantity,
      Notification,
      setLoading
    );

    if (updatedProduct) {
      setAllProductsInCart((prevCart) =>
        prevCart.map((item) =>
          item.product._id === productId
            ? { ...item, quantity: updatedProduct.quantity }
            : item
        )
      );
    }
  };

  // Minus Product Quantity
  const minusProductQuantity = async (e, productId, currentQuantity) => {
    e.preventDefault();
    const updatedProduct = await minusProductQuantityInCart(
      token,
      productId,
      currentQuantity,
      Notification,
      setLoading
    );

    if (updatedProduct) {
      setAllProductsInCart((prevCart) =>
        prevCart.map((item) =>
          item.product._id === productId
            ? { ...item, quantity: updatedProduct.quantity }
            : item
        )
      );
    }
  };

  return (
    <CartContext.Provider
      value={{
        loading,
        allProductsInCart,
        addToCart,
        plusProductQuantity,
        minusProductQuantity,
        handelRemoveProduct,
      }}>
      {children}
    </CartContext.Provider>
  );
};
