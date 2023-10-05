// import { FaLinkedin, FaTwitter,  FaInstagram } from "react-icons/fa";
import {FaFacebook,} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#26282a] w-full   h-full px-4 md:px-6 lg:px-10">
      <div className="w-full h-full ">
       
        <div className=" text-white text-center pt-[20px]  w-full h-full">
          <h3 className="md:text-4xl text-2xl">Grow your knowledge</h3>
          
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
            <h2 className="text-2xl md:text-3xl">EaseReads</h2>
            <div className="border border-[#f4b223] w-[110px] mt-[8px]"></div>
            <Link to="/about" smooth="true" duration={500}>
            <p>
              <button>About</button>
            </p>
            </Link>
            <Link to="/contact" smooth="true" duration={500}>
            <p>
              <button>Contact Us</button>
            </p>
            </Link>
          </div>

          <div className="w-full space-y-[5px] ">
            <h2 className="text-2xl md:text-3xl">Learn</h2>
            <div className="border border-[#f4b223] w-[110px] mt-[8px]"></div>
            <Link to="/term-of-use" smooth="true" duration={500}>
             <p>
              <button>Terms of Use</button>
            </p>
            </Link>
           <Link to="/privacy-policy" smooth="true" duration={500}>
            <p>
              <button>Privacy Policy</button>
            </p>
           </Link>
           
          </div>

          <div className="w-full space-y-[5px] mt-[30px] md:mt-0">
            <h2 className="text-2xl md:text-3xl ">Discover</h2>
            <div className="border border-[#f4b223] w-[110px] mt-[8px]"></div>
            <Link to="/syllabus" smooth="true" duration={500} >
            <button>Jupeb Syllabus</button>
            </Link>
            <p>
              <Link to="/view-subject" smooth="true" duration={500}>
          
              <button>Books</button>
          </Link>
            </p>
          </div>

          <div className="w-full mt-[30px] md:mt-0 " >
              <h5 className="text-2xl md:text-3xl">Social Media</h5>
              <div className="border border-[#f4b223] w-[110px] mt-[8px]"></div>
            <div className="  flex space-x-[15px] pt-[10px]">
              {/* <FaLinkedin size={20} /> */}
              {/* <FaTwitter size={20} /> */}
              <a href="https://web.facebook.com/profile.php?id=61550130099443&_rdc=1&_rdr" target="_blank" rel="noopener noreferrer">

              <FaFacebook size={24} />
              </a>
              {/* <FaInstagram size={20} /> */}
            </div>
          </div>
        </div>

        <div className="w-full text-white flex justify-center items-center flex-col md:mt-[70px] mt-[70px] pb-[20px]">
          <div className="border lg:w-[800px] md:w-[600px] sm:w-[450px] w-[200px] text-white mb-[10px] "></div>
          <p className="text-center">
            Copyright EaseReads 2023. All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
