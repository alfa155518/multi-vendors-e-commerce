import Link from "next/link";
import { FaSadTear } from "react-icons/fa";
import "../../../../css/payment-fail.css";
export default function PaymentFail() {
  return (
    <div className="payment-fail-container">
      <div className="payment-fail-content">
        <FaSadTear className="payment-fail-icon" />
        <h1>Payment Failed</h1>
        <p>Unfortunately, your payment could not be processed at this time.</p>
        <p>Please try again or contact our support team for assistance.</p>
        <Link href="/cart">
          <span className="btn btn-primary">Return to Cart</span>
        </Link>
        <Link href="/support">
          <span className="btn btn-secondary">Contact Support</span>
        </Link>
      </div>
    </div>
  );
}
