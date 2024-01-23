// import Layout from "../../layout/Layout";
// import vision from "../../assets/Home Landing Image/visionNew.jpg"
// import missionVission from "../../assets/Home Landing Image/missionVision.jpg"

// const About = () => {
//   return (
//     <Layout>
//       <main className=" w-full h-full mb-[70px] md:mb-[140px]">
//         <div className="md:pt-[80px] pt-[80px] px-4 md:px-6 lg:px-8 xl:px-12">
//           <div className=" w-full h-full md:grid md:grid-cols-2 md:gap-10 overflow-hidden">
//             <h1 className=" font-semibold text-[24px] leading-[30.43px] md:text-[48px] lg:w-[613px] md:w-[400px] md:h-[183px]  md:leading-[60.86px]">
//               At <span className="text-[#4190EA]"> EaseReads</span> We are
//               passionate about your academic success.
//             </h1>
//             <p className="font-regular lg:w-[469px] mt-[25px] md:h-[80px] md:mt-[103px] md:mr-[20px] break-words leading-[20.29px] text-[#54555B] text-[16px]">
//               Welcome to EaseReads, your gateway to a world of educational opportunities. We are deeply committed to your academic success, and our platform offers a range of essential features to support your learning journey.
//             </p>
//           </div>
//           <div className="hidden md:flex md:border-b-2 mt-[30px] md:border-b-[#D4D5DB]   "></div>

//           <div className="w-full md:h-[400px] flex flex-col-reverse md:flex-row  justify-around">
//             <div>
//               <h1 className="md:mt-[70px]   font-semibold text-[24px] text-[#2F3035] md:text-[48px]  md:h-[61px]  md:leading-[60.86px]">
//                 Our Mission
//               </h1>
//               <p className="text-[#85868D]  text-[16px]  font-regular leading-[20.29px] md:w-[350px] lg:w-[469px] h-[80px]">
//                 Our mission is to provide you with comprehensive learning resources, including high-quality textbooks, past questions, and in-depth explanations, all accessible online. We&apos;re here to make learning flexible, interactive, and engaging, ensuring your academic success is within reach.
//               </p>
//             </div>
//             <div className="hidden md:flex h-full md:mt-[70px] mt-[50px] ">
//               {/* <p>quality image present</p> */}
//               <img
//               className="  h-[273px] md:h-[400px] "
//               src={missionVission}
//               alt="aboutme"
//             />
//             </div>
//             <div className="md:hidden w-full flex justify-center h-full md:mt-[70px] mt-[50px] ">
//               {/* <p>quality image present</p> */}
//               <img
//               className="  h-[273px] md:h-[400px] "
//               src={missionVission}
//               alt="aboutme"
//             />
//             </div>

//           </div>

//           <div className=" w-full h-full md:h-[400px] flex flex-col-reverse md:flex-row  justify-around">

//             <div className="hidden md:flex mt-[40px] h-full  ">
//               <img
//               className=" md:h-[400px] h-[273px] "
//               src={vision}
//               alt="aboutme"
//             />
//             </div>
//             <div className="md:hidden w-full flex justify-center mt-[40px] h-full  ">
//               <img
//               className=" md:h-[400px] h-[273px] "
//               src={vision}
//               alt="aboutme"
//             />
//             </div>
//             <div className="md:mt-[120px] mt-[70px]">
//               <h1 className="text-[#2F3035] text-[24px] mt-[20px] md:mt-0  font-semibold md:text-[48px] md:leading-[60.86px] md:w-[336px] md:h-[61px]">
//                 Our Vision
//               </h1>
//               <p className=" font-regular  md:w-[350px] lg:w-[469px] md:h-[80px]  break-words leading-[20.29px] text-[#85868D] text-[16px]">
//                 At EaseReads, we envision a world where students have the freedom to study anytime, anywhere, with the power of technology. We&apos;re committed to facilitating interactive learning through our weekly tutorials and fostering a supportive community on our active WhatsApp channel.
//                We believe in the transformative power of education, and we&apos;re dedicated to helping you excel in your academic pursuits.
//               </p>
//             </div>
//           </div>

//          <div className="hidden md:flex md:border-b-2 mt-[100px] md:border-b-[#D4D5DB]   "></div>

//           <div className="w-full mt-[50px]">

//             <h2 className="text-[#2F3035] text-[24px]  font-semibold md:text-[30px] ] md:w-[336px] ">Why choose EaseReads</h2>
//           <div className="w-full  md:flex  items-center mt-[20px] ">

//             <div className=" mt-[20px] ">
//               <p className=" text-[16px]  text-[#85868D] md:text-center">
//                 Access a vast library of online reading materials to enhance your knowledge.
//               </p>
//               {/* <img className="mt-[20px] md:mt-[40px]" src={image1} alt="number" /> */}
//             </div>
//             <div className="mt-[20px]">
//               <p className=" text-[16px] text-[#85868D] md:text-center">
//                 Join our weekly tutorial sessions for detailed explanations and personalized support.
//               </p>
//               {/* <img className="mt-[20px] md:mt-[40px]" src={image2} alt="number" /> */}
//             </div>
//             <div className=" mt-[20px]">
//               <p className=" text-[16px] text-[#85868D] md:text-center">
//                Study at your convenience using your device, eliminating the constraints of time and location.
//               </p>
//               {/* <img className="mt-[20px] md:mt-[40px]" src={image3} alt="number" /> */}
//             </div>
//           </div>
//           </div>

//         </div>
//       </main>
//     </Layout>
//   );
// };

// export default About;

import Layout from "../../layout/Layout";
import group from "../../assets/About Image/group.jpg";
import arrow from "../../assets/About Image/arrow.jpg";
import learning from "../../assets/About Image/learning.jpg";
import reading from "../../assets/About Image/reading.jpg";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Layout>
      <div className="w-full h-full font-body mb-20 xl:mb-10">
        {/* 1ST PART */}
        <div className="w-full px-4 md:px-6 lg:px-8 xl:px-20] md:flex justify-between  md:flex-row pt-[6rem] md:space-b ">
          <div className="pt-[3rem] md:w-5/12 md:mx-auto md:h-[23rem]  lg:pt-[3rem]">
            <img
              className="h-[400px]  md:h-[500px]"
              src={learning}
              alt="service"
            />
          </div>
          <div className="sm:w-full md:w-5/12  lg:pl-[5rem] lg:w-3/5 pt-[5rem] lg:pt-[6rem]">
            <h2 className="text-xl md:text-2xl pb-[1rem] font-roboto">
              About Us
            </h2>
            <h4 className="text-xl lg:text-3xl font-bold pb-[1rem] text-sec2 md:w-3/4 font-roboto">
              Unleashing Curiosity and Empowering Young Minds
            </h4>
            <p>
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
        <div className="bg-primary4 flex flex-col-reverse md:flex  md:flex-row justify-between lg:py-[7rem] px-4 md:px-6 lg:px-8 xl:px-20 sm:mt-[5rem] mt-0">
          <div className="lg:pr-[4rem] md:w-5/12 pt-[3rem] ">
            <h2 className="text-xl md:text-3xl  font-bold pb-[1rem] text-sec2">
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
        <div className="bg-primary4 md:h-full md:flex  md:flex-row justify-between sm:mt-[5rem] xl:mt-40 mt-0 lg:py-[0rem] px-4 md:px-6 lg:px-8 xl:px-20">
          <div className=" pt-[7rem] md:pt-[3rem] lg:pt-[12rem] md:w-5/12">
            <h2 className="text-xl md:text-3xl  font-bold pb-[1rem] text-sec2">
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
