"use client";
import { TbPackage } from "react-icons/tb";
import { TbUsers } from "react-icons/tb";
import { SlCalender } from "react-icons/sl";
import { IoStar } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
import { LuPackageOpen } from "react-icons/lu";
import { HiMiniCurrencyDollar } from "react-icons/hi2";
import { useContext } from "react";
import { vendorContext } from "@/app/_context/vendorManagement";
import VendorRecentOrder from "@/app/_sections/VendorRecentOrder";
import useInViewAnimation from "@/app/_hooks/useInViewAnimation";
export default function Vendor() {
  const { vendor } = useContext(vendorContext);
  const [ref, inView] = useInViewAnimation();
  return (
    <>
      {/* Over View Section */}
      <section className="overview">
        <div
          ref={ref}
          className={`about-store ${
            inView ? "animate__animated animate__backInUp" : ""
          }`}>
          <div className="info">
            <h3>About {vendor.storeDetails.storeName}</h3>
            <article>{vendor.storeDetails.description}</article>
          </div>
          <ul className="details">
            <li>
              <TbUsers />
              <span>Reviews: {vendor.performanceMetrics.reviews}</span>
            </li>
            <li>
              <TbPackage />
              <span>Total Products: {vendor.products.length}</span>
            </li>
            <li>
              <SlCalender />
              <span>Established 2018</span>
            </li>
            <li>
              <IoStar />
              <span>Rating: {vendor.performanceMetrics.averageRating}</span>
            </li>
          </ul>
        </div>
        <div
          ref={ref}
          className={`contact-info ${
            inView ? "animate__animated animate__backInDown" : ""
          }`}>
          <h4>Contact Information</h4>
          <ul>
            <li>
              <MdEmail />
              <span>{vendor.email}</span>
            </li>
            <li>
              <FaPhone />
              <span>{vendor.phone}</span>
            </li>
            <li>
              <IoLocation />
              <span>{vendor.country}</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Performance Highlights */}
      <section
        ref={ref}
        className={`performance-highlights text-neutralColor_2 ${
          inView ? "animate__animated animate__fadeInDown" : ""
        }`}>
        <h4>Performance Highlights</h4>
        <ul>
          <li>
            <LuPackageOpen />
            <strong>Total Orders</strong>
            <span>{vendor.performanceMetrics.totalSales}</span>
          </li>
          <li>
            <HiMiniCurrencyDollar />
            <strong>Total Sales</strong>
            <span>${vendor.performanceMetrics.totalSales}</span>
          </li>
          <li>
            <IoStar />
            <strong>Avg. Rating</strong>
            <span>{vendor.performanceMetrics.averageRating}</span>
          </li>
          <li>
            <TbUsers />
            <strong>Reviews</strong>
            <span>{vendor.performanceMetrics.reviews}</span>
          </li>
        </ul>
      </section>

      {/* Recent Order */}
      <VendorRecentOrder />
    </>
  );
}
