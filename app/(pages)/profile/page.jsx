"use client";

import LazyLoadImageAnimation from "@/app/_components/ImageAnimation";
import { UserContext } from "@/app/_context/usersManagement";
import Link from "next/link";
import { useContext } from "react";
import DefaultImg from "../../../public/images/users/default.WebP";
import Cookies from "js-cookie";

export default function Profile() {
  const { userData } = useContext(UserContext);
  const { name, role, email, photo } = userData || {};
  const hasVendorAccount = Cookies.get("vendor");
  return (
    <section className="profile-content">
      <div className="user-img">
        <LazyLoadImageAnimation
          src={photo?.url || DefaultImg}
          alt={"user profile image"}
          width={100}
          height={10}
        />
        <h2 className="username">{name}</h2>
      </div>
      <ul className="user-details">
        <li>
          Name <span>{name}</span>
        </li>
        <li>
          Email
          <span>
            <Link className="verify" href={"/"}>
              Verify Email
            </Link>
            {email}
          </span>
        </li>
        <li>
          Role <span>{role}</span>
        </li>
      </ul>
      <div className="actions">
        <button className="btn" aria-label="profile update">
          <Link href={"/profile/update"} aria-label="profile update">
            edit profile
          </Link>
        </button>
        {role === "vendor" ? (
          hasVendorAccount ? (
            <button className="btn" aria-label="vendor">
              <Link href={"/vendor"} aria-label="vendor">
                Vendor Account
              </Link>
            </button>
          ) : (
            <button className="btn" aria-label="vendor register">
              <Link href={"/vendor/register"} aria-label="vendor register">
                Create Vendor Account
              </Link>
            </button>
          )
        ) : (
          <></>
        )}
      </div>
    </section>
  );
}
