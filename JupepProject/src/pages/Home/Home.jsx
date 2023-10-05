import ImageSlider from "../../components/ImageSlider/ImageSlider";
import Layout from "../../layout/Layout";
import { Link } from "react-router-dom";
import { ImBook } from "react-icons/im";
import { TbDevices, TbBrandZoom } from "react-icons/tb";
// import college from "../../assets/Home Landing Image/expand knowledge.jpg";
import chemistry from "../../assets/Home Landing Image/chemistry3.png"
import biology from "../../assets/Home Landing Image/biology2.jpeg"
import maths from "../../assets/Home Landing Image/maths.jpeg"
import government from "../../assets/Home Landing Image/government.png"
import crs from "../../assets/Home Landing Image/crs.png"
import literature from "../../assets/Home Landing Image/lieterature.png"
import economics from "../../assets/Home Landing Image/economics.png"
import business from "../../assets/Home Landing Image/business-studies.jpeg"
import account from "../../assets/Home Landing Image/accounting.png"
import visual from "../../assets/Home Landing Image/visual art.jpeg"
import history from "../../assets/Home Landing Image/historynew.jpeg"
import pastquestion from "../../assets/Home Landing Image/pastQ.png"
import { GiAtom } from "react-icons/gi";
import { BsWhatsapp } from "react-icons/bs";
import styles from "./home.module.css";
import compare from "../../assets/Home Landing Image/comparePlan.jpeg";
import Reviews from "../Reviews/Reviews";
import FAQPage from "../FAQ/FAQPage";


