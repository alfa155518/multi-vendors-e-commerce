"use client";

import { useRef } from "react";

export default function BtnToTop() {
  const btn = useRef("");

  // Show or hide Button
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 1000) {
        btn.current?.classList.add("appear");
      } else {
        btn.current?.classList.remove("appear");
      }
    });
  }

  // Back To Top
  const backToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="scroll-top relative" ref={btn}>
      <button className="btn-to-top" onClick={() => backToTop()}>
        <svg className="icon" viewBox="0 0 384 512">
          <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
        </svg>
      </button>
    </div>
  );
}
