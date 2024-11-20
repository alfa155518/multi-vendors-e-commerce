"use client";

import Link from "next/link";
import Image from "next/image";
import DefaultVendor from "@/public/images/users/default.WebP";
import DefaultBanner from "../../../public/images/stores/default-banner.webp";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useContext } from "react";
import { VendorsContext } from "@/app/_context/vendorsManagement";
import useInViewAnimation from "@/app/_hooks/useInViewAnimation";
import EditBtn from "@/app/_components/EditBtn";
import LazyLoadImageAnimation from "@/app/_components/ImageAnimation";
import "../../../css/vendor.css";
import Loading from "@/app/_components/Laoding";

export default function VendorLayout({ children }) {
  const { singleVendor } = useContext(VendorsContext);
  const { storeBanner, storeDetails, name } = singleVendor || {};
  const { storeName } = storeDetails || {};
  const activeLink = usePathname();
  const [ref, inView] = useInViewAnimation();

  // Early return if singleVendor is not available
  if (!singleVendor) {
    return <Loading />; // or some fallback UI
  }

  return (
    <div
      ref={ref}
      className={`vendor-profile ${
        inView ? "animate__animated animate__flash" : ""
      }`}>
      <section className="vendor-banner relative">
        <Image
          className="object-cover -z-10"
          src={storeBanner?.url || DefaultBanner}
          alt="Vendor Banner"
          fill
          priority={true}
        />
        <h1>Welcome To My Store</h1>
        <div className="store-details">
          <div className="store-logo">
            <LazyLoadImageAnimation
              src={singleVendor?.storeLogo?.url || DefaultVendor}
              alt="Vendor Logo"
              width={100}
              height={100}
            />
            <div className="sub-details">
              <h2 className="store-name">{storeName}</h2>
              <h3 className="vendor-name">{name}</h3>
            </div>
          </div>
          <div className="btn-update">
            <EditBtn page={"/"} />
          </div>
        </div>
      </section>

      {/* Vendor Nav */}
      <nav
        ref={ref}
        className={`${inView ? "animate__animated animate__zoomIn" : ""}`}>
        <ul className="vendor-links">
          <li className={activeLink === "/vendor" ? "active" : ""}>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link href="/vendor">Overview</Link>
            </motion.div>
          </li>
          <li className={activeLink === "/vendor/products" ? "active" : ""}>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link href="/vendor/products">Products</Link>
            </motion.div>
          </li>
          <li className={activeLink === "/vendor/orders" ? "active" : ""}>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link href="/vendor/orders">Orders</Link>
            </motion.div>
          </li>
          <li className={activeLink === "/vendor/analytics" ? "active" : ""}>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link href="/vendor/analytics">Analytics</Link>
            </motion.div>
          </li>
        </ul>
      </nav>

      {children}
    </div>
  );
}
