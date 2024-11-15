"use client";

import EditBtn from "@/app/_components/EditBtn";
import LazyLoadImageAnimation from "@/app/_components/ImageAnimation";
import { vendorContext } from "@/app/_context/vendorManagement";
import Image from "next/image";
import { useContext } from "react";
import "../../../css/vendor.css";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function VendorLayout({ children }) {
  const { vendor } = useContext(vendorContext);
  const activeLink = usePathname();
  return (
    <div className="vendor-profile">
      <motion.section
        className="vendor-banner relative"
        initial={{ opacity: 0, scale: 0.9, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}>
        <Image
          className=" object-cover -z-10"
          src={vendor.storeBanner.url}
          alt="Vendor Logo"
          fill
          priority={true}
        />
        <h1>Welcome To My Store</h1>
        <div className="store-details">
          <div className="store-logo">
            <LazyLoadImageAnimation
              src={vendor.storeLogo.url}
              alt="Vendor Logo"
              width={100}
              height={100}
            />

            <div className="sub-details">
              <h2 className="store-name">{vendor.storeDetails.storeName}</h2>
              <h3 className="vendor-name">{vendor.name}</h3>
            </div>
          </div>
          <div className="btn-update">
            <EditBtn page={"/"} />
          </div>
        </div>
      </motion.section>

      {/* Vendor Nav */}
      <nav>
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
