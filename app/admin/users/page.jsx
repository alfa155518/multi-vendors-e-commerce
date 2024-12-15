"use client";

import { FiFilter } from "react-icons/fi";
import { LuUserPlus } from "react-icons/lu";
import { LuUsers } from "react-icons/lu";
import { TbActivityHeartbeat } from "react-icons/tb";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa6";
import AdminCardOverview from "@/app/_components/AdminCardOverview";
import useInViewAnimation from "@/app/_hooks/useInViewAnimation";
export default function Users() {
  const [ref, inView] = useInViewAnimation();
  const usersOverviewData = [
    {
      title: "Total Users",
      amount: 2338,
      increase: "+15.3%",
      icon: <LuUsers />,
    },
    {
      title: "New Users",
      amount: 145,
      increase: "+28.4%",
      icon: <LuUserPlus />,
    },
    {
      title: "Active Users",
      amount: 1892,
      increase: "+12.5%",
      icon: <TbActivityHeartbeat />,
    },
    {
      title: "Orders/User",
      amount: 3.2,
      increase: "+4.3%",
      icon: <RiShoppingBag4Fill />,
    },
  ];
  const usersData = [
    {
      name: "John Doe",
      email: "john@example.com",
      orders: 12,
      totalSpent: "$1,250.99",
      createdAt: "2024-02-28",
      status: "Active",
    },
    {
      name: "Jane Smith",
      email: "jane@example.com",
      orders: 8,
      totalSpent: "$890.5",
      createdAt: "2024-02-27",
      status: "Active",
    },
    {
      name: "Bob Johnson",
      email: "bob@example.com",
      orders: 5,
      totalSpent: "$450.75",
      createdAt: "2024-02-25",
      status: "Inactive",
    },
    {
      name: "Alice Brown",
      email: "alice@example.com",
      orders: 15,
      totalSpent: "$1,875.25",
      createdAt: "2024-02-28",
      status: "Active",
    },
  ];
  return (
    <div className="users-container">
      {/* Top Elements */}
      <div className="top-element">
        <div className="info">
          <h1 className="admin-page-name">Users</h1>
          <span>(Total: 2,338 users)</span>
        </div>
        <button className="btn-filter">
          <FiFilter /> Filters
        </button>
      </div>
      {/* Overview Cards */}
      <section className="overview">
        <AdminCardOverview cardOverviewData={usersOverviewData} />
      </section>
      {/* Users Table */}
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
            {usersData.map((user, i) => (
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
                <td className="orders">{user.orders}</td>
                <td className="price">{user.totalSpent}</td>
                <td className="date">{user.createdAt}</td>
                <td
                  className={user.status === "Active" ? "active" : "inactive"}>
                  {user.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
