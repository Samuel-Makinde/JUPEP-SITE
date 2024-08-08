import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineLogout } from "react-icons/ai";
import { GoPeople } from "react-icons/go";
import { useGlobalContext } from "../context/AuthContext";
import logo from "../assets/logo/ease read logoooreduced png-09.png";
import { MdOutlinePersonalVideo } from "react-icons/md";
import { PiExam } from "react-icons/pi";
import { GiArtificialIntelligence } from "react-icons/gi";
import { SlCalender } from "react-icons/sl";
import { DarkThemeToggle, Button } from "flowbite-react";
import { BsPersonVideo3 } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa6";
import UserNotificationModal from "../components/UserNotificationModal";

const UserNavbar = ({ setBlur, blur }) => {
  const [toggle, setToggle] = useState(false);
  const { user, LogOut } = useGlobalContext();
  const [openNft, setOpenNft] = useState(false);

  const navbarRef = useRef(null);

  const notificationRef = useRef(null);

  // To set mobile navbar toggle
  const handleToggle = () => {
    setToggle(!toggle);
    setBlur(toggle || !openNft);
  };

  // To set notification toggle
  const handleNotificationToggle = () => {
    setOpenNft(!openNft);
    setBlur(toggle || !openNft);
  };

  // Handle clicks outside of the notification modal
  // useEffect(() => {
  //   const handleNftClickOutside = (event) => {
  //     if (
  //       openNft &&
  //       notificationRef.current &&
  //       !notificationRef.current.contains(event.target) &&
  //       (!navbarRef.current || !navbarRef.current.contains(event.target))
  //     ) {
  //       setOpenNft(false);
  //       setBlur(false);
  //     }
  //   };

  //   document.addEventListener("mousedown", handleNftClickOutside);

  //   return () => {
  //     document.removeEventListener("mousedown", handleNftClickOutside);
  //   };
  // }, [openNft]);

  // Handle clicks outside of the navbar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        toggle &&
        navbarRef.current &&
        !navbarRef.current.contains(event.target) &&
        (!notificationRef.current ||
          !notificationRef.current.contains(event.target))
      ) {
        setToggle(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggle]);

  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });

  // Handle theme change
  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  // Apply theme class to body and save preference to local storage
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <main
      className={`fixed w-full h-[68px] 2xl:h-[128px] flex justify-between font-roboto items-center px-4  lg:px-6 xl:px-16 bg-primary1 dark:bg-darkGray text-primary7 shadow-md z-30 font-euclid capitalize `}
    >
      <div onClick={handleToggle} className="lg:hidden z-30" ref={navbarRef}>
        {toggle ? (
          <div className="w-full h-[32px] bg- cursor-pointer flex justify-end items-center rounded-[20px]">
            <FaTimes className="text-sec6 dark:text-lightGray w-[18px] h-[16px]  transform ease-in-out delay-300 duration-500  hover:scale-110" />
          </div>
        ) : (
          <FaBars className="text-sec6 dark:text-lightGray w-[30px] h-[24px]  cursor-pointer transform hover:scale-110 ease-in-out delay-300 duration-500 " />
        )}
      </div>

      <div
        onClick={handleThemeChange}
        className=" w-16 lg:hidden  flex h-[32px] justify-center items-center rounded-lg border-[4px] border-[#E5E7EB] cursor-pointer"
      >
        <DarkThemeToggle className="h-[30px]" onClick={handleThemeChange} />
      </div>
      <div
        className="cursor-pointer transform ease-in-out delay-300 duration-500 hover:scale-110"
        onClick={handleNotificationToggle}
        ref={notificationRef}
      >
        <FaRegBell
          size={28}
          className="text-sec6 lg:hidden dark:text-lightGray"
        />
      </div>

      <Link to="/user" smooth="true" duration={500}>
        <div className="lg:hidden h-[28px] md:h-full  md:flex items-center  cursor-pointer ">
          <img src={logo} alt="logo" className=" h-[30px] md:h-[34px]" />
        </div>
      </Link>

      <div className="w-full hidden lg:flex lg:flex-row-reverse justify-between">
        <div className="flex ">
          <div
            className=" cursor-pointer transform ease-in-out delay-300 duration-500 hover:scale-110"
            onClick={handleNotificationToggle}
            ref={notificationRef}
          >
            <FaRegBell
              size={28}
              className="text-sec6 dark:text-lightGray mt-2 mr-5"
            />
          </div>
          <div
            onClick={handleThemeChange}
            className=" w-16 mr-7 flex h-[42px] justify-center items-center rounded-lg border-[4px] border-[#E5E7EB] cursor-pointer"
          >
            <DarkThemeToggle
              className="h-[30px] "
              onClick={handleThemeChange}
            />
          </div>
          <Link to="/user/dashboard" className=" " smooth="true" duration={500}>
            <button className="p-3 h-[42px] rounded-md text-primary1 bg-sec1">
              Dashboard
            </button>
          </Link>
        </div>

        <Link to="/user" smooth="true" duration={500}>
          <div className=" h-[28px] md:h-full  md:flex items-center  cursor-pointer ">
            <img src={logo} alt="logo" className=" h-[30px] md:h-[34px]" />
          </div>
        </Link>
      </div>

      {/* mobile-view-sidebar */}
      <ul
        className={` transform  ease-in-out duration-500 delay-150  ${
          toggle ? "translate-x-0" : "-translate-x-full"
        } w-3/4 bg-primary4 dark:bg-darkGray dark:text-lightGray absolute top-0 left-0 h-screen lg:hidden flex flex-col  pt-[80px]  shadow-md `}
      >
        <Link to="/user/dashboard" smooth="true" duration={500}>
          <li
            className={`${
              user ? " mt-[30px]" : "mt-0"
            }  leading-[20px] text-[16px] flex   px-[24px] py-[14px] font-normal `}
          >
            <AiOutlineHome size={20} />
            <h1 className="pl-[10px] cursor-pointer">Dashboard</h1>
          </li>
        </Link>

        <Link to="/user/dashboard/my-learning" smooth="true" duration={500}>
          <li className="leading-[20px] text-[16px] flex  px-[24px] py-[14px] font-normal ">
            <GoPeople size={20} />
            <h1 className="pl-[7px] cursor-pointer">My Books</h1>
          </li>
        </Link>

        <Link to="/user/dashboard/my-videos" smooth="true" duration={500}>
          <li className="leading-[20px] text-[16px] flex  px-[24px] py-[14px] font-normal ">
            <BsPersonVideo3 size={20} />
            <h1 className="pl-[10px] cursor-pointer">My Videos</h1>
          </li>
        </Link>

        <Link to="/user/dashboard/exam-practice" smooth="true" duration={500}>
          <li className="leading-[20px] text-[16px] flex  px-[24px] py-[14px] font-normal ">
            <MdOutlinePersonalVideo size={20} />
            <h1 className="pl-[10px] cursor-pointer">Exam Practice</h1>
          </li>
        </Link>

        <Link to="/user/dashboard/subscriptions" smooth="true" duration={500}>
          <li className="leading-[20px] text-[16px] flex  px-[24px] py-[14px] font-normal ">
            <PiExam size={20} />
            <h1 className="pl-[10px] cursor-pointer"> My Subscriptions</h1>
          </li>
        </Link>

        <li className=" flex border-b-2 mt-[10px] border-b-[#D4D5DB] mx-[15px] "></li>
        <h1 className="mt-5 ml-10 text-sec6 font-semibold">Account Setting</h1>
        <Link to="/user/dashboard/help-center" smooth="true" duration={500}>
          <li className="leading-[20px] text-[16px] flex  px-[24px] py-[14px] font-normal ">
            <GiArtificialIntelligence size={20} />
            <h1 className="pl-[10px] cursor-pointer">Help Center</h1>
          </li>
        </Link>
        <Link to="/user/dashboard/edit-profile" smooth="true" duration={500}>
          <li className="leading-[20px] text-[16px] flex  px-[24px] py-[14px] font-normal ">
            <SlCalender size={20} />
            <h1 className="pl-[10px] cursor-pointer">Profile Details</h1>
          </li>
        </Link>

        <li
          className="leading-[20px] text-[16px] flex  px-[24px] py-[14px] font-normal"
          onClick={LogOut}
        >
          <AiOutlineLogout size={24} />
          <h1 className="pl-[10px] cursor-pointer">LogOut</h1>
        </li>
      </ul>
      {openNft ? (
        <div
          className={` transform  ease-in-out duration-500 delay-150  ${
            openNft ? "translate-y-0" : "-translate-y-full"
          } w-full z-50 md:w-2/4 xl:w-[30%] bg-primary4 dark:bg-darkGray dark:text-lightGray absolute top-0 right-0 h-screen  flex flex-col    shadow-md `}
        >
          <UserNotificationModal
            setOpenNft={setOpenNft}
            openNotification={openNft}
            setBlur={setBlur}
            blur={blur}
          />
        </div>
      ) : (
        ""
      )}
    </main>
  );
};

export default UserNavbar;
