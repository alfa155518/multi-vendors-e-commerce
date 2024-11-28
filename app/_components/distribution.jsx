"use client";

import { motion } from "framer-motion";
export default function Distribution({ starsNumber, usersNumber }) {
  return (
    <div className="distribution">
      <strong className="stars__number">{starsNumber}</strong>
      <div className="progress-bar-container">
        <div className="progress-bar-track">
          <motion.div
            className="progress-bar-fill"
            initial={{ width: "0%" }}
            animate={{ width: `${usersNumber}%` }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
        </div>
        <div
          className={`progress-bar-text ${usersNumber > 0 ? "visible" : ""}`}>
          {usersNumber}%
        </div>
      </div>
      <strong className="user-number">{usersNumber}</strong>
    </div>
  );
}
