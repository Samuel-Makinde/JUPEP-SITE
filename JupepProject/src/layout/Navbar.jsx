import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
// import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
// import { BsSearch } from "react-icons/bs";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  // const [lgtoggle, setLgToggle] = useState(false);

  // const handleMouseOver = () => {
  //   setLgToggle(true);
  //   console.log("calling toggle");
  // };
  // const handleMouseOut = () => {
  //   setLgToggle(false);
  //   console.log("removing toggle");
  // };

  // To set mobile navbar toggle
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <main className="fixed w-full h-[60px] md:h-[60px] flex justify-between items-center px-4 bg-white shadow-sm z-20 font-euclid">
      <div onClick={handleToggle} className="md:hidden z-10">
        {toggle ? (
          <div className="w-[32px] h-[32px] bg-[#EDEFFD] cursor-pointer flex justify-center items-center rounded-[20px]">
            <FaTimes className="text-[#54555B] w-[18px] h-[16px]   transition-transform ease-in-out delay-1000 duration-1000 transform hover:scale-110" />
          </div>
        ) : (
          <FaBars className="text-[#54555B] w-[18px] h-[16px]  cursor-pointer transition-transform hover:scale-110 ease-in-out delay-1000 duration-1000 transform" />
        )}
      </div>
      {/* <Link to="/"> */}
      <div className="w-[93px] h-[24px] md:w-[175px] md:h-[50px] ml-[20px] cursor-pointer ">
        {/* <img src={logoImage} alt="logoImage" /> */}
        <h1>Booklandia</h1>
      </div>
      {/* </Link> */}

      {/* mobile-view-navbar */}
      <ul
        className={`${
          toggle ? "block" : "hidden"
        } w-3/4 bg-white absolute top-0 left-0 h-screen md:hidden flex flex-col  pt-[100px]   `}
      >
        {/* <Link to="/signup"> */}
        <li className="text-[#04050C] leading-[20px] text-[16px] flex px-[24px] py-[16px]  font-medium">
          {/* <img src={person1} alt="account" className="cursor-pointer" /> */}
          <h1 className="pl-[10px] cursor-pointer">Create account</h1>
        </li>
        {/* </Link> */}

        {/* <Link to="/login"> */}
        <li className="text-[#54555B] leading-[20px] text-[16px] flex  px-[24px] py-[16px] font-normal ">
          {/* <img src={person2} alt="login" className="cursor-pointer" /> */}
          <h1 className="pl-[10px] cursor-pointer">Log in</h1>
        </li>
        {/* </Link> */}

        {/* <Link to="/"> */}
        <li className="text-[#54555B] leading-[20px] text-[16px] flex  px-[24px] py-[16px] font-normal ">
          <AiOutlineHome size={20} />
          <h1 className="pl-[10px] cursor-pointer">Home</h1>
        </li>
        {/* </Link> */}

        {/* <Link to="/savedproduct"> */}
        <li className="text-[#54555B] leading-[20px] text-[16px] flex  px-[24px] py-[16px] font-normal ">
          {/* <img src={love} alt="cart" className="cursor-pointer" /> */}
          <h1 className="pl-[7px] cursor-pointer">Saved hostel</h1>
        </li>
        {/* </Link> */}

        {/* <Link to="/cart"> */}
        <li className="text-[#54555B] leading-[20px] text-[16px] flex  px-[24px] py-[16px] font-normal ">
          {/* <img src={cart} alt="cart" className="cursor-pointer" /> */}
          <h1 className="pl-[10px] cursor-pointer">Cart</h1>
        </li>
        {/* </Link> */}

        <li className=" flex border-b-2 mt-[10px] border-b-[#D4D5DB] mx-[15px] "></li>

        {/* <Link to="/about"> */}
        <li className="text-[#54555B] leading-[20px] text-[16px] flex  px-[24px] py-[16px] font-normal ">
          {/* <img src={aboutUs} alt="about" className="cursor-pointer" /> */}
          <h1 className="pl-[10px] cursor-pointer">About us</h1>
        </li>
        {/* </Link> */}

        {/* <li className="text-[#54555B] leading-[20px] text-[16px] flex  px-[24px] py-[16px] font-normal ">
          <img src={contacts} alt="contact" className="cursor-pointer" />
          <h1 className="pl-[10px] cursor-pointer">Contact us</h1>
        </li> */}

        {/* <Link to="/staff"> */}
        <li className="text-[#54555B] leading-[20px] text-[16px] flex  px-[24px] py-[16px] font-normal ">
          {/* <img src={staffs} alt="staffs" className="cursor-pointer" /> */}
          <h1 className="pl-[10px] cursor-pointer">Staff page</h1>
        </li>
        {/* </Link> */}
      </ul>

      {/* big screen topBar */}

      <ul className="hidden flex-row space-x-6 mr-[70px]  md:flex">
        <li>
          {/* <Link to="home" smooth={true} duration={500}> */}
          Home
          {/* </Link> */}
        </li>
        <li>
          {/* <Link to="about" smooth={true} duration={500}> */}
          About
          {/* </Link> */}
        </li>
        <li>
          {/* <Link to="skills" smooth={true} duration={500}> */}
          View Subjects
          {/* </Link> */}
        </li>
        <li>Compare Syllabus</li>
        <li>
          {/* <Link to="projects" smooth={true} duration={500}> */}
          Contact
          {/* </Link> */}
        </li>
        <li className="">
          {/* <Link to="contacts" smooth={true} duration={500}> */}
          Pricing Category
          {/* </Link> */}
        </li>
      </ul>
    </main>
  );
};

export default Navbar;
