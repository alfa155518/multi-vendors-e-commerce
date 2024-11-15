"use client";
import "../../../../css/create-vendor.css";
import "react-phone-number-input/style.css";
import * as motion from "framer-motion/client";
import SectionName from "@/app/_components/SectionName";
import SendButton from "../../../_components/SendButton";
import Loading from "@/app/_components/Laoding";
import useCreateVendor from "@/app/_hooks/useCreateVendor";
import PhoneInput from "react-phone-number-input";
import ConfettiParty from "@/app/_components/ConfettiParty";
import { useState } from "react";

export default function CreateVendor() {
  const [isConfettiVisible, setIsConfettiVisible] = useState(false);
  const [isLoading, handleSubmit, getInputStyle, handleChange, formData] =
    useCreateVendor(setIsConfettiVisible);
  return isLoading ? (
    <Loading />
  ) : (
    <>
      {isConfettiVisible ? (
        <ConfettiParty isConfettiVisible={isConfettiVisible} />
      ) : (
        <></>
      )}
      <SectionName>Create Your Vendor Account</SectionName>
      <motion.form
        onSubmit={handleSubmit}
        className="vendor-form"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}>
        <label>
          Store Name
          <motion.input
            type="text"
            name="storeName"
            value={formData.storeName}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            required
            placeholder="Enter your store name"
            autoComplete="off"
            style={getInputStyle(formData.storeName)}
            whileFocus={{
              scale: 1.05,
              transition: { type: "spring", stiffness: 300 },
            }}
          />
        </label>
        <label>
          Store Description
          <motion.textarea
            name="description"
            value={formData.description}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            required
            placeholder="Describe your store"
            style={getInputStyle(formData.description)}
            whileFocus={{
              scale: 1.05,
              transition: { type: "spring", stiffness: 300 },
            }}
          />
        </label>
        <label>
          Your Name
          <motion.input
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            required
            placeholder="Enter your name"
            autoComplete="off"
            style={getInputStyle(formData.name)}
            whileFocus={{
              scale: 1.05,
              transition: { type: "spring", stiffness: 300 },
            }}
          />
        </label>
        <label>
          Email
          <motion.input
            type="email"
            name="email"
            value={formData.email}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            required
            placeholder="Enter your email"
            autoComplete="email"
            style={getInputStyle(formData.email)}
            whileFocus={{
              scale: 1.05,
              transition: { type: "spring", stiffness: 300 },
            }}
          />
        </label>
        <label>
          Phone Number
          <motion.div
            whileFocus={{
              scale: 1.05,
              transition: { type: "spring", stiffness: 300 },
            }}
            style={{ width: "100%" }}>
            <PhoneInput
              placeholder="Enter your phone number"
              onChange={(value) => handleChange("phone", value)}
              name="phone"
              value={formData.phone}
              required
              international
              countryCallingCodeEditable={false}
              defaultCountry="EG"
              style={getInputStyle(formData.phone)}
            />
          </motion.div>
        </label>
        <label>
          Country
          <motion.input
            type="text"
            name="country"
            value={formData.country}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            required
            placeholder="Enter your country"
            autoComplete="off"
            style={getInputStyle(formData.country)}
            whileFocus={{
              scale: 1.05,
              transition: { type: "spring", stiffness: 300 },
            }}
          />
        </label>
        <div className="images">
          <label>
            Logo
            <input
              type="file"
              name="storeLogo"
              onChange={(e) => handleChange("storeLogo", null, e)}
              required
            />
          </label>
        </div>
        <SendButton>Submit</SendButton>
      </motion.form>
    </>
  );
}
