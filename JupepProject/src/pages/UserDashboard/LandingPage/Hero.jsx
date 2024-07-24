import React from "react";
import { BsPersonVideo3 } from "react-icons/bs";
import { FaBook } from "react-icons/fa";
import { PiExamFill } from "react-icons/pi";

const Hero = () => {
  return (
    <div className="w-full h-full  dark:text-lightGray dark:bg-darkBlue font-medium capitalize">
      <div className="bg-[#754FFE] dark:bg-darkBlue px-4   xl:px-20 flex flex-col items-center justify-center min-h-[490px] text-primary1">
        <header className="text-center mb-10">
          <div>
            <h1 className="text-4xl font-bold mb-4">
              Welcome to EaseReads Learning Application
            </h1>
            <p className="text-xl dark:text-primary5">
              Watch Jupeb topic videos, Read textbooks and practice Jupeb exams
              questions at your own convenient
            </p>
          </div>
        </header>
        <div className="flex space-x-4 mb-10">
          <button className="bg-secH bg-opacity-75 text-primary1 py-2 px-6 rounded-lg">
            Read TextBooks
          </button>
          <button className="bg-primary1 text-secH py-2 px-6 rounded-lg">
            Watch Videos
          </button>
          <button className="bg-primary1 text-secH py-2 px-6 rounded-lg">
            Take Exams
          </button>
        </div>
      </div>

      <div className="w-full text-primary6 dark:text-lightGray dark:bg-darkGray text-left  pt-6  text-sm primary6 px-20 md:flex md:space-x-10">
        <div className="w-full md:w-1/3 text-left flex ">
          <div className="text-indigo-600 bg-[#FFEEDA]  p-4 rounded-2xl mb-4">
            <BsPersonVideo3 size={30} />
          </div>
          <div className="pl-3">
            <p className="text-2xl font-bold"> 20+ tutorial videos</p>
            <p className="mt-2 dark:text-primary5">
              Enjoy a variety of fresh topics videos
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/3 flex text-left">
          <div className="text-indigo-600 bg-[#FFEEDA]  p-4 rounded-2xl mb-4">
            <FaBook size={30} />
          </div>
          <div className="pl-3">
            <p className="text-2xl font-bold">11+ Textbooks</p>
            <p className="mt-2 dark:text-primary5">
              Find the right textbooks to read
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/3 flex">
          <div className="text-indigo-600 bg-[#FFEEDA]  p-4 rounded-2xl mb-4">
            <PiExamFill size={30} />
          </div>
          <div className="pl-3">
            <p className="text-2xl font-bold">Unlimited Practice</p>
            <p className="mt-2 dark:text-primary5">
              Practice real time questions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
