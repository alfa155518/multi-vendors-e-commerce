"use client";

import VendorTopSelling from "@/app/_sections/VendorTopSelling";
import { motion } from "framer-motion";

export default function Analytics() {
  // Mock dynamic progress values
  const progressData = {
    orders: 80, // 80% progress for orders
    sales: 65, // 65% progress for sales
    rating: 90, // 90% progress for rating
    reviews: 75, // 75% progress for reviews
  };

  return (
    <>
      <section className="analytics">
        <div className="sub-analytics">
          <div className="sales-performance">
            <h2>Sales Performance</h2>
            {/* Orders */}
            <div className="progress">
              <div className="info">
                <span>Total Orders</span>
                <span>1,250</span>
              </div>
              <div className="outer-bar">
                <motion.div
                  className="inner-bar"
                  initial={{ width: "0%", height: "100%" }}
                  animate={{ width: `${progressData.orders}%`, height: "100%" }}
                  transition={{ duration: 2 }}
                />
              </div>
            </div>
            {/* Sales */}
            <div className="progress">
              <div className="info">
                <span>Total Sales</span>
                <span>$175,000</span>
              </div>
              <div className="outer-bar">
                <motion.div
                  className="inner-bar"
                  initial={{ width: "0%", height: "100%" }}
                  animate={{ width: `${progressData.sales}%`, height: "100%" }}
                  transition={{ duration: 1 }}
                />
              </div>
            </div>
          </div>
          <div className="customer-satisfaction">
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
                  animate={{ width: `${progressData.rating}%`, height: "100%" }}
                  transition={{ duration: 3 }}
                />
              </div>
            </div>
            {/* Reviews */}
            <div className="progress">
              <div className="info">
                <span>Total Reviews</span>
                <span>980</span>
              </div>
              <div className="outer-bar">
                <motion.div
                  className="inner-bar"
                  initial={{ width: "0%", height: "100%" }}
                  animate={{
                    width: `${progressData.reviews}%`,
                    height: "100%",
                  }}
                  transition={{ duration: 2 }}
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
