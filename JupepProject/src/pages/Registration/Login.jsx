import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// import { FcGoogle } from "react-icons/fc";
// import { FaFacebook } from "react-icons/fa";
// import { BsTwitter } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { BiKey } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context/AuthContext";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import samuel from "../../assets/Home Landing Image/samuel.png";

const formSchema = yup.object().shape({
  email: yup
    .string()
    .required("email can't be empty")
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Invalid email address"
    ),
  password: yup
    .string()
    .required("Password is required")
    .matches(
      /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/,
      "invalid Password"
    ),
});

const Login = () => {
  const [passwordVisibile, passwordNotVisible] = useState(false);
  const { Login, loading } = useGlobalContext();

  const togglePassword = () => {
    passwordNotVisible((prevState) => !prevState);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  return (
    <main className="-full h-full  font-body  text-secH ">
      <div className="w-full h-full"></div>

      <div className=" w-full min-h-screen md:grid md:grid-cols-2">
        <div className=" h-full bg-primary0Blue pb-[20px] px-6 md:px-3 lg:px-6">
          <h1 className="text-2xl md:text-4xl pt-[40px] text-white font-extrabold">
            Welcome Back 🌟
          </h1>
          <p className="text-pS text-primary1 mt-[20px] font-medium">
            We&apos;re thrilled to have you return to our learning community.
            Get ready for another exciting chapter of exploration and knowledge.
            From engaging reading sessions to interactive practice, we&apos;re
            here to make your learning journey exceptional. Let&apos;s dive back
            in together and make every moment count!
          </p>
          <div className="mt-[120px] ">
            <div className="w-full flex ">
              <FaStar size={24} className="text-secR" />
              <FaStar size={24} className="text-secR ml-2" />
              <FaStar size={24} className="text-secR ml-2" />
              <FaStar size={24} className="text-secR ml-2" />
              <FaStar size={24} className="text-secR ml-2" />
            </div>
            <p className="text-pS text-primary1 mt-[20px] font-medium">
              This site has truly transformed my study experience! The seamless
              online reading platform, extensive bank of practice exam
              questions, and the interactive EaseReads A.I for answering
              questions make learning incredibly engaging. The ability to
              schedule reading tasks keeps me organized, and the informative
              videos for each topic provide valuable insights. A must-visit for
              students looking for a comprehensive and user-friendly educational
              resource!
            </p>
            <div className="mt-[20px] w-[239px] h-[70px] flex justify-between items-center">
              <img
                src={samuel}
                alt="user"
                className="w-[70px] h-full rounded-xl "
              />
              <p className="text-primary1 text-pL">Samuel Makinde</p>
            </div>
          </div>
        </div>

        <div className=" h-full md:bg-primary1   px-6 md:px-3 lg:px-14 xl:px-16 mt-[40px] md:mt-0 pb-[20px]">
          <Link to="/" smooth="true" duration={500}>
            <div className="w-[37px] h-[37px] flex justify-center bg-primary0Blue mt-[40px] items-center">
              <FaArrowLeftLong size={27} className="text-primary1" />
            </div>
          </Link>

          <div className="w-full  mt-[20px]">
            <h1 className="text-[#04050C] text-[24px] md:text-[48px] ">
              Log in
            </h1>
            <p className="text-secH mt-[25px]">
              Log in to continue your learning journey and explore a world of
              endless possibilities with EaseReads.
            </p>
          </div>
          <form onSubmit={handleSubmit(Login)}>
            <div className=" flex flex-col justify-center items-center md:flex-none ">
              <div className="w-full h-full mt-[90px]">
                <div className="relative w-full h-full flex flex-col-reverse">
                  <label
                    className="absolute top-[4px] left-[50px] text-secH md:text-[12px] leading-[15.22px]"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <AiOutlineMail
                    size={24}
                    className="absolute top-[20px] left-[10px] text-secT"
                  />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    {...register("email")}
                    placeholder="email address"
                    className="w-full h-[60px] border-2  border-primary2 rounded-[5px] outline-none"
                    style={{ paddingLeft: "50px" }}
                  />
                </div>
                <small
                  className="text-red-900 text-[14px] font-bold"
                  style={{
                    visibility: errors.email ? "visible" : "hidden",
                  }}
                >
                  {errors.email?.message}
                </small>
              </div>

              <div className="w-full h-full mt-[30px] ">
                <div className="relative w-full h-full flex flex-col-reverse">
                  <label
                    className="absolute top-[4px] left-[50px] text-secH md:text-[12px] leading-[15.22px]"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <BiKey
                    size={24}
                    className="absolute top-[20px] left-[10px] text-secT"
                  />
                  <input
                    type={passwordVisibile ? "text" : "password"}
                    id="password"
                    name="password"
                    {...register("password")}
                    placeholder="********"
                    className="w-full h-[60px] border-2   border-primary2 rounded-[5px] outline-none"
                    style={{ paddingLeft: "50px" }}
                  />
                  <button
                    type="button"
                    onClick={togglePassword}
                    className="absolute top-1/3 right-[20px] bg-transparent border-none text-red-900 font-semibold"
                  >
                    {passwordVisibile ? "Hide" : "show"}
                  </button>
                </div>

                <small
                  className="text-red-900 text-[14px] font-bold"
                  style={{
                    visibility: errors.password ? "visible" : "hidden",
                  }}
                >
                  {errors.password?.message}
                </small>
              </div>
              <div className="w-full flex justify-between text-[16px] mt-[25px]">
                <p>
                  <input
                    type="checkbox"
                    id="check"
                    className="cursor-pointer "
                  />{" "}
                  Remember me
                </p>
                <Link to="/forgot-password" smooth="true" duration={500}>
                  <p className="text-sec1 text-[16px] leading-[15.22px]  cursor-pointer font-semibold">
                    Forgot Password?
                  </p>
                </Link>
              </div>
              {loading ? (
                <div
                  className="w-full h-[60px] mt-[40px] flex justify-center bg-primary0Blue opacity-30  text-[16px] md:text-[20px] rounded-[12px] text-primary1 cursor-pointer"
                  aria-disabled
                >
                  <button className="w-full h-full" type="submit">
                    Processing...
                  </button>
                </div>
              ) : (
                <div className="w-full h-[60px] mt-[40px] flex justify-center bg-primary0Blue hover:bg-opacity-80  text-[16px] md:text-[20px] rounded-[12px] text-primary1 cursor-pointer">
                  <button className="w-full h-full" type="submit">
                    Login
                  </button>
                </div>
              )}

              <p className="text-[#2F3035] text-[16px] leading-[20.22px] font-normal mt-[30px] text-center">
                Don&apos;t have an account?{" "}
                <Link to="/sign-up" smooth="true" duration={500}>
                  <button className="text-primary0Blue font-medium">
                    Sign Up.
                  </button>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      {/* {loading && <LoadingSpinner />} */}
    </main>
  );
};

export default Login;
