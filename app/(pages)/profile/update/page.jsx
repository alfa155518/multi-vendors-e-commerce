"use client";

import * as motion from "framer-motion/client";
import SendButton from "@/app/_components/SendButton";

import { useContext, useEffect, useState } from "react";
import BtnBackArrow from "@/app/_components/BtnBackArrow";
import { UserContext } from "@/app/_context/usersManagement";
import { UpdateDetails, UpdatePassword } from "@/app/actions/UpdateUser";
import Cookies from "js-cookie";
import useUpdateUserDetails from "@/app/_hooks/useUpdateUserDetails";
import useUpdateUserPassword from "@/app/_hooks/useUpdateUserPassword";
export default function UpdateProfile() {
  // Vendor
  const [loading, setLoading] = useState(false);
  const { token } = useContext(UserContext);
  const [hasMounted, setHasMounted] = useState(false);
  const { name, email, photo, role, _id } = Cookies.get("userData")
    ? JSON.parse(Cookies.get("userData"))
    : {};

  // Custom Hook Change user Details
  const { handleChangeBasicDetails, handleSubmit } = useUpdateUserDetails(
    name,
    email,
    photo,
    role,
    token,
    setLoading,
    UpdateDetails
  );

  // Custom Hook Handel Change user Password
  const { handleChangePassword, handleSubmitPassword, passwordData } =
    useUpdateUserPassword(_id, token, setLoading, UpdatePassword);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const getInputClass = (value, isPassword = false) => {
    if (!hasMounted) return "";
    if (isPassword) {
      return value.length >= 8 ? "input-valid" : "input-invalid";
    }
    return value ? "input-valid" : "input-invalid";
  };

  return (
    <section className="update-profile">
      <div className="basic-details">
        <motion.form
          onSubmit={(e) => handleSubmit(e)}
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
            defaultValue={name}
            className={getInputClass(name)}
          />
          <motion.input
            type="email"
            placeholder="Email"
            name="email"
            autoComplete="email"
            required
            onChange={handleChangeBasicDetails}
            whileFocus={{ scale: 1.05 }}
            defaultValue={email}
            className={getInputClass(email)}
          />
          <div className="user-photo">
            <label htmlFor="photo">Update Photo</label>
            <input
              type="file"
              name="photo"
              id="photo"
              accept="image/*"
              autoComplete="photo"
              onChange={handleChangeBasicDetails}
            />
            <select
              name="role"
              aria-label="role"
              onChange={handleChangeBasicDetails}>
              <option value="user">User</option>
              <option value="vendor">Vendor</option>
            </select>
          </div>
          <SendButton isDisabled={loading ? true : false}>
            {loading ? "Updating..." : "Update"}
          </SendButton>
        </motion.form>
      </div>
      <div className="secure-details">
        <div className="section-name">
          <span className="text">Change Password</span>
        </div>
        <motion.form
          onSubmit={(e) => handleSubmitPassword(e)}
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
            type="password"
            placeholder="Current Password"
            name="currentPassword"
            onChange={handleChangePassword}
            autoComplete="current-password"
            whileFocus={{ scale: 1.05 }}
            required
            className={getInputClass(passwordData.currentPassword, true)}
          />
          <motion.input
            type="password"
            placeholder="New Password"
            name="newPassword"
            onChange={handleChangePassword}
            autoComplete="new-password"
            whileFocus={{ scale: 1.05 }}
            required
            className={getInputClass(passwordData.newPassword, true)}
          />
          <motion.input
            type="password"
            placeholder="Confirm New Password"
            name="confirmPassword"
            onChange={handleChangePassword}
            autoComplete="password confirmation"
            whileFocus={{ scale: 1.05 }}
            required
            className={getInputClass(passwordData.confirmPassword, true)}
          />
          <SendButton isDisabled={loading ? true : false}>
            {loading ? "Changing..." : "Change"}
          </SendButton>
        </motion.form>
      </div>
      <BtnBackArrow direction={"/profile"} />
    </section>
  );
}
