import React from "react";
import { Link } from "react-router-dom";
import session from "../../../assets/OneOnOneSession.jpg";

const Session = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center py-12 px-4 md:px-6 lg:px-8 xl:px-20 dark:text-lightGray dark:bg-darkGray bg-[#F1F5F9] ">
      <div className="lg:w-1/2 mb-8 lg:mb-0 lg:mr-8">
        <h2 className="text-3xl font-bold  mb-4">
          Leverage on our
          <span className="text-purple-600 underline decoration-yellow-500">
            {" "}
            periodic class{" "}
          </span>
          feature
        </h2>
        <p className=" mb-6">
          Join monthly class lead by each subject expert to ask questions and
          better explanation on each topics.
        </p>
        <Link to="/sign-up">
          <button className="bg-sec2   text-base text-primary1 bg-opacity-80 hover:bg-opacity-100 p-4 rounded-md mb-2 mb-md-0 font-bold">
            Get started for free
          </button>
        </Link>
      </div>
      <div className="lg:w-1/2 flex justify-center">
        <div className="relative">
          <img
            src={session} // Replace with the actual image URL
            alt="One-on-one session"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Session;
