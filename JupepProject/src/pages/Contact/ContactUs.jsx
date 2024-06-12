import Layout from "../../layout/Layout";
import { BiLogoTelegram } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";
import Button from "../../components/Button/Button";
// import InputField from "../../components/input/inputfield";
const ContactUs = () => {
  return (
    <Layout>
      <main className="w-full h-full  bg-white px-4 md:px-6 lg:px-20 mb-[70px] font-roboto">
        <div className="md:flex justify-between md:gap-[5rem]">
          <div className="w-full h-full md:w-5/12 pt-[100px] md:pt-[150px]">
            <h1 className="text-[24px] md:text-4xl font-bold">Contact Us</h1>
            <p className="lg:text-xl text-base font-light ">
              We&apos;d love to hear from you! If you have any questions,
              inquiries, or feedback, please contact us throught any of the
              channel or fill out the form and our team will get back to you as
              soon as possible.
            </p>
            <div className="mt-24 ">
              <h2 className="font-bold text-lg md:text-2xl">Business Hours</h2>
              <p className="lg:text-xl text-base">
                Monday to Friday: 9:00 AM - 6:00 PM (WAT) <br />
                Saturday and Sunday: Closed
              </p>
            </div>
            <div className="w-full h-full mt-12 md:mt-24 text-base md:text-xl flex  flex-row justify-between ">
              <p className="text-base">
                {" "}
                <span className="font-semibold lg:text-2xl">
                  Call :
                </span> <br /> 08129577490
              </p>
              <p className="text-base">
                <span className="font-semibold lg:text-2xl">Email :</span>
                <br /> easereadscare@gmail.com
              </p>
            </div>

            <div className="w-full mt-20 md:mt-44 flex justify-between gap-[1rem]">
              <div className="w-full md:w-5/12 h-14  text-primary1 bg-sec7  rounded-3xl ">
                <button
                  href="https://wa.me/+2348129577490"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" w-full h-full  flex justify-center items-center"
                >
                  <BsWhatsapp
                    size={24}
                    className="text-[#f2f3f5] mr-3 lg:mr-[20px]"
                  />
                  WhatsAPP
                </button>
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
              <div className="w-full md:w-5/12 h-14 text-primary1 rounded-3xl bg-primary0Blue">
                <button
                  rel="noreferrer"
                  target="_blank"
                  className=" w-full h-full flex justify-center items-center"
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
                </button>
              </div>
            </div>
          </div>

          <div className="w-full h-[800px]   md:w-5/12  md:mt-28 rounded-xl sm:mt-[3rem] bg-primary8">
            <form
              className="w-full h-full mt-20 flex flex-col items-center "
              // action="https://getform.io/f/4ad2067f-1328-47af-86e6-90c1a47749a5"
              method="POST"
            >
              <input
                className="mb-10 mt-5 md:mt-0 p-4 border-2 text-primary7 placeholder:text-primary7 rounded-xl border-primary2 w-[90%] bg-primary8 outline-none"
                type="text"
                placeholder="Full Name"
                style={{ height: "100%" }}
                required
              />
              <input
                className="mb-10 p-4 border-2 text-primary7 placeholder:text-primary7 rounded-xl border-primary2 w-[90%] bg-primary8 outline-none"
                type="email"
                name="email "
                label="Email"
                placeholder="@emailaddress.com"
                style={{ height: "100%" }}
                required
              />
              <input
                className="mb-10 p-4 border-2 text-primary7 placeholder:text-primary7 rounded-xl border-primary2 w-[90%] bg-primary8 outline-none"
                type="text"
                name="Institution"
                label="Institution"
                id="Institution"
                placeholder="Institution eg. OAU"
                style={{ height: "100%" }}
                required
              />
              <textarea
                className="mb-10 p-4 border-2 text-primary7 placeholder:text-primary7 rounded-xl border-primary2 w-[90%] bg-primary8 outline-none"
                name="message"
                placeholder="Message me"
                // rows="10"
                label="Message"
                required
              ></textarea>
              {/* <input
                className="mt-[15px] p-[12px] cursor-pointer text-2xl bg-[#4190EA] hover:bg-blue-600 text-white md:w-[500px] sm:w-[90%] outline-none"
                type="submit"
                value="Submit"
              /> */}
              <button
                className={`bg-primary0Blue hover:bg-primary6 text-white font-bold py-2 px-4 rounded-[1.5rem] w-[90%] mt-10 h-[3.8rem]`}
                type="submit"
                value="Submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default ContactUs;
