import Link from "next/link";
import Image from "next/image";
import bgImage from "@/public/static.webp";
import heroImage from "@/public/hero.webp";
import LazyLoadImg from "../_components/LazyLoadImg";
import useInViewAnimation from "../_hooks/useInViewAnimation";

export default function Hero() {
  return (
    <section className="hero p-2 relative">
      <LazyLoadImg>
        <Image src={bgImage} alt="img" fill className="-z-10" priority />
      </LazyLoadImg>
      <div className="content flex items-center">
        <div className="info flex-1">
          <h1 className="text-4xl mb-2 font-bold relative">
            <span className="special-word">Multi-Vendor</span> E-Commerce
          </h1>
          <p className="hero-text text-lg">
            Discover the power of blockchain technology for your e-commerce
            platform , Multiple sellers, in one big store, Products and choices,
            galore and more! From clothes to gadgets, all in one space,
            Multi-vendor e-commerce, setting the pace!
          </p>
        </div>
        <div className="hero-img flex-1">
          <LazyLoadImg>
            <Image src={heroImage} alt="img" className="hero-img" />
          </LazyLoadImg>
        </div>
      </div>
      <div className="actions absolute">
        <button className="btn">
          <Link href={"/products"}>order now</Link>
        </button>
      </div>
    </section>
  );
}
