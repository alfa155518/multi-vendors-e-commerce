import Hero from "./_sections/hero";
import Categories from "./_sections/categories";
import FeaturedProducts from "./_sections/featuredProducts";
import "../css/home.css";
import Delivery from "./_sections/delivery";
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
