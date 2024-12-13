"use client";

import { motion } from "framer-motion";

export default function AdminCardOverview({ cardOverviewData }) {
  return cardOverviewData.map((card, index) => {
    return (
      <motion.div
        className="card-overview"
        key={index}
        initial={{ scale: -1, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ duration: 1, delay: index * 0.2 }}>
        <div className="body">
          <h3 className="title">{card.title}</h3>
          <strong className="amount">{card.amount}</strong>
          <div className="details">
            <span className="increase">{card.increase}</span>
            <span>VS last month</span>
          </div>
        </div>
        <div className="icon">{card.icon}</div>
      </motion.div>
    );
  });
}
