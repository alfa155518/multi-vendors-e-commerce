import { LuUserPlus } from "react-icons/lu";
import { LuUsers } from "react-icons/lu";
import { TbActivityHeartbeat } from "react-icons/tb";
import { RiShoppingBag4Fill } from "react-icons/ri";

export default function usersOverviewData(users) {
  const usersOverviewData = [
    {
      title: "Total Users",
      amount: users.length,
      increase: "+15.3%",
      icon: <LuUsers />,
    },
    {
      title: "New Users",
      amount: 1,
      increase: "+28.4%",
      icon: <LuUserPlus />,
    },
    {
      title: "Active Users",
      amount: users.length,
      increase: "+12.5%",
      icon: <TbActivityHeartbeat />,
    },
    {
      title: "Orders/User",
      amount: 3.2,
      increase: "+4.3%",
      icon: <RiShoppingBag4Fill />,
    },
  ];
  return usersOverviewData;
}
