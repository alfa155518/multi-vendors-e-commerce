import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";
import "../../../../css/payment-success.css"; // Assuming you have a Sass file for styling

export default function PaymentSuccess() {
  return (
    <div className="payment-success-container">
      <div className="payment-success-content">
        <FaCheckCircle className="payment-success-icon" />
        <h1>Payment Successful</h1>
        <p>
          Thank you for your purchase! Your payment has been processed
          successfully.
        </p>
        <p>You will receive an email confirmation shortly.</p>
        <Link href="/products">
          <span className="btn btn-secondary">Continue Shopping</span>
        </Link>
      </div>
    </div>
  );
}
