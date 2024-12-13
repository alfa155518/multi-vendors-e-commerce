import { FaDollarSign } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { FaChartLine } from "react-icons/fa";
import AdminCardOverview from "@/app/_components/AdminCardOverview";
import RevenueChart from "@/app/_chartsAdmin/revenueCharts";
import CategoryPieChart from "@/app/_chartsAdmin/categoryPieCharts";
import WeeklyRateChart from "@/app/_chartsAdmin/reatCharts";
import MonthlyGrowthChart from "@/app/_chartsAdmin/growthCharts";

export default function Analytics() {
  const analyticsOverviewData = [
    {
      id: 1,
      title: "Total Revenue",
      amount: "$124,563.89",
      increase: "+20.1% vs last month",
      icon: <FaDollarSign />,
    },
    {
      id: 2,
      title: "Average Order Value",
      amount: "$248.32",
      increase: "+12.3% vs last month",
      icon: <IoCart />,
    },
    {
      id: 3,
      title: "Customer Lifetime Value",
      amount: "$1,242.78",
      increase: "+15.8% vs last month",
      icon: <FaUsers />,
    },
    {
      id: 4,
      title: "Revenue Growth",
      amount: "22.4%",
      increase: "+4.3% vs last month",
      icon: <FaChartLine />,
    },
  ];
  return (
    <div className="analytics">
      <h1 className="admin-page-name">Analytics</h1>
      <section className="overview">
        <AdminCardOverview cardOverviewData={analyticsOverviewData} />
      </section>
      <section className="content">
        <div className="revenue-charts">
          <h3 className="admin-section-name">Revenue Overview</h3>
          <RevenueChart />
        </div>
        <div className="sales-charts">
          <h3 className="admin-section-name">Sales by Category</h3>
          <CategoryPieChart />
        </div>
        <div className="rate-charts">
          <h3 className="admin-section-name">Conversion Rate</h3>
          <WeeklyRateChart />
        </div>
        <div className="growth-charts">
          <h3 className="admin-section-name">Customer Growth</h3>
          <MonthlyGrowthChart />
        </div>
      </section>
    </div>
  );
}
