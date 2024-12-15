"use client";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
} from "recharts";

// Sample Order Status Data
const data = [
  { name: "Pending", orders: 35 },
  { name: "Processing", orders: 50 },
  { name: "Shipped", orders: 70 },
  { name: "Delivered", orders: 120 },
  { name: "Cancelled", orders: 15 },
];

const OrderStatusChart = () => {
  return (
    <div className="h-[400]">
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
          {/* Grid Background */}
          <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f5" />

          {/* X and Y Axis */}
          <XAxis
            dataKey="name"
            tick={{ fill: "#555" }}
            tickLine={{ stroke: "#ccc" }}
          />
          <YAxis
            tick={{ fill: "#555" }}
            label={{
              angle: -90,
              position: "insideLeft",
              style: { fill: "#555" },
            }}
          />

          {/* Tooltip */}
          <Tooltip
            contentStyle={{
              backgroundColor: "#f9f9f9",
              borderRadius: "10px",
              borderColor: "#ddd",
            }}
          />

          {/* Legend */}
          <Legend verticalAlign="top" align="center" iconType="circle" />

          {/* Bar with animation */}
          <Bar
            dataKey="orders"
            fill="#e67e22"
            barSize={30}
            radius={[10, 10, 0, 0]}>
            <LabelList dataKey="orders" position="top" fill="#333" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OrderStatusChart;
