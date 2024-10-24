import "../css/home.css";
import Categories from "./_sections/categories";
import Delivery from "./_sections/delivery";
import FeaturedProducts from "./_sections/featuredProducts";
import Hero from "./_sections/hero";
export default function Home() {
  return (
    <div className="home">
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Delivery />
    </div>
  );
}
