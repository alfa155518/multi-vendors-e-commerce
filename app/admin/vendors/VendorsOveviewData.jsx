import { IoCart } from "react-icons/io5";
import { FaChartLine } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { FaShop } from "react-icons/fa6";

export default function VendorsOverviewData(allVendors) {
  const vendorsOverviewData = [
    {
      title: "Total Vendors",
      amount: allVendors.length,
      increase: "+12.5%",
      icon: <FaShop />,
    },
    {
      title: "Active Products",
      amount: allVendors.reduce(
        (acc, vendor) => acc + vendor.products.length,
        0
      ),
      increase: "+18.2%",
      icon: <IoCart />,
    },
    {
      title: "Total Revenue",
      amount: "$542,892",
      increase: "+25.4%",
      icon: <FaDollarSign />,
    },
    {
      title: "Growth Rate",
      amount: "24.5%",
      increase: "+4.75%",
      icon: <FaChartLine />,
    },
  ];
  return vendorsOverviewData;
}
