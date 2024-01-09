import Layout from "../../layout/Layout";
import group from "../../assets/About Image/group.jpg";
import arrow from "../../assets/About Image/arrow.jpg";
import learning from "../../assets/About Image/learning.jpg";
import reading from "../../assets/About Image/reading.jpg";
import Button from "../../components/button/button";
import { FaArrowRight } from "react-icons/fa";

const About = () => {
  return (
    <Layout>
      <div className="">
        {/* 1ST PART */}
        <div className="w-full sm:px-[2rem] lg:flex md:flex-col-2 md:flex-row pt-[6rem] lg:space-b md:px-[5rem] ">
          <div className="pt-[3rem] md:mx-auto md:h-[23rem]  lg:pt-[3rem]">
            <img
              className="h-[500px] lg:w-[45rem] md:w-[35rem] sm:w-[25rem]"
              src={learning}
              alt="service"
            />
          </div>
          <div className="sm:w-full sm:pt-[3rem] lg:pl-[5rem] lg:w-3/5 sm:pt-[1rem] lg:pt-[6rem]">
            <h2 className="sm:text-xl md:text-2xl pb-[1rem]">About Us</h2>
            <h4 className="sm:text-xl md:text-3xl font-bold pb-[1rem] text-sec2 md:w-3/4 ">
              Unleashing Curiosity and Empowering Young Minds
            </h4>
            <p className="pt-[10px]">
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
            <Button
              className="mt-[4rem] flex items-center justify-center"
              type="button"
            >
              <span className="flex items-center">
                Enroll
                <FaArrowRight className="ml-[1rem]" />
              </span>
            </Button>
          </div>
        </div>

        {/* <div className="lg:pl-[5rem] lg:pr-[3rem]"> */}
        {/* 2nd Part */}
        <div className="bg-primary4 lg:flex md:flex-col-2 md:flex-row  lg:py-[7rem] sm:px-[2rem] md:px-[5rem] sm:mt-[5rem] mt-0">
          <div className="lg:pr-[4rem] pt-[1rem] lg:w-3/5">
            <h2 className="sm:text-xl md:text-3xl  font-bold pb-[1rem] text-sec2">
              Our Mission
            </h2>
            <p>
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
          <div className="md:pt-[3rem] lg:pt-[3rem] lg:pr-[2rem] lg:pl-[10rem] sm:py-[5rem] lg:py-[0]">
            <img
              className="sm:w-[35rem] md:h-auto md:mx-auto md:h-[25rem] lg:w-[50rem] lg:pl-[1rem]"
              src={arrow}
              alt="service"
            />
          </div>
        </div>

        {/* 3rd Part */}
        <div className="w-full lg:flex md:flex-col-2 md:flex-row pt-[4rem] lg:space-b sm:px-[2rem] md:px-[5rem]">
          <div className="pt-[3rem] md:h-auto md:mx-auto md:h-[23rem]  lg:pt-[3rem]">
            <img
              className=" md:w-[45rem] md:w-[30rem] sm:w-[25rem] h-[80%]"
              src={group}
              alt="service"
            />
          </div>
          <div className="sm:w-full sm:pt-[2rem] lg:pl-[5rem] lg:w-3/5 lg:pt-[7rem]">
            <h2 className="sm:text-xl md:text-3xl font-bold pb-[1rem] text-sec2">
              Our Vision
            </h2>

            <p className="md:w-4/5">
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
        <div className="bg-primary4 md:h-full lg:flex md:flex-col-2 md:flex-row sm:mt-[5rem] mt-0 lg:py-[0rem] sm:px-[2rem] md:px-[5rem]">
          <div className="lg:pr-[4rem] sm:pt-[3rem] md:pt-[3rem] lg:pt-[12rem] lg:w-3/5">
            <h2 className="sm:text-xl md:text-3xl  font-bold pb-[1rem] text-sec2">
              Our Commitment
            </h2>
            At EaseReads, our commitment is unwavering — to provide students
            with a reliable and enriching educational platform that prioritizes
            their unique needs. We are dedicated to cultivating an inclusive
            space where learning is accessible, interactive, and enjoyable. We
            pledge to continuously invest in cutting-edge resources, technology,
            and support systems to ensure our users receive the highest quality
            of education. Our commitment extends beyond just imparting
            knowledge; it&apos;s about nurturing a community where every student
            can flourish and achieve their academic goals
          </div>
          <div className="sm:py-[3rem] md:pt-[3rem] lg:pt-[8rem] lg:pr-[2rem] lg:pl-[3rem] ">
            <img
              className="sm:w-[35rem] md:mx-auto lg:w-[40rem] lg:pl-[1rem] md:h-[70%] sm:h-[30%]"
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
