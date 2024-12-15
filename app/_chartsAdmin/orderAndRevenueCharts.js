"use client";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Mon", orders: 400, revenue: 2400 },
  { name: "Tue", orders: 300, revenue: 2200 },
  { name: "Wed", orders: 200, revenue: 2800 },
  { name: "Thu", orders: 278, revenue: 2600 },
  { name: "Fri", orders: 189, revenue: 3000 },
  { name: "Sat", orders: 239, revenue: 3200 },
  { name: "Sun", orders: 349, revenue: 3500 },
];

const OrdersAndRevenueCharts = () => {
  return (
    <div className="h-[400]">
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis
            dataKey="name"
            tick={{ fill: "#333" }}
            tickLine={{ stroke: "#ccc" }}
            fontSize={12}
          />
          <YAxis
            yAxisId="left"
            tick={{ fill: "#333" }}
            tickLine={{ stroke: "#ccc" }}
            label={{
              angle: -90,
              position: "insideLeft",
              style: { fill: "#555" },
            }}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            tick={{ fill: "#333" }}
            label={{
              angle: 90,
              position: "insideRight",
              style: { fill: "#555" },
            }}
          />
          <Tooltip
            contentStyle={{ backgroundColor: "#f5f5f5", borderRadius: "8px" }}
          />
          <Legend verticalAlign="top" height={36} iconType="circle" />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="orders"
            stroke="#e67e22"
            strokeWidth={3}
            dot={{ r: 4 }}
            animationDuration={1500}
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="revenue"
            stroke="#82ca9d"
            strokeWidth={3}
            dot={{ r: 4 }}
            animationDuration={1500}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OrdersAndRevenueCharts;
