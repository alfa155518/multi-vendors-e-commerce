import { FiFilter } from "react-icons/fi";
import { IoCart } from "react-icons/io5";
import { FaChartLine } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import AdminCardOverview from "@/app/_components/AdminCardOverview";
export default function Vendors() {
  const vendorsOverviewData = [
    {
      title: "Total Vendors",
      amount: 156,
      increase: "+12.5%",
      icon: <FaShop />,
    },
    {
      title: "Active Products",
      amount: 2845,
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
  const vendors = [
    {
      vendor: "TechGear Inc",
      orders: 145,
      revenue: "125,000",
      createdAt: "2023-08-15",
      rating: 4.8,
    },
    {
      vendor: "Fashion Forward",
      orders: 89,
      revenue: "89,000",
      createdAt: "2023-09-22",
      rating: 4.5,
    },
    {
      vendor: "Home Essentials",
      orders: 234,
      revenue: "178,000",
      createdAt: "2023-07-10",
      rating: 4.9,
    },
    {
      vendor: "Sports Elite",
      orders: 67,
      revenue: "45,000",
      createdAt: "2024-01-05",
      rating: null,
    },
  ];

  return (
    <div className="vendors">
      <div className="top-element">
        <div className="info">
          <h1 className="admin-page-name">Vendors</h1>
          <span>(Total: 156 vendors)</span>
        </div>
        <button className="btn-filter">
          <FiFilter /> Filters
        </button>
      </div>
      <section className="overview">
        <AdminCardOverview cardOverviewData={vendorsOverviewData} />
      </section>
      <section className="vendors-table">
        <table>
          <thead>
            <tr>
              <th>Vendor</th>
              <th>Orders</th>
              <th>Revenue</th>
              <th>Created At</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {vendors.map((vendor, index) => (
              <tr key={index}>
                <td className="name">
                  <FaShop className="icon" />
                  {vendor.vendor}
                </td>
                <td className="orders">{vendor.orders}</td>
                <td className="revenue">${vendor.revenue}</td>
                <td className="date">{vendor.createdAt}</td>
                <td>
                  {vendor.rating !== null ? vendor.rating : "N/A"}{" "}
                  <FaStar className="stars" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
