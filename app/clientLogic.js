"use client";

import React, { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Header from "./_layout/Header";
import Footer from "./_layout/Footer";
import BtnToTop from "./_components/BtnToTop";

export default function ClientLogic({ children }) {
  const admin = true;
  const router = useRouter();
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith("/admin");

  useEffect(() => {
    if (admin) {
      router.push("/admin");
    }
  }, [router, admin]);
  return (
    <>
      {!isAdminRoute && <Header />}
      <main>{children}</main>
      {!isAdminRoute && <Footer />}
      {!isAdminRoute && <BtnToTop />}
    </>
  );
}