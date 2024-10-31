// Import Libraries
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "animate.css";
// import "sweetalert2/src/sweetalert2.scss";
import "@/css/main.css";

import AnimatePresencePages from "./_components/AnimatePresence";
// Import Component
import BtnToTop from "./_components/BtnToTop";
import Footer from "./_layout/Footer";
import Header from "./_layout/Header";

import { ProductProvider } from "./_context/manageProducts";

import UsersManageMent from "./_context/usersManagement";

// Font
// const openSans = Open_Sans({
//   weight: ["400", "700", "300", "800", "500"],
//   style: ["normal", "italic"],
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-open-sans",
// });

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
          <AnimatePresencePages>
            <Header />
            <main>{children}</main>
            <Footer />
            <BtnToTop />
          </AnimatePresencePages>
        </UsersManageMent>
      </ProductProvider>
    </html>
  );
}
