"use client";
import { TbPackage, TbUsers } from "react-icons/tb";
import { SlCalender } from "react-icons/sl";
import { IoStar, IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { LuPackageOpen } from "react-icons/lu";
import { HiMiniCurrencyDollar } from "react-icons/hi2";
import { useContext } from "react";
import VendorRecentOrder from "@/app/_sections/VendorRecentOrder";
import useInViewAnimation from "@/app/_hooks/useInViewAnimation";
import { VendorsContext } from "@/app/_context/vendorsManagement";

export default function Vendor() {
  const { singleVendor } = useContext(VendorsContext);
  const [refOverview, inViewOverview] = useInViewAnimation();
  const [refContact, inViewContact] = useInViewAnimation();
  const [refPerformance, inViewPerformance] = useInViewAnimation();

  return (
    <>
      {/* Over View Section */}
      <section className="overview">
        <div
          ref={refOverview}
          className={`about-store ${
            inViewOverview ? "animate__animated animate__backInUp" : ""
          }`}>
          <div className="info">
            <h3>About {singleVendor?.storeDetails?.storeName || "N/A"}</h3>
            <article>
              {singleVendor?.storeDetails?.description ||
                "No description available."}
            </article>
          </div>
          <ul className="details">
            <li>
              <TbUsers />
              <span>
                Reviews: {singleVendor?.performanceMetrics?.reviews || 0}
              </span>
            </li>
            <li>
              <TbPackage />
              <span>Total Products: {singleVendor?.products?.length || 0}</span>
            </li>
            <li>
              <SlCalender />
              <span>Established 2018</span>
            </li>
            <li>
              <IoStar />
              <span>
                Rating:{" "}
                {singleVendor?.performanceMetrics?.averageRating || "N/A"}
              </span>
            </li>
          </ul>
        </div>
        <div
          ref={refContact}
          className={`contact-info ${
            inViewContact ? "animate__animated animate__backInDown" : ""
          }`}>
          <h4>Contact Information</h4>
          <ul>
            <li>
              <MdEmail />
              <span>{singleVendor?.email || "No email provided."}</span>
            </li>
            <li>
              <FaPhone />
              <span>{singleVendor?.phone || "No phone number provided."}</span>
            </li>
            <li>
              <IoLocation />
              <span>{singleVendor?.country || "No country specified."}</span>
            </li>
          </ul>
        </div>
      </section>
      {/* Performance Highlights */}
      <section
        ref={refPerformance}
        className={`performance-highlights text-neutralColor_2 ${
          inViewPerformance ? "animate__animated animate__fadeInDown" : ""
        }`}>
        <h4>Performance Highlights</h4>
        <ul>
          <li>
            <LuPackageOpen />
            <strong>Total Orders</strong>
            <span>{singleVendor?.performanceMetrics?.totalSales || 0}</span>
          </li>
          <li>
            <HiMiniCurrencyDollar />
            <strong>Total Sales</strong>
            <span>${singleVendor?.performanceMetrics?.totalSales || 0}</span>
          </li>
          <li>
            <IoStar />
            <strong>Avg. Rating</strong>
            <span>
              {singleVendor?.performanceMetrics?.averageRating || "N/A"}
            </span>
          </li>
          <li>
            <TbUsers />
            <strong>Reviews</strong>
            <span>{singleVendor?.performanceMetrics?.reviews || 0}</span>
          </li>
        </ul>
      </section>
      {/* Recent Order */}
      <VendorRecentOrder />
    </>
  );
}
