import revenue from "../assets/Admin/dashboard_user.png";
import balance from "../assets/Admin/dashboard_user.png";
import user from "../assets/Admin/dashboard_user.png";
import loan from "../assets/Admin/dashboard_user.png";

const Overview = [
  {
    id: 1,
    name: "Total Payment",
    date_time: "02, Mar 23, 10:30 ",
    revenue: "Transaction Commission",
    amount: "10",
    image: revenue,
  },
  {
    id: 2,
    name: "Successful Payment",
    dateAndTime: "02, Mar 23, 10:30 ",
    revenue: "Loan Interest",
    amount: "10",
    image: balance,
  },
  {
    id: 3,
    name: "Failed Transactions",
    dateAndTime: "02, Mar 23, 10:30 ",
    revenue: "Meter Sales",
    amount: "10",
    image: user,
  },
  {
    id: 4,
    name: "Cancel Transaction",
    dateAndTime: "02, Mar 23, 10:30 ",
    revenue: "Dashboard Sales",
    amount: "10",
    image: loan,
  },
];

export default Overview;
