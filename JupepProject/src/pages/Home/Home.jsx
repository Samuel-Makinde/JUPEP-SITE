import ImageSlider from "../../components/ImageSlider/ImageSlider";
import Layout from "../../layout/Layout";
import { Link } from "react-router-dom";
import compare from "../../assets/Home Landing Image/comparePlan.jpeg";
import { FaStar } from "react-icons/fa";
import FAQPage from "../FAQ/FAQPage";
import aboutUs from "../../assets/Home Landing Image/about-us.png"
import reading from "../../assets/Home Landing Image/reading.png"
import recommended1 from "../../assets/Home Landing Image/recommended videos.png"
import frame from  "../../assets/Home Landing Image/Frame 98.png"
import whatsapp from  "../../assets/Home Landing Image/WhatsApp.png"
import peterAkojede from "../../assets/Home Landing Image/peterAkojede.jpg"
// import samuel from "../../assets/Home Landing Image/samuel.png"
import { FaStarHalfAlt } from "react-icons/fa";
import styles from './home.module.css'
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';





const Home = () => {
  return (
    <Layout>
      <main className="w-full h-full pt-[90px] font-sans md:pt-0 text-2xl ">
        <ImageSlider />
        <div className="w-full h-full  ">
          <div className="w-full px-4 md:px-6 lg:px-8 xl:px-20 flex flex-col-reverse md:flex-row md:justify-between mt-[70px]">
            <img src={aboutUs} alt="about" className="h-[350px] md:h-[400px] w-[600px] " />
          <div className="w-full h-full    flex flex-col items-center ">
            <h1 className=" text-2xl mt-[40px] text-secH font-roboto font-semibold ">
              Why US!
            </h1>
            <p className="w-full md:w-8/12 text-center  text-[16px] text-primary3 ">
              We&apos;ve tackled the Jupeb reading problem by offering students a flexible solution. With our program, you can study anytime, anywhere using your device. We provide weekly video calls where experienced instructors explain specific topics in detail, ensuring you understand them thoroughly. Our active WhatsApp community is there to support you, allowing you to ask questions and find help on challenging subjects. We also offer a wealth of Jupeb past questions and answers for practice, and our textbooks contain detailed explanations for all topics in subjects 001/002/003/004. This comprehensive approach empowers students to excel in their Jupeb exams.
            </p>
          </div>
          </div>
          <div className="w-full h-full ">
            <div className="w-full h-full flex flex-col items-center mt-[100px] ">
              <h1 className="text-4xl text-sec1 font-roboto">
                {" "}
                <strong>What we offer </strong>{" "}
              </h1>
              <p className="w-full md:w-[500px] lg:w-[700px] text-center mt-[30px] h-full font-extralight text-[18px]">
                As a user, you will enjoy all the benefits listed
                below and more
              </p>

              <div className="w-full h-full py-4 md:py-12 bg-primary4  md:px-6 lg:px-8 xl:px-20 flex flex-col-reverse md:flex-row-reverse md:justify-between mt-[30px]">
                <div className="w-full flex mt-8 md:mt-0  justify-center md:flex-none md:w-5/12">
            <img src={reading} alt="about" className="h-[350px] md:h-[400px] w-[400px] " />
                </div>
          <div className=" px-4 md:px-0  md:w-5/12 md:text-left flex flex-col  ">
            <h1 className="text-xl md:text-2xl mt-[40px] font-roboto md:mt-0 text-secH font-bold uppercase">
              Engage in the act of reading
            </h1>
            <p className=" text-left   text-[16px] text-primary3">
              We&apos;ve tackled the Jupeb reading problem by offering students a flexible solution. With our program, you can study anytime, anywhere using your device. We provide weekly video calls where experienced instructors explain specific topics in detail, ensuring you understand them thoroughly. Our active WhatsApp community is there to support you, allowing you to ask questions and find help on challenging subjects. We also offer a wealth of Jupeb past questions and answers for practice, and our textbooks contain detailed explanations for all topics in subjects 001/002/003/004. This comprehensive approach empowers students to excel in their Jupeb exams.
            </p>
            <button className="w-full md:w-[220px] mt-[20px] h-[59px] bg-primary0Blue hover:bg-sec3 flex justify-center items-center text-primary1 font-body text-xl rounded-[45px]">
              Start Reading
            </button>
          </div>
          </div>     
            </div>


            {/* video sections */}
                        <div className="w-full px-4 md:px-6 lg:px-8 xl:px-20 mt-[130px] ">
              <h1 className="text-xl md:text-2xl text-secH font-roboto font-bold uppercase  ">Recommended Videos for you </h1>
              <p className="md:w-6/12 text-primary5 font-normal text-base ">Lorem ipsum dolor sit amet consectetur. Morbi tempus pellentesque sit a. Ut mattis vivamus hac est maecenas mi lobortis. Urna vulputate dignissim netus.</p>
            </div>
            <div className={`relative w-full h-full px-4 md:px-6 lg:px-8 xl:px-20 overflow-auto ${styles.videos}`}> 

            <div className="min-w-min h-full mt-[30px] flex justify-between overflow-auto ">
              <div className="w-[280px] md:w-[320px] h-[438px] pt-3 bg-sec4 px-4 rounded-3xl">
                <img src={recommended1} alt="pictures" className="w-[300px] h-[180px] " />
                <p className="w-20 mt-3 rounded-xl flex justify-center items-center text-secH font-medium text-sm bg-primary1 font-roboto uppercase">
                  Jupeb 
                </p>
                <h2 className="font-bold font-body text-secH text-xl mt-3">Mixture of Element II</h2>
                <p className="md:w-11/12 text-primary5 font-normal text-base ">Lorem ipsum dolor sit amet consectetur. Urna curabitur convallis gravida pellentesque. Libero enim eu sit tempus.</p>
                <div className="mt-[40px] flex">
                <img src={frame} alt="frame" />
                <p className="text-sm text-primary3 my-auto ml-3">Viewed By 120+ people</p>
                </div>
              </div>

              <div className="w-[280px] md:w-[320px] h-[438px] ml-8 pt-3 bg-sec4 px-4 rounded-3xl">
                <img src={recommended1} alt="pictures" className="w-[300px] h-[180px] " />
                <p className="w-20 mt-3 rounded-xl flex justify-center items-center text-secH font-medium text-sm bg-primary1 font-roboto uppercase">
                  Jupeb 
                </p>
                <h2 className="font-bold font-body text-secH text-xl mt-3">Mixture of Element II</h2>
                <p className="md:w-11/12 text-primary5 font-normal text-base ">Lorem ipsum dolor sit amet consectetur. Urna curabitur convallis gravida pellentesque. Libero enim eu sit tempus.</p>
                <div className="mt-[40px] flex">
                <img src={frame} alt="frame" />
                <p className="text-sm text-primary3 my-auto ml-3">Viewed By 120+ people</p>
                </div>
              </div>

              <div className="w-[280px] md:w-[320px] h-[438px] ml-8 pt-3 bg-sec4 px-4 rounded-3xl">
                <img src={recommended1} alt="pictures" className="w-[300px] h-[180px] " />
                <p className="w-20 mt-3 rounded-xl flex justify-center items-center text-secH font-medium text-sm bg-primary1 font-roboto uppercase">
                  Jupeb 
                </p>
                <h2 className="font-bold font-body text-secH text-xl mt-3">Mixture of Element II</h2>
                <p className="md:w-11/12 text-primary5 font-normal text-base ">Lorem ipsum dolor sit amet consectetur. Urna curabitur convallis gravida pellentesque. Libero enim eu sit tempus.</p>
                <div className="mt-[40px] flex">
                <img src={frame} alt="frame" />
                <p className="text-sm text-primary3 my-auto ml-3">Viewed By 120+ people</p>
                </div>
              </div>

              <div className="w-[280px] md:w-[320px] h-[438px] ml-8 pt-3 bg-sec4 px-4 rounded-3xl">
                <img src={recommended1} alt="pictures" className="w-[300px] h-[180px] " />
                <p className="w-20 mt-3 rounded-xl flex justify-center items-center text-secH font-medium text-sm bg-primary1 font-roboto uppercase">
                  Jupeb 
                </p>
                <h2 className="font-bold font-body text-secH text-xl mt-3">Mixture of Element II</h2>
                <p className="md:w-11/12 text-primary5 font-normal text-base ">Lorem ipsum dolor sit amet consectetur. Urna curabitur convallis gravida pellentesque. Libero enim eu sit tempus.</p>
                <div className="mt-[40px] flex">
                <img src={frame} alt="frame" />
                <p className="text-sm text-primary3 my-auto ml-3">Viewed By 120+ people</p>
                </div>
              </div>

              <div className="w-[280px] md:w-[320px] h-[438px] ml-8 pt-3 bg-sec4 px-4 rounded-3xl">
                <img src={recommended1} alt="pictures" className="w-[300px] h-[180px] " />
                <p className="w-20 mt-3 rounded-xl flex justify-center items-center text-secH font-medium text-sm bg-primary1 font-roboto uppercase">
                  Jupeb 
                </p>
                <h2 className="font-bold font-body text-secH text-xl mt-3">Mixture of Element II</h2>
                <p className="md:w-11/12 text-primary5 font-normal text-base ">Lorem ipsum dolor sit amet consectetur. Urna curabitur convallis gravida pellentesque. Libero enim eu sit tempus.</p>
                <div className="mt-[40px] flex">
                <img src={frame} alt="frame" />
                <p className="text-sm text-primary3 my-auto ml-3">Viewed By 120+ people</p>
                </div>
              </div>

              <div className="w-[280px] md:w-[320px] h-[438px] ml-8 pt-3 bg-sec4 px-4 rounded-3xl">
                <img src={recommended1} alt="pictures" className="w-[300px] h-[180px] " />
                <p className="w-20 mt-3 rounded-xl flex justify-center items-center text-secH font-medium text-sm bg-primary1 font-roboto uppercase">
                  Jupeb 
                </p>
                <h2 className="font-bold font-body text-secH text-xl mt-3">Mixture of Element II</h2>
                <p className="md:w-11/12 text-primary5 font-normal text-base ">Lorem ipsum dolor sit amet consectetur. Urna curabitur convallis gravida pellentesque. Libero enim eu sit tempus.</p>
                <div className="mt-[40px] flex">
                <img src={frame} alt="frame" />
                <p className="text-sm text-primary3 my-auto ml-3">Viewed By 120+ people</p>
                </div>
              </div>
            </div>
            </div>

            {/* practice exams */}

            <div className="w-full h-full py-4 md:py-12 bg-primary4   md:px-6 lg:px-8 xl:px-20 flex flex-col-reverse md:flex-row md:justify-between mt-[130px]">
                <div className="w-full flex mt-8 md:mt-0  justify-center md:flex-none md:w-5/12">
            <img src={reading} alt="about" className="h-[350px] md:h-[400px] w-[400px] " />
                </div>
          <div className=" px-4 md:px-0 md:w-6/12 flex flex-col  ">
            <h1 className="text-xl md:text-2xl mt-[40px] font-roboto md:mt-0 text-secH font-semibold uppercase">
              Test your limit by engaging in our exam
            </h1>
            <p className="  text-[16px] text-primary3">
              We&apos;ve tackled the Jupeb reading problem by offering students a flexible solution. With our program, you can study anytime, anywhere using your device. We provide weekly video calls where experienced instructors explain specific topics in detail, ensuring you understand them thoroughly. Our active WhatsApp community is there to support you, allowing you to ask questions and find help on challenging subjects. We also offer a wealth of Jupeb past questions and answers for practice, and our textbooks contain detailed explanations for all topics in subjects 001/002/003/004. This comprehensive approach empowers students to excel in their Jupeb exams.
            </p>
            <button className="w-full md:w-[220px] mt-[20px] h-[59px] bg-primary0Blue hover:bg-sec3 flex justify-center items-center text-primary1 font-body text-xl rounded-[45px]">
              Take Exams
            </button>
          </div>
          </div>

           {/*ask A.I questions  */}

                       <div className="w-full h-full    md:px-6 lg:px-8 xl:px-20 flex flex-col-reverse md:flex-row-reverse md:justify-between mt-[130px]">
                <div className="w-full flex mt-8 md:mt-0  justify-center md:flex-none md:w-5/12">
            <img src={reading} alt="about" className="h-[350px] md:h-[400px] w-[400px] " />
                </div>
          <div className="px-4 md:px-0  md:w-6/12 flex flex-col  ">
            <h1 className="text-xl md:text-2xl mt-[40px] font-roboto md:mt-0 text-secH font-semibold uppercase">
              Ask EaseReads AI Questions
            </h1>
            <p className="  text-[16px] text-primary3">
              We&apos;ve tackled the Jupeb reading problem by offering students a flexible solution. With our program, you can study anytime, anywhere using your device. We provide weekly video calls where experienced instructors explain specific topics in detail, ensuring you understand them thoroughly. Our active WhatsApp community is there to support you, allowing you to ask questions and find help on challenging subjects. We also offer a wealth of Jupeb past questions and answers for practice, and our textbooks contain detailed explanations for all topics in subjects 001/002/003/004. This comprehensive approach empowers students to excel in their Jupeb exams.
            </p>
            <button className="w-full md:w-[220px] mt-[20px] h-[59px] bg-primary0Blue hover:bg-sec3 flex justify-center items-center text-primary1 font-body text-xl rounded-[45px]">
              Ask Questions
            </button>
          </div>
          </div>

          {/* study plan */}

          <div className="w-full h-full bg-primary4 py-4 md:py-12   md:px-6 lg:px-8 xl:px-20 flex flex-col-reverse md:flex-row md:justify-between mt-[130px]">
                <div className="w-full flex mt-8 md:mt-0  justify-center md:flex-none md:w-5/12">
            <img src={reading} alt="about" className="h-[350px] md:h-[400px] w-[400px] " />
                </div>
          <div className="px-4 md:px-0  md:w-6/12 flex flex-col  ">
            <h1 className="text-xl md:text-2xl mt-[40px] font-roboto md:mt-0 text-secH font-semibold uppercase">
              Keep your Learning on Track
            </h1>
            <p className="  text-[16px] text-primary3">
              We&apos;ve tackled the Jupeb reading problem by offering students a flexible solution. With our program, you can study anytime, anywhere using your device. We provide weekly video calls where experienced instructors explain specific topics in detail, ensuring you understand them thoroughly. Our active WhatsApp community is there to support you, allowing you to ask questions and find help on challenging subjects. We also offer a wealth of Jupeb past questions and answers for practice, and our textbooks contain detailed explanations for all topics in subjects 001/002/003/004. This comprehensive approach empowers students to excel in their Jupeb exams.
            </p>
            <button className="w-full md:w-[220px] mt-[20px] h-[59px] bg-primary0Blue hover:bg-sec3 flex justify-center items-center text-primary1 font-body text-xl rounded-[45px]">
              Study Planner
            </button>
          </div>
          </div>

            <div className="w-full h-full md:h-[470px] lg:h-[400px] flex flex-col md:flex-row items-center  md:justify-evenly mt-[130px]  ">
              <div className="md:w-[500px] h-full flex flex-col justify-center items-center ">
                {/* <BsWhatsapp  className="text-white w-[100px] h-[100px] md:w-[200px] md:h-[200px]" /> */}
                {/* <div className="bg-red-800 h-[90px] w-[200px] text-center"> */}
                <img src={whatsapp} alt="whatsapp" className="h-[250px]" />
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
              <div className="md:w-[440px] w-full h-full  px-4 py-4">
                {" "}
                <h3 className="font-semibold text-xl md:text-2xl font-roboto text-secH">
                  Join our Whatsapp community for free
                </h3>
                <h4 className="font-medium  mt-[10px] text-[20px] text-secH">
                  Benefit of Joining{" "}
                </h4>
                <div className=" text-[16px] text-left mt-[15px] leading-snug text-secH">
                  <p className="mt-[15px]">
                     Get help with Jupeb-related questions and study resources provided by easereads.
                  </p>
                  <p className="mt-[15px]">
                    Connect with students from different schools for collaborative learning.
                  </p>
                  <p className="mt-[15px]">
                    Find motivation and support during your Jupeb exam preparation journey.
                  </p>
                  <p className="mt-[15px]">
                   Stay informed about Jupeb exam important announcements.
                  </p>
                </div>
              </div>
            </div>


            <div
              className={`w-full h-full px-4 md:h-[300px] bg-primary4 py-6 md:py-12  flex items-center justify-between  md:px-6 lg:px-8 xl:px-20 mt-[130px]   leading-snug`}
            >
              <div className="text-[16px] mb-[20px] font-body">
                <h5 className="text-[30px] md:mt-[20px] font-roboto">Start For free</h5>
                <div className="mt-[15px]">
                  <input
                    type="checkbox"
                    id="first"
                    checked
                  />
                  <label 
                  className="ml-[10px]"
                  htmlFor="first">access to all textbooks</label>
                </div>
                <div className="mt-[7px]">
                  <input
                    type="checkbox"
                    id="second"
                    checked
                  />
                  <label 
                  className="ml-[10px]"
                  htmlFor="second">
                    access to past questions and answers
                  </label>
                </div>
                <div className="mt-[7px]">
                  <input
                    type="checkbox"
                    id="third"
                    checked
                  />
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
            <h2 className="font-roboto font-semibold text-secH text-center text-xl  md:text-3xl">Testimonials from Past and current Students</h2>
            <p className="font-normal font-roboto text-base text-center mt-[20px]">Here are testimonies of past and present students. See impact on their confidence <br  className="hidden md:flex"/> and impact in their academics</p>
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
                <p className="text-pS text-secH mt-[20px] font-medium font-roboto">This site is a game-changer! From the moment I signed up, the experience has been nothing short of exceptional. The diverse range of resources, interactive learning features, and the ability to connect with ChatGPT for questions have made studying a joy. The user-friendly interface and well-structured content make it easy to navigate. <br />Five stars without a doubt — this platform has enriched my learning journey in ways I couldn&apos;t have imagined!</p>
                <div className="mt-[20px] w-[215px] h-[70px] flex justify-between items-center">
                  <img src={peterAkojede} alt="user" className="w-[70px] h-full rounded-xl " />
                  <p className="text-secH text-pL font-roboto font-medium">Peter Akojede</p>
                </div>
              </div>

               <div className="md:w-[45%] mt-[60px] md:mt-0 h-full">
                <div className=" flex ">
                      <FaStar size={24} className="text-secR " /> 
                      <FaStar size={24} className="text-secR ml-2" /> 
                      <FaStar size={24} className="text-secR ml-2" /> 
                      <FaStar size={24} className="text-secR ml-2" /> 
                </div>
                <p className="text-pS text-secH mt-[20px] font-medium font-roboto">This site is a game-changer! From the moment I signed up, the experience has been nothing short of exceptional. The diverse range of resources, interactive learning features, and the ability to connect with ChatGPT for questions have made studying a joy. The user-friendly interface and well-structured content make it easy to navigate. <br />
                Five stars without a doubt — this platform has enriched my learning journey in ways I couldn&apos;t have imagined!</p>
                <div className="mt-[20px] w-[215px] h-[70px] flex justify-between items-center">
                  <img src={peterAkojede} alt="user" className="w-[70px] h-full rounded-xl " />
                  <p className="text-secH text-pL font-roboto font-medium">Peter Akojede</p>
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
                <p className="text-pS text-secH mt-[20px] font-medium font-roboto">This site is a game-changer! From the moment I signed up, the experience has been nothing short of exceptional. The diverse range of resources, interactive learning features, and the ability to connect with ChatGPT for questions have made studying a joy. The user-friendly interface and well-structured content make it easy to navigate. 
                <br />Five stars without a doubt — this platform has enriched my learning journey in ways I couldn&apos;t have imagined!</p>
                <div className="mt-[20px] w-[215px] h-[70px] flex justify-between items-center">
                  <img src={peterAkojede} alt="user" className="w-[70px] h-full rounded-xl " />
                  <p className="text-secH text-pL font-roboto font-medium">Peter Akojede</p>
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
                <p className="text-pS text-secH mt-[20px] font-medium font-roboto">This site is a game-changer! From the moment I signed up, the experience has been nothing short of exceptional. The diverse range of resources, interactive learning features, and the ability to connect with ChatGPT for questions have made studying a joy. The user-friendly interface and well-structured content make it easy to navigate. 
                <br />Five stars without a doubt — this platform has enriched my learning journey in ways I couldn&apos;t have imagined!</p>
                <div className="mt-[20px] w-[215px] h-[70px] flex justify-between items-center">
                  <img src={peterAkojede} alt="user" className="w-[70px] h-full rounded-xl " />
                  <p className="text-secH text-pL font-roboto font-medium">Peter Akojede</p>
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
