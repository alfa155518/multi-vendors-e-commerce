"use client";

import LazyLoadImageAnimation from "@/app/_components/ImageAnimation";
import { UserContext } from "@/app/_context/usersManagement";
import Link from "next/link";
import { useContext } from "react";
import DefaultImg from "@/public/images/users/default.webp";

export default function Profile() {
  const { userData } = useContext(UserContext);
  const { name, role, email, photo } = userData || {};
  console.log(userData);
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
          Email{" "}
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
      <button className="btn">
        <Link href={"/profile/update"}>edit profile</Link>
      </button>
    </section>
  );
}
