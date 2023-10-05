import Layout from "../../layout/Layout";
import vision from "../../assets/Home Landing Image/visionNew.jpg"
import missionVission from "../../assets/Home Landing Image/missionVision.jpg"

const About = () => {
  return (
    <Layout>
      <main className=" w-full h-full mb-[70px] md:mb-[140px]">
        <div className="md:pt-[80px] pt-[80px] px-4 md:px-6 lg:px-8 xl:px-12">
          <div className=" w-full h-full md:grid md:grid-cols-2 md:gap-10 overflow-hidden">
            <h1 className=" font-semibold text-[24px] leading-[30.43px] md:text-[48px] lg:w-[613px] md:w-[400px] md:h-[183px]  md:leading-[60.86px]">
              At <span className="text-[#4190EA]"> EaseReads</span> We are
              passionate about your academic success.
            </h1>
            <p className="font-regular lg:w-[469px] mt-[25px] md:h-[80px] md:mt-[103px] md:mr-[20px] break-words leading-[20.29px] text-[#54555B] text-[16px]">
              Welcome to EaseReads, your gateway to a world of educational opportunities. We are deeply committed to your academic success, and our platform offers a range of essential features to support your learning journey.
            </p>
          </div>
          <div className="hidden md:flex md:border-b-2 mt-[30px] md:border-b-[#D4D5DB]   "></div>

          <div className="w-full md:h-[400px] flex flex-col-reverse md:flex-row  justify-around">
            <div>
              <h1 className="md:mt-[70px]   font-semibold text-[24px] text-[#2F3035] md:text-[48px]  md:h-[61px]  md:leading-[60.86px]">
                Our Mission
              </h1>
              <p className="text-[#85868D]  text-[16px]  font-regular leading-[20.29px] md:w-[350px] lg:w-[469px] h-[80px]">
                Our mission is to provide you with comprehensive learning resources, including high-quality textbooks, past questions, and in-depth explanations, all accessible online. We&apos;re here to make learning flexible, interactive, and engaging, ensuring your academic success is within reach.
              </p>
            </div>
            <div className="hidden md:flex h-full md:mt-[70px] mt-[50px] ">
              {/* <p>quality image present</p> */}
              <img
              className="  h-[273px] md:h-[400px] "
              src={missionVission}
              alt="aboutme"
            />
            </div>
            <div className="md:hidden w-full flex justify-center h-full md:mt-[70px] mt-[50px] ">
              {/* <p>quality image present</p> */}
              <img
              className="  h-[273px] md:h-[400px] "
              src={missionVission}
              alt="aboutme"
            />
            </div>
            
          </div>

          <div className=" w-full h-full md:h-[400px] flex flex-col-reverse md:flex-row  justify-around">
            

            <div className="hidden md:flex mt-[40px] h-full  ">
              <img
              className=" md:h-[400px] h-[273px] "
              src={vision}
              alt="aboutme"
            />
            </div>
            <div className="md:hidden w-full flex justify-center mt-[40px] h-full  ">
              <img
              className=" md:h-[400px] h-[273px] "
              src={vision}
              alt="aboutme"
            />
            </div>
            <div className="md:mt-[120px] mt-[70px]">
              <h1 className="text-[#2F3035] text-[24px] mt-[20px] md:mt-0  font-semibold md:text-[48px] md:leading-[60.86px] md:w-[336px] md:h-[61px]">
                Our Vision
              </h1>
              <p className=" font-regular  md:w-[350px] lg:w-[469px] md:h-[80px]  break-words leading-[20.29px] text-[#85868D] text-[16px]">
                At EaseReads, we envision a world where students have the freedom to study anytime, anywhere, with the power of technology. We&apos;re committed to facilitating interactive learning through our weekly tutorials and fostering a supportive community on our active WhatsApp channel.
               We believe in the transformative power of education, and we&apos;re dedicated to helping you excel in your academic pursuits. 
              </p>
            </div>
          </div>

         <div className="hidden md:flex md:border-b-2 mt-[100px] md:border-b-[#D4D5DB]   "></div>

          <div className="w-full mt-[50px]">

            <h2 className="text-[#2F3035] text-[24px]  font-semibold md:text-[30px] ] md:w-[336px] ">Why choose EaseReads</h2>
          <div className="w-full  md:flex  items-center mt-[20px] ">

            <div className=" mt-[20px] ">
              <p className=" text-[16px]  text-[#85868D] md:text-center">
                Access a vast library of online reading materials to enhance your knowledge.                  
              </p>
              {/* <img className="mt-[20px] md:mt-[40px]" src={image1} alt="number" /> */}
            </div>
            <div className="mt-[20px]">
              <p className=" text-[16px] text-[#85868D] md:text-center">
                Join our weekly tutorial sessions for detailed explanations and personalized support.
              </p>
              {/* <img className="mt-[20px] md:mt-[40px]" src={image2} alt="number" /> */}
            </div>
            <div className=" mt-[20px]">
              <p className=" text-[16px] text-[#85868D] md:text-center">
               Study at your convenience using your device, eliminating the constraints of time and location.
              </p>
              {/* <img className="mt-[20px] md:mt-[40px]" src={image3} alt="number" /> */}
            </div>
          </div>
          </div>


        </div>
      </main>
    </Layout>
  );
};

export default About;
