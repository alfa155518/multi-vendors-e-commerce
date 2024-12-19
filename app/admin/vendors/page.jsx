"use client";

import { FiFilter } from "react-icons/fi";
import { FaShop } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import AdminCardOverview from "@/app/_components/AdminCardOverview";
import { useContext } from "react";
import { VendorsContext } from "@/app/_context/vendorsManagement";
import VendorsOverviewData from "./VendorsOveviewData";

export default function Vendors() {
  // Vendors Context
  const { allVendors } = useContext(VendorsContext);
  // Vendors Overview Data
  const vendorsOverviewData = VendorsOverviewData(allVendors);
  return (
    <div className="vendors">
      {/* Top Elements */}
      <div className="top-element">
        <div className="info">
          <h1 className="admin-page-name">Vendors</h1>
          <span>(Total: {allVendors.length} vendors)</span>
        </div>
        <button className="btn-filter">
          <FiFilter /> Filters
        </button>
      </div>
      {/* Overview Cards */}
      <section className="overview">
        <AdminCardOverview cardOverviewData={vendorsOverviewData} />
      </section>
      {/* Vendors Table */}
      <section className="vendors-table">
        <table>
          <thead>
            <tr>
              <th>Vendor</th>
              <th>Orders</th>
              <th>Revenue</th>
              <th>Created At</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {allVendors.map((vendor, index) => (
              <tr key={index}>
                <td className="name">
                  <FaShop className="icon" />
                  {vendor.name}
                </td>
                <td className="orders">
                  {vendor.performanceMetrics.totalOrders}
                </td>
                <td className="revenue">
                  ${vendor.performanceMetrics.totalSales}
                </td>
                <td className="date">{"2024-01-05"}</td>
                <td>
                  {vendor.rating !== null
                    ? vendor.performanceMetrics.averageRating
                    : "N/A"}{" "}
                  <FaStar className="stars" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
