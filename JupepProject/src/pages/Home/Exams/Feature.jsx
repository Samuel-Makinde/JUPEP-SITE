// FeaturesSection.js
import React from "react";

import { BsFillLightningFill } from "react-icons/bs";
import { BiSolidSelectMultiple } from "react-icons/bi";
import { PiExamFill } from "react-icons/pi";
import { AiOutlineSolution } from "react-icons/ai";

const features = [
  {
    icon: <BsFillLightningFill size={28} />,
    title: "Easy Start Process",
    description:
      "Navigate to Exam page on your Dashboard to read exam instruction.",
  },
  {
    icon: <BiSolidSelectMultiple size={28} />,

    title: "Select Topics",
    description:
      "Follow instruction to select subject, section and any topic of your choice and wait for exam questions",
  },
  {
    icon: <PiExamFill size={28} />,

    title: "Attempt Question",
    description:
      "Read through all exams question and answer all under the stipulated time",
  },
  {
    icon: <AiOutlineSolution size={28} />,

    title: "View Result",
    description:
      "Wait for your exam result to go through and restart the process to see another set of questions to attempt.",
  },
];

const FeaturesSection = () => {
  return (
    <div className="w-full h-full pt-[120px] text-secH dark:text-lightGray dark:bg-darkGray font-medium font-roboto capitalize pb-20">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            How it work
          </h2>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="pt-6 h-[320px] sm:h-[290px] md:h-[250px] lg:h-[300px] xl:h-[270px]"
              >
                <div className="h-full bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div className="inline-flex text-primary1 items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                      {feature.icon}
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
