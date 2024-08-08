import React, { useState, useEffect } from "react";
import bell from "../assets/Admin/bell_icn.png";
import usersImage from "../assets/Admin/Ellipse 246.png";
import logo from "../assets/logo/ease read logoooreduced png-09.png";
import { DarkThemeToggle, Flowbite } from "flowbite-react";

const AdminNavbar = () => {
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
    <Flowbite>
      <main className="fixed w-full h-[78px] 2xl:h-[128px] bg-white dark:bg-gray-800 shadow-2xl flex justify-between items-center px-8 z-20">
        <div className="h-[28px] md:h-full md:flex items-center cursor-pointer">
          <img src={logo} alt="logo" className="h-[30px] md:h-[34px]" />
        </div>

        <div className="2xl:w-[321px] w-[320px] flex justify-between items-center">
          <div
            onClick={handleThemeChange}
            className=" w-16  flex h-[42px] justify-center items-center rounded-lg border-[4px] border-[#E5E7EB] cursor-pointer"
          >
            <DarkThemeToggle className="h-[30px]" onClick={handleThemeChange} />
          </div>
          <img
            src={bell}
            alt="bell"
            className="w-[20px] h-[28px] 2xl:w-[28px] 2xl:h-[38px] dark:text-blue"
          />
          <img
            src={usersImage}
            alt="users"
            className="w-[48px] h-[48px] 2xl:w-[67px] 2xl:h-[67px]"
          />
          <div className="">
            <p className="text-[20px] 2xl:text-[24px] font-semibold dark:text-white">
              Taye Ogundiran
            </p>
            <p className="text-[#707070] text-[16px] 2xl:text-[18px] font-semibold dark:text-gray-400">
              Admin
            </p>
          </div>
        </div>
      </main>
    </Flowbite>
  );
};

export default AdminNavbar;
