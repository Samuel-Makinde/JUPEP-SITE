import ImageSlider from "../../components/ImageSlider/ImageSlider";
import Layout from "../../layout/Layout";
import { Link } from "react-router-dom";
import compare from "../../assets/Home Landing Image/comparePlan.jpeg";
import { FaStar } from "react-icons/fa";
import FAQPage from "../FAQ/FAQPage";
import aboutUs from "../../assets/Home Landing Image/about-us.png";
import reading from "../../assets/Home Landing Image/reading.png";
// import Lnew from "../../assets/logo/Lnew.png"
import recommended1 from "../../assets/Home Landing Image/recommended videos.png";
import exam from "../../assets/Home Landing Image/exams.png";
import easereadAi from "../../assets/Home Landing Image/ai.png";
import studyPlanner from "../../assets/Home Landing Image/study plan.png";
import frame from "../../assets/Home Landing Image/Frame 98.png";
import whatsapp from "../../assets/Home Landing Image/WhatsApp.png";
import peterAkojede from "../../assets/Home Landing Image/peterAkojede.jpg";
import dave from "../../assets/Home Landing Image/dave.jpg";
import samuel from "../../assets/Home Landing Image/samuel.png";
import peter from "../../assets/Home Landing Image/peter.jpg";

// import landing from "../../assets/Home Landing Image/landing2.jpeg";

