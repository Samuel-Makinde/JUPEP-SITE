import Layout from "../../layout/Layout";
import { BiLogoTelegram } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";

const ContactUs = () => {
  return (
    <Layout>
      <main className="w-full h-full bg-white px-4 md:px-6 lg:px-10 ">
        <div className="w-full h-full pt-[100px] md:pt-[150px]">
          <h1 className="text-[24px] md:text-[48px]">Contact Us</h1>
          <p>
            Have questions or need support? We&apos;re here to help! <br />
            Contact us through any of our platform below to connect with a Staff
          </p>
          <div className="w-full h-full mt-[40px] flex flex-col md:flex-row">
            <p className="text-[20px] md:text-[28px] md:mr-[30px]">
              {" "}
              Call : 08129577490
            </p>
            <a
              className="text-white text-[16px] md:text-[20px] h-[60px] w-[200px] lg:w-[250px] mt-[20px] md:mt-0 flex justify-center items-center bg-[#28A219] hover:opacity-90 rounded-[10px] md:mr-[30px]"
              href="https://wa.me/08129577490"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsWhatsapp size={24} className="text-[#f2f3f5] mr-[20px]" />
              WhatsAPP
            </a>

            <a
              className="text-white text-[16px] md:text-[20px] h-[60px] w-[200px] lg:w-[250px] mt-[20px] md:mt-0 flex justify-center items-center bg-[#2AA2DC] hover:opacity-90 rounded-[10px]"
              rel="noreferrer"
              target="_blank"
              href="https://t.me/+u5_EgioIoPM3Njk0"
            >
              {" "}
              <BiLogoTelegram size={24} className="text-[#f2f3f5] mr-[20px]" />
              Telegram
            </a>
          </div>

          <div className="w-full h-full"></div>
        </div>
      </main>
    </Layout>
  );
};

export default ContactUs;
