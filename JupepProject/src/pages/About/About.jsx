import Layout from "../../layout/Layout";
import group from "../../assets/About Image/group.jpg";
import arrow from "../../assets/About Image/arrow.jpg";
// import learning from "../../assets/About Image/learning.jpg";
import aboutUs from "../../assets/Home Landing Image/about-us.png";

import reading from "../../assets/About Image/reading.jpg";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Layout>
      <div className="w-full h-full dark:bg-navyBlue font-body pb-20 xl:pb-10">
        {/* 1ST PART */}
        <div className="w-full px-4 md:px-6 lg:px-8 xl:px-20] md:flex justify-between  md:flex-row pt-[6rem] md:space-b ">
          <div className="pt-[3rem] md:w-5/12 md:mx-auto md:h-[23rem]  lg:pt-[3rem]">
            <img
              className="h-[400px]  md:h-[500px]"
              // className="h-[350px] md:h-[400px] w-[600px] "
              src={aboutUs}
              alt="service"
            />
          </div>
          <div className="sm:w-full md:w-5/12  lg:pl-[5rem] lg:w-3/5 pt-[5rem] lg:pt-[6rem]">
            <h2 className="text-xl dark:text-primary1 md:text-2xl pb-[1rem] font-roboto">
              About Us
            </h2>
            <h4 className="text-xl lg:text-3xl font-bold pb-[1rem] text-sec2 md:w-3/4 font-roboto">
              Unleashing Curiosity and Empowering Young Minds
            </h4>
            <p className="dark:text-lightGray">
              Welcome to EaseReads, where learning meets innovation! At our
              core, we&apos;re driven by a commitment to revolutionize your
              academic journey. Explore a wealth of resources, from textbooks to
              engaging videos and Easereads AI for instant clarity. <br /> Our
              user-friendly study planner and flexible exam options cater to
              your unique needs, ensuring a personalized approach to your
              academic goals. We&apos;re not just a platform; we&apos;re a
              dynamic space designed to empower students. Every feature, from
              Easereads AI to customizable exams, is crafted to make learning
              accessible, interactive, and enjoyable. Join us in this
              transformative experience. <br /> At EaseReads, we believe in a
              future where education is limitless, and success is within reach.
              Welcome to a platform that&apos;s redefining the way you learn and
              prepare for exams.
            </p>
            {/* <button
              className="mt-[4rem] bg-primary0Blue hover:bg-primary6 flex items-center justify-center"
              type="button"
            >
              <span className="flex items-center">
                Enroll
                <FaArrowRight className="ml-[1rem]" />
              </span>
            </button> */}
            <Link to="/sign-up" smooth="true" duration={500}>
              <button className="w-full md:w-[220px] mt-[20px] h-[59px] bg-primary0Blue hover:bg-sec3 flex justify-center items-center text-primary1 font-body text-xl rounded-[45px]">
                Enroll <FaArrowRight className="ml-[1rem]" />
              </button>
            </Link>
          </div>
        </div>

        {/* <div className="lg:pl-[5rem] lg:pr-[3rem]"> */}
        {/* 2nd Part */}
        <div className="bg-primary4 dark:bg-darkBlue flex flex-col-reverse md:flex  md:flex-row justify-between lg:py-[7rem] px-4 md:px-6 lg:px-8 xl:px-20 sm:mt-[5rem] mt-0">
          <div className="lg:pr-[4rem] md:w-5/12 pt-[3rem] ">
            <h2 className="text-xl md:text-3xl  font-bold pb-[1rem] text-sec2">
              Our Mission
            </h2>
            <p className="dark:text-lightGray">
              At EaseReads, our mission is to empower students on their academic
              journey by providing a dynamic and comprehensive learning
              platform. We strive to foster an environment where innovation,
              accessibility, and personalization converge, enabling students to
              excel in their studies and achieve academic success. Through
              cutting-edge technology and a commitment to educational
              excellence, we aim to revolutionize the way students approach
              learning, making education a transformative and enjoyable
              experience.
            </p>
          </div>
          <div className="pt-[7rem] md:w-5/12 md:pt-[3rem] lg:pt-[3rem]  sm:py-[5rem] lg:py-[0]">
            <img src={arrow} alt="service" className="w-full md:w-[450px] " />
          </div>
        </div>

        {/* 3rd Part */}
        <div className="w-full md:flex  md:flex-row pt-[4rem] justify-between lg:space-b px-4 md:px-6 lg:px-8 xl:px-20">
          <div className="pt-[3rem] md:w-5/12 md:mx-auto md:h-[23rem]  lg:pt-[3rem]">
            <img
              className=" md:w-[45rem] sm:w-[25rem]  xl:h-[400px]  "
              src={group}
              alt="service"
            />
          </div>
          <div className="sm:w-full md:w-5/12 pt-[3rem] lg:pl-[5rem] lg:w-3/5 lg:pt-[7rem]">
            <h2 className="text-xl md:text-3xl font-bold pb-[1rem] text-sec2">
              Our Vision
            </h2>

            <p className="md:w-4/5 dark:text-lightGray">
              Guided by our passion for education, we envision EaseReads as a
              leading force in redefining the future of learning. Our vision is
              to create a global community of empowered learners who embrace
              knowledge with enthusiasm, curiosity, and confidence. We aspire to
              be at the forefront of educational innovation, continually
              expanding our reach and impact, and contributing to a world where
              every student has the tools and support needed to thrive
              academically
            </p>
          </div>
        </div>

        {/* 4th Part */}
        <div className="bg-primary4 dark:bg-darkBlue md:h-full md:flex  md:flex-row justify-between sm:mt-[5rem] xl:mt-40 mt-0 lg:py-[0rem] px-4 md:px-6 lg:px-8 xl:px-20">
          <div className=" pt-[7rem] md:pt-[3rem] lg:pt-[12rem] md:w-5/12">
            <h2 className="text-xl md:text-3xl  font-bold pb-[1rem] text-sec2">
              Our Commitment
            </h2>
            <p className="dark:text-lightGray">
              At EaseReads, our commitment is unwavering — to provide students
              with a reliable and enriching educational platform that
              prioritizes their unique needs. We are dedicated to cultivating an
              inclusive space where learning is accessible, interactive, and
              enjoyable. We pledge to continuously invest in cutting-edge
              resources, technology, and support systems to ensure our users
              receive the highest quality of education. Our commitment extends
              beyond just imparting knowledge; it&apos;s about nurturing a
              community where every student can flourish and achieve their
              academic goals
            </p>
          </div>
          <div className="sm:py-[3rem] md:w-5/12 md:pt-[3rem] lg:pt-[8rem] lg:pr-[2rem] ">
            <img
              className="w-full md:mx-auto lg:w-[40rem] lg:pl-[1rem] md:h-[70%] sm:h-[30%]"
              src={reading}
              alt="service"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
