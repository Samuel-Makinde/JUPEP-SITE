import logoutImg from "../assets/Admin/side_logout.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaBook } from "react-icons/fa";
import { BsPersonVideo3 } from "react-icons/bs";
import { PiExamFill } from "react-icons/pi";
import { FaHouse } from "react-icons/fa6";
import { ImProfile } from "react-icons/im";
import { MdOutlineHelp } from "react-icons/md";
import { MdDashboard } from "react-icons/md";

// import { useDispatch } from "react-redux";
// import { logout } from "../features/login";

const UserSidebar = ({ setBlur }) => {
  const [isActive, setIsActive] = useState(null);
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
    <main
      className={`fixed hidden lg:flex w-[27%] xl:w-[23%] top-0 h-screen  lg:flex-col lg:items-center dark:bg-primary3 shadow-2xl pt-28 2xl:pt-32 font-sans ${
        setBlur ? "blur-sm" : ""
      }`}
    >
      <NavLink
        to="/user/dashboard"
        className={`w-[80%] 2xl:h-20 h-10 dark:text-sec2 ${
          isActive === "/user"
            ? "rounded-[10px] bg-primary2 dark:text-primary3 text-primary1"
            : ""
        } hover:bg-primary2  hover:text-primary3 hover:rounded-[10px]`}
        onClick={() => handleOptionClick("/user")}
      >
        <button className="w-full h-full flex justify-center items-center font-semibold">
          {isActive === "/user/dashboard" ? (
            <MdDashboard size={22} className="mr-5 text-primary1 " />
          ) : (
            <MdDashboard size={22} className="mr-5" />
          )}
          <p className="w-[60%] text-left">Dashboard</p>
        </button>
      </NavLink>

      <NavLink
        to="/user/dashboard/my-learning"
        smooth="true"
        duration={500}
        className={`w-[80%] 2xl:h-20 h-10 dark:text-sec2  ${
          isActive === "/user/dashboard/my-learning"
            ? "rounded-[10px] bg-primary2 dark:text-primary3 text-primary1"
            : ""
        }  mt-4 2xl:mt-6 hover:bg-primary2  hover:text-primary3 hover:rounded-[10px]`}
        onClick={() => handleOptionClick("/user/dashboard/my-learning")}
      >
        <button className="w-full h-full flex justify-center items-center font-semibold capitalize">
          {isActive === "/user/dashboard/my-learning" ? (
            <FaBook size={22} className="mr-5 text-primary1 " />
          ) : (
            <FaBook size={22} className="mr-5 " />
          )}
          <p className="w-[60%] text-left">My Books</p>
        </button>
      </NavLink>

      <NavLink
        to="/user/dashboard/my-videos"
        smooth="true"
        duration={500}
        className={`w-[80%] 2xl:h-20 h-10 dark:text-sec2 ${
          isActive === "/user/dashboard/my-videos"
            ? "rounded-[10px] bg-primary2 dark:text-primary3 text-primary1"
            : ""
        } mt-4 2xl:mt-6 hover:bg-primary2  hover:text-primary3 hover:rounded-[10px]`}
        onClick={() => handleOptionClick("/user/dashboard/my-videos")}
      >
        <button className="w-full h-full flex justify-center items-center font-semibold capitalize">
          {isActive === "/user/dashboard/my-videos" ? (
            <BsPersonVideo3 size={22} className="mr-5 text-primary1" />
          ) : (
            <BsPersonVideo3 size={22} className="mr-5" />
          )}
          <p className="w-[60%] text-left">My Videos</p>
        </button>
      </NavLink>

      <NavLink
        to="/user/dashboard/exam-practice"
        className={`w-[80%] 2xl:h-20 h-10 dark:text-sec2 ${
          isActive === "/user/dashboard/exam-practice"
            ? "rounded-[10px] bg-primary2 dark:text-primary3 text-primary1"
            : ""
        } mt-4 2xl:mt-6 hover:bg-primary2  hover:text-primary3 hover:rounded-[10px]`}
        onClick={() => handleOptionClick("/user/dashboard/exam-practice")}
      >
        <button className="w-full h-full flex justify-center items-center font-semibold capitalize">
          {isActive === "/user/dashboard/exam-practice" ? (
            <PiExamFill size={22} className="mr-5 text-primary1" />
          ) : (
            <PiExamFill size={22} className="mr-5 " />
          )}
          <p className="w-[60%] text-left">Exam Practice</p>
        </button>
      </NavLink>

      <NavLink
        to="/user/dashboard/subscriptions"
        className={`w-[80%] 2xl:h-20 h-10 dark:text-sec2  ${
          isActive === "/user/dashboard/subscriptions"
            ? "rounded-[10px] bg-primary2 dark:text-primary3 text-primary1"
            : ""
        } mt-4 2xl:mt-6 hover:bg-primary2  hover:text-primary3 hover:rounded-[10px]`}
        onClick={() => handleOptionClick("/user/dashboard/subscriptions")}
      >
        <button className="w-full h-full flex justify-center items-center font-semibold capitalize">
          {isActive === "/user/dashboard/subscriptions" ? (
            <FaHouse size={22} className="mr-5 text-primary1" />
          ) : (
            <FaHouse size={22} className="mr-5 " />
          )}
          <p className="w-[60%] text-left flex">My Subscriptions</p>
        </button>
      </NavLink>

      {/* <h1 className="mt-4 text-sec6 font-semibold">Account Setting</h1> */}

      <NavLink
        to="/user/dashboard/help-center"
        className={`w-[80%] 2xl:h-20 h-10 dark:text-sec2  ${
          isActive === "/user/dashboard/help-center"
            ? "rounded-[10px] bg-primary2 dark:text-primary3 text-primary1"
            : ""
        } mt-4 2xl:mt-6 hover:bg-primary2  hover:text-primary3 hover:rounded-[10px]`}
        onClick={() => handleOptionClick("/user/dashboard/help-center")}
      >
        <button className="w-full h-full flex justify-center items-center font-semibold capitalize">
          {isActive === "/user/dashboard/help-center" ? (
            <MdOutlineHelp size={22} className="mr-5 text-primary1" />
          ) : (
            <MdOutlineHelp size={22} className="mr-5 " />
          )}
          <p className="w-[60%] text-left flex ">Help Center</p>
        </button>
      </NavLink>

      <NavLink
        to="/user/dashboard/edit-profile"
        className={`w-[80%] 2xl:h-20 h-10 dark:text-sec2  ${
          isActive === "/user/dashboard/edit-profile"
            ? "rounded-[10px] bg-primary2 dark:text-primary3 text-primary1"
            : ""
        } mt-4 2xl:mt-6 hover:bg-primary2  hover:text-primary3 hover:rounded-[10px]`}
        onClick={() => handleOptionClick("/user/dashboard/edit-profile")}
      >
        <button className="w-full h-full flex justify-center items-center font-semibold capitalize">
          {isActive === "/user/dashboard/edit-profile" ? (
            <ImProfile size={22} className="mr-5 text-primary1" />
          ) : (
            <ImProfile size={22} className="mr-5 " />
          )}
          <p className="w-[60%] text-left flex">Profile Details</p>
        </button>
      </NavLink>

      <div className="w-[80%] 2xl:h-20 h-10 dark:text-sec2 rounded-[10px] mt-[15px] 2xl:mt-5 hover:bg-primary2 hover:text-primary3 ">
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

export default UserSidebar;
