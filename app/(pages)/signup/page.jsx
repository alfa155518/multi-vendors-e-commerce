"use client";
import "../../../css/common-auth.css";
import * as motion from "framer-motion/client";
import SendButton from "../../_components/SendButton";
import Link from "next/link";
import Loading from "@/app/_components/Laoding";
import useSignUp from "@/app/_hooks/useSignup";

export default function SignUp() {
  // Custom Hook SignUp
  const { getInputClass, handleSubmit, formData, handleChange, loading } =
    useSignUp();
  return loading ? (
    <Loading />
  ) : (
    <div className="sign-up">
      <motion.form
        onSubmit={handleSubmit}
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
          placeholder="Name"
          name="name"
          onChange={handleChange}
          autoComplete="name"
          whileFocus={{ scale: 1.05 }}
          className={getInputClass(formData.name)}
        />
        <motion.input
          type="email"
          placeholder="Email"
          name="email"
          autoComplete="email"
          onChange={handleChange}
          whileFocus={{ scale: 1.05 }}
          className={getInputClass(formData.email)}
        />
        <motion.input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
          whileFocus={{ scale: 1.05 }}
          className={getInputClass(formData.password)}
        />
        <div className="user-photo">
          <label htmlFor="photo">Choose Img</label>
          <input
            type="file"
            name="photo"
            id="photo"
            accept="image/*"
            onChange={handleChange}
          />
          <select name="role" aria-label="role" onChange={handleChange}>
            <option value="user">User</option>
            <option value="vendor">Vendor</option>
          </select>
        </div>
        <SendButton>Sign Up</SendButton>
        <p className="account-link">
          Already have an account?
          <Link href="/login" aria-label="Login to your account">
            Login
          </Link>
        </p>
      </motion.form>
    </div>
  );
}
