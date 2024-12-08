"use client";

import { useContext, useRef, useState } from "react";
import { FaPersonChalkboard } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import Image from "next/image";
import { IoHome } from "react-icons/io5";
import Link from "next/link";
import Logo from "@/public/logo.webp";
import { MdContactSupport } from "react-icons/md";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { ProductContext } from "@/app/_context/manageProducts";
import { TiShoppingCart } from "react-icons/ti";
import LazyLoadImageAnimation from "../_components/ImageAnimation";
import LogoutBtn from "../_components/LogoutBtn";
import Logout from "../actions/Logout";
import { UserContext } from "../_context/usersManagement";
import { CartContext } from "../_context/cartManageMent";

export default function Header() {
  const { handleSearch } = useContext(ProductContext);
  const { userData } = useContext(UserContext);
  const { allProductsInCart } = useContext(CartContext);
  const [searchValue, setSearchValue] = useState("");
  const menuRef = useRef("");

  // Debounce function to  limit the rate of function calls
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
    handleSearch(e);
  }, 300);

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
            <Link href={"/vendors"}>Vendors</Link>
          </li>
          <li>
            <MdContactSupport className="menu-icon" />
            <Link href={"/contact"}>Contact</Link>
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
        <Link href={"/cart"} aria-label="cart icon">
          <TiShoppingCart />
        </Link>
        <span className="cart-count absolute">
          {allProductsInCart.length || 0}
        </span>
      </div>
      {userData ? (
        <>
          <Link href={"/profile"} className="profile-img">
            <LazyLoadImageAnimation
              src={userData?.photo?.url}
              alt={"profile"}
              width={80}
              height={20}
            />
          </Link>
          <button className="btn-logout" onClick={(e) => Logout(e)}>
            <LogoutBtn>Logout</LogoutBtn>
          </button>
        </>
      ) : (
        <button className="btn">
          <Link href={"/signup"}> signup </Link>
        </button>
      )}
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
    </header>
  );
}
