"use client";

import { useInView } from "react-intersection-observer";

export default function useInViewAnimation() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });
  return [ref, inView];
}
