// import { FaLinkedin, FaTwitter,  FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-primary6 dark:bg-darkGray w-full   h-full px-4 md:px-6 lg:px-10">
      <div className="w-full h-full ">
        <div className="text-center text-primary1 font-roboto  pt-[20px]  w-full h-full">
          <h3 className="md:text-3xl text-2xl font-bold">
            Expand your knowledge
          </h3>
        </div>

        {/* <div className="flex items-center justify-center mt-[30px]">
          <div className="relative mt-[10px] w-[650px]">
            <input
              className=" w-full h-[60px] rounded-[50px] pl-[30px]"
              placeholder="Enter your email address"
            />
            <button className="absolute top-1 right-1 h-[50px] border border-[#616367] rounded-[30px] sm:w-[90px] w-[75px] text-[#616367]">
              join
            </button>
          </div>
        </div> */}

        <div className="w-full h-full text-white mt-[30px] grid grid-cols-2 gap-4 md:grid-cols-4 justify-items-center ">
          <div className="w-full space-y-[5px]">
            <h2 className="text-2xl md:text-3xl font-body ">EaseReads</h2>
            <div className="border border-sec5 w-[110px] mt-[8px]"></div>
            <Link to="/about" smooth="true" duration={500}>
              <p className="font-roboto dark:text-lightGray dark:hover:text-primary1">
                <button>About Us</button>
              </p>
            </Link>
            <Link to="/contact" smooth="true" duration={500}>
              <p className="font-roboto dark:text-lightGray dark:hover:text-primary1">
                <button>Contact Us</button>
              </p>
            </Link>
          </div>

          <div className="w-full space-y-[5px] ">
            <h2 className="text-2xl md:text-3xl font-body">Learn</h2>
            <div className="border border-sec5 w-[110px] mt-[8px]"></div>
            <Link to="/term-of-use" smooth="true" duration={500}>
              <p>
                <button className="font-roboto dark:text-lightGray dark:hover:text-primary1">
                  Terms of Use
                </button>
              </p>
            </Link>
            <Link to="/privacy-policy" smooth="true" duration={500}>
              <p>
                <button className="font-roboto dark:text-lightGray dark:hover:text-primary1">
                  Privacy Policy
                </button>
              </p>
            </Link>
          </div>

          <div className="w-full h-full flex flex-col space-y-[5px] mt-[30px] md:mt-0">
            <h2 className="text-2xl md:text-3xl font-body">Discover</h2>
            <div className="border border-sec5 w-[110px] mt-[8px]"></div>
            <Link to="/syllabus" smooth="true" duration={500}>
              <button className="font-roboto mb-1 dark:text-lightGray dark:hover:text-primary1">
                Jupeb Syllabus
              </button>
            </Link>
            <p>
              <Link to="/view-subject" smooth="true" duration={500}>
                <button className="font-roboto mb-1 dark:text-lightGray dark:hover:text-primary1">
                  Read Books
                </button>
              </Link>
            </p>
            <Link to="/video-page" smooth="true" duration={500}>
              <button className="font-roboto mb-1 dark:text-lightGray dark:hover:text-primary1">
                Watch Video
              </button>
            </Link>
            <Link to="/instruction" smooth="true" duration={500}>
              <button className="font-roboto mb-1 dark:text-lightGray dark:hover:text-primary1">
                Take Exam
              </button>
            </Link>
            {/* <Link to="/easereads-ai" smooth="true" duration={500}> */}
            <Link to="/coming-soon" smooth="true" duration={500}>
              <button className="font-roboto mb-1 dark:text-lightGray dark:hover:text-primary1">
                Ask EaseReads A.I
              </button>
            </Link>
            <Link to="/coming-soon" smooth="true" duration={500}>
              <button className="font-roboto mb-1 dark:text-lightGray dark:hover:text-primary1">
                Study Planner
              </button>
            </Link>
          </div>

          <div className="w-full mt-[30px] md:mt-0 ">
            <h5 className="text-2xl md:text-3xl font-body">Social Media</h5>
            <div className="border border-sec5 w-[110px] mt-[8px]"></div>
            <div className="  flex space-x-[15px] pt-[10px]">
              {/* <FaLinkedin size={20} /> */}
              {/* <FaTwitter size={20} /> */}
              <a
                href="https://web.facebook.com/profile.php?id=61550130099443&_rdc=1&_rdr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook
                  size={24}
                  className="dark:text-lightGray dark:hover:text-primary1"
                />
              </a>
              <a
                href="https://t.me/+u5_EgioIoPM3Njk0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsTelegram
                  size={24}
                  className="dark:text-lightGray dark:hover:text-primary1"
                />
              </a>
              <a
                href="https://chat.whatsapp.com/B4uHSlVlwjAE8Y9bqWDtRF"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaSquareWhatsapp
                  size={24}
                  className="dark:text-lightGray dark:hover:text-primary1"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="w-full text-primary1 dark:text-lightGray flex justify-center items-center flex-col md:mt-[70px] mt-[70px] pb-[20px]">
          <div className="border  lg:w-[850px] md:w-[600px] sm:w-[450px] w-[300px] border-sec5 mb-[10px] "></div>
          <p className="text-center font-roboto">
            Copyright EaseReads 2023. All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
