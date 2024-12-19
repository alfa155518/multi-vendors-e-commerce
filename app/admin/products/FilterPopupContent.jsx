"use client";

import ButtonDone from "@/app/_components/BtnDone";
import { AdminContext } from "@/app/_context/adminManagement";
import React, { useContext } from "react";

export default function FilterPopupContent() {
  const { filterProducts, toggleFilterPopup } = useContext(AdminContext);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    filterProducts(formData);
    toggleFilterPopup();
  };

  return (
    <form className="form-filter-products" onSubmit={handleSubmit}>
      <select name="categories">
        <option value="all">All Categories</option>
        <option value="chocolate">Chocolate</option>
        <option value="Glasses">Glasses</option>
        <option value="Cosmetics">Cosmetics</option>
        <option value="Furniture">Furniture</option>
        <option value="Jewelry">Jewelry</option>
        <option value="Technology">Technology</option>
        <option value="Electronics">Electronics</option>
        <option value="Foods">Foods</option>
        <option value="Fashion">Fashion</option>
      </select>

      <select name="prices">
        <option value="all">All Prices</option>
        <option value="100">{">= 100"}</option>
        <option value="99">{"<= 100"}</option>
      </select>

      <ButtonDone>
        <button className="button" type="submit">
          Done
        </button>
      </ButtonDone>
    </form>
  );
}
