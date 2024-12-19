"use client";

import { FiFilter } from "react-icons/fi";
import { LuPackage } from "react-icons/lu";
import AdminCardOverview from "@/app/_components/AdminCardOverview";
import useInViewAnimation from "@/app/_hooks/useInViewAnimation";
import { Suspense, useContext } from "react";
import { ProductContext } from "@/app/_context/manageProducts";
import Pagination from "@/app/_components/Bagination";
import ProductOverviewData from "./ProductOverviewData";
import FilterPopup from "@/app/_components/FilterPopup";
import FilterPopupContent from "./FilterPopupContent";
import { AdminContext } from "@/app/_context/adminManagement";

export default function Products() {
  const [ref, inView] = useInViewAnimation();
  const { handlePageChange } = useContext(ProductContext);
  const { allProducts } = useContext(AdminContext);
  const productOverviewData = ProductOverviewData(allProducts);
  const { showFilterPopup, toggleFilterPopup } = useContext(AdminContext);

  return (
    <div className="products-container">
      {/* Top Elements */}
      <div className="top-element">
        <div className="info">
          <h1 className="admin-page-name">Products</h1>
          <span>(Total: {allProducts.length} products)</span>
        </div>
        {/* Filter Button */}
        {showFilterPopup ? (
          <FilterPopup>
            <FilterPopupContent />
          </FilterPopup>
        ) : (
          <button className="btn-filter" onClick={toggleFilterPopup}>
            <FiFilter /> Filters
          </button>
        )}
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
          <Suspense>
            <tbody>
              {allProducts.map((product, index) => (
                <tr
                  ref={ref}
                  className={
                    inView ? `animate__animated animate__slideInUp` : ""
                  }
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
                  <td className="vendor">{product.vendor[0].name}</td>
                </tr>
              ))}
            </tbody>
          </Suspense>
        </table>
      </section>
      <Pagination totalPages={12} onPageChange={handlePageChange} />
    </div>
  );
}
