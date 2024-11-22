// Import Libraries
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "animate.css";
import "@/css/main.css";

import AnimatePresencePages from "./_components/AnimatePresence";
// Import Component
import BtnToTop from "./_components/BtnToTop";
import Footer from "./_layout/Footer";
import Header from "./_layout/Header";

import { ProductProvider } from "./_context/manageProducts";

import UsersManageMent from "./_context/usersManagement";
import VendorManageMent from "./_context/vendorManagement";
import VendorsManagement from "./_context/vendorsManagement";

// MetaData
export const metadata = {
  title: "Ahmed's Marketplace | Multi-Vendor E-commerce Platform",
  default_locale: "en",
  lang: "en",
  description:
    "Welcome to Ahmed's Marketplace, your go-to multi-vendor e-commerce platform offering a wide variety of products from top sellers. Shop trending products and enjoy seamless online shopping!",
  keywords:
    "multi-vendor marketplace, e-commerce, online shopping, best deals, trending products, Ahmed's Marketplace, shop online",
  authors: [
    { name: "Ahmed", url: "https://multi-vendors-e-commerce.vercel.app/" },
  ],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  themeColor: "#ffffff",
  openGraph: {
    type: "website",
    url: "https://multi-vendors-e-commerce.vercel.app/",
    title: "Ahmed's Marketplace | Multi-Vendor E-commerce Platform",
    description:
      "Find everything you need in one place. Shop trending products, compare prices, and connect with trusted vendors.",
    images: [
      {
        url: "https://res.cloudinary.com/duumkzqwx/image/upload/f_auto,q_auto/v1/multi-vendor%20E-commerce/stores/ff65iqqonmhjn0jyvqvk",
        width: 1200,
        height: 630,
        alt: "Ahmed's Marketplace Banner",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <VendorManageMent>
        <VendorsManagement>
          <ProductProvider>
            <UsersManageMent>
              <AnimatePresencePages>
                <Header />
                <main>{children}</main>
                <Footer />
                <BtnToTop />
              </AnimatePresencePages>
            </UsersManageMent>
          </ProductProvider>
        </VendorsManagement>
      </VendorManageMent>
    </html>
  );
}
