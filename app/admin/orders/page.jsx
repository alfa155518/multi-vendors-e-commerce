import { FiFilter } from "react-icons/fi";
import { BsCart } from "react-icons/bs";
import { BiLineChart } from "react-icons/bi";
import { WiTime9 } from "react-icons/wi";
import { ImWarning } from "react-icons/im";
import AdminCardOverview from "@/app/_components/AdminCardOverview";
import OrdersAndRevenueCharts from "@/app/_chartsAdmin/orderAndRevenueCharts";
import OrderStatusChart from "@/app/_chartsAdmin/orderStatusCharts";
export default function Orders() {
  const ordersOverviewDate = [
    {
      title: "Total Orders",
      amount: " 1,234",
      increase: "+12.5%",
      icon: <BsCart />,
    },
    {
      title: "Order Value",
      amount: "$89,234",
      increase: "+18.2%",
      icon: <BiLineChart />,
    },
    {
      title: "Pending Orders",
      amount: "23",
      increase: "-4.3%",
      icon: <WiTime9 />,
    },
    {
      title: "Failed Orders",
      amount: "5",
      increase: "-2.3%",
      icon: <ImWarning />,
    },
  ];
  const ordersData = [
    {
      customer: "John Doe",
      date: "February 28, 2024",
      items: 3,
      total: "$299.99",
      payment: "Credit Card",
      status: "Completed",
    },
    {
      customer: "Jane Smith",
      date: "February 27, 2024",
      items: 2,
      total: "$199.50",
      payment: "PayPal",
      status: "Processing",
    },
    {
      customer: "Bob Johnson",
      date: "February 26, 2024",
      items: 5,
      total: "$499.99",
      payment: "Credit Card",
      status: "Pending",
    },
    {
      customer: "Alice Brown",
      date: "February 25, 2024",
      items: 1,
      total: "$149.99",
      payment: "Credit Card",
      status: "Completed",
    },
    {
      customer: "Charlie Wilson",
      date: "February 24, 2024",
      items: 4,
      total: "$899.99",
      payment: "Credit Card",
      status: "Failed",
    },
  ];
  return (
    <div className="orders-container">
      {/* Top Elements */}
      <div className="top-element">
        <div className="info">
          <h1 className="admin-page-name">Orders</h1>
          <span>(Total: 2,338 Orders)</span>
        </div>
        <button className="btn-filter">
          <FiFilter /> Filters
        </button>
      </div>
      {/* Overview Cards */}
      <section className="overview">
        <AdminCardOverview cardOverviewData={ordersOverviewDate} />
      </section>

      {/* Charts */}
      <section className="charts-container">
        {/* orderers and revenue Charts */}
        <div className="orderers-and-revenue">
          <h3 className="admin-section-name">📊 Daily Orders & Revenue</h3>
          <OrdersAndRevenueCharts />
        </div>

        {/* orderers status Charts */}
        <div className="orders-status">
          <h3 className="admin-section-name">📦 Order Status Overview</h3>
          <OrderStatusChart />
        </div>
      </section>

      {/* Orders Table */}
      <section className="orders-table">
        <table>
          <thead>
            <tr>
              <th>Customer</th>
              <th>Date</th>
              <th>Items</th>
              <th>Total</th>
              <th>Payment</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {ordersData.map((order, i) => (
              <tr key={i}>
                <td className="customer">{order.customer}</td>
                <td className="date">{order.date}</td>
                <td className="items">{order.items}</td>
                <td className="total">{order.total}</td>
                <td className="payment">{order.payment}</td>
                <td
                  className={`status  ${
                    order.status === "Completed"
                      ? "completed"
                      : order.status === "Pending"
                      ? "pending"
                      : order.status === "Failed"
                      ? "failed"
                      : order.status === "Processing"
                      ? "processing"
                      : ""
                  }`}>
                  {order.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
