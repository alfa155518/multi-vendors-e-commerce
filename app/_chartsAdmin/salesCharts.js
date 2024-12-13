"use client";

import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const salesData = [
  { month: "January", sales: 4000 },
  { month: "February", sales: 3200 },
  { month: "March", sales: 2800 },
  { month: "April", sales: 4500 },
  { month: "May", sales: 4800 },
  { month: "June", sales: 5200 },
  { month: "July", sales: 6000 },
];

export default function SalesChart() {
  return (
    <div>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={salesData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#e67e22" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#e67e22" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
          <XAxis dataKey="month" stroke="#333" />
          <YAxis stroke="#333" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#fff",
              border: "1px solid #ccc",
              borderRadius: "8px",
            }}
            labelStyle={{ color: "#555" }}
          />
          <Area
            type="monotone"
            dataKey="sales"
            stroke="#e67e22"
            fillOpacity={1}
            fill="url(#salesGradient)"
            animationDuration={1500}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
