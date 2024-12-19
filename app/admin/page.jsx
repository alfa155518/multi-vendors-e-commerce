import SalesCharts from "../_chartsAdmin/salesCharts";
import AdminCardOverview from "../_components/AdminCardOverview";
import AdminRecentOrders from "../_components/AdminRecentOriders";
import AdminTopProducts from "../_components/AdminTopProducts";
import { FaDollarSign } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FiPackage } from "react-icons/fi";
import { FaChartLine } from "react-icons/fa";
export default function DashBoard() {
  const cardOverviewData = [
    {
      id: 1,
      title: "Total Sales",
      amount: "$1,234",
      icon: <FaDollarSign />,
      increase: "+10%",
    },
    {
      id: 2,
      title: "Total Orders",
      amount: "567",
      icon: <FiPackage />,
      increase: "+60%",
    },
    {
      id: 3,
      title: "Total Customers",
      amount: "1,234",
      icon: <FaUsers />,
      increase: "+20%",
    },
    {
      id: 4,
      title: "Total Revenue",
      amount: "$45,678",
      icon: <FaChartLine />,
      increase: "+40%",
    },
  ];
  return (
    <div className="admin-overview relative">
      <h1 className="admin-page-name">Overview</h1>
      <section className="overview">
        <AdminCardOverview cardOverviewData={cardOverviewData} />
      </section>
      <section className="content">
        <div className="sales-charts">
          <div className="chart">
            <h3 className="admin-section-name">Sales Overview</h3>
            <SalesCharts />
          </div>
        </div>
        <div className="top-products">
          <h3 className="admin-section-name">Top Products</h3>
          <AdminTopProducts />
        </div>
      </section>
      <section className="recent-orders">
        <h3 className="admin-section-name">Recent Orders</h3>
        <AdminRecentOrders />
      </section>
    </div>
  );
}
