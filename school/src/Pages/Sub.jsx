import React from "react";
import img from "../Pages/img.png";
import { IoIosCheckmarkCircle } from "react-icons/Io";

const sub = () => {
  return (
    <div className="w-full md:h-[550px] pt-[50px] bg-[#fff3d8] px-4 md:px-6 lg:px-10">
      <div className="w-full md:flex md:justify-evenly">
        <div className="md:text-none text-center">
          <h2 className="md:text-5xl font-bold">Browse Through Jubep Syllabus</h2>
          <p  className="pt-[20px] md:text-xl">
            This is the official Jupeb Government syllabus which contain
            001/002/003/ & 004 <br></br>
            and which the Jupeb textbook follow the arrangement in the syllabus.
          </p>

          <img className="h-[350px] md:hidden block mx-auto my-auto" src={img} alt="book" />

          <div className="text-center ml-[120px] mt-[50px] text-xl">
            <div className="flex">
              <IoIosCheckmarkCircle size={20} className="mr-[10px] mt-[6px]"/> Your Passport to Excellence
            </div>
            <p className="flex">
              <IoIosCheckmarkCircle size={20} className="mr-[10px] mt-[6px]"/> Open Access & premium content
            </p>
            <p className="flex">
              <IoIosCheckmarkCircle size={20} className="mr-[10px] mt-[6px]"/> Your Roadmap to Success
            </p>
          </div>

          <button className="text-center underline  mt-[30px] text-xl mx-auto my-auto">
            <a href="/" download>
              Download government syllabus
            </a>
          </button>
        </div>

        <div className="mb-[120px]">
          <img className="h-[500px] hidden md:block" src={img} alt="book" />
        </div>
      </div>
    </div>
  );
};

export default sub;
