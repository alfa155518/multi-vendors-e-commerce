import Link from "next/link";
import Socials from "../_components/Socials";
import Image from "next/image";
import staticImg from "@/public/static.webp";
export default function Footer() {
  return (
    <>
      <footer>
        <Image src={staticImg} alt="footer img" fill className="-z-10" />
        <>
          <ul>
            <li>
              <strong>Customers</strong>
            </li>
            <li>Buyer</li>
            <li>Supplier</li>
          </ul>

          <ul>
            <li>
              <strong>Company</strong>
            </li>
            <li>About Us</li>
            <li>Career</li>
            <li>Contact Us</li>
          </ul>
          <ul>
            <li>
              <strong>Further Information</strong>
            </li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
          <ul>
            <li>
              <strong>Follow Us</strong>
            </li>
            <li>
              <Socials />
            </li>
          </ul>
        </>
      </footer>
      <p className="copy-right">
        &copy; 2023 Multi-Vendor E-Commerce.
        <Link
          href={"https://alfa155518.github.io/my-portfolio/"}
          target="_blank"
          rel="noopener noreferrer"
          className="relative">
          <span className="special-word">Ahmed Hassob</span>
        </Link>
        All rights reserved. Designed by
      </p>
    </>
  );
}
