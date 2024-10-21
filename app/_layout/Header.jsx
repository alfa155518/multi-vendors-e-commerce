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
import { useContext, useRef, useState } from "react";
import { ProductContext } from "@/app/_context/manageProducts";
export default function Header() {
  const { handleSearch } = useContext(ProductContext);
  const [searchValue, setSearchValue] = useState("");

  // Debounce function to limit the rate of function calls
  const debounce = (func, delay) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  // Update the handleSearch function to set the search value
  const handleSearchChange = debounce((e) => {
    setSearchValue(e.target.value);
    handleSearch(e); // Call the original handleSearch function
  }, 300); // Adjust delay as needed

  const menuRef = useRef("");
  const handleMenuToggle = () => {
    menuRef.current.classList.toggle("appear-menu");
  };
  return (
    <header className="flex justify-between items-center">
      <div className="logo relative">
        <Link href={"/"}>
          <Image
            src={Logo}
            alt="Logo"
            width={100}
            height={100}
            priority={true}
          />
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
            <Link href={"/products"}>All Products</Link>
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
        {searchValue ? (
          <button className="icon" aria-label="button search products">
            <Link href={`/products?search=${searchValue}`}>
              <FaSearch />
            </Link>
          </button>
        ) : (
          <button className="icon" aria-label="button search products">
            <FaSearch />
          </button>
        )}
        <input
          className="input"
          type="text"
          name="search"
          placeholder="search..."
          onChange={(e) => handleSearchChange(e)}
          list="products"
          aria-live="polite"
        />
        <datalist id="products">
          <option value="Electronics"></option>
          <option value="Chocolate"></option>
          <option value="Foods"></option>
          <option value="Glasses"></option>
          <option value="Jewelry"></option>
          <option value="Technology"></option>
          <option value="Fashion"></option>
          <option value="Cosmetics"></option>
        </datalist>
      </div>

      <div className="cart relative">
        <Link href={"/"} aria-label="cart icon">
          <TiShoppingCart />
        </Link>
        <span className="cart-count absolute">0</span>
      </div>
      <button className="btn">
        <Link href={"/signup"}> signup </Link>
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
