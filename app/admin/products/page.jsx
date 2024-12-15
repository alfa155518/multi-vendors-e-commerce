"use client";

import { FiFilter } from "react-icons/fi";
import { FaChartLine } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { IoIosWarning } from "react-icons/io";
import { LuPackage } from "react-icons/lu";
import AdminCardOverview from "@/app/_components/AdminCardOverview";
import useInViewAnimation from "@/app/_hooks/useInViewAnimation";

export default function Products() {
  const [ref, inView] = useInViewAnimation();
  const productOverviewData = [
    {
      title: "Total Products",
      amount: "1,259",
      increase: "+12.5%",
      icon: <LuPackage />,
    },
    {
      title: "Total Sales",
      amount: "$89,234",
      increase: "+18.2%",
      icon: <FaDollarSign />,
    },
    {
      title: "Growth Rate",
      amount: "23.5%",
      increase: "+4.75%",
      icon: <FaChartLine />,
    },
    {
      title: "Low Stock",
      amount: "23",
      increase: "-2.3%",
      icon: <IoIosWarning />,
    },
  ];
  const productData = [
    {
      product: "Wireless Headphones",
      category: "Electronics",
      price: "$199.99",
      stock: 45,
      vendor: "TechGear Inc",
    },
    {
      product: "Smart Watch Pro",
      category: "Electronics",
      price: "$299.99",
      stock: 28,
      vendor: "WearTec",
    },
  ];
  return (
    <div className="products-container">
      {/* Top Elements */}
      <div className="top-element">
        <div className="info">
          <h1 className="admin-page-name">Products</h1>
          <span>(Total: 156 products)</span>
        </div>
        <button className="btn-filter">
          <FiFilter /> Filters
        </button>
      </div>
      {/* Overview Cards */}
      <section className="overview">
        <AdminCardOverview cardOverviewData={productOverviewData} />
      </section>
      <section className="products-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Vendor</th>
            </tr>
          </thead>
          <tbody>
            {productData.map((product, index) => (
              <tr
                ref={ref}
                className={inView ? `animate__animated animate__slideInUp` : ""}
                key={index}>
                <td className="name">
                  <LuPackage className="icon" />
                  {product.product}
                </td>
                <td className="category">{product.category}</td>
                <td className="price">{product.price}</td>
                <td className={`stock ${product.stock <= 10 && "decreased"}`}>
                  {product.stock}
                </td>
                <td className="vendor">{product.vendor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
