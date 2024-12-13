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

// Sample data for each day of the week
const data = [
  { day: "Monday", actualRate: 4000, predictedRate: 2400 },
  { day: "Tuesday", actualRate: 3000, predictedRate: 1398 },
  { day: "Wednesday", actualRate: 2000, predictedRate: 9800 },
  { day: "Thursday", actualRate: 2780, predictedRate: 3908 },
  { day: "Friday", actualRate: 1890, predictedRate: 4800 },
  { day: "Saturday", actualRate: 2390, predictedRate: 3800 },
  { day: "Sunday", actualRate: 3490, predictedRate: 4300 },
];

const WeeklyRateChart = () => {
  return (
    <div className="w-full">
      {/* Line Chart */}
      <div className="w-full h-[400px]">
        <ResponsiveContainer>
          <LineChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 0,
            }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="actualRate"
              stroke="#e67e224a"
              strokeWidth={2}
              dot={{ r: 5 }}
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="predictedRate"
              stroke="#e67e22"
              strokeWidth={2}
              dot={{ r: 5 }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default WeeklyRateChart;
