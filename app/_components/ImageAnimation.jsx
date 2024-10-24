"use client";

import Image from "next/image"; // Next.js Image component for optimized lazy loading
import LazyLoadImg from "./LazyLoadImg";
import { motion } from "framer-motion";
import { useState } from "react";

// Define mask gradients for animation
const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

export default function LazyLoadImageAnimation({
  src,
  alt,
  containerClassName = "img",
  imgClassName = "",
  width,
  height,
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  return (
    <LazyLoadImg>
      <motion.div
        className={containerClassName}
        initial={false}
        animate={
          isLoaded && isInView
            ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
            : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
        }
        transition={{ duration: 1, delay: 1 }}
        viewport={{ once: true }}
        onViewportEnter={() => setIsInView(true)}>
        <Image
          className={imgClassName}
          src={src} // Assuming the images are in the public directory
          alt={alt}
          width={width}
          height={height}
          onLoad={() => setIsLoaded(true)}
          priority
        />
      </motion.div>
    </LazyLoadImg>
  );
}
