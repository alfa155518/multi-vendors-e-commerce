"use client";

import { IoStorefront } from "react-icons/io5";
import { useContext } from "react";
import { VendorsContext } from "@/app/_context/vendorsManagement";
import Loading from "@/app/_components/Laoding";
import VendorCard from "@/app/_components/VendorCard";
import "../../../css/vendors.css";

export default function Vendors() {
  const { allVendors = [] } = useContext(VendorsContext);

  return (
    <section className="vendors-wrapper">
      <h2>
        <IoStorefront />
        <strong>All Vendors</strong>
      </h2>
      <div className="all__vendors">
        {Array.isArray(allVendors) && allVendors.length > 0 ? (
          allVendors.map((vendor, i) => <VendorCard key={i} vendor={vendor} />)
        ) : (
          <Loading />
        )}
      </div>
    </section>
  );
}
