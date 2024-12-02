"use client";

import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { PiPackageBold } from "react-icons/pi";
import { BsInfoCircle } from "react-icons/bs";
import { TbPhoto } from "react-icons/tb";
import { MdOutlineClose } from "react-icons/md";
import { FiUpload } from "react-icons/fi";
import { BsCurrencyDollar } from "react-icons/bs";
import { IoSaveSharp } from "react-icons/io5";
import { useParams } from "next/navigation";
import DottedLoader from "@/app/_components/DottedLoader";
import InputsGroupHead from "@/app/_components/InputGroupHead";
import LazyLoadImageAnimation from "@/app/_components/ImageAnimation";
import useUpdateProduct from "@/app/_hooks/useUpdateProduct";
import "../../../../../css/add-and-update-product.css";

export default function UpdateProduct() {
  // Product Id
  const { productId } = useParams();

  // Custom hook for Update Product
  const {
    isLoading,
    productData,
    setProductData,
    handleFormChange,
    handelFormSubmit,
  } = useUpdateProduct(productId);

  if (isLoading) {
    return <DottedLoader isLoading={isLoading} />;
  }

  return (
    <section className="update__product__container">
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
          <h2>Update Product</h2>
          <span>Make changes to your product information below.</span>
        </div>
      </div>

      {/* From inputs */}
      <form className="update__product">
        <InputsGroupHead
          icon={<BsInfoCircle />}
          headText={"Basic Information"}
          text={"Add a Basic information To Your Product "}
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
            disabled={productData.description?.length >= 200}
          />
          <div className="instruction">
            <span>Be descriptive, but concise</span>
            <span>
              {productData.description &&
                Array.from(productData.description).length}
              / 200
            </span>
          </div>
        </div>

        <InputsGroupHead
          icon={<TbPhoto />}
          headText={"Product Image"}
          text={"Add a high-quality image to showcase your product"}
        />
        <div className="input__group">
          {productData.photo?.url ? (
            <div className="img__wrapper">
              <LazyLoadImageAnimation
                src={productData.photo.url}
                alt="Product preview"
                width={200}
                height={200}
              />
              <span
                className="remove__img"
                onClick={() =>
                  setProductData({
                    ...productData,
                    photo: { url: null },
                  })
                }>
                <MdOutlineClose />
              </span>
            </div>
          ) : (
            <>
              <label htmlFor="photo" className="label__photo">
                <FiUpload /> Upload Product Photo
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
              <strong>
                Supported formats: JPG, PNG, WebP. Maximum size: 5MB
              </strong>
            </>
          )}
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
              <PiPackageBold /> Stock Quantity
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
          onClick={handelFormSubmit}>
          <IoSaveSharp /> Save Product
        </button>
      </form>
    </section>
  );
}
