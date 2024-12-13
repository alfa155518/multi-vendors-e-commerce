"use client";

import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Chocolate", value: 400 },
  { name: "Glasses", value: 300 },
  { name: "Cosmetics", value: 200 },
  { name: "Furniture", value: 500 },
  { name: "Jewelry", value: 150 },
  { name: "Technology", value: 350 },
  { name: "Electronics", value: 250 },
  { name: "Foods", value: 300 },
  { name: "Fashion", value: 100 },
];

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#AA65C8",
  "#FF6699",
  "#33AABB",
  "#FF9900",
  "#66CC33",
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const CategoryPieChart = () => {
  return (
    <div className="w-full text-center">
      <div className="w-full h-[400px]">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={120}
              fill="#8884d8"
              dataKey="value">
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className=" flex items-center flex-wrap justify-center">
        {data.map((entry, index) => (
          <div
            key={`legend-${index}`}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "8px",
            }}>
            <div
              style={{
                width: "20px",
                height: "20px",
                backgroundColor: COLORS[index % COLORS.length],
                marginRight: "10px",
                borderRadius: "3px",
              }}></div>
            <span style={{ fontSize: "16px", fontWeight: "500" }}>
              {entry.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPieChart;
