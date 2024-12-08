import { FaRegCreditCard } from "react-icons/fa6";
import Link from "next/link";

export default function CartSummary({ allProductsInCart }) {
  // Total Price after cal shipping and taxis
  const totalPrice = allProductsInCart.reduce(
    (total, product) =>
      total + 20 + 5 + product.product.price * product.quantity,
    0
  );
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
      <Link href={"/"} className="checkout">
        <button className="btn__payment btn">
          Pay <FaRegCreditCard className="icon" />
        </button>
      </Link>
    </>
  );
}
