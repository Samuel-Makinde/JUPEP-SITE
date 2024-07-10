import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineLogout } from "react-icons/ai";
// import { TbCurrencyNaira } from "react-icons/tb";
import { GoPeople } from "react-icons/go";
// import { IoPricetagOutline } from "react-icons/io5";
import { MdOutlineContactPhone } from "react-icons/md";
import { FiBookOpen, FiBook } from "react-icons/fi";
import { RxPerson } from "react-icons/rx";
import { useGlobalContext } from "../context/AuthContext";
import logo from "../assets/logo/ease read logoooreduced png-09.png";
// import Bglogo from "../assets/logo/ease read logooo png version-07.png"
import { RiArrowDownSFill } from "react-icons/ri";
import { MdOutlinePersonalVideo } from "react-icons/md";
import { PiExam } from "react-icons/pi";
import { GiArtificialIntelligence } from "react-icons/gi";
import { SlCalender } from "react-icons/sl";
import { DarkThemeToggle, Flowbite } from "flowbite-react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { user, LogOut } = useGlobalContext();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const navbarRef = useRef(null);

  // To set mobile navbar toggle
  const handleToggle = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        toggle &&
        navbarRef.current &&
        !navbarRef.current.contains(event.target)
      ) {
        // Clicked outside the navbar
        setToggle(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener when the component unmounts
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
    <main className="fixed w-full h-[60px] flex justify-between font-roboto items-center px-4  lg:px-6 xl:px-20 bg-primary4 dark:bg-darkGray text-primary7 shadow-md z-30 font-euclid capitalize">
      <div onClick={handleToggle} className="md:hidden z-30" ref={navbarRef}>
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
        className="md:hidden w-16  flex h-[32px] justify-center items-center rounded-lg border-[4px] border-[#E5E7EB] cursor-pointer"
      >
        <DarkThemeToggle className="h-[30px]" onClick={handleThemeChange} />
      </div>
      <Link to="/" smooth="true" duration={500}>
        <div className=" h-[28px] md:h-full  md:flex items-center  cursor-pointer ">
          <img src={logo} alt="logo" className=" h-[30px] md:h-[34px]" />
        </div>
      </Link>

      {/* mobile-view-sidebar */}
      <ul
        className={` transform  ease-in-out duration-500 delay-150 ${
          toggle ? "translate-x-0" : "-translate-x-full"
        } w-3/4 bg-primary4 dark:bg-darkGray dark:text-lightGray absolute top-0 left-0 h-screen md:hidden flex flex-col  pt-[50px]  shadow-md `}
      >
        {user ? (
          <p className="w-full dark:text-primary1 text-center text-[22px] font-semibold">
            Welcome {user}
          </p>
        ) : (
          <div>
            <Link to="/sign-up" smooth="true" duration={500}>
              <li className=" leading-[20px] text-[16px] flex px-[24px] py-[14px] mt-[30px] font-medium">
                <RxPerson />
                <h1 className="pl-[10px] cursor-pointer">Sign Up</h1>
              </li>
            </Link>

            <Link to="/login" smooth="true" duration={500}>
              <li className=" leading-[20px] text-base flex  px-[24px] py-[14px] font-normal">
                <RxPerson />
                <h1 className="pl-[10px] cursor-pointer">Log in</h1>
              </li>
            </Link>
          </div>
        )}

        <Link to="/" smooth="true" duration={500}>
          <li
            className={`${
              user ? " mt-[30px]" : "mt-0"
            }  leading-[20px] text-[16px] flex   px-[24px] py-[14px] font-normal `}
          >
            <AiOutlineHome size={20} />
            <h1 className="pl-[10px] cursor-pointer">Home</h1>
          </li>
        </Link>

        <Link to="/about" smooth="true" duration={500}>
          <li className="leading-[20px] text-[16px] flex  px-[24px] py-[14px] font-normal ">
            <GoPeople size={20} />
            <h1 className="pl-[7px] cursor-pointer">About Us</h1>
          </li>
        </Link>

        <Link to="/read-books" smooth="true" duration={500}>
          <li className="leading-[20px] text-[16px] flex  px-[24px] py-[14px] font-normal ">
            <FiBook size={20} />
            <h1 className="pl-[10px] cursor-pointer">Read-Books</h1>
          </li>
        </Link>

        <Link to="/watch-videos" smooth="true" duration={500}>
          <li className="leading-[20px] text-[16px] flex  px-[24px] py-[14px] font-normal ">
            <MdOutlinePersonalVideo size={20} />
            <h1 className="pl-[10px] cursor-pointer">Watch Videos</h1>
          </li>
        </Link>

        <li className=" flex border-b-2 mt-[10px] border-b-[#D4D5DB] mx-[15px] "></li>

        <Link to="/instruction" smooth="true" duration={500}>
          <li className="leading-[20px] text-[16px] flex  px-[24px] py-[14px] font-normal ">
            <PiExam size={20} />
            <h1 className="pl-[10px] cursor-pointer">Take Exams</h1>
          </li>
        </Link>
        {/* <Link to="/easereads-ai" smooth="true" duration={500}> */}
        <Link to="/coming-soon" smooth="true" duration={500}>
          <li className="leading-[20px] text-[16px] flex  px-[24px] py-[14px] font-normal ">
            <GiArtificialIntelligence size={20} />
            <h1 className="pl-[10px] cursor-pointer">Ask EaseReads A.I</h1>
          </li>
        </Link>
        <Link to="/coming-soon" smooth="true" duration={500}>
          <li className="leading-[20px] text-[16px] flex  px-[24px] py-[14px] font-normal ">
            <SlCalender size={20} />
            <h1 className="pl-[10px] cursor-pointer">Study Planner</h1>
          </li>
        </Link>

        <Link to="/contact" smooth="true" duration={500}>
          <li className="leading-[20px] text-[16px] flex  px-[24px] py-[14px] font-normal ">
            <MdOutlineContactPhone size={24} />
            <h1 className="pl-[10px] cursor-pointer">Contact Us</h1>
          </li>
        </Link>

        {/* <Link to="/pricing" smooth="true" duration={500}>
          <li className="text-[#54555B] leading-[20px] text-[16px] flex  px-[24px] py-[16px] font-normal ">
            <IoPricetagOutline size={24} />
            <h1 className="pl-[10px] cursor-pointer">Pricing</h1>
          </li>
        </Link> */}
        {user ? (
          <li
            className="leading-[20px] text-[16px] flex  px-[24px] py-[14px] font-normal"
            onClick={LogOut}
          >
            <AiOutlineLogout size={24} />
            <h1 className="pl-[10px] cursor-pointer">LogOut</h1>
          </li>
        ) : (
          ""
        )}
      </ul>

      {/* big screen topBar */}

      <ul className="hidden flex-row space-x-3 lg:space-x-6 dark:text-lightGray  md:flex items-center">
        <li className="hover:border-b-2 hover:border-b-primary0Blue dark:hover:border-b-sec5 dark:hover:text-primary1">
          <Link to="/" smooth="true" duration={500}>
            {" "}
            Home
          </Link>
        </li>
        <li className="hover:border-b-2 hover:border-b-primary0Blue dark:hover:border-b-sec5 dark:hover:text-primary1">
          <Link to="/about" smooth="true" duration={500}>
            About Us
          </Link>
        </li>

        {/* Add the dropdown for big screens */}
        <li
          className="relative group"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <span className="cursor-pointer flex border-2 border-primary0Blue dark:border-secR p-2 rounded-xl text-primary7 dark:text-lightGray ">
            Solutions Provided
            <RiArrowDownSFill size={24} className="ml-2" />
          </span>
          <ul className="absolute hidden w-[250px] transform  ease-in-out duration-500 delay-700 shadow-md shadow-primary7  bg-primary4  rounded-xl text-primary7 font-medium p-4  space-y-2 group-hover:block">
            <Link to="/read-books" smooth="true" duration={500}>
              <li className="flex items-center p-4 hover:bg-primary6  hover:text-primary1">
                <FiBookOpen size={20} />
                <span className="pl-2 cursor-pointer">Read Books</span>
              </li>
            </Link>

            <Link to="/watch-videos" smooth="true" duration={500}>
              <li className="flex items-center p-4 hover:bg-primary6 hover:text-primary1">
                <MdOutlinePersonalVideo size={20} />
                <span className="pl-2 cursor-pointer">Watch Videos</span>
              </li>
            </Link>

            <Link to="/instruction" smooth="true" duration={500}>
              <li className="flex items-center p-4 hover:bg-primary6 hover:text-primary1">
                <PiExam size={20} />
                <span className="pl-2 cursor-pointer">Take Exam</span>
              </li>
            </Link>

            {/* <Link to="/easereads-ai" smooth="true" duration={500}> */}
            <Link to="/coming-soon" smooth="true" duration={500}>
              <li className="flex items-center p-4 hover:bg-primary6 hover:text-primary1">
                <GiArtificialIntelligence size={20} />
                <span className="pl-2 cursor-pointer">Ask EaseReads A.I</span>
              </li>
            </Link>

            <Link to="/coming-soon" smooth="true" duration={500}>
              <li className="flex items-center p-4 hover:bg-primary6 hover:text-primary1">
                <SlCalender size={20} />
                <span className="pl-2 cursor-pointer">Study Planner</span>
              </li>
            </Link>

            {/* Add more secondary options as needed */}
          </ul>
        </li>

        <li className="hover:border-b-2 hover:border-b-primary0Blue dark:hover:border-b-sec5 dark:hover:text-primary1">
          <Link to="/contact" smooth="true" duration={500}>
            Contact Us
          </Link>
        </li>
        <div
          onClick={handleThemeChange}
          className=" w-16  flex h-[32px] justify-center items-center rounded-lg border-[4px] border-[#E5E7EB] cursor-pointer"
        >
          <DarkThemeToggle className="h-[30px]" onClick={handleThemeChange} />
        </div>
        {user ? (
          <div className="flex flex-col text-center ">
            <p className=" text-[22px] font-semibold md:text-[18px] lg:text-[20px]">
              Welcome {user}
            </p>
            <p
              className="font-medium cursor-pointer hover:border-b-2 hover:border-b-primary0Blue dark:hover:border-b-sec5 dark:hover:text-primary1 "
              onClick={LogOut}
            >
              Logout
            </p>
          </div>
        ) : (
          <div className="flex ">
            <Link to="/sign-up" smooth="true" duration={500}>
              <li className="hover:border-b-2 hover:border-b-primary0Blue dark:hover:border-b-sec5 dark:hover:text-primary1">
                <h1 className="  font-semibold">Sign Up</h1>
              </li>
            </Link>

            <Link to="/login" smooth="true" duration={500}>
              <li className="ml-4 hover:border-b-2 hover:border-b-primary0Blue dark:hover:border-b-sec5 dark:hover:text-primary1">
                <h1 className=" text-primary7 dark:text-secR  font-semibold">
                  Log in
                </h1>
              </li>
            </Link>
          </div>
        )}
      </ul>
    </main>
  );
};

export default Navbar;
