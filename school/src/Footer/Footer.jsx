import React from "react";
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-[#26282a] w-full  h-full px-4 md:px-6 lg:px-10">
      <div className="w-full h-full">
        {/*Taria  */}
        <div className=" text-white text-center md:pt-[10px] pt-[10px] md:pl-[14px] pl-[40px] w-full h-full">
          <h3 className="text-4xl ">Grow your knowledge</h3>
          <p className="mt-[25px] text-[18px] ">
            Join thousands of fellow knowledge enthusiasts and subscribe to our{" "}
            <br></br> weekly newsletter for content alerts, research tips, and
            more.
          </p>
        </div>

        <div className="flex items-center justify-center mt-[30px]">
          <div className="relative mt-[10px] w-[650px]">
            <input
              className=" w-full h-[60px] rounded-[50px] pl-[30px] "
              placeholder="Enter your email address"
            />
            <button className="absolute top-1 right-1 h-[50px] border border-[#616367] rounded-[30px] w-[90px] text-[#616367]">
              join
            </button>
          </div>
        </div>

        <div className="w-full md:h-64 h-full lg:mt-[90px] mt-[50px] text-white lg:grid-cols-6 sm:grid sm:grid-cols-2 sm:grid-rows-2 md:pl-[20px] pl-[40px]">
          {/* Company */}
          <div className="md:w-[500px] lg:space-y-4">
            <h4 className="font-bold text-[20px]">Maxwell</h4>
            <div className="border border-[#f4b223] w-[120px]"></div>
            <p>
              <button>About</button>
            </p>
            <p>
              <button>Careers</button>
            </p>
            <p>
              <button>Publisher Partners</button>
            </p>
            <p>
              <button>Contact Us</button>
            </p>
          </div>

          {/* Products */}
          <div className=" lg:space-y-4 sm:ml-[115px] lg:ml-0 md:mt-[0] mt-[30px]">
            <h2 className="font-bold text-[20px]">Learn</h2>
            <div className="border border-[#f4b223] w-[120px]"></div>
            <p>
              <button>FAQS</button>
            </p>
            <p>
              <button>Blogs</button>
            </p>
            <p>
              <button>Terms of Use</button>
            </p>
            <p>
              <button>Privacy Policy</button>
            </p>
          </div>

          {/* Discover */}
          <div className="w-full md:w-[500px] lg:space-y-4 sm:pt-[80px] lg:pt-0 lg:mt-[0] h-full md:mt-[50px] mt-[30px]">
            <h2 className="font-bold text-[20px] ">Discover</h2>
            <div className="border border-[#f4b223] w-[120px]"></div>
            <p>
              <button>Journal</button>
            </p>
            <p>
              <button>Proceedings</button>
            </p>
            <p>
              <button>Books</button>
            </p>
          </div>

          {/* Travel */}
          <div className="sm:ml-[115px] lg:ml-[50px] w-full lg:space-y-4 sm:pt-[80px] lg:pt-0 md:mt-[0] mt-[30px]">
            <h2 className="font-bold text-[20px]">Explore</h2>
            <div className="border border-[#f4b223] lg:w-[430px] w-[150px]"></div>
            <p>
              <button>Health & Medical</button>
            </p>
            <p>
              <button>Physics & Mathematics</button>
            </p>
            <p>
              <button>Material & Science</button>
            </p>
            <div className="lg:hidden block">
              <p className="pt-[20px]">
                <button>Business And Economics</button>
              </p>
              <p>
                <button>Humanities & Social Sciences</button>
              </p>
              <p>
                <button>Engineering & Science</button>
              </p>
            </div>

            <div className="lg:hidden block mt-[20px]">
              <h2 className="font-bold text-[20px]">Social Media</h2>
              <div className="border border-[#f4b223] w-[150px]"></div>
              <div className="flex flex-row space-x-[20px] pt-[12px]">
                <FaLinkedin size={18} />
                <FaTwitter size={18} />
                <FaFacebook size={18} />
                <FaInstagram size={18} />
              </div>
            </div>
          </div>

          <div className=" hidden lg:block sm:ml-[115px] lg:ml-[90px] w-full h-full lg:space-y-4 sm:pt-[80px] lg:pt-0 md:mt-[67px] mt-[30px]">
            <p>
              <button>Business And Economics</button>
            </p>
            <p>
              <button>Humanities & Social Sciences</button>
            </p>
            <p>
              <button>Engineering & Science</button>
            </p>
          </div>

          <div className="lg:mt-[50px] lg:mt-[50px] hidden lg:block text-white space-y-[15px] ml-[40px] md:ml-[120px]">
            <FaLinkedin size={25} />
            <FaTwitter size={25} />
            <FaFacebook size={25} />
            <FaInstagram size={25} />
          </div>
        </div>
        <div className="w-full h-full flex flex-col justify-center items-center py-[30px] lg:mt-[0] md:mt-[250px]">
          <div className="border border-[white] md:w-[350px] lg:w-[700px] w-[150px]"></div>
          <p className="text-center text-white pt-[20px]">
            {" "}
            Copyright knowledge &copy; 2023 All RIght Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
