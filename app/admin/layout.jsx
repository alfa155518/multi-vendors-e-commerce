"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineProduct } from "react-icons/ai";
import { GiShop } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { SiSimpleanalytics } from "react-icons/si";
import { IoSettingsSharp } from "react-icons/io5";
import { MdOutlineSecurity } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import BtnNotifications from "../_components/BtnNotifications";
import "../../css/admin.css";
import { usePathname } from "next/navigation";

export default function AdminLayout({ children }) {
  const path = usePathname();

  const menuItems = [
    { href: "/admin", icon: <MdOutlineDashboard />, label: "Dashboard" },
    { href: "/admin/products", icon: <AiOutlineProduct />, label: "Products" },
    { href: "/admin/vendors", icon: <GiShop />, label: "Vendors" },
    { href: "/admin/users", icon: <FaUsers />, label: "Users" },
    { href: "/", icon: <FaCartShopping />, label: "Orders" },
    {
      href: "/admin/analytics",
      icon: <SiSimpleanalytics />,
      label: "Analytics",
    },
    { href: "/", icon: <IoSettingsSharp />, label: "Settings" },
    { href: "/", icon: <MdOutlineSecurity />, label: "Security" },
  ];

  return (
    <>
      <header className="admin-header">
        <nav className="top-bar">
          <div className="right-content">
            <Link href={"/admin"} className="logo">
              E-commerce Admin
            </Link>
            <div className="search-input">
              <input type="text" placeholder="Search..." name="search" />
              <button aria-label="search">
                <IoSearchOutline />
              </button>
            </div>
          </div>
          <div className="left-content">
            <BtnNotifications />
            <Link href={"/"} className="admin-link">
              <FaRegUser />
              <span>Admin</span>
            </Link>
          </div>
        </nav>
      </header>
      <div className="admin-container">
        <nav className="side-bar">
          <ul>
            {menuItems.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className={path === item.href ? "active" : ""}>
                <Link href={item.href}>
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
        <div className="admin-content">{children}</div>
      </div>
    </>
  );
}
