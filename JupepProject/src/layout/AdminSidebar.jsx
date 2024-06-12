import dashboard from "../assets/Admin/side_dashboard.png";
import dashboardColor from "../assets/Admin/side_dashboard_color.png";
import revenue from "../assets/Admin/side_revenue.png";
import revenueWhite from "../assets/Admin/revenue_white.png";
import user from "../assets/Admin/side_user.png";
import userWhite from "../assets/Admin/user_white.png";
import setting from "../assets/Admin/side_setting.png";
import settingWhite from "../assets/Admin/setting_white.png";
import message from "../assets/Admin/side_message.png";
import messageWhite from "../assets/Admin/message_white.png";
import logoutImg from "../assets/Admin/side_logout.png";
import transction from "../assets/Admin/side_transaction.png";
import transctionWhite from "../assets/Admin/transaction_white.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { logout } from "../features/login";

const AdminSidebar = () => {
  const [isActive, setIsActive] = useState("/admin");
  const handleOptionClick = (option) => {
    setIsActive(option);
  };

  //   const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    // Dispatch the logout action
    // dispatch(logout());
    localStorage.removeItem("authToken");
    localStorage.removeItem("email");
    localStorage.removeItem("phone");
    navigate("/admin-login");
  };
  return (
    <main className="fixed w-[20%] 2xl:w-[25%] top-0 h-screen flex flex-col items-center dark:bg-primary3 shadow-2xl pt-28 2xl:pt-32 font-sans">
      <NavLink
        to="/admin/dashboard"
        className={`w-[80%] 2xl:h-20 h-12 dark:text-sec2 ${
          isActive === "/admin"
            ? "rounded-[10px] bg-primary2 dark:text-primary3 text-primary1"
            : ""
        } hover:bg-primary2  hover:text-primary1 hover:rounded-[10px]`}
        onClick={() => handleOptionClick("/admin")}
      >
        <button className="w-full h-full flex justify-center items-center font-semibold">
          {isActive === "/admin" ? (
            <img src={dashboard} alt="dashborad" className="mr-5 " />
          ) : (
            <img src={dashboardColor} alt="dashborad" className="mr-5 " />
          )}
          <p className="w-[60%] text-left">Dashboard</p>
        </button>
      </NavLink>

      <NavLink
        to="/admin/users"
        smooth="true"
        duration={500}
        className={`w-[80%] 2xl:h-20 h-[50px] dark:text-sec2  ${
          isActive === "/admin/users"
            ? "rounded-[10px] bg-primary2 dark:text-primary3 text-primary1"
            : ""
        }  mt-4 2xl:mt-6 hover:bg-primary2  hover:text-primary3 hover:rounded-[10px]`}
        onClick={() => handleOptionClick("/admin/users")}
      >
        <button className="w-full h-full flex justify-center items-center font-semibold capitalize">
          {isActive === "/admin/users" ? (
            <img src={userWhite} alt="dashborad" className="mr-5 " />
          ) : (
            <img src={user} alt="dashborad" className="mr-5 " />
          )}
          <p className="w-[60%] text-left">users</p>
        </button>
      </NavLink>

      <NavLink
        to="/admin/transaction"
        smooth="true"
        duration={500}
        className={`w-[80%] 2xl:h-20 h-[50px] dark:text-sec2 ${
          isActive === "/admin/transaction"
            ? "rounded-[10px] bg-primary2 dark:text-primary3 text-primary1"
            : ""
        } mt-4 2xl:mt-6 hover:bg-primary2  hover:text-primary3 hover:rounded-[10px]`}
        onClick={() => handleOptionClick("/admin/transaction")}
      >
        <button className="w-full h-full flex justify-center items-center font-semibold capitalize">
          {isActive === "/admin/transaction" ? (
            <img src={transctionWhite} alt="dashborad" className="mr-5 " />
          ) : (
            <img src={transction} alt="dashborad" className="mr-5 " />
          )}
          <p className="w-[60%] text-left">transaction</p>
        </button>
      </NavLink>

      <NavLink
        to="/admin/messages"
        className={`w-[80%] 2xl:h-20 h-[50px] dark:text-sec2  ${
          isActive === "/admin/messages"
            ? "rounded-[10px] bg-primary2 dark:text-primary3 text-primary1"
            : ""
        } mt-4 2xl:mt-6 hover:bg-primary2  hover:text-primary3 hover:rounded-[10px]`}
        onClick={() => handleOptionClick("/admin/messages")}
      >
        <button className="w-full h-full flex justify-center items-center font-semibold capitalize">
          {isActive === "/admin/messages" ? (
            <img src={messageWhite} alt="dashborad" className="mr-5 " />
          ) : (
            <img src={message} alt="dashborad" className="mr-5 " />
          )}
          <p className="w-[60%] text-left flex">
            messages{" "}
            <span className="bg-sec8 h-5 w-5 text-primary1 flex justify-center items-center ml-2 mt-1 rounded-lg font-sans text-[12px]">
              5
            </span>
          </p>
        </button>
      </NavLink>

      <NavLink
        to="/admin/support"
        className={`w-[80%] 2xl:h-20 h-[50px] dark:text-sec2  ${
          isActive === "/admin/support"
            ? "rounded-[10px] bg-primary2 dark:text-primary3 text-primary1"
            : ""
        } mt-4 2xl:mt-6 hover:bg-primary2  hover:text-primary3 hover:rounded-[10px]`}
        onClick={() => handleOptionClick("/admin/support")}
      >
        <button className="w-full h-full flex justify-center items-center font-semibold capitalize">
          {isActive === "/admin/support" ? (
            <img src={messageWhite} alt="dashborad" className="mr-5 " />
          ) : (
            <img src={message} alt="dashborad" className="mr-5 " />
          )}
          <p className="w-[60%] text-left flex">
            Support
            <span className="bg-sec8 h-5 w-5 text-primary1 flex justify-center items-center ml-2 mt-1 rounded-lg font-sans text-[12px]">
              10
            </span>
          </p>
        </button>
      </NavLink>

      <NavLink
        to="/admin/setting"
        className={`w-[80%] 2xl:h-20 h-[50px] dark:text-sec2 ${
          isActive === "/admin/setting"
            ? "rounded-[10px] bg-primary2 dark:text-primary3 text-primary1"
            : ""
        } mt-4 2xl:mt-6 hover:bg-primary2  hover:text-primary3 hover:rounded-[10px]`}
        onClick={() => handleOptionClick("/admin/setting")}
      >
        <button className="w-full h-full flex justify-center items-center font-semibold capitalize">
          {isActive === "/admin/setting" ? (
            <img src={settingWhite} alt="dashborad" className="mr-5 " />
          ) : (
            <img src={setting} alt="dashborad" className="mr-5 " />
          )}
          <p className="w-[60%] text-left">settings</p>
        </button>
      </NavLink>

      <div className="w-[80%] 2xl:h-20 h-[50px] dark:text-sec2 rounded-[10px] mt-[15px] 2xl:mt-5 hover:bg-primary2 hover:text-primary3 ">
        <button
          className="w-full h-full flex justify-center items-center font-semibold capitalize"
          onClick={() => handleLogout()}
        >
          <img
            src={logoutImg}
            alt="logout"
            className="mr-[20px] text-primary2"
          />
          <p className="w-[60%] text-left">logout</p>
        </button>
      </div>
    </main>
  );
};

export default AdminSidebar;
