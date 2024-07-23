import React from "react";
import { Typewriter } from "react-simple-typewriter";
import image1 from "../../../assets/Exams/exam1.webp";

const Hero = () => {
  return (
    <div className="flex pt-32 flex-col font-roboto items-center justify-center min-h-screen bg-secLB dark:bg-darkBlue dark:text-lightGray">
      <div className="relative flex flex-col items-center text-center p-8">
        <h1 className="text-4xl font-bold">
          Practice{" "}
          <span className="text-blue-600 ml-2">
            <Typewriter
              words={[
                "Physics",
                "Chemistry",
                "Biology",
                "Mathematics",
                "Government",
                "CRS",
                "Literature",
                "Economics",
                "Accounting",
                "Business-Studies",
                "Visual-Art",
                "History",
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
          Exams Questions
        </h1>
        <p className="font-bold text-primary5 mt-4 max-w-2xl">
          Prepare yourself for <strong>JUPEB </strong> test, Incourse-exams,
          mock and Jupeb main Exams by practicing previously asked questions and
          new question on any topic or Subject of your choice
        </p>
        <div className="flex space-x-4 mt-6">
          <button className="bg-blue-600 text-white py-2 px-4 rounded">
            Start for free
          </button>
        </div>
        {/* <div className="flex flex-wrap justify-center mt-8 space-x-4">
          <img src={image1} alt="icon1" className="h-12 w-12" />
          <img src="path/to/icon2.png" alt="icon2" className="h-12 w-12" />
          <img src="path/to/icon3.png" alt="icon3" className="h-12 w-12" />
        </div> */}
        <div className="flex mt-6 text-sm text-gray-600">
          <div className="mr-4">
            <span role="img" aria-label="check">
              ✅
            </span>{" "}
            5,000+ Exams Questions
          </div>
          <div className="mr-4">
            <span role="img" aria-label="check">
              ✅
            </span>{" "}
            After Exam Correction
          </div>
          <div>
            <span role="img" aria-label="check">
              ✅
            </span>{" "}
            Lifetime access
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
