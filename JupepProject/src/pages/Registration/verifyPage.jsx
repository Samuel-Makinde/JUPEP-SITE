import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { FaTimes } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import logo from "../../assets/Home Landing Image/college.jpeg";
import { useGlobalContext } from "../../context/AuthContext";
import "./Reg.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const VerifyPage = () => {
  const { modalOpen, closeModal, openModal } = useGlobalContext();
  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("name is required")
      .matches(
        /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/,
        "invalid Password"
      ),
    email: yup
      .string()
      .required("email can't be empty")
      .matches(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Invalid email address"
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  return (
    <main className="w-full h-full  md:bg-gray-200">
      <div className="w-full flex flex-col  md:flex justify-center items-center">
        <div className="bg-white w-full px-5  md:w-[500px]">
          <div className="w-full flex mt-[35px] justify-between">
            <Link to="/signup" smooth="true" duration={500}>
              <div className="w-[24px] h-[24px] bg-[#D3D7FB] rounded-[60px]  cursor-pointer ">
                <IoIosArrowBack size={22} className="text-blue-700 " />
              </div>
            </Link>
            <img src={logo} alt="logo" className="w-[93.76px] h-[24px] " />
          </div>

          {/* verify part */}
          <div className="w-full  h-[192px]  mt-[200px] flex flex-col justify-center items-center">
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
                  onClick={openModal}
                  className="text-blue-800 font-semibold cursor-pointer"
                >
                  Resend link
                </span>
                .
              </button>
              {/* modal */}
              <div
                className={`${
                  modalOpen ? "modal-overlay show-modal" : "modal-overlay"
                }`}
              >
                <div
                  className="modal-container"
                  onSubmit={handleSubmit()}
                >
                  <input
                    type="name"
                    id="name"
                    name="name"
                    {...register("name")}
                    placeholder="name"
                    className="w-[20rem] h-[3rem] border-2  border-[#B3B4BB] rounded-[5px] outline-none"
                    style={{ paddingLeft: "1rem" }}
                  />
                  <small
                    className="text-red-900 text-[14px] font-bold"
                    style={{
                      visibility: errors.email ? "visible" : "hidden",
                    }}
                  >
                    {errors.email?.message}
                  </small>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    {...register("email")}
                    placeholder="email address"
                    className="w-[20rem] h-[3rem] border-2  border-[#B3B4BB] rounded-[5px] outline-none"
                    style={{ paddingLeft: "1rem" }}
                  />
                  <small
                    className="text-red-900 text-[14px] font-bold"
                    style={{
                      visibility: errors.email ? "visible" : "hidden",
                    }}
                  >
                    {errors.email?.message}
                  </small>
                  <button className="close-modal-btn" onClick={closeModal}>
                    <FaTimes></FaTimes>
                  </button>
                  {/* <div className="w-full h-[60px] mt-[40px] flex justify-center bg-[#4D5DED] opacity-80 hover:opacity-100 text-[16px] md:text-[20px] rounded-[12px] text-white cursor-pointer">
                    <button className="w-full h-full" type="submit">
                      Login
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default VerifyPage;
