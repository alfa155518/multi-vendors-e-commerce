"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import img_1 from "@/public/categories/brand.webp";
import img_2 from "@/public/categories/cookie.webp";
import img_3 from "@/public/categories/cosmetics.webp";
import img_4 from "@/public/categories/cpu.webp";
import img_5 from "@/public/categories/digital.webp";
import img_6 from "@/public/categories/fast-food.webp";
import img_7 from "@/public/categories/living-room.webp";
import img_8 from "@/public/categories/necklace.webp";
import img_9 from "@/public/categories/sun-glasses-.webp";
import SectionName from "../_components/SectionName";
import LazyLoadImg from "../_components/LazyLoadImg";
import useInViewAnimation from "../_hooks/useInViewAnimation";
export default function Categories() {
  const [ref, inView] = useInViewAnimation();
  return (
    <section
      ref={ref}
      className={`categories-wrapper ${
        inView ? "animate__animated animate__zoomIn" : ""
      }`}>
      <SectionName>Our Categories</SectionName>
      <LazyLoadImg>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          loop={true}
          modules={[EffectCoverflow]}
          className="my-swiper">
          <SwiperSlide>
            <Image src={img_1} alt="categories-img" priority />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={img_2} alt="categories-img" priority />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={img_3} alt="categories-img" priority />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={img_4} alt="categories-img" priority />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={img_5} alt="categories-img" priority />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={img_6} alt="categories-img" priority />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={img_7} alt="categories-img" priority />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={img_8} alt="categories-img" priority />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={img_9} alt="categories-img" priority />
          </SwiperSlide>
        </Swiper>
      </LazyLoadImg>
    </section>
  );
}
