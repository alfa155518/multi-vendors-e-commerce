"use client";
import { VendorsContext } from "@/app/_context/vendorsManagement";
import useInViewAnimation from "@/app/_hooks/useInViewAnimation";
import VendorTopSelling from "@/app/_sections/VendorTopSelling";
import { motion } from "framer-motion";
import { useContext } from "react";

export default function Analytics() {
  const { singleVendor } = useContext(VendorsContext);
  const { performanceMetrics } = singleVendor || {};

  const totalOrders = performanceMetrics?.totalOrders || 0;
  const reviews = performanceMetrics?.reviews || 0;

  const orderPercentage = ((totalOrders / 1000) * 100).toFixed(2);
  const salesPercentage = orderPercentage; // Use the same calculation as orderPercentage
  const reviewsPercentage = ((reviews / 500) * 100).toFixed(2);

  const [salesRef, salesInView] = useInViewAnimation();
  const [satisfactionRef, satisfactionInView] = useInViewAnimation();

  return (
    <>
      <section className="analytics">
        <div className="sub-analytics">
          <div
            ref={salesRef}
            className={`sales-performance ${
              salesInView ? "animate__animated animate__slideInLeft" : ""
            }`}>
            <h2>Sales Performance</h2>
            {/* Orders */}
            <div className="progress">
              <div className="info">
                <span>Total Orders</span>
                <span>{totalOrders.toLocaleString()}</span>
              </div>
              <div className="outer-bar">
                <motion.div
                  className="inner-bar"
                  initial={{ width: "0%", height: "100%" }}
                  animate={{ width: `${orderPercentage}%`, height: "100%" }}
                  transition={{ duration: 2 }}
                />
              </div>
            </div>
            {/* Sales */}
            <div className="progress">
              <div className="info">
                <span>Total Sales</span>
                <span>
                  ${(performanceMetrics?.totalSales || 0).toLocaleString()}
                </span>
              </div>
              <div className="outer-bar">
                <motion.div
                  className="inner-bar"
                  initial={{ width: "0%", height: "100%" }}
                  animate={{ width: `${salesPercentage}%`, height: "100%" }}
                  transition={{ duration: 2 }} // Consistent animation duration
                />
              </div>
            </div>
          </div>
          <div
            ref={satisfactionRef}
            className={`customer-satisfaction ce ${
              satisfactionInView
                ? "animate__animated animate__slideInRight"
                : ""
            }`}>
            <h2>Customer Satisfaction</h2>
            {/* Rating */}
            <div className="progress">
              <div className="info">
                <span>Average Rating</span>
                <span>4.7</span>
              </div>
              <div className="outer-bar">
                <motion.div
                  className="inner-bar"
                  initial={{ width: "0%", height: "100%" }}
                  animate={{ width: `${reviewsPercentage}%`, height: "100%" }}
                  transition={{ duration: 2 }} // Consistent animation duration
                />
              </div>
            </div>
            {/* Reviews */}
            <div className="progress">
              <div className="info">
                <span>Total Reviews</span>
                <span>{reviews.toLocaleString()}</span>
              </div>
              <div className="outer-bar">
                <motion.div
                  className="inner-bar"
                  initial={{ width: "0%", height: "100%" }}
                  animate={{ width: `${reviewsPercentage}%`, height: "100%" }}
                  transition={{ duration: 2 }} // Consistent animation duration
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Top Selling Section */}
      <VendorTopSelling />
    </>
  );
}
