import LazyLoadImageAnimation from "@/app/_components/ImageAnimation";
import { FaLocationDot, FaPhone, FaStar } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { PiPackageBold } from "react-icons/pi";
import { LuPackageCheck } from "react-icons/lu";
import { BsCurrencyDollar } from "react-icons/bs";
const VendorCard = ({ vendor }) => {
  const {
    storeLogo,
    storeDetails,
    country,
    email,
    phone,
    performanceMetrics,
    products,
  } = vendor;

  return (
    <div className="vendor__card">
      <div className="banner__img">
        <LazyLoadImageAnimation
          src={storeLogo?.url}
          alt="vendor Logo"
          width={100}
          height={100}
        />
      </div>
      <div className="store__logo">
        <LazyLoadImageAnimation
          src={storeLogo?.url}
          alt="vendor Logo"
          width={50}
          height={50}
        />
      </div>
      <div className="vendor__details">
        <h3 className="store__name">
          {storeDetails?.storeName || "Unnamed Store"}
        </h3>
        <p className="store__desc">
          {storeDetails?.description || "No description available."}
        </p>
        <ul className="sub__details">
          <li>
            <span>
              <FaLocationDot /> {country || "Unknown Country"}
            </span>
          </li>
          <li>
            <span>
              <MdEmail /> {email || "No email provided."}
            </span>
          </li>
          <li>
            <span>
              <FaPhone /> {phone || "No phone number provided."}
            </span>
          </li>
        </ul>
      </div>
      <div className="store__details">
        <span>
          <LuPackageCheck />
          <strong>{performanceMetrics?.totalOrders || 0} Orders</strong>
        </span>
        <span>
          <FaStar />
          <strong>{performanceMetrics?.averageRating || "N/A"} Rating</strong>
        </span>
        <span>
          <PiPackageBold />
          <strong>{products?.length || 0} Products</strong>
        </span>
        <span>
          <BsCurrencyDollar />
          <strong>{performanceMetrics?.totalSales || 0} Sales</strong>
        </span>
      </div>
    </div>
  );
};
export default VendorCard;
