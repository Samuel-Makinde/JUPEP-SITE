import React from "react";
import img from "../Pages/img.png";
// import { IoIosCheckmarkCircle } from "react-icons/Io";

const sub = () => {
  return (
    <div className="w-full md:h-[550px]">
      {/* front page */}

      <div className="text-center bg-[#fff3d8] pt-[50px]">
          <h2 className="md:text-5xl text-2xl font-bold">
            Browse Through Jubep Syllabus
          </h2>
          <p className="pt-[20px] text-2xl">Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
          </div>
      <div className="w-full md:flex md:justify-evenly bg-[#fff3d8]">
        <div className="md:text-none text-center pt-[60px]">
          <h3 className="text-4xl font-bold">Jupeb Government Syllabus</h3>
          <p className="pt-[20px] md:text-xl">
            This is the official Jupeb Government syllabus which contain
            001/002/003/ & 004 <br></br>
            and which the Jupeb textbook follow the arrangement in the syllabus.
          </p>
          <p className="underline mt-[30px] text-xl md:pb-0 pb-[80px] pl-[10px] cursor-pointer "><a href="/"></a>Download government syllabus</p>

          <img
            className="h-[400px] md:hidden block mx-auto my-auto md:mt-0 mt-[10px]"
            src={img}
            alt="book"
          />

          {/* <div className="w-full sm:pl-[120px] pl-[20px] mt-[20px] text-xl">
            <p className="flex  items-center">
              <IoIosCheckmarkCircle size={20} className="mr-[10px] mt-[6px]" />{" "}
              Your Passport to Excellence
            </p>
            <p className="flex  items-center">
              <IoIosCheckmarkCircle size={20} className="mr-[10px] mt-[6px]" />{" "}
              Open Access & premium content
            </p>
            <p className="flex items-center">
              <IoIosCheckmarkCircle size={20} className="mr-[10px] mt-[6px]" />{" "}
              Your Roadmap to Success
            </p>
            <p className="underline mt-[30px] text-xl md:pb-0 pb-[80px] pl-[10px] cursor-pointer text-left"><a href="/"></a>Download government syllabus</p>
          </div> */}
        </div>
        

        <div className="my-[60px]">
          <img className="h-[350px] hidden md:block" src={img} alt="book" />
        </div>
      </div>

      {/* <section>
        <div className=" w-full md:grid md:grid-cols-4 md:grid-rows-4 md:space-x-[10px] space-y-[30px] grid grid-cols-2 grid-rows-2  pt-[50px]">
          <img className="h-[350px]" src={img} alt="book" />
          <img className="h-[350px]" src={img} alt="book" />
          <img className="h-[350px]" src={img} alt="book" />
          <img className="h-[350px]" src={img} alt="book" />
          <img className="h-[350px]" src={img} alt="book" />
          <img className="h-[350px]" src={img} alt="book" />
          <img className="h-[350px]" src={img} alt="book" />
          <img className="h-[350px]" src={img} alt="book" />
          <img className="h-[350px]" src={img} alt="book" />
          <img className="h-[350px]" src={img} alt="book" />
          <img className="h-[350px]" src={img} alt="book" />
          <img className="h-[350px]" src={img} alt="book" />
        </div>
      </section> */}
    </div>
  );
};

export default sub;
