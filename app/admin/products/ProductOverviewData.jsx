import { FaChartLine } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { IoIosWarning } from "react-icons/io";
import { LuPackage } from "react-icons/lu";

export default function ProductOverviewData(allProducts) {
  let productOverviewData = [
    {
      title: "Total Products",
      amount: allProducts.length,
      increase: "+12.5%",
      icon: <LuPackage />,
    },
    {
      title: "Total Sales",
      amount: allProducts
        .reduce((acc, crr) => {
          return acc + parseFloat(crr.price);
        }, 0)
        .toFixed(2),
      increase: "+18.2%",
      icon: <FaDollarSign />,
    },
    {
      title: "Growth Rate",
      amount: "23.5%",
      increase: "+4.75%",
      icon: <FaChartLine />,
    },
    {
      title: "Low Stock",
      amount: "23",
      increase: "-2.3%",
      icon: <IoIosWarning />,
    },
  ];
  return productOverviewData;
}
