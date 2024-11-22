"use client";
import "../../../css/common-auth.css";
import * as motion from "framer-motion/client";
import SendButton from "../../_components/SendButton";
import Loading from "@/app/_components/Laoding";
import useLogin from "@/app/_hooks/useLogin";
import Link from "next/link";

export default function Login() {
  // Custom Hook Login
  const { formData, loading, handleChange, handleSubmit, getInputClass } =
    useLogin();

  return loading ? (
    <Loading />
  ) : (
    <div className="login">
      <motion.form
        onSubmit={handleSubmit}
        className="login-form"
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
          <span className="text">Login</span>
        </div>
        <motion.input
          type="email"
          placeholder="Email"
          name="email"
          autoComplete="email"
          onChange={handleChange}
          value={formData.email}
          whileFocus={{ scale: 1.05 }}
          className={getInputClass(formData.email)}
        />
        <motion.input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
          value={formData.password}
          whileFocus={{ scale: 1.05 }}
          className={getInputClass(formData.password)}
        />
        <SendButton>Login</SendButton>
        <p className="account-link">
          Don`t have an account?
          <Link href="/signup" aria-label="Login to your account">
            Signup
          </Link>
        </p>
      </motion.form>
    </div>
  );
}
