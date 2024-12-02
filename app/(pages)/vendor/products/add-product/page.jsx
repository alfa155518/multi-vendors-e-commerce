"use client";

import Link from "next/link";
import InputsGroupHead from "@/app/_components/InputGroupHead";
import { FaArrowLeft } from "react-icons/fa";
import { PiPackageBold } from "react-icons/pi";
import { BsCurrencyDollar } from "react-icons/bs";
import { TbPhoto } from "react-icons/tb";
import { IoSaveSharp } from "react-icons/io5";
import DottedLoader from "@/app/_components/DottedLoader";
import useAddProduct from "@/app/_hooks/useAddProduct";
import "../../../../../css/add-product.css";

export default function AddProduct() {
  const { productData, handleFormChange, handleFormSubmit, loading } =
    useAddProduct();

  if (loading) {
    return <DottedLoader isLoading={loading} />;
  }
  return (
    <section className="add__product__container">
      <div className="btn__back">
        <Link href={"/vendor/products"}>
          <FaArrowLeft />
          Back to Products
        </Link>
      </div>

      {/* Form Header */}
      <div className="form__header">
        <div className="icon">
          <PiPackageBold />
        </div>
        <div className="text">
          <h2>Add New Product</h2>
          <span>Fill in the details to create a new product listing.</span>
        </div>
      </div>

      {/* From inputs */}
      <form className="add__product">
        <InputsGroupHead
          icon={<TbPhoto />}
          headText={"Product Image"}
          text={"Add a high-quality image to showcase your product"}
        />
        <div className="input__group">
          <label htmlFor="photo" className="label__photo">
            <TbPhoto /> Select Product Photo
          </label>
          <input
            type="file"
            name="photo"
            autoComplete="add img"
            placeholder="select Product Photo"
            id="photo"
            onChange={handleFormChange}
            accept="image/*"
            required
          />
        </div>
        <InputsGroupHead
          icon={<PiPackageBold />}
          headText={"Product Details"}
          text={"Provide the basic information about your product"}
        />
        <div className="input__group">
          <label htmlFor="name">Product Name</label>
          <input
            type="text"
            placeholder="Enter Product Name"
            name="name"
            autoComplete="product name"
            id="name"
            onChange={handleFormChange}
            value={productData.name}
            required
          />
        </div>
        <div className="input__group">
          <label htmlFor="description">Description</label>
          <textarea
            placeholder="Enter Product description"
            name="description"
            autoComplete="product description"
            id="description"
            onChange={handleFormChange}
            value={productData.description}
            required
            maxLength={200}
            disabled={productData.description.length >= 200}
          />
          <div className="instruction">
            <span>Be descriptive, but concise</span>
            <span>{Array.from(productData.description).length} / 200</span>
          </div>
        </div>
        <div className="input__group">
          <label htmlFor="category">Category</label>
          <select
            name="category"
            id="category"
            onChange={handleFormChange}
            value={productData.category}
            required>
            <option>Select Category</option>
            <option value="Electronics">Electronics</option>
            <option value="Chocolate">Chocolate</option>
            <option value="Foods">Foods</option>
            <option value="Glasses">Glasses</option>
            <option value="Jewelry">Jewelry</option>
            <option value="Technology">Technology</option>
            <option value="Fashion">Fashion</option>
            <option value="Cosmetics">Cosmetics</option>
          </select>
        </div>
        <InputsGroupHead
          icon={<BsCurrencyDollar />}
          headText={"Pricing & Inventory"}
          text={"Set the price and manage inventory for your product"}
        />
        <div className="input__group price__inventory">
          <div className="price">
            <label htmlFor="price">
              <BsCurrencyDollar /> Price
            </label>
            <input
              type="number"
              name="price"
              id="price"
              placeholder={"price"}
              autoComplete="product price"
              min={0}
              step={0.01}
              onChange={handleFormChange}
              value={productData.price}
              required
            />
          </div>
          <div className="inventory">
            <label htmlFor="stock">
              <PiPackageBold /> Stock
            </label>
            <input
              type="number"
              name="stock"
              id="stock"
              placeholder={"stock"}
              autoComplete="product stock"
              min={0}
              step={1}
              onChange={handleFormChange}
              value={productData.stock}
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="save__button"
          onClick={handleFormSubmit}>
          <IoSaveSharp /> Save Product
        </button>
      </form>
    </section>
  );
}
