import { FaRegCreditCard } from "react-icons/fa6";

import { useContext } from "react";
import { CartContext } from "@/app/_context/cartManageMent";
import { useFormStatus } from "react-dom";

export default function CartSummary({ allProductsInCart }) {
  const status = useFormStatus();
  // Total Price after cal shipping and taxis
  const totalPrice = allProductsInCart.reduce(
    (total, product) =>
      total + 20 + 5 + product.product.price * product.quantity,
    0
  );

  const { handelPaymentMethod } = useContext(CartContext);
  return (
    <>
      <h2>Order Summary</h2>
      <ul className="summary">
        <li>
          <span>Subtotal:</span>
          <strong>$0.00</strong>
        </li>
        <li>
          <span>Shipping:</span>
          <strong>$20.00</strong>
        </li>
        <li>
          <span>Tax:</span>
          <strong>$5.00</strong>
        </li>
        <li>
          <span>Total:</span>
          <strong>${totalPrice.toFixed(2)}</strong>
        </li>
      </ul>
      <form action={handelPaymentMethod}>
        <button className="btn__payment btn">
          {status.pending ? ` Loading...` : "Pay"}{" "}
          <FaRegCreditCard className="icon" />
        </button>
      </form>
    </>
  );
}
