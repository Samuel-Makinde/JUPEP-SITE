import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import logo from "../../assets/logo/ease read logooo png version-07.png"
import "./Reg.css";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";
import { useLocation } from "react-router-dom"


const VerifyPage = () => {
  const [loading, setLoading] = useState(false)

  // Access location to get URL parameters
const location = useLocation();
const queryParams = new URLSearchParams(location.search);

const email = queryParams.get("email");
const firstName = queryParams.get("firstName");

  const onSubmit = async () => {
    setLoading(true)
    axios.post(`https://jupeb-site-backend.onrender.com/api/v1/resend-email`, {
      email: email,
      firstName: firstName,
    })
    .then((response) => {
      toast.success(response.data.msg, {
        onClose: () => {
      },
    })
      console.log("sending", response);
    }) .catch((error) => {
      setLoading(false)
    toast.error(error.response.data.msg, {
    autoClose: false,
    closeOnClick: true,
    onClose: () => {
  },
})
      console.log("not sending", error);
    }) ;
  };

  return (
    <main className="w-full h-screen  md:bg-[#A4C6FC]">
      <div className="w-full h-full flex flex-col   justify-center items-center">
        <div className="bg-white rounded-[12px] md:shadow-2xl w-full h-full px-5 py-5  md:w-[600px] md:h-[500px]">
          <div className="w-full flex mt-[35px] justify-between">
            <Link to="/signup" smooth="true" duration={500}>
              <div className="w-[24px] h-[24px] bg-[#D3D7FB] rounded-[60px]  cursor-pointer ">
                <IoIosArrowBack size={22} className="text-blue-700 " />
              </div>
            </Link>
            <img src={logo} alt="logo" className="h-[30px] md:h-[34px] " />
          </div>

          {/* verify part */}
          <div className="w-full  h-[192px]  mt-[150px] flex flex-col justify-center items-center">
            <div className="w-[80px] h-[80px] bg-[#D3D7FB] rounded-[60px] flex justify-center items-center">
              <MdEmail size={32} className="text-blue-700" />
            </div>
            <div className="mt-[15px] text-center">
              <h1 className="text-[24px] md:text-[32px] font-medium ">
                Verify Your Account
              </h1>
              <p className="text-[16px] text-[#85868D] ">
                Please check your email inbox to verify your account
              </p>
              <button className="text-[16px] text-[#85868D] ">
                Didn’t receive any email?
                <span
                  // onClick={toggleModal}
                  className="text-blue-800 font-semibold cursor-pointer"
                  onClick={onSubmit}
                >
                  Resend link
                </span>
                .
              </button>
            </div>
          </div>
        </div>
      </div>
       {loading && <LoadingSpinner />}
    </main>
  );
};

export default VerifyPage;