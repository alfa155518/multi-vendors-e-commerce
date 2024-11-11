"use client";

import { HiMiniBars3BottomRight } from "react-icons/hi2";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { MdOutlineSecurity } from "react-icons/md";
import { BsFillBagCheckFill } from "react-icons/bs";
import { IoIosStarOutline } from "react-icons/io";
import { motion } from "framer-motion";

import "../../../css/profileLayout.css";
import { usePathname } from "next/navigation";

import { useCallback, useState } from "react";

export default function ProfileLayout({ children }) {
  const pathname = usePathname();
  const [sideNav, setSideNav] = useState(false);
  const menuItems = [
    { path: "/profile", label: "Profile", icon: <CgProfile /> },
    {
      path: "/profile/security",
      label: "Security",
      icon: <MdOutlineSecurity />,
    },
    {
      path: "/profile/bookings",
      label: "Bookings",
      icon: <BsFillBagCheckFill />,
    },
    { path: "/profile/reviews", label: "Reviews", icon: <IoIosStarOutline /> },
  ];
  const toggleSideNav = useCallback(() => setSideNav((prev) => !prev), []);
  return (
    <>
      <div className="section-name">
        <span className="text">Profile</span>
      </div>
      <section className="profile-layout">
        <div className="side-nav-bars  hidden" onClick={toggleSideNav}>
          <HiMiniBars3BottomRight />
        </div>
        <nav className={`side-nav ${sideNav ? "active" : ""}`}>
          <ul>
            {menuItems.map((item) => (
              <motion.li
                key={item.path}
                className={pathname === item.path ? "active" : ""}
                transition={{ type: "spring", stiffness: 300 }}>
                <Link href={item.path}>
                  <span className="icon">{item.icon}</span>
                  {item.label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
        <div className="content">{children}</div>
      </section>
    </>
  );
}
