import React from "react";
// import './index.css';
import CertificateImage from "../../../assets/images/heroPerson.jpg";
import VideoImage from "../../../assets/images/heroPerson.jpg";
import DashboardImage from "../../../assets/images/heroPerson.jpg";
import { Link } from "react-router-dom";

const FeatureSection = () => {
  return (
    <section className="py-24 bg-white px-4 md:px-6 lg:px-8 xl:px-20 dark:text-lightGray dark:bg-darkBlue">
      <div className=" ">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Afraid that you might bore your self while reading? <br />
          <span className="text-purple-600">Explore our reading partner!</span>
        </h2>
        <div className="flex flex-wrap items-center justify-center">
          <div className="w-full md:w-1/2 text-center md:text-left mb-8 lg:mb-0 lg:pr-8">
            <div className="w-full h-[400px] p-4 bg-[#CED5DB] rounded-lg  flex flex-col justify-between items-center ">
              <div className="flex  items-center lg:items-start justify-between">
                <img
                  src={CertificateImage}
                  alt="Certificate"
                  className="w-5/12"
                />
                <img src={DashboardImage} alt="Dashboard" className="w-5/12 " />
              </div>
              <div className="flex  items-center lg:items-start justify-between">
                <img src={VideoImage} alt="Video" className="w-5/12" />
                <img src={DashboardImage} alt="Dashboard" className="w-5/12 " />
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold">
                  Partner with fellow readers on our platform
                </h3>
                <p>
                  Select your subject combination and join community of readers
                  that have the mindset of reading for the same subject to share
                  your reading journey and ask questions
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Knowledge Goal</h3>
                <p>
                  Test your learning outcome with self-assessments, exams, and
                  weekly practice. Take advantage of Our Exam portal to test
                  your-self on any topic.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">
                  Interact with EaseReads A.I Tutor
                </h3>
                <p>
                  Have access to ask EASEREADS A.I Tutors questions on concept
                  or topics you don't understand as you are reading any page or
                  topic and get instant answers to this questions without moving
                  away from the screen page
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">
                  Watch Videos on Each Topics
                </h3>
                <p>
                  Have access to watch short explanatory videos on each topic of
                  the syllabus
                </p>
              </div>
            </div>
            <div className="w-full md:flex mt-5 font-roboto">
              <Link to="/sign-up">
                <button className="bg-sec2 w-full  text-base text-primary1 bg-opacity-80 hover:bg-opacity-100 p-4 rounded-md mb-2 mb-md-0 font-bold">
                  Get started for free
                </button>
              </Link>
              <Link to="/sign-up">
                <button className=" w-full mt-5 md:mt-0 md:ml-5 hover:text-primary1 hover:bg-sec2 border-[2px] border-sec2 font-bold text-sec2  p-4 rounded-md mb-2 mb-md-0">
                  Explore Text-Books
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
