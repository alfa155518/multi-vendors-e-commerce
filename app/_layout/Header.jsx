"use client";

import { TiShoppingCart } from "react-icons/ti";
import { FaSearch } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaPersonChalkboard } from "react-icons/fa6";
import { MdContactSupport } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.webp";
import { useRef, useState } from "react";
export default function Header() {
  const menuRef = useRef("");
  const handleMenuToggle = () => {
    menuRef.current.classList.toggle("appear-menu");
  };
  return (
    <header className="flex justify-between items-center">
      <div className="logo relative">
        <Link href={"/"}>
          <Image src={Logo} alt="Logo" priority={true} />
        </Link>
      </div>
      <nav ref={menuRef}>
        <ul className="links flex items-center ">
          <li>
            <IoHome className="menu-icon" />
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <MdOutlineProductionQuantityLimits className="menu-icon" />
            <Link href={"/"}>All Products</Link>
          </li>
          <li>
            <FaPersonChalkboard className="menu-icon" />
            <Link href={"/"}>Vendors</Link>
          </li>
          <li>
            <MdContactSupport className="menu-icon" />
            <Link href={"/"}>Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="search-wrapper">
        <button className="icon">
          <FaSearch />
        </button>
        <input
          type="text"
          name="text"
          className="input"
          placeholder="search.."
        />
      </div>

      <div className="cart relative">
        <Link href={"/cart"}>
          <TiShoppingCart />
        </Link>
        <span className="cart-count absolute">0</span>
      </div>
      <button className="btn">
        <Link href={"/signup"}>signup</Link>
      </button>
      <div className="bars-wrapper">
        <label className="bar" htmlFor="check">
          <input
            type="checkbox"
            id="check"
            onClick={() => handleMenuToggle()}
          />

          <span className="top"></span>
          <span className="middle"></span>
          <span className="bottom"></span>
        </label>
      </div>
      {/* <div className="user-profile">
        <Link href={"/profile"}>Profile</Link>
      </div> */}
    </header>
  );
}
