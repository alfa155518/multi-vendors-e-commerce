"use client";
import "../../../css/create-vendor.css";
import * as motion from "framer-motion/client";
import SectionName from "@/app/_components/SectionName";
import SendButton from "../../_components/SendButton";
import { useState } from "react";

export default function CreateVendor() {
  const [formData, setFormData] = useState({
    storeName: "",
    storeDescription: "",
    name: "",
    email: "",
    phoneNumber: "",
    country: "",
    logo: "",
    bannerImage: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files && files.length > 0) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you would typically send formData to your server
    console.log(formData); // For demonstration purposes
  };

  const getInputStyle = (value) => ({
    border: value ? "2px solid green" : "2px solid red",
    transition: "border-color 0.3s ease",
  });

  return (
    <>
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
            onChange={handleChange}
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
            name="storeDescription"
            value={formData.storeDescription}
            onChange={handleChange}
            required
            placeholder="Describe your store"
            style={getInputStyle(formData.storeDescription)}
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
            onChange={handleChange}
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
            onChange={handleChange}
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
          <motion.input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            placeholder="Enter your phone number"
            autoComplete="tel"
            style={getInputStyle(formData.phoneNumber)}
            whileFocus={{
              scale: 1.05,
              transition: { type: "spring", stiffness: 300 },
            }}
          />
        </label>
        <label>
          Country
          <motion.input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
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
            <input type="file" name="logo" onChange={handleChange} required />
          </label>
          <label>
            Banner Image
            <input
              type="file"
              name="bannerImage"
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <SendButton>Submit</SendButton>
      </motion.form>
    </>
  );
}
