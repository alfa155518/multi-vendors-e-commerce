"use client";

import LazyLoad from "react-lazyload";

export default function LazyLoadImg({ children }) {
  return <LazyLoad height={200}>{children}</LazyLoad>;
}
