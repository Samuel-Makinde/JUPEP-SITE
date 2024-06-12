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

  return (
    <main className="fixed w-full h-[60px] flex justify-between font-roboto items-center px-4 md:px-6 lg:px-8 xl:px-16 bg-primary4 dark:bg-darkGray text-primary7 shadow-md z-30 font-euclid capitalize">
      <div onClick={handleToggle} className="md:hidden z-30" ref={navbarRef}>
        {toggle ? (
          <div className="w-full h-[32px] bg- cursor-pointer flex justify-end items-center rounded-[20px]">
            <FaTimes className="text-sec6 dark:text-lightGray w-[18px] h-[16px]  transform ease-in-out delay-300 duration-500  hover:scale-110" />
          </div>
        ) : (
          <FaBars className="text-sec6 dark:text-lightGray w-[30px] h-[24px]  cursor-pointer transform hover:scale-110 ease-in-out delay-300 duration-500 " />
        )}
      </div>

      <Link to="/" smooth="true" duration={500}>
        <div className=" h-[28px] md:h-full  md:flex items-center  cursor-pointer ">
          <img src={logo} alt="logo" className=" h-[30px] md:h-[34px]" />
        </div>
      </Link>

      {/* mobile-view-navbar */}
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

        <Link to="/view-subject" smooth="true" duration={500}>
          <li className="leading-[20px] text-[16px] flex  px-[24px] py-[14px] font-normal ">
            <FiBook size={20} />
            <h1 className="pl-[10px] cursor-pointer">Read-Books</h1>
          </li>
        </Link>

        <Link to="/video-page" smooth="true" duration={500}>
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

        {/* <li className="text-[#54555B] leading-[20px] text-[16px] flex  px-[24px] py-[16px] font-normal ">
          <img src={contacts} alt="contact" className="cursor-pointer" />
          <h1 className="pl-[10px] cursor-pointer">Contact us</h1>
        </li> */}

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
            <Link to="/view-subject" smooth="true" duration={500}>
              <li className="flex items-center p-4 hover:bg-primary6  hover:text-primary1">
                <FiBookOpen size={20} />
                <span className="pl-2 cursor-pointer">Read Books</span>
              </li>
            </Link>

            <Link to="/video-page" smooth="true" duration={500}>
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

        {/* <Link to="/pricing" smooth="true" duration={500}>
          <button className="bg-[#4190EA] rounded-md shadow-md shadow-[#4190EA] hover:opacity-80 flex text-white px-[10px] py-[7px]">
            <TbCurrencyNaira size={24} className="mr-[5px]" />
            Pricing
          </button>
        </Link> */}

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
        {/* <Link to="/signup" smooth="true" duration={500}>
        <li >
          <h1 >Sign-up</h1>
        </li>
        </Link>

        <Link to="/login" smooth="true" duration={500}>
        <li >
          
          <h1 >Log in</h1>
        </li>
        </Link> */}
      </ul>
    </main>
  );
};

export default Navbar;
