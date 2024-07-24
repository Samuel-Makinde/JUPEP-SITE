// CallToAction.js
import React from "react";

const CallToAction = () => {
  return (
    <div className="bg-gray-100 py-20 text-gray-900 dark:text-lightGray dark:bg-darkBlue font-medium font-roboto capitalize pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-base text-yellow-500 font-semibold tracking-wide uppercase">
          Start Preparing
        </h2>
        <h3 className="mt-2 text-3xl leading-8 font-bold tracking-tight  sm:text-4xl">
          Just try it out! You’ll fall in love
        </h3>
        <p className="mt-4 text-lg text-gray-500">
          Designed for people who want to excel there Jupeb exams.
        </p>
        <div className="mt-8">
          <a
            href="#"
            className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Try For Free
          </a>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
