"use client";

import "../../../css/signup.css";
import * as motion from "framer-motion/client";
import SendButton from "../../_components/SendButton";
import { useState } from "react";

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    photo: null,
    role: "user",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="sign-up">
      <motion.form
        className="signup-form"
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
          <span className="text">Sign Up</span>
        </div>
        <motion.input
          type="text"
          placeholder="name"
          name="name"
          autoComplete="any name"
          onChange={handleChange}
          style={{
            border: formData.name ? "2px solid green" : "2px solid red",
            transition: "border-color 0.3s ease",
          }}
          whileFocus={{ scale: 1.05 }}
        />
        <motion.input
          type="email"
          placeholder="Email"
          name="email"
          autoComplete="any email"
          onChange={handleChange}
          style={{
            border: formData.email ? "2px solid green" : "2px solid red",
            transition: "border-color 0.3s ease",
          }}
          whileFocus={{ scale: 1.05 }}
        />
        <motion.input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
          style={{
            border: formData.password ? "2px solid green" : "2px solid red",
            transition: "border-color 0.3s ease",
          }}
          whileFocus={{ scale: 1.05 }}
        />
        <div className="user-photo">
          <label htmlFor="photo">Chose Img</label>
          <input
            type="file"
            name="photo"
            id="photo"
            onChange={(e) =>
              setFormData({ ...formData, photo: e.target.files[0] })
            }
          />
          <select name="role" aria-label="role" onChange={handleChange}>
            <option value="user">user</option>
            <option value="vendor">vendor</option>
          </select>
        </div>
        <SendButton>sign up</SendButton>
      </motion.form>
    </div>
  );
}
