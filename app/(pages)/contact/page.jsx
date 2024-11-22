"use client";
import "@/css/contact.css";
import ContactImg from "@/public/contact-us.webp";
import LazyLoadImageAnimation from "@/app/_components/ImageAnimation";
import SectionName from "@/app/_components/SectionName";
import SendButton from "@/app/_components/SendButton";
import { motion } from "framer-motion";
import { useContext, useState } from "react";
import ContactUs from "@/app/actions/Contact";
import Loading from "@/app/_components/Laoding";
import { UserContext } from "@/app/_context/usersManagement";

export default function Contact() {
  // Message Data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: undefined,
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  // user Token
  const { token } = useContext(UserContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Send Message
  const handleSubmit = async () => {
    setIsLoading(true);
    await ContactUs(formData, setIsLoading, token);
    setFormData({
      name: "",
      email: "",
      phone: undefined,
      subject: "",
      message: "",
    });
  };

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <SectionName>Contact-Us</SectionName>
      <div className="contact-container flex justify-center items-center gap-4">
        <motion.form
          action={handleSubmit}
          className="contact-form flex flex-col">
          <div className="form-group">
            <motion.label htmlFor="name">Name</motion.label>
            <motion.input
              type="text"
              id="name"
              name="name"
              placeholder="name..."
              required
              autoComplete="name"
              whileFocus={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              onChange={handleChange}
              style={{
                borderColor: formData.name ? "green" : "red",
                borderWidth: "2px",
                borderStyle: "solid",
              }}
            />
            <motion.label htmlFor="email">Email</motion.label>
            <motion.input
              type="email"
              id="email"
              name="email"
              placeholder="email..."
              required
              autoComplete="email"
              whileFocus={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              onChange={handleChange}
              style={{
                borderColor: formData.email ? "green" : "red",
                borderWidth: "2px",
                borderStyle: "solid",
              }}
            />
            <motion.label htmlFor="phone">Phone (Optional)</motion.label>
            <motion.input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone..."
              autoComplete="tel"
              whileFocus={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              onChange={handleChange}
              style={{
                borderColor: formData.phone ? "green" : "red",
                borderWidth: "2px",
                borderStyle: "solid",
              }}
            />
            <motion.label htmlFor="subject">Subject</motion.label>
            <motion.input
              type="text"
              id="subject"
              name="subject"
              placeholder="subject"
              required
              autoComplete="off"
              whileFocus={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              onChange={handleChange}
              style={{
                borderColor: formData.subject ? "green" : "red",
                borderWidth: "2px",
                borderStyle: "solid",
              }}
            />
            <motion.label htmlFor="message">Message</motion.label>
            <motion.textarea
              id="message"
              name="message"
              placeholder="message..."
              required
              autoComplete="off"
              whileFocus={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              onChange={handleChange}
              style={{
                borderColor: formData.message ? "green" : "red",
                borderWidth: "2px",
                borderStyle: "solid",
              }}></motion.textarea>
          </div>
          <SendButton>Send</SendButton>
        </motion.form>
        <LazyLoadImageAnimation src={ContactImg} alt={"contact-img"} />
      </div>
    </>
  );
}