const Home = () => {
  return (
    <Layout>
      <main className="w-full h-full pt-[90px] md:pt-0 text-2xl ">
        <ImageSlider />
        <div className="w-full h-full  ">
          <div className="w-full h-full  bg-[#4190EA] text-white flex flex-col items-center ">
            <h1 className=" text-2xl mt-[40px] text-center">
              How we solved Jupeb reading problem
            </h1>
            <p className="w-full md:w-[600px] px-4 md:px-0 h-full mt-[30px] pb-[40px] text-[16px] text-center">
              We&apos;ve tackled the Jupeb reading problem by offering students a flexible solution. With our program, you can study anytime, anywhere using your device. We provide weekly video calls where experienced instructors explain specific topics in detail, ensuring you understand them thoroughly. Our active WhatsApp community is there to support you, allowing you to ask questions and find help on challenging subjects. We also offer a wealth of Jupeb past questions and answers for practice, and our textbooks contain detailed explanations for all topics in subjects 001/002/003/004. This comprehensive approach empowers students to excel in their Jupeb exams.
            </p>
          </div>
          <div className="w-full h-full px-4 md:px-6 lg:px-8 xl:px-12 ">
            <div className="w-full h-full flex flex-col items-center mt-[80px] ">
              <h1 className="text-4xl text-[#4190EA]">
                {" "}
                <strong>What we offer </strong>{" "}
              </h1>
              <p className="w-full md:w-[500px] lg:w-[700px] text-center mt-[30px] h-full font-extralight text-[18px]">
                As a user, you will enjoy all the benefits listed
                below and more
              </p>
              <div className="w-full h-full md:grid grid-flow-col  gap-4 text-[16px] text-gray-700 text-center mt-[50px] leading-normal">
                <div className="w-full h-full flex flex-col items-center">
                  <ImBook size={40} className="text-[#4190EA]" />
                  <p className="mt-[15px]">
                    Jupeb Textbooks that contain{" "}
                    <b>explanation of all topics </b>
                    in 001/002/003/004
                  </p>
                </div>
                <div className="w-full h-full flex flex-col items-center mt-[40px] md:mt-0">
                  <ImBook size={40} className="text-blue-500" />
                  <p className="mt-[15px]">Jupeb Past questions and Answers </p>
                </div>
                <div className="w-full h-full flex flex-col items-center mt-[40px] md:mt-0">
                  <BsWhatsapp size={40} className="text-blue-600" />
                  <p className="mt-[15px]">
                    Active WhatsApp community to ask questions or find help on
                    topics you don&apos;t understand
                  </p>
                </div>
                <div className="w-full h-full flex flex-col items-center mt-[40px] md:mt-0">
                  <TbBrandZoom size={40} className="text-blue-700" />
                  <p className="mt-[15px]">
                    Weekly video call to explain a section details
                  </p>
                </div>
                <div className="w-full h-full flex flex-col items-center mt-[40px] md:mt-0">
                  <TbDevices size={40} className="text-blue-800 " />
                  <p className="mt-[15px]">
                    Oppurtunity to read any time, anywhere with your device
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full h-full flex flex-col items-center mt-[150px] text-gray-900">
              <h2 className="text-center text-[18px] md:text-[30px]">
                View Available Subjects
              </h2>

              {/* {books.map((book) => (
                 <div key={book._id} className="bg-white border-[1px] border-[#bfc0c4] hover:border-none flex flex-col items-center justify-center hover:bg-[#EEEFF2] w-[100px] h-[100px] sm:w-[150px]  sm:h-[150px] md:w-[170px] md:h-[170px] xl:w-[180px] xl:h-[180px] shadow-lg hover:scale-110 duration-500 rounded-[10px] cursor-pointer">
                  <img src={book.image} alt="" />
                  <p className="mt-[10px] text-[16px] md:text-[25px]">
                    {book.describtion}
                  </p>
                </div>
              ))} */}
              <div className="w-full h-full mt-[40px] grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 place-items-center">
                <div className="bg-white border-[1px] border-[#bfc0c4] hover:border-none flex flex-col items-center justify-center hover:bg-white w-[100px] h-[100px] sm:w-[150px]  sm:h-[150px] md:w-[170px] md:h-[170px] xl:w-[180px] xl:h-[180px] shadow-lg hover:scale-110 duration-500 rounded-[10px] cursor-pointer">
                  <GiAtom size={70} className="text-[#4190EA]" />
                  <p className="mt-[10px] text-[13px] sm:text-[16px] md:text-[20px]">
                    Physics
                  </p>
                </div>
                <div className="bg-white border-[1px] border-[#bfc0c4] hover:border-none flex flex-col items-center justify-center hover:bg-white w-[100px] h-[100px] sm:w-[150px]  sm:h-[150px] md:w-[170px] md:h-[170px] xl:w-[180px] xl:h-[180px] hover:scale-110 duration-500 shadow-lg rounded-[10px] cursor-pointer">
                  <img src={chemistry} alt="chemistry" className="w-[55px] h-[55px] md:w-[90px] md:h-[90px]" />
                  <p className="md:mt-[10px] text-[13px] sm:text-[16px] md:text-[20px]">
                    Chemistry
                  </p>
                </div>
                <div className="bg-white border-[1px] border-[#bfc0c4] hover:border-none flex flex-col items-center justify-center hover:bg-white w-[100px] h-[100px] sm:w-[150px]  sm:h-[150px] md:w-[170px] md:h-[170px] xl:w-[180px] xl:h-[180px] hover:scale-110 duration-500 shadow-lg rounded-[10px] cursor-pointer">
                  <img src={biology} alt="chemistry" className="w-[55px] h-[55px] md:w-[90px] md:h-[90px]" />
                  <p className="md:mt-[10px] text-[13px] sm:text-[16px] md:text-[20px]">
                    Biology
                  </p>
                </div>
                <div className="bg-white border-[1px] border-[#bfc0c4] hover:border-none flex flex-col items-center justify-center hover:bg-white w-[100px] h-[100px] sm:w-[150px]  sm:h-[150px] md:w-[170px] md:h-[170px] xl:w-[180px] xl:h-[180px] hover:scale-110 duration-500 shadow-lg rounded-[10px] cursor-pointer">
                  <img src={maths} alt="chemistry" className="w-[55px] h-[55px] md:w-[90px] md:h-[90px]" />
                  <p className="md:mt-[10px] text-[13px] sm:text-[16px] md:text-[20px]">
                    Mathematics
                  </p>
                </div>
                <div className="bg-white border-[1px] border-[#bfc0c4] hover:border-none flex flex-col items-center justify-center hover:bg-white w-[100px] h-[100px] sm:w-[150px]  sm:h-[150px] md:w-[170px] md:h-[170px] xl:w-[180px] xl:h-[180px] hover:scale-110 duration-500 shadow-lg rounded-[10px] cursor-pointer">
                <img src={pastquestion} alt="chemistry" className="w-[45px] h-[45px] md:w-[90px] md:h-[90px]" />
                  <p className="md:mt-[10px] text-[12px] md:text-[16px] text-center leading-snug">
                    JUPEB Science Past questions and answer
                  </p>
                </div>
                <div className="bg-white border-[1px] border-[#bfc0c4] hover:border-none flex flex-col items-center justify-center hover:bg-white w-[100px] h-[100px] sm:w-[150px]  sm:h-[150px] md:w-[170px] md:h-[170px] xl:w-[180px] xl:h-[180px] hover:scale-110 duration-500 shadow-lg rounded-[10px] cursor-pointer">
                  <img src={government} alt="chemistry" className="w-[55px] h-[55px] md:w-[90px] md:h-[90px]" />
                  <p className="md:mt-[20px] text-[13px] sm:text-[16px] md:text-[20px]">
                    Government
                  </p>
                </div>
                <div className="bg-white border-[1px] border-[#bfc0c4] hover:border-none flex flex-col items-center justify-center hover:bg-white w-[100px] h-[100px] sm:w-[150px]  sm:h-[150px] md:w-[170px] md:h-[170px] xl:w-[180px] xl:h-[180px] hover:scale-110 duration-500 shadow-lg rounded-[10px] cursor-pointer">
                  <img src={literature} alt="chemistry" className="w-[55px] h-[55px] md:w-[90px] md:h-[90px]" />
                  <p className="md:mt-[10px] text-[13px] sm:text-[16px] md:text-[18px] leading-tight">
                    Literature-In-English
                  </p>
                </div>
                <div className="bg-white border-[1px] border-[#bfc0c4] hover:border-none flex flex-col items-center justify-center hover:bg-white w-[100px] h-[100px] sm:w-[150px]  sm:h-[150px] md:w-[170px] md:h-[170px] xl:w-[180px] xl:h-[180px] hover:scale-110 duration-500 shadow-lg rounded-[10px] cursor-pointer">
                  <img src={crs} alt="chemistry" className="w-[55px] h-[55px] md:w-[90px] md:h-[90px]" />
                  <p className="md:mt-[10px] text-[13px] sm:text-[16px] md:text-[20px]">
                    CRS
                  </p>
                </div>
                <div className="bg-white border-[1px] border-[#bfc0c4] hover:border-none flex flex-col items-center justify-center hover:bg-white w-[100px] h-[100px] sm:w-[150px]  sm:h-[150px] md:w-[170px] md:h-[170px] xl:w-[180px] xl:h-[180px] hover:scale-110 duration-500 shadow-lg rounded-[10px] cursor-pointer">
                  <img src={economics} alt="chemistry" className="w-[55px] h-[55px] md:w-[90px] md:h-[90px]" />
                  <p className="md:mt-[10px] text-[13px] sm:text-[16px] md:text-[20px]">
                    Economics
                  </p>
                </div>
                <div className="bg-white border-[1px] border-[#bfc0c4] hover:border-none flex flex-col items-center justify-center hover:bg-white w-[100px] h-[100px] sm:w-[150px]  sm:h-[150px] md:w-[170px] md:h-[170px] xl:w-[180px] xl:h-[180px] hover:scale-110 duration-500 shadow-lg rounded-[10px] cursor-pointer">
                  <img src={pastquestion} alt="chemistry" className="w-[45px] h-[45px] md:w-[90px] md:h-[90px]" />
                  <p className="md:mt-[10px] text-[11px] md:text-[16px] text-center leading-snug">
                    JUPEB Art Past questions and answer
                  </p>
                </div>
                <div className="bg-white border-[1px] border-[#bfc0c4] hover:border-none flex flex-col items-center justify-center hover:bg-white w-[100px] h-[100px] sm:w-[150px]  sm:h-[150px] md:w-[170px] md:h-[170px] xl:w-[180px] xl:h-[180px] hover:scale-110 duration-500 shadow-lg rounded-[10px] cursor-pointer">
                  <img src={pastquestion} alt="chemistry" className="w-[45px] h-[45px] md:w-[90px] md:h-[90px]" />
                  <p className="md:mt-[10px] text-[10px] md:text-[16px] text-center leading-snug ">
                    JUPEB Management Past questions and answer
                  </p>
                </div>
                <div className="bg-white border-[1px] border-[#bfc0c4] hover:border-none flex flex-col items-center justify-center hover:bg-white w-[100px] h-[100px] sm:w-[150px]  sm:h-[150px] md:w-[170px] md:h-[170px] xl:w-[180px] xl:h-[180px] hover:scale-110 duration-500 shadow-lg rounded-[10px] cursor-pointer">
                  <img src={account} alt="chemistry" className="w-[55px] h-[55px] md:w-[90px] md:h-[90px]" />
                  <p className="md:mt-[10px] text-[13px] sm:text-[16px] md:text-[20px]">
                    Accounting
                  </p>
                </div>
                <div className="bg-white border-[1px] border-[#bfc0c4] hover:border-none flex flex-col items-center justify-center hover:bg-white w-[100px] h-[100px] sm:w-[150px]  sm:h-[150px] md:w-[170px] md:h-[170px] xl:w-[180px] xl:h-[180px] hover:scale-110 duration-500 shadow-lg rounded-[10px] cursor-pointer">
                  <img src={business} alt="chemistry" className="w-[55px] h-[55px] md:w-[90px] md:h-[90px]" />
                  <p className="md:mt-[10px] text-[12px] sm:text-[16px] md:text-[20px] leading-snug">
                    Business Studies
                  </p>
                </div>
                <div className="bg-white border-[1px] border-[#bfc0c4] hover:border-none flex flex-col items-center justify-center hover:bg-white w-[100px] h-[100px] sm:w-[150px]  sm:h-[150px] md:w-[170px] md:h-[170px] xl:w-[180px] xl:h-[180px] hover:scale-110 duration-500 shadow-lg rounded-[10px] cursor-pointer">
                  <img src={visual} alt="chemistry" className="w-[55px] h-[55px] md:w-[90px] md:h-[90px]" />
                  <p className="md:mt-[10px] text-[13px] sm:text-[16px] md:text-[20px]">
                    Visual Art
                  </p>
                </div>
                <div className="bg-white border-[1px] border-[#bfc0c4] hover:border-none flex flex-col items-center justify-center hover:bg-white w-[100px] h-[100px] sm:w-[150px]  sm:h-[150px] md:w-[170px] md:h-[170px] xl:w-[180px] xl:h-[180px] hover:scale-110 duration-500 shadow-lg rounded-[10px] cursor-pointer">
                  <img src={history} alt="chemistry" className="w-[55px] h-[55px] md:w-[90px] md:h-[90px]" />
                  <p className="md:mt-[10px] text-[13px] sm:text-[16px] md:text-[20px]">
                    History
                  </p>
                </div>
              </div>
              <div className="w-full flex  md:justify-center mt-[20px] ">
                <Link to="/syllabus" smooth="true" duration={500}>
                <button className="h-[60px] w-[100px] sm:w-[150px] px-2  bg-[#4190EA] text-white text-[13px] sm:text-[16px] md:text-[18px] font-semibold mr-[20px] rounded-[10px] hover:shadow-xl">View Syllabus</button>
                </Link>
                <Link to="/view-subject" smooth="true" duration={500}>
                <button className="h-[60px] w-[200px] sm:w-[280px] border-[2px] border-[#4190EA] px-2 text-[13px] sm:text-[16px] md:text-[18px] font-semibold rounded-[10px] text-[#4190EA] hover:shadow-xl">Start reading with EaseReads</button>
                </Link>
              </div>
            </div>

            <div className="w-full h-full md:h-[470px] lg:h-[400px] flex flex-col md:flex-row items-center  md:justify-evenly pl-3 lg:pl-0   bg-[#3B82F6]  text-white rounded-[15px] mt-[90px] pt-[30px] md:pt-0">
              <div className="md:w-[500px] h-full flex flex-col justify-center items-center ">
                <BsWhatsapp  className="text-white w-[100px] h-[100px] md:w-[200px] md:h-[200px]" />
                {/* <div className="bg-red-800 h-[90px] w-[200px] text-center"> */}
                <a
                  className="text-black h-[60px] w-[160px] md:w-[200px] lg:w-[250px] mt-[20px] flex justify-center items-center bg-[#FFCB3E] hover:opacity-90 rounded-[10px]"
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
                <h3 className="font-bold text-center text-[20px]">
                  Join our Whatsapp community for free
                </h3>
                <h4 className="font-semibold text-center mt-[10px] text-[20px]">
                  Benefit of Joining{" "}
                </h4>
                <div className="text-[#f2f3f5] text-[16px] text-center md:text-left mt-[15px] leading-snug ">
                  <p className="mt-[15px]">
                    Opportunity to ask Jupep related questions from academial
                  </p>
                  <p className="mt-[15px]">
                    You get to interact with other students talking Jupeb in
                    other schools
                  </p>
                  <p className="mt-[15px]">
                    You get to interact with other students talking Jupeb in
                    other schools
                  </p>
                  <p className="mt-[15px]">
                    You get to interact with other students talking Jupeb in
                    other schools
                  </p>
                </div>
              </div>
            </div>

            {/* <div className="mt-[90px] md:hidden ">
              <img src={college} alt="college" className="w-full h-[300px] " />
            </div> */}
            <div
              className={`w-full h-full md:h-[300px] flex items-center justify-between px-10 mt-[90px] border-[3px] border-[#f7b704] shadow-2xl rounded-[10px] ${styles.comparePlan} leading-snug`}
            >
              <div className="text-[16px] mb-[20px]">
                <h5 className="text-[30px] mt-[20px]">Start For free</h5>
                <div className="mt-[15px]">
                  <input
                    type="checkbox"
                    id="first"
                    checked
                    className={`${styles.checkbox}`}
                  />
                  <label htmlFor="first">access to all textbooks</label>
                </div>
                <div className="mt-[7px]">
                  <input
                    type="checkbox"
                    id="second"
                    checked
                    className={`${styles.checkbox} text-yellow-500`}
                  />
                  <label htmlFor="second">
                    access to past questions and answers
                  </label>
                </div>
                <div className="mt-[7px]">
                  <input
                    type="checkbox"
                    id="third"
                    checked
                    className={`${styles.checkbox}`}
                  />
                  <label htmlFor="third">
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

          <div className="w-full h-full">
            <Reviews />
            <FAQPage />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Home;
