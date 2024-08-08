// src/components/ProfileHeader.js
import React from "react";
import samuel from "../assets/Home Landing Image/samuel.png";
import TooltipIcon from "./ToolTip";

const ProfileHeader = ({ name, rank, image }) => {
  return (
    <div className="lg:pl-[26%] 2xl:pl-[33%] dark:bg-navyBlue pt-24  px-6 2xl:px-12 pb-8 font-sans  relative rounded-t-lg overflow-hidden">
      <div className="h-full pb-8 bg-[#F1F5F9]">
        <div className="h-28  bg-gradient-to-r from-purple-600 to-purple-500"></div>
        <div className="flex items-center px-4 py-2">
          <div className="relative">
            <img
              src={samuel}
              alt="Profile"
              className="w-20 h-20 rounded-full border-4 border-white -mt-10"
            />
            <button className="absolute bottom-[95%]  right-0 -mr-2 bg-blue-500 text-white rounded-full p-1 border-2 border-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </button>
            <button className="absolute top-0 right-0 bg-gray-700 text-white rounded-full p-1 border-2 border-white">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15.232 5.232l3.536 3.536M9 13.5H7.5v-1.5h-3v3h3v-1.5h1.5v1.5h1.5v-3H9v1.5zm2.768-7.018L5.5 12.25v6.25h6.25l6.268-6.268a1.25 1.25 0 0 0-1.768-1.768L14 13.5l-2.232-2.232a1.25 1.25 0 0 0-1.768 0l-3.036 3.036a1.25 1.25 0 0 0 1.768 1.768L13.5 10l2.768-2.768a1.25 1.25 0 0 0-1.768-1.768l-2.732 2.732zm0 0L5.5 5.5l3.536-3.536a1.25 1.25 0 1 1 1.768 1.768L9 4.768l3.768 3.768a1.25 1.25 0 0 1-1.768 1.768L7.732 5.5l-2.732 2.732L5.5 8.732z"
                />
              </svg> */}
            </button>
          </div>
          <div className="ml-4">
            <h1 className="text-xl font-bold">Samuel</h1>
            <p className="text-gray-600">
              Rank: beginner <span>Read More</span>{" "}
            </p>
            <p className="text-gray-600">
              Points:{" "}
              <span className="p-1 rounded-md text-[14px] bg-green-500 text-primary1">
                20
              </span>{" "}
              <span>Read More</span>
            </p>
          </div>
          <div className="ml-auto hidden md:flex">
            <button className="bg-purple-500 text-white rounded px-4 py-2">
              Update Image
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
