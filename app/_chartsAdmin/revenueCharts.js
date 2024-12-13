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
import { curveCardinal } from "d3-shape";

// Simulated revenue data for 7 months
const revenueData = [
  { name: "Jan", actual: 5000, current: 4000 },
  { name: "Feb", actual: 6000, current: 5500 },
  { name: "Mar", actual: 8000, current: 7500 },
  { name: "Apr", actual: 10000, current: 9500 },
  { name: "May", actual: 12000, current: 11500 },
  { name: "Jun", actual: 14000, current: 13000 },
  { name: "Jul", actual: 16000, current: 15000 },
];

const cardinal = curveCardinal.tension(0.2);

const RevenueChart = () => {
  return (
    <div style={{ width: "100%", height: "400px" }}>
      <ResponsiveContainer>
        <AreaChart
          data={revenueData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          {/* Line for Actual Revenue */}
          <Area
            type={cardinal}
            dataKey="actual"
            stroke="#e67e22"
            fill="#e67e22"
            fillOpacity={0.3}
            name="Actual Revenue"
          />
          {/* Line for Current Revenue */}
          <Area
            type="monotone"
            dataKey="current"
            stroke="#1abc9c"
            fill="#1abc9c"
            fillOpacity={0.3}
            name="Current Revenue"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueChart;
