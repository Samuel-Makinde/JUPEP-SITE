import Layout from "../../layout/Layout";
import { BiLogoTelegram } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";
import Button from "../../components/button/button";
import InputField from "../../components/input/inputfield";
import TextArea from "../../components/input/textarea";
const ContactUs = () => {
  return (
    <Layout>
      <main className="w-full h-full bg-white px-4 md:px-6 lg:px-20 mb-[70px] ">
        <div className="md:flex md:gap-[5rem]">
          <div className="w-full h-full pt-[100px] md:pt-[150px]">
            <h1 className="text-[24px] md:text-[48px] font-bold">Contact Us</h1>
            <p className="text-gray-700">
              Have questions or need support? We&apos;re here to help! <br />
              Contact us through any of our platform below to connect with a
              Staff
            </p>
            <div className="w-full h-full mt-[40px] flex flex-col md:flex-row text-gray-700">
              <p className="text-[20px] md:text-[24px] md:mr-[30px]">
                {" "}
                Call : 08129577490 <br />
                Email: easereadscare@gmail.com
              </p>
            </div>
            <div className="pt-[3rem] flex gap-[1rem]">
              <div>
                <Button
                  className="`bg-[#41E960]` text-white text-[16px] md:text-[20px] h-[60px] w-[200px] lg:w-[250px] mt-[20px] md:mt-0 flex justify-center items-center  hover:opacity-90 rounded-[10px] md:mr-[30px]"
                  href="https://wa.me/+2348129577490"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsWhatsapp size={24} className="text-[#f2f3f5] mr-[20px]" />
                  WhatsAPP
                </Button>
                {/* <a
                className="text-white text-[16px] md:text-[20px] h-[60px] w-[200px] lg:w-[250px] mt-[20px] md:mt-0 flex justify-center items-center bg-[#41E960] hover:opacity-90 rounded-[10px] md:mr-[30px]"
                href="https://wa.me/+2348129577490"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsWhatsapp size={24} className="text-[#f2f3f5] mr-[20px]" />
                WhatsAPP
              </a> */}
              </div>
              <div>
                <Button
                  className="text-white text-[16px] md:text-[20px] h-[60px] w-[200px] lg:w-[250px] mt-[20px] md:mt-0 flex justify-center items-center bg-[#4190EA] hover:opacity-90 rounded-[10px]"
                  rel="noreferrer"
                  target="_blank"
                  onClick={() =>
                    window.open("https://t.me/+u5_EgioIoPM3Njk0", "_blank")
                  }
                >
                  {" "}
                  <BiLogoTelegram
                    size={24}
                    className="text-[#f2f3f5] mr-[20px]"
                  />
                  Telegram
                </Button>
              </div>
            </div>
          </div>

          <div className="w-full h-full md:mt-[10rem] sm:mt-[3rem] bg-primary4 p-[3rem]">
            <form
              className="flex flex-col w-full h-full max-w-[600px]"
              // action="https://getform.io/f/4ad2067f-1328-47af-86e6-90c1a47749a5"
              method="POST"
            >
              <InputField
                // className="mb-[20px] p-[15px] border-none md:w-[500px] sm:w-[90%] bg-[#dfe0e1] outline-none"
                name="Full Name"
                label="Full Name"
                type="text"
                placeholder="Full Name"
                style={{ height: "100%" }}
                required
              />
              <InputField
                // className="mb-[20px] p-[15px] bg-gray-200 border-none md:w-[500px] sm:w-[90%] outline-none"
                type="email"
                name="email "
                label="Email"
                placeholder="@emailaddress.com"
                style={{ height: "100%" }}
                required
              />
              <InputField
                // className="mb-[20px] p-[15px] bg-gray-200 border-none md:w-[500px] sm:w-[90%] outline-none"
                type="text"
                name="Institution"
                label="Institution"
                id="Institution"
                placeholder="Institution eg. OAU"
                style={{ height: "100%" }}
                required
              />
              <TextArea
                // className="md:w-[500px] sm:w-[90%] bg-gray-200 pt-[15px] pl-[10px]  resize-none outline-none"
                name="message"
                placeholder="Message me"
                // rows="10"
                label="Message"
                required
              ></TextArea>
              {/* <input
                className="mt-[15px] p-[12px] cursor-pointer text-2xl bg-[#4190EA] hover:bg-blue-600 text-white md:w-[500px] sm:w-[90%] outline-none"
                type="submit"
                value="Submit"
              /> */}
              <Button
                className="mt-[15px] p-[12px] cursor-pointer text-2xl bg-[#4190EA] hover:bg-blue-600 text-white rounded-[0.5rem] md:w-[100%] sm:w-[100%] outline-none"
                type="submit"
                value="Submit"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default ContactUs;
