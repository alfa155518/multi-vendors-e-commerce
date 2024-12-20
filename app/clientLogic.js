"use client";

import React, { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Header from "./_layout/Header";
import Footer from "./_layout/Footer";
import BtnToTop from "./_components/BtnToTop";

export default function ClientLogic({ children }) {
  const admin = false; // Example admin flag, replace with real authentication logic
  const router = useRouter();
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith("/admin");

  useEffect(() => {
    if (admin && !isAdminRoute) {
      // Redirect to the admin dashboard if admin and not already on an admin route
      router.push("/admin");
    } else if (!admin && isAdminRoute) {
      // Redirect non-admin users away from admin routes
      router.push("/");
    }
  }, [admin, isAdminRoute, router]);

  return (
    <>
      {!isAdminRoute && <Header />}
      <main>{children}</main>
      {!isAdminRoute && <Footer />}
      {!isAdminRoute && <BtnToTop />}
    </>
  );
}
