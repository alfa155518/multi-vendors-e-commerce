"use client";

import * as motion from "framer-motion/client";
import { useContext, useState } from "react";
import SendButton from "../../../_components/SendButton";
import BtnBackArrow from "@/app/_components/btnBackArrow";
import "../../../../css/update-vendor-profile.css";
import { VendorsContext } from "@/app/_context/vendorsManagement";
import Notification from "@/app/_components/Notification";
import Loading from "@/app/_components/Laoding";
import useUpdateVendorDetails from "@/app/_hooks/useUpdateVendorBasicDetails";
import useUpdateStoreDetails from "@/app/_hooks/useUpdateStoreDetails";
export default function UpdateVendor() {
  const [loading, setLoading] = useState(false);

  const { singleVendor, tokenVendor, vendor } = useContext(VendorsContext);

  const [vendorDetails, setVendorDetails] = useState({
    name: vendor?.name,
    email: vendor?.email,
  });

  const { storeName = "Vendor", description = "Any Thing" } =
    vendor?.storeDetails || "";

  const [storeDetails, setStoreDetails] = useState({
    storeName,
    description,
  });

  // Custom Hook To change Vendor Details
  const { handleChangeBasicDetails, handleSubmitDetails } =
    useUpdateVendorDetails(
      vendorDetails,
      singleVendor,
      setLoading,
      Notification,
      setVendorDetails
    );

  // Custom Hook To Change Store Details
  const { handelChangeStoreDetails, handelSubmitStoreDetails } =
    useUpdateStoreDetails(
      storeDetails,
      singleVendor,
      setLoading,
      Notification,
      setStoreDetails
    );

  // Handel Borders
  const getInputClass = (value) => {
    return value !== "" ? "input-valid" : "input-invalid";
  };

  if (!singleVendor) {
    return <Loading />;
  }

  return (
    <section className="update-vendor relative">
      <div className="basic-details">
        <motion.form
          onSubmit={(e) => handleSubmitDetails(e, tokenVendor)}
          className="update-form relative"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              ease: "linear",
              duration: 1,
              x: { duration: 1 },
            },
          }}>
          <div className="section-name">
            <span className="text">Update Basic Details</span>
          </div>
          <motion.input
            type="text"
            placeholder="Name"
            name="name"
            autoComplete="name"
            required
            onChange={handleChangeBasicDetails}
            whileFocus={{ scale: 1.05 }}
            defaultValue={vendorDetails?.name}
            className={getInputClass(vendorDetails.name)}
          />
          <motion.input
            type="email"
            placeholder="Email"
            name="email"
            autoComplete="email"
            required
            onChange={handleChangeBasicDetails}
            whileFocus={{ scale: 1.05 }}
            defaultValue={vendorDetails?.email}
            className={getInputClass(vendorDetails.email)}
          />
          <SendButton isDisabled={loading ? true : false}>
            {loading ? "Updating..." : "Update"}
          </SendButton>
        </motion.form>
      </div>
      <div className="store-details">
        <div className="section-name">
          <span className="text">Update Store Details</span>
        </div>
        <motion.form
          onSubmit={(e) => handelSubmitStoreDetails(e, tokenVendor)}
          className="update-form relative"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              ease: "linear",
              duration: 1,
              x: { duration: 1 },
            },
          }}>
          <motion.input
            type="text"
            placeholder="Store Name"
            name="storeName"
            onChange={handelChangeStoreDetails}
            autoComplete="store Name"
            whileFocus={{ scale: 1.05 }}
            required
            defaultValue={storeDetails.storeName}
            className={getInputClass(storeDetails.storeName)}
          />
          <motion.textarea
            type="text"
            placeholder="Write A Description Max Length 300"
            name="description"
            onChange={handelChangeStoreDetails}
            autoComplete="description"
            whileFocus={{ scale: 1.05 }}
            required
            defaultValue={storeDetails.description}
            className={getInputClass(storeDetails.description)}
          />
          <SendButton isDisabled={loading ? true : false}>
            {loading ? "Changing..." : "Change"}
          </SendButton>
        </motion.form>
      </div>
      <BtnBackArrow direction={"/vendor"} />
    </section>
  );
}
