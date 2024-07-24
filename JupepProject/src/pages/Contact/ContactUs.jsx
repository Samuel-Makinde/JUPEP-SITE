import Layout from "../../layout/Layout";
import { BiLogoTelegram } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";
import University from "../../data/University";
import { useEffect, useState } from "react";
import Reasons from "../../data/Reasons";

const ContactUs = () => {
  const [institution, setInstitution] = useState([]);
  const [reason, setReason] = useState(null);
  const getAllUniversity = async () => {
    try {
      // const response = University;
      const result = University;
      const sortedInstitution = result.sort((a, b) => {
        const institutionA = a.name.toUpperCase();
        const institutionB = b.name.toUpperCase();
        if (institutionA < institutionB) {
          return -1;
        }
        if (institutionA > institutionB) {
          return 1;
        }

        return 0;
      });
      setInstitution(sortedInstitution);
      console.log("this is institution", setInstitution);
      console.log("this is university", sortedInstitution);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUniversity();
  }, []);
  return (
    <Layout>
      <main className="w-full h-full  bg-white px-4 md:px-6 lg:px-20 pb-[70px] font-roboto dark:bg-navyBlue">
        <div className="md:flex justify-between md:gap-[5rem]">
          <div className="w-full h-full md:w-5/12 pt-[100px] md:pt-[150px]">
            <h1 className="text-[24px] md:text-4xl font-bold dark:text-primary1">
              Contact Us
            </h1>
            <p className=" text-base font-light dark:text-lightGray">
              We&apos;d love to hear from you! If you have any questions,
              inquiries, or feedback, please contact us throught any of the
              channel or fill out the form and our team will get back to you as
              soon as possible.
            </p>
            <div className="mt-24 ">
              <h2 className="font-bold text-lg md:text-2xl dark:text-primary1">
                Business Hours
              </h2>
              <p className=" text-base dark:text-lightGray">
                Monday to Friday: 9:00 AM - 6:00 PM (WAT) <br />
                Saturday and Sunday: Closed
              </p>
            </div>
            <div className="w-full h-full mt-12 md:mt-24 text-base md:text-xl flex  flex-row justify-between ">
              <p className="text-base dark:text-lightGray">
                {" "}
                <span className="font-semibold lg:text-2xl dark:text-primary1">
                  Call :
                </span>{" "}
                <br /> 08129577490
              </p>
              <p className="text-base dark:text-lightGray">
                <span className="font-semibold lg:text-2xl dark:text-primary1">
                  Email :
                </span>
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

          <div className="w-full py-4 flex flex-col items-center  md:w-6/12  md:mt-28  sm:mt-[3rem] bg-[#F1F5F9] dark:bg-primary8">
            <form
              className="w-[90%] md:w-[80%] h-full mt-4 py-4 "
              action="https://getform.io/f/4ad2067f-1328-47af-86e6-90c1a47749a5"
              method="POST"
            >
              <div className="w-full flex justify-between mb-7 mt-5 md:mt-0 px-4">
                <div className="w-[48%]">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    className="p-4 border-2 text-primary7 placeholder:text-primary7 rounded-xl border-primary2 w-full bg-primary8 outline-none"
                    type="text"
                    placeholder="first Name"
                    name="firstName"
                    id="firstName"
                    required
                  />
                </div>
                <div className="w-[48%]">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    className=" p-4 border-2 text-primary7 placeholder:text-primary7 rounded-xl border-primary2 w-full bg-primary8 outline-none"
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    required
                  />
                </div>
              </div>
              <div className="w-full flex flex-col mb-7 px-4">
                <label htmlFor="email">Email</label>
                <input
                  className="p-4 border-2 text-primary7 placeholder:text-primary7 rounded-xl border-primary2 w-full bg-primary8 outline-none"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="@emailaddress.com"
                  required
                />
              </div>
              <div className="w-full flex flex-col mb-7 px-4">
                <label htmlFor="phone">Contact</label>
                <input
                  className="p-4 border-2 text-primary7 placeholder:text-primary7 rounded-xl border-primary2 w-full bg-primary8 outline-none"
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="0900000000"
                  required
                />
              </div>
              <div className="w-full flex flex-col mb-7 px-4">
                <label htmlFor="institution">Institution</label>
                <select
                  name="university"
                  id="university"
                  className="p-4 border-2 text-primary7 placeholder:text-primary7 rounded-xl border-primary2 w-full bg-primary8 outline-none  cursor-pointer"
                >
                  <option value="" className="cursor-pointer ">
                    Select University
                  </option>
                  {institution.map((uni) => (
                    <option key={uni.id} value={uni.name} className="mt-5">
                      {uni.name}
                    </option>
                  ))}
                  <option value=""> OTHERS</option>
                </select>
              </div>
              <div className="w-full flex flex-col mb-7 px-4">
                <label htmlFor="reason">Reason</label>
                <select
                  name="reason"
                  id="reason"
                  className=" p-4 border-2 text-primary7 placeholder:text-primary7 rounded-xl border-primary2 w-full bg-primary8 outline-none  cursor-pointer"
                >
                  <option value="" className="cursor-pointer ">
                    Select Reason
                  </option>
                  {Reasons.map((index) => (
                    <option key={index.id} value={index.name} className="mt-5">
                      {index.name}
                    </option>
                  ))}
                  <option value=""> OTHERS</option>
                </select>
              </div>
              <div className="w-full flex flex-col mb-7 px-4">
                <label htmlFor="message">Message</label>
                <textarea
                  className="w-full h-40 p-4 resize-none border-2 text-primary7 placeholder:text-primary7 rounded-xl border-primary2  bg-primary8 outline-none"
                  name="message"
                  placeholder="Message me"
                  id="message"
                  rows="10"
                  required
                ></textarea>
              </div>
              <div className="w-full px-4">
                <button
                  className={`bg-primary0Blue hover:bg-primary6 text-white font-bold py-2 px-4 rounded-[1.5rem] w-[45%] mt-5 h-[3.8rem]`}
                  type="submit"
                  value="Submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default ContactUs;
