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
export default function adminLayout({ children }) {
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
            <li>
              <Link href={"/admin"} className="active">
                <MdOutlineDashboard />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link href={"/"}>
                <AiOutlineProduct />
                <span>Products</span>
              </Link>
            </li>
            <li>
              <Link href={"/admin/vendors"}>
                <GiShop />
                <span>Vendors</span>
              </Link>
            </li>
            <li>
              <Link href={"/"}>
                <FaUsers />
                <span>Users</span>
              </Link>
            </li>
            <li>
              <Link href={"/"}>
                <FaCartShopping />
                <span>Orders</span>
              </Link>
            </li>
            <li>
              <Link href={"/admin/analytics"}>
                <SiSimpleanalytics />
                <span>Analytics</span>
              </Link>
            </li>
            <li>
              <Link href={"/"}>
                <IoSettingsSharp />
                <span>Settings</span>
              </Link>
            </li>
            <li>
              <Link href={"/"}>
                <MdOutlineSecurity />
                <span>Security</span>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="admin-content">{children}</div>
      </div>
    </>
  );
}
