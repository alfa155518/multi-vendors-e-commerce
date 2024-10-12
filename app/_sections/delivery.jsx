"use client";
import Image from "next/image";
import SectionName from "../_components/SectionName";
import deliveryImg from "@/public/delivery.webp";
import LazyLoadImg from "../_components/LazyLoadImg";
import useInViewAnimation from "../_hooks/useInViewAnimation";
export default function Delivery() {
  const [ref, inView] = useInViewAnimation();

  return (
    <>
      <SectionName>Our Delivery</SectionName>
      <section className="delivery-container relative">
        <div
          ref={ref}
          className={`content ${
            inView ? "animate__animated animate__fadeInDown" : ""
          } `}>
          <div className="right-side relative">
            <h3 className="special-word">Choose Your Favourite Product</h3>
            <article>
              Choose your favourite product and enjoy an exceptional shopping
              experience tailored just for you!
            </article>
          </div>
          <LazyLoadImg>
            <div className="img flex justify-center items-center">
              <Image
                src={deliveryImg}
                alt="Delivery"
                priority={true}
                className="w-2/4 h-auto"
              />
            </div>
          </LazyLoadImg>
          <div className="left-side">
            <h3 className="special-word">Order Online and Get Fast Delivery</h3>
            <article>
              Order online now and enjoy fast, reliable delivery straight to
              your doorstep!
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
