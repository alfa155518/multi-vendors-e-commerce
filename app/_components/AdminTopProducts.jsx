"use client";

import { FiPackage } from "react-icons/fi";
import { motion } from "framer-motion";
export default function AdminTopProducts() {
  return (
    <div className="products">
      {Array.from({ length: 4 }, (_, i) => (
        <motion.div
          className="product"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: i * 0.5 }}
          key={i}>
          <div className="info">
            <div className="icon">
              <FiPackage />
            </div>
            <div>
              <strong className="name">Product Name</strong>
              <span className="sales">245 sales</span>
            </div>
          </div>
          <div className="details">
            <strong className="price">$48,999.99</strong>
            <span className="revenue">Revenue</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
