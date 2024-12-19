"use client";

import { FiFilter } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa6";
import AdminCardOverview from "@/app/_components/AdminCardOverview";
import useInViewAnimation from "@/app/_hooks/useInViewAnimation";
import { Suspense, useContext } from "react";
import { AdminContext } from "@/app/_context/adminManagement";
import usersOverviewData from "./usersOverviewData";

export default function Users() {
  const [ref, inView] = useInViewAnimation();
  const { users } = useContext(AdminContext);
  // Overview users Data
  const UsersOverviewData = usersOverviewData(users);
  return (
    <div className="users-container">
      {/* Top Elements */}
      <div className="top-element">
        <div className="info">
          <h1 className="admin-page-name">Users</h1>
          <span>(Total: {users.length} users)</span>
        </div>
        <button className="btn-filter">
          <FiFilter /> Filters
        </button>
      </div>
      {/* Overview Cards */}
      <section className="overview">
        <AdminCardOverview cardOverviewData={UsersOverviewData} />
      </section>
      {/* Users Table */}
      <Suspense fallback={<div>Loading...</div>}>
        <section className="users-table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Orders</th>
                <th>Total Spent</th>
                <th>Created At</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, i) => (
                <tr
                  ref={ref}
                  className={
                    inView ? "animate__animated animate__slideInDown" : ""
                  }
                  key={i}>
                  <td className="name">
                    <FaRegUser className="icon" />
                    {user.name}
                  </td>
                  <td className="email">{user.email}</td>
                  <td className="orders">{user.orders.length}</td>
                  <td className="price">{user.totalSpent || 0}</td>
                  <td className="date">{"2024-02-28"}</td>
                  <td className={user ? "active" : "inactive"}>
                    {user ? "Active" : "Inactive"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </Suspense>
    </div>
  );
}
