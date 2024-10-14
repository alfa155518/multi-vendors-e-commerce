import { Open_Sans } from "next/font/google";

// Import Component
import { ProductProvider } from "./_context/manageProducts";
import Footer from "./_layout/Footer";
import BtnToTop from "./_components/BtnToTop";
import Header from "./_layout/Header";

// Import Libraries
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "animate.css";
import "@/css/main.css";
import UsersManageMent from "./_context/usersManagement";

// Font
const openSans = Open_Sans({
  weight: ["400", "700", "300", "800", "500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
});

// MetaData
export const metadata = {
  title: "Multi-vendor E-commerce Products",
  description: "E-Commerce Products with a variety of products ",
  default_locale: "en",
  lang: "en",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ProductProvider>
        <UsersManageMent>
          <body className={openSans.className}>
            <Header />
            <main>{children}</main>
            <Footer />
            <BtnToTop />
          </body>
        </UsersManageMent>
      </ProductProvider>
    </html>
  );
}
