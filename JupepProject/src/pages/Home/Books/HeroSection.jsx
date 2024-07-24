// import node module libraries
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

// import media files
import EducationalSkils from "../../../assets/images/heroPerson.jpg";
import SVGgraphics1 from "../../../assets/images/graphics-1.svg";
import SVGgraphics2 from "../../../assets/images/graphics-2.svg";

const HeroSection = () => {
  return (
    <section className="w-full px-4   xl:px-20 pt-[100px]  dark:bg-darkBlue dark:text-lightGray">
      <div className="w-full mx-auto py-12  lg:py-16">
        <div className="w-full flex flex-col justify-between lg:flex-row items-center">
          <div className="w-full lg:w-5/12 xl:w-5/12">
            <div>
              <h1 className="text-4xl font-bold mb-3">
                <span className="text-gray-900 dark:text-lightGray">
                  Text Books Available for
                </span>{" "}
                <br />
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
              </h1>
              <p className="text-lg mb-4 font-roboto">
                Transform your JUPEB educational journey with{" "}
                <span className="text-blue-600">EASEREADS</span>, a
                comprehensive platform for students. Join other students in
                reading all topics in 001, 002, 003 & 004 for all subject
                combination
              </p>

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

          <div className="w-full lg:w-6/12 xl:w-6/12 flex justify-end mt-12 lg:mt-0 relative">
            <div className="absolute top-0 left-12 transform -translate-x-1/2 -translate-y-1/2 hidden md:block z-20">
              <img src={SVGgraphics2} alt="graphics-2" />
            </div>
            <img
              src={EducationalSkils}
              alt="online course"
              className="rounded-lg w-full z-10 relative"
            />
            <div className=" absolute top-full  left-96 transform -translate-x-1/2 -translate-y-1/2 hidden md:block z-20">
              <img src={SVGgraphics1} alt="graphics-1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
