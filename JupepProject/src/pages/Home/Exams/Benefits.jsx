// BulletPointFeatures.js
import React from "react";
// import { StarIcon, SupportIcon, DocumentIcon } from '@heroicons/react/outline';
import image1 from "../../../assets/Exams/exam1.webp";
import { SiKnowledgebase } from "react-icons/si";
import { PiExamFill } from "react-icons/pi";
import { FaStar } from "react-icons/fa6";

const features = [
  {
    icon: <PiExamFill size={28} />,
    title: "Likely Exams Question",
    description:
      "Some of the questions you will practice will likely come out in your exam",
  },
  {
    icon: <FaStar size={28} />,
    title: "Perfection",
    description: "Engaging in our exams prepare you for the final exam.",
  },
  {
    icon: <SiKnowledgebase size={28} />,
    title: "Knowledge Base",
    description:
      "Practicing likely questions help prepare you mentally for Jupeb exams",
    // badge: "coming soon",
  },
];

const Benefits = () => {
  return (
    <div className="w-full h-full pt-[120px] text-secH bg-secLB dark:text-lightGray dark:bg-darkBlue font-medium font-roboto capitalize pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Benefits
          </h2>
          <h3 className="mt-2 text-3xl leading-8 font-semibold tracking-tight  sm:text-4xl">
            The most powerful tool to scale JUPEB PROGRAM
          </h3>
          <p className="mt-4 text-lg text-gray-500">
            Prepare yourself for Jupeb forthcoming exams
          </p>
          <ul className="mt-8 space-y-6">
            {features.map((feature, index) => (
              <li key={index} className="flex">
                <div className="flex-shrink-0 text-indigo-600">
                  {feature.icon}
                </div>
                <div className="ml-3">
                  <h4 className="text-lg leading-6 font-medium text-gray-900 dark:text-lightGray flex items-center">
                    {feature.title}
                    {feature.badge && (
                      <span className="ml-2 px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        {feature.badge}
                      </span>
                    )}
                  </h4>
                  <p className="mt-2 text-base text-gray-500">
                    {feature.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-10 lg:mt-0 lg:w-1/2 flex justify-center">
          <img
            className="rounded-lg shadow-lg"
            src={image1}
            alt="Screenshot of the application"
          />
        </div>
      </div>
    </div>
  );
};

export default Benefits;