// import samuel from "../../assets/Home Landing Image/samuel.png"
import { FaStarHalfAlt } from "react-icons/fa";
import styles from "./home.module.css";
import Courses from "../../components/coursecard/data";
// import { useEffect, useState } from "react";
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Home = () => {
  // const [isLogin, setIsLogin] = useState(false);
  // const userName = sessionStorage.getItem("username");

  // useEffect(() => {
  //   if (userName) {
  //     setIsLogin(true);
  //   }
  // }, [userName]);

  return (
    <Layout>
      <main className="w-full h-full pt-[90px] dark:bg-navyBlue  font-body md:pt-0 text-2xl ">
        {/* {isLogin ? ( */}
        <ImageSlider />
        {/* ) : ( */}
        {/* <div className="w-screen ">
            <img src={landing} alt="landing" className="w-screen h-screen" />
          </div>
        )} */}

        <div className="w-full h-full  ">
          <div className="w-full px-4 md:px-6 lg:px-8 xl:px-20 flex flex-col-reverse md:flex-row md:justify-between mt-[70px]">
            <img
              src={aboutUs}
              alt="about"
              className="h-[350px] md:h-[400px] w-[600px] "
            />
            <div className="w-full h-full    flex flex-col items-center ">
              <h1 className=" text-2xl mt-[40px] text-secH dark:text-primary1 font-roboto font-semibold ">
                Why US!
              </h1>
              <p className="w-full md:w-8/12 text-center  text-[16px] text-primary3 dark:text-lightGray ">
                Transform your learning journey with us! Dive into a wealth of
                resources—books, engaging videos, and Easereads A.I for
                personalized clarity on tough concepts. Take charge of your
                study routine effortlessly with our intuitive planner, while
                real-life format practice questions prepare you for success in
                exams. At our platform, innovation meets convenience, providing
                a seamless and tailored learning experience just for you.
                <br />
                Your path to success begins here!
              </p>
            </div>
          </div>
          <div className="w-full h-full ">
            <div className="w-full h-full flex flex-col items-center mt-[100px] ">
              <h1 className="text-4xl text-sec1 font-roboto">
                {" "}
                <strong>What we offer </strong>{" "}
              </h1>
              <p className="w-full md:w-[500px] lg:w-[700px] text-center dark:text-lightGray mt-[30px] h-full font-extralight text-[18px]">
                As a user, you will enjoy all the benefits listed below and more
              </p>

              <div className="w-full h-full py-4 md:py-12 bg-primary4 dark:bg-darkBlue dark:text-lightGray  md:px-6 lg:px-8 xl:px-20 flex flex-col-reverse md:flex-row-reverse md:justify-between mt-[30px]">
                <div className="w-full flex mt-8 md:mt-0  justify-center md:flex-none md:w-5/12">
                  <img
                    src={reading}
                    alt="about"
                    className="h-[350px]  sm:w-[400px] "
                  />
                </div>
                <div className=" px-4 md:px-0  md:w-5/12 md:text-left flex flex-col  ">
                  <h1 className="text-lg sm:text-xl md:text-2xl mt-[40px] font-roboto md:mt-0 text-secH dark:text-primary1 font-bold uppercase">
                    Engage in the act of reading
                  </h1>
                  <p className=" text-left dark:text-lightGray  text-[16px] text-primary3">
                    Dive into a realm of academic excellence with our exclusive
                    collection of Jupeb textbooks. Each book is a treasure
                    trove, offering detailed explanations for every topic in
                    subjects 001, 002, 003, and 004. Engage in the enlightening
                    act of reading as these textbooks unravel the intricacies of
                    each subject, providing clarity and depth understanding.
                    <br /> Elevate your academic experience with our Jupeb
                    textbooks, where learning meets comprehension, and success
                    becomes inevitable.
                  </p>

                  <Link to="/view-subject" smooth="true" duration={500}>
                    <button className="w-full md:w-[220px] mt-[20px] h-[59px] bg-primary0Blue hover:bg-sec3 flex justify-center items-center text-primary1 font-body text-xl rounded-[45px]">
                      Start Reading
                    </button>
                  </Link>
                </div>
              </div>
            </div>
 
                    {/* courses */}
            <div>
               <h2>Browse all text book</h2>
               <p>These are the most popular courses among Jupeb Courses learners worldwide in year 2024</p>

               <h3>Recommended  for you</h3>
               <div>
               <Courses/>
               </div>
              


            </div>

            {/* video sections */}
            <div className="w-full px-4 md:px-6 lg:px-8 xl:px-20 mt-[130px] ">
              <h1 className="text-lg sm:text-xl md:text-2xl text-secH  dark:text-primary1 font-roboto font-bold uppercase  ">
                Recommended Videos for you{" "}
              </h1>
              <p className="md:w-6/12 text-primary5 dark:text-lightGray font-normal text-base ">
                Explore tailored knowledge with our recommended videos,
                enhancing your understanding of specific subject topics.
                Streamline your study sessions with content designed to amplify
                comprehension and boost academic success.
              </p>
            </div>
            <div
              className={`relative w-full h-full px-4 md:px-6 lg:px-8 xl:px-20 overflow-auto ${styles.videos}`}
            >
              <div className="min-w-min h-full mt-[30px] flex justify-between overflow-auto ">
                <div className="w-[250px] sm:w-[280px] md:w-[320px] h-[438px] pt-3 bg-sec4 px-4 rounded-3xl">
                  <img
                    src={recommended1}
                    alt="pictures"
                    className="w-[300px] h-[180px] "
                  />
                  <div className="w-full flex justify-between">
                    <p className="w-24  sm:w-28 mt-3 rounded-xl flex justify-center items-center text-secH font-medium text-xs sm:text-sm bg-primary1 font-roboto uppercase">
                      Chemistry
                    </p>
                    <p className="w-24 sm:w-28 mt-3 rounded-xl flex justify-center items-center text-secH font-medium text-xs sm:text-sm bg-secR font-roboto uppercase">
                      coming soon
                    </p>
                  </div>
                  <h2 className="font-bold font-body text-secH text-lg sm:text-xl mt-3">
                    Measurement
                  </h2>
                  <p className="md:w-11/12 h-[90px] text-primary5 font-normal text-sm ">
                    Topic discussed. <br />
                    Basic unit of measurement, precision, form, types of error &
                    mathematical operation e.t.c
                  </p>
                  <div className="w-full mt-[40px] flex">
                    <img src={frame} alt="frame" className="" />
                    <p className="text-xs sm:text-sm text-primary3 my-auto ml-2">
                      Viewed By 0 people
                    </p>
                  </div>
                </div>

                <div className="w-[280px] md:w-[320px] h-[438px] ml-8 pt-3 bg-sec4 px-4 rounded-3xl">
                  <img
                    src={recommended1}
                    alt="pictures"
                    className="w-[300px] h-[180px] "
                  />
                  <div className="w-full flex justify-between">
                    <p className="w-24  sm:w-28 mt-3 rounded-xl flex justify-center items-center text-secH font-medium text-xs sm:text-sm bg-primary1   font-roboto uppercase">
                      Physics
                    </p>
                    <p className="w-24 sm:w-28 mt-3 rounded-xl flex justify-center items-center text-secH font-medium text-xs sm:text-sm bg-secR font-roboto uppercase">
                      coming soon
                    </p>
                  </div>
                  <h2 className="font-bold font-body text-secH text-lg sm:text-xl mt-3">
                    Physical Quantity & Unit
                  </h2>
                  <p className="md:w-11/12 h-[90px] text-primary5 font-normal text-sm ">
                    Topics Discussed <br />
                    physical quality, quality, measurement techniques,
                    galvanometer e.t.c
                  </p>
                  <div className="mt-[40px] flex">
                    <img src={frame} alt="frame" />
                    <p className="text-xs sm:text-sm text-primary3 my-auto ml-3">
                      Viewed By 0 people
                    </p>
                  </div>
                </div>

                <div className="w-[280px] md:w-[320px] h-[438px] ml-8 pt-3 bg-sec4 px-4 rounded-3xl">
                  <img
                    src={recommended1}
                    alt="pictures"
                    className="w-[300px] h-[180px] "
                  />
                  <div className="w-full flex justify-between">
                    <p className="w-24  sm:w-28 mt-3 rounded-xl flex justify-center items-center text-secH font-medium text-xs sm:text-sm bg-primary1 font-roboto uppercase">
                      BIOLOGY
                    </p>
                    <p className="w-24 sm:w-28 mt-3 rounded-xl flex justify-center items-center text-secH font-medium text-xs sm:text-sm bg-secR font-roboto uppercase">
                      COMING SOON
                    </p>
                  </div>
                  <h2 className="font-bold  font-body text-secH text-xl mt-3">
                    Origin of Living Being
                  </h2>
                  <p className="md:w-11/12 h-[90px] text-primary5 font-normal text-sm ">
                    scientific method, origin of life, origin of cell, central
                    tendency, biostastistic.
                  </p>
                  <div className="mt-[40px] flex">
                    <img src={frame} alt="frame" />
                    <p className="text-xs sm:text-sm text-primary3 my-auto ml-3">
                      Viewed By 0 people
                    </p>
                  </div>
                </div>

                <div className="w-[280px] md:w-[320px] h-[438px] ml-8 pt-3 bg-sec4 px-4 rounded-3xl">
                  <img
                    src={recommended1}
                    alt="pictures"
                    className="w-[300px] h-[180px] "
                  />
                  <div className="w-full flex justify-between">
                    <p className="w-24  sm:w-28 mt-3 rounded-xl flex justify-center items-center text-secH font-medium text-xs sm:text-sm bg-primary1 font-roboto uppercase">
                      MATHEMATICS
                    </p>
                    <p className="w-24 sm:w-28 mt-3 rounded-xl flex justify-center items-center text-secH font-medium text-xs sm:text-sm bg-secR font-roboto uppercase">
                      COMING SOON
                    </p>
                  </div>
                  <h2 className="font-bold font-body text-secH text-xl mt-3">
                    Real Numbers
                  </h2>
                  <p className="md:w-11/12 h-[90px] text-primary5 font-normal text-sm ">
                    real numbers, mathematical induction sequency and series,
                    binary operator
                  </p>
                  <div className="mt-[40px] flex">
                    <img src={frame} alt="frame" />
                    <p className="text-xs sm:text-sm text-primary3 my-auto ml-3">
                      Viewed By 0 people
                    </p>
                  </div>
                </div>

                <div className="w-[280px] md:w-[320px] h-[438px] ml-8 pt-3 bg-sec4 px-4 rounded-3xl">
                  <img
                    src={recommended1}
                    alt="pictures"
                    className="w-[300px] h-[180px] "
                  />
                  <div className="w-full flex justify-between">
                    <p className="w-24  sm:w-28 mt-3 rounded-xl flex justify-center items-center text-secH font-medium text-xs sm:text-sm bg-primary1 font-roboto uppercase">
                      GOVERNMENT
                    </p>
                    <p className="w-24 sm:w-28 mt-3 rounded-xl flex justify-center items-center text-secH font-medium text-xs sm:text-sm bg-secR font-roboto uppercase">
                      COMING SOON
                    </p>
                  </div>
                  <h2 className="font-bold font-body text-secH text-xl mt-3">
                    Government & Politics
                  </h2>
                  <p className="md:w-11/12 h-[90px] text-primary5 font-normal text-base ">
                    what is politics, david easton&apos;s view, harold lasswell,
                    approaches, view
                  </p>
                  <div className="mt-[40px] flex">
                    <img src={frame} alt="frame" />
                    <p className="text-xs sm:text-sm text-primary3 my-auto ml-3">
                      Viewed By 0 people
                    </p>
                  </div>
                </div>

                <div className="w-[280px] md:w-[320px] h-[438px] ml-8 pt-3 bg-sec4 px-4 rounded-3xl">
                  <img
                    src={recommended1}
                    alt="pictures"
                    className="w-[300px] h-[180px] "
                  />
                  <div className="w-full flex justify-between">
                    <p className="w-24  sm:w-28 mt-3 rounded-xl flex justify-center items-center text-secH font-medium text-xs sm:text-sm bg-primary1 font-roboto uppercase">
                      LITERATURE
                    </p>
                    <p className="w-24 sm:w-28 mt-3 rounded-xl flex justify-center items-center text-secH font-medium text-xs sm:text-sm bg-secR font-roboto uppercase">
                      COMING SOON
                    </p>
                  </div>
                  <h2 className="font-bold font-body text-secH text-xl mt-3">
                    Dramatic Literature
                  </h2>
                  <p className="md:w-11/12 h-[90px] text-primary5 font-normal text-base ">
                    Drama, origin of drama, element of drama
                  </p>
                  <div className="mt-[40px] flex">
                    <img src={frame} alt="frame" />
                    <p className="text-xs sm:text-sm text-primary3 my-auto ml-3">
                      Viewed By 0 people
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* practice exams */}

            <div className="w-full h-full py-4 md:py-12 bg-primary4 dark:bg-darkBlue    md:px-6 lg:px-8 xl:px-20 flex flex-col-reverse md:flex-row md:justify-between mt-[130px]">
              <div className="w-full flex mt-8 md:mt-0  justify-center md:flex-none md:w-5/12">
                <img
                  src={exam}
                  alt="about"
                  className="h-[300px]  sm:w-[400px] "
                />
              </div>
              <div className=" px-4 md:px-0 md:w-6/12 flex flex-col  ">
                <h1 className="text-xl md:text-2xl mt-[40px] font-roboto md:mt-0 text-secH dark:text-primary1 font-semibold uppercase">
                  Test your limit by engaging in our exam
                </h1>
                <p className="  text-[16px] text-primary3 dark:text-lightGray">
                  Empower your learning journey with the flexibility to take
                  exams on any subject, section, or topic at your convenience.
                  Assess your exam readiness after studying each subject,
                  section, or topic, ensuring a comprehensive understanding of
                  the material. Our platform allows you to customize your
                  assessments, providing a tailored approach to testing your
                  knowledge. Whether you&apos;ve just covered a subject, delved
                  into a specific section, or focused on a particular topic,
                  take a targeted exam to gauge your mastery and boost your
                  confidence. Experience personalized exam preparation that
                  aligns seamlessly with your study progress.
                </p>
                <Link to="/instruction" smooth="true" duration={500}>
                  <button className="w-full md:w-[220px] mt-[20px] h-[59px] bg-primary0Blue hover:bg-sec3 flex justify-center items-center text-primary1 font-body text-xl rounded-[45px]">
                    Take Exams
                  </button>
                </Link>
              </div>
            </div>

            {/*ask A.I questions  */}

            <div className="w-full h-full    md:px-6 lg:px-8 xl:px-20 flex flex-col-reverse md:flex-row-reverse md:justify-between mt-[130px]">
              <div className="w-full flex mt-8 md:mt-0  justify-center md:flex-none md:w-5/12">
                <img
                  src={easereadAi}
                  alt="about"
                  className="h-[350px]  sm:w-[400px] "
                />
              </div>
              <div className="px-4 md:px-0  md:w-6/12 flex flex-col  ">
                <h1 className="text-xl md:text-2xl mt-[40px] font-roboto md:mt-0 text-secH dark:text-primary1 font-semibold uppercase">
                  Ask EaseReads AI Questions
                </h1>
                <p className=" text-[16px] text-primary3 dark:text-lightGray">
                  Elevate your learning experience with Easereads AI, your
                  instant companion for academic clarity. Seamlessly integrated
                  into our platform, this advanced AI allows students to ask
                  questions about any topic or part of a book they find
                  challenging. Receive instant, personalized answers that
                  illuminate the nuances and intricacies, ensuring comprehension
                  before you continue reading. With Easereads AI, uncertainties
                  become opportunities for immediate understanding, providing a
                  dynamic and interactive layer to your educational journey.
                  Empower your learning with real-time support, making every
                  question a gateway to enhanced comprehension.
                </p>
                <Link to="/coming-soon" smooth="true" duration={500}>
                  <button className="w-full md:w-[220px] mt-[20px] h-[59px] bg-primary0Blue hover:bg-sec3 flex justify-center items-center text-primary1 font-body text-xl rounded-[45px]">
                    Ask Questions
                  </button>
                </Link>
              </div>
            </div>

            {/* study plan */}

            <div className="w-full h-full bg-primary4 py-4 md:py-12  dark:bg-darkBlue  md:px-6 lg:px-8 xl:px-20 flex flex-col-reverse md:flex-row md:justify-between mt-[130px]">
              <div className="w-full flex mt-8 md:mt-0  justify-center md:flex-none md:w-5/12">
                <img
                  src={studyPlanner}
                  alt="about"
                  className="h-[300px] sm:w-[400px] "
                />
              </div>
              <div className="px-4 md:px-0  md:w-6/12 flex flex-col  ">
                <h1 className="text-xl md:text-2xl mt-[40px] font-roboto md:mt-0 text-secH dark:text-primary1 font-semibold uppercase">
                  Keep your Learning on Track
                </h1>
                <p className=" text-[16px] text-primary3 dark:text-lightGray">
                  Take control of your academic journey with our innovative
                  study planner feature. Tailor your study plan based on the
                  subjects or topics you want to tackle, ensuring a personalized
                  and effective approach to your learning goals. Create a
                  roadmap that aligns with your curriculum, making each study
                  session purposeful and efficient. Track your reading progress
                  seamlessly within the planner, gaining valuable insights into
                  your academic achievements. <br />
                  With our user-friendly study planner, turn your educational
                  aspirations into a well-organized and measurable success
                  story, empowering you to excel in every subject and topic you
                  choose to explore.
                </p>
                <Link to="/coming-soon" smooth="true" duration={500}>
                  <button className="w-full md:w-[220px] mt-[20px] h-[59px] bg-primary0Blue hover:bg-sec3 flex justify-center items-center text-primary1 font-body text-xl rounded-[45px]">
                    Study Planner
                  </button>
                </Link>
              </div>
            </div>

            <div className="w-full h-full px-4 md:h-[470px] lg:h-[400px] flex flex-col-reverse md:flex-row md:items-center  md:justify-evenly mt-[130px]  ">
              <div className="md:w-[500px] h-full flex flex-col md:justify-center md:items-center ">
                {/* <BsWhatsapp  className="text-white w-[100px] h-[100px] md:w-[200px] md:h-[200px]" /> */}
                {/* <div className="bg-red-800 h-[90px] w-[200px] text-center"> */}
                <img
                  src={whatsapp}
                  alt="whatsapp"
                  className="h-[95px] w-[95px] md:w-[250px] md:h-[250px] "
                />
                <a
                  className="w-[220px] mt-[20px] h-[59px] bg-primary0Blue hover:bg-sec3 flex justify-center items-center text-primary1 font-body text-xl rounded-[45px]"
                  rel="noreferrer"
                  target="_blank"
                  href="https://chat.whatsapp.com/B4uHSlVlwjAE8Y9bqWDtRF"
                >
                  {" "}
                  Click to Join
                </a>
              </div>
              <div className="md:w-[440px] w-full h-full   py-4">
                {" "}
                <h3 className="font-semibold text-xl md:text-2xl font-roboto text-secH dark:text-primary1">
                  Join our Whatsapp community for free
                </h3>
                <h4 className="font-medium  mt-[10px] text-[20px] text-secH dark:text-primary1">
                  Benefit of Joining{" "}
                </h4>
                <div className=" text-[16px] text-left mt-[15px] leading-snug text-secH dark:text-lightGray">
                  <p className="mt-[15px]">
                    Get help with Jupeb-related questions and study resources
                    provided by easereads.
                  </p>
                  <p className="mt-[15px]">
                    Connect with students from different schools for
                    collaborative learning.
                  </p>
                  <p className="mt-[15px]">
                    Find motivation and support during your Jupeb exam
                    preparation journey.
                  </p>
                  <p className="mt-[15px]">
                    Stay informed about Jupeb exam important announcements.
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`w-full h-full px-4 md:h-[300px] bg-primary4 dark:bg-darkBlue dark:text-lightGray py-6 md:py-12  flex items-center justify-between  md:px-6 lg:px-8 xl:px-20 mt-[130px]   leading-snug`}
            >
              <div className="text-[16px] mb-[20px] font-body">
                <h5 className="text-[30px] md:mt-[20px] font-roboto dark:text-primary1">
                  Start For free
                </h5>
                <div className="mt-[15px]">
                  <input type="checkbox" id="first" checked />
                  <label className="ml-[10px]" htmlFor="first">
                    access to all textbooks
                  </label>
                </div>
                <div className="mt-[7px]">
                  <input type="checkbox" id="second" checked />
                  <label className="ml-[10px]" htmlFor="second">
                    access to past questions and answers
                  </label>
                </div>
                <div className="mt-[7px]">
                  <input type="checkbox" id="third" checked />
                  <label className="ml-[10px]" htmlFor="third">
                    24/7 support to answer any question related to jupeb
                    syllabus
                  </label>
                </div>
                {/* <Link to="/pricing">
                  <button
                    type="submit"
                    className="h-[40px] w-[180px]  bg-[#f7b704] text-white text-[22px] mt-[30px]  rounded-[10px] shadow-lg opacity-90 hover:opacity-100"
                  >
                    View Plans
                  </button>
                </Link> */}
              </div>
              <div className="w-[300px] h-[250px] ">
                <img src={compare} alt="devices" className="rounded-[10px]" />
              </div>
            </div>
          </div>
          {/* Testimonial  */}
          <div className="w-full h-full mt-[180px] md:px-6 lg:px-8 xl:px-20 px-4 ">
            <h2 className="font-roboto font-semibold text-secH text-center dark:text-primary1 text-xl  md:text-3xl">
              Testimonials from Past and current Students
            </h2>
            <p className="font-normal  font-roboto text-base text-center mt-[20px] dark:text-lightGray">
              Here are testimonies of past and present students. See impact on
              their confidence <br className="hidden md:flex" /> and impact in
              their academics
            </p>
            <div className="w-full  mt-[60px] ">
              <div className="w-full md:flex md:justify-between">
                <div className="md:w-[45%] h-full">
                  <div className=" flex ">
                    <FaStar size={24} className="text-secR " />
                    <FaStar size={24} className="text-secR ml-2" />
                    <FaStar size={24} className="text-secR ml-2" />
                    <FaStar size={24} className="text-secR ml-2" />
                    <FaStar size={24} className="text-secR ml-2" />
                  </div>
                  <p className="h-56 md:h-56 lg:h-40  text-pS text-secH dark:text-lightGray mt-[20px] font-medium font-roboto">
                    Exceptional Resource! The platform offers an incredible
                    array of learning materials, from textbooks and videos to an
                    AI feature for instant clarification. The study planner is a
                    game-changer, helping me organize and track my progress
                    effectively. A one-stop-shop for comprehensive exam
                    preparation!
                  </p>
                  <div className="mt-8 sm:mt-[20px] w-[215px] h-[70px] flex justify-between items-center">
                    <img
                      src={peterAkojede}
                      alt="user"
                      className="w-[70px] h-full rounded-xl "
                    />
                    <p className="text-secH dark:text-primary1 text-pL font-roboto font-medium">
                      Peter Akojede
                    </p>
                  </div>
                </div>

                <div className="md:w-[45%] mt-[60px] md:mt-0 h-full">
                  <div className=" flex ">
                    <FaStar size={24} className="text-secR " />
                    <FaStar size={24} className="text-secR ml-2" />
                    <FaStar size={24} className="text-secR ml-2" />
                    <FaStar size={24} className="text-secR ml-2" />
                  </div>
                  <p className="h-56 md:h-56 lg:h-40 text-pS text-secH dark:text-lightGray mt-[20px] font-medium font-roboto">
                    Top-notch Exam Readiness! The practice exams in real-life
                    format have been invaluable in boosting my confidence. The
                    ability to customize exams based on subjects, sections, or
                    topics allows for targeted preparation. A must-have for any
                    student serious about acing their exams!
                  </p>
                  <div className="mt-8 sm:mt-[20px] w-[215px] h-[70px] flex justify-between items-center">
                    <img
                      src={dave}
                      alt="user"
                      className="w-[70px] h-full rounded-xl "
                    />
                    <p className="text-secH text-pL dark:text-primary1 font-roboto font-medium">
                      David Aderinto
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:flex md:justify-between mt-16">
                <div className="md:w-[45%] h-full">
                  <div className=" flex ">
                    <FaStar size={24} className="text-secR " />
                    <FaStar size={24} className="text-secR ml-2" />
                    <FaStar size={24} className="text-secR ml-2" />
                    <FaStar size={24} className="text-secR ml-2" />
                    <FaStarHalfAlt size={24} className="text-secR ml-2" />
                  </div>
                  <p className="h-56 md:h-56 lg:h-40 dark:text-lightGray text-pS text-secH mt-[20px] font-medium font-roboto">
                    Innovative Learning Experience! Easereads AI is a standout
                    feature, providing instant answers to questions on
                    challenging topics. The user-friendly study planner has
                    become my go-to tool for planning and tracking my reading
                    progress. This platform truly takes the stress out of exam
                    preparation.
                  </p>
                  <div className="mt-8 sm:mt-[20px] w-[215px] h-[70px] flex justify-between items-center">
                    <img
                      src={peter}
                      alt="user"
                      className="w-[70px] h-full rounded-xl "
                    />
                    <p className="text-secH dark:text-primary1 text-pL font-roboto font-medium">
                      Peter Adesoye
                    </p>
                  </div>
                </div>

                <div className="md:w-[45%] mt-[60px] md:mt-0 h-full">
                  <div className=" flex ">
                    <FaStar size={24} className="text-secR " />
                    <FaStar size={24} className="text-secR ml-2" />
                    <FaStar size={24} className="text-secR ml-2" />
                    <FaStar size={24} className="text-secR ml-2" />
                    <FaStar size={24} className="text-secR ml-2" />
                  </div>
                  <p className="h-56 md:h-56 lg:h-40 text-pS text-secH dark:text-lightGray mt-[20px] font-medium font-roboto">
                    Flexible and Comprehensive! The site&apos;s flexibility to
                    take exams on any subject, section, or topic is a
                    game-changer. The curated collection of recommended videos
                    complements the study materials perfectly. A well-rounded
                    platform that has enhanced my learning experience
                    significantly!
                  </p>
                  <div className="mt-8 sm:mt-[20px] w-[245px] h-[70px] flex justify-between items-center">
                    <img
                      src={samuel}
                      alt="user"
                      className="w-[70px] h-full rounded-xl "
                    />
                    <p className="text-secH dark:text-primary1 text-pL font-roboto font-medium">
                      Samuel Makinde
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-full">
            {/* <Reviews /> */}
            <FAQPage />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Home;
