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
} from "recharts";

// Sample data for monthly growth
const data = [
  { month: "January", revenue: 4000, growth: 2400 },
  { month: "February", revenue: 3000, growth: 1398 },
  { month: "March", revenue: 2000, growth: 9800 },
  { month: "April", revenue: 2780, growth: 3908 },
  { month: "May", revenue: 1890, growth: 4800 },
  { month: "June", revenue: 2390, growth: 3800 },
  { month: "July", revenue: 3490, growth: 4300 },
];

const MonthlyGrowthChart = () => {
  return (
    <div className="w-full h-[400px]">
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barCategoryGap="20%">
          <CartesianGrid strokeDasharray="1 1" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="revenue"
            fill="#2c3e50"
            radius={[10, 10, 0, 0]}
            animationDuration={1000}
          />
          <Bar
            dataKey="growth"
            fill="#e67e22"
            radius={[10, 10, 0, 0]}
            animationDuration={1500}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlyGrowthChart;
