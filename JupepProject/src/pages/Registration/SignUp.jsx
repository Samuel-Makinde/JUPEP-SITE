import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
// import { FcGoogle } from "react-icons/fc";
// import { FaFacebook } from "react-icons/fa";
// import { BsTwitter } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";
import { RxPerson } from "react-icons/rx";
import { IoIosSchool } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import { BiKey } from "react-icons/bi";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
// import samuel from "../../assets/Home Landing Image/samuel.png";
import peterAkojede from "../../assets/Home Landing Image/peterAkojede.jpg";
import University from "../../data/University";

const formSchema = yup.object().shape({
  userName: yup.string().required(" name can't be empty"),
  phoneNumber: yup
    .string()
    .required("phone number is required")
    .matches(/^\d{11}$/, "phone number must be exactly 11 digits"),
  email: yup
    .string()
    .required("email can't be empty")
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Invalid email address"
    ),
  university: yup.string().required("provide your university name"),
  password: yup
    .string()
    .required("Password is required")
    .matches(
      /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/,
      "Password must be at least 8 characters and must contain at least a capital letter, a number, and a special character (!@#$%^&*)"
    ),
  cpassword: yup
    .string()
    .required("Confirm Password is required")
    .oneOf([yup.ref("password")], "Passwords do not match"),
});

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [institution, setInstitution] = useState([]);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const [passwordVisibile, passwordNotVisible] = useState(false);
  const togglePassword = () => {
    passwordNotVisible((prevState) => !prevState);
  };

  const [cpasswordVisibile, passwordNotVisibleC] = useState(false);
  const toggleCPassword = () => {
    passwordNotVisibleC((prevState) => !prevState);
  };

  // const baseUrl = import.meta.env.EASEREADS_BASE_URL;

  const onSubmit = async (data, e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        `https://jupeb-site-backend.onrender.com/api/v1/register`,
        {
          username: data.userName,
          email: data.email,
          phoneNumber: data.phoneNumber,
          university: data.university,
          password: data.password,
        }
      );
      setLoading(false);
      toast.success(response.data.msg, {
        onClose: () => {
          const verificationUrl = `/verify-email-page?email=${data.email}&firstName=${data.username}`;
          navigate(verificationUrl);
        },
      });
    } catch (error) {
      setLoading(false);
      toast.error(error.response.data.msg, {
        autoClose: false,
        closeOnClick: true,
        onClose: () => {
          // You can choose to navigate or handle errors differently here
        },
      });
    }
  };
  // "https://jupeb-site-backend.onrender.com/api/v1/get-all-universities"

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
    <main className="w-full h-full font-body text-secH ">
      <div className="w-full min-h-screen md:grid md:grid-cols-2">
        <div className=" h-full bg-primary0Blue pb-[20px] px-6 md:px-3 lg:px-6">
          <h1 className="text-2xl md:text-4xl pt-[40px] text-white font-extrabold">
            Welcome aboard! 🚀
          </h1>
          <p className="text-pS text-primary1 mt-[20px] font-medium">
            Join our vibrant learning community and embark on an exciting
            journey of exploration and knowledge. Dive into engaging reading
            sessions, interactive practice, and make every moment count on your
            exceptional learning adventure. We&apos;re thrilled to have you with
            us! Let&apos;s get started together!
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
              This site is a game-changer! From the moment I signed up, the
              experience has been nothing short of exceptional. The diverse
              range of resources, interactive learning features, and the ability
              to connect with ChatGPT for questions have made studying a joy.
              The user-friendly interface and well-structured content make it
              easy to navigate. Five stars without a doubt — this platform has
              enriched my learning journey in ways I couldn&apos;t have
              imagined!
            </p>
            <div className="mt-[20px] w-[239px] h-[70px] flex justify-between items-center">
              <img
                src={peterAkojede}
                alt="user"
                className="w-[70px] h-full rounded-xl "
              />
              <p className="text-primary1 text-pL">Peter Akojede</p>
            </div>
          </div>
        </div>

        <div className="h-full md:bg-primary1   px-6 md:px-3 lg:px-14 xl:px-16 mt-[40px] md:mt-0 pb-[20px]">
          <Link to="/" smooth="true" duration={500}>
            <div className="w-[37px] h-[37px] flex justify-center bg-primary0Blue mt-[40px] items-center">
              <FaArrowLeftLong size={27} className="text-primary1" />
            </div>
          </Link>
          <div className="w-full  mt-[20px]">
            <h1 className="text-[#04050C] text-[24px] md:text-[48px] ">
              Sign Up
            </h1>
            <p className="text-secH mt-[25px]">Sign up and starting learning</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* social media signup */}
            {/* <div className="w-full h-full mt-[25px] flex flex-col md:flex-row items-center justify-evenly text-center ">
              <button className="w-full h-[60px]  flex items-center justify-center border border-[#B3B4BB] px-4 rounded-[8px] cursor-pointer">
                <FcGoogle size={24} className="mr-[10px]" />
                <p className="text-[#04050C] text-[16px] leading-[20.21px]">
                  Sign up with Google
                </p>
              </button>
              <button className="w-full h-[60px] mt-[15px] md:mt-0 flex items-center justify-center border border-[#B3B4BB] px-4 rounded-[8px] cursor-pointer">
                <FaFacebook size={24} className="mr-[10px] text-blue-700" />
                <p className="text-[#04050C] text-[16px] leading-[20.21px]">
                  Sign up with Facebook
                </p>
              </button>
              <button className="w-full h-[60px] mt-[15px] md:mt-0 flex items-center justify-center border border-[#B3B4BB] px-4 rounded-[8px] cursor-pointer">
                <BsTwitter size={24} className="mr-[10px] text-blue-700" />
                <p className="text-[#04050C] text-[16px] leading-[20.21px]">
                  Sign Up with Twitter
                </p>
              </button>
            </div> */}

            {/* <div className="w-full flex items-center mt-[30px] ">
              <div className="flex-1 h-[1px] border-[1px] border-b-gray-800"></div>
              <p className="mx-4 text-gray-600">OR</p>
              <div className="flex-1 border-[1px] border-b-gray-800"></div>
            </div> */}

            <div className="w-full  h-full mt-[70px]">
              <div className="w-full  md:flex justify-between">
                <div className="w-full h-full md:w-5/12 ">
                  <div className="relative w-full  flex flex-col-reverse ">
                    <label
                      className="absolute top-[4px] left-[50px] text-secH md:text-[12px] leading-[15.22px]"
                      htmlFor="username"
                    >
                      User Name
                    </label>
                    <RxPerson
                      size={24}
                      className="absolute top-[20px] left-[10px] text-secT"
                    />
                    <input
                      type="text"
                      id="userName"
                      className="  h-[60px] border-2  border-primary2 rounded-[5px] outline-none"
                      name="username"
                      {...register("userName")}
                      placeholder="user name"
                      style={{ paddingLeft: "50px" }}
                    />
                  </div>
                  <small
                    className="text-red-900 text-[14px] font-bold"
                    style={{
                      visibility: errors.userName ? "visible" : "hidden",
                    }}
                  >
                    {errors.userName?.message}
                  </small>
                </div>

                <div className="w-full  md:w-5/12 h-full mt-[30px] md:mt-0">
                  <div className="relative w-full flex flex-col-reverse justify-center ">
                    <label
                      className="absolute top-[4px] left-[50px] text-secH md:text-[12px] leading-[15.22px]"
                      htmlFor="phonenumber"
                    >
                      phoneNumber
                    </label>
                    <BsTelephone
                      size={24}
                      className="absolute top-[20px] left-[10px] text-secT"
                    />
                    <input
                      type="text"
                      id="phonenumber"
                      name="phoneNumber"
                      {...register("phoneNumber")}
                      placeholder="phone number"
                      className="w-full h-[60px] border-2  border-primary2 rounded-[5px] outline-none"
                      style={{ paddingLeft: "50px" }}
                    />
                  </div>
                  <small
                    className="text-red-900 text-[14px] font-bold"
                    style={{
                      visibility: errors.phoneNumber ? "visible" : "hidden",
                    }}
                  >
                    {errors.phoneNumber?.message}
                  </small>
                </div>
              </div>

              <div className="w-full md:flex justify-between md:mt-[30px]">
                <div className="w-full  md:w-5/12 h-full mt-[30px] md:mt-0">
                  <div className="relative w-full flex flex-col-reverse justify-center ">
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

                <div className="w-full md:w-5/12 h-full mt-[30px] md:mt-0">
                  <div className="relative   flex flex-col-reverse justify-center  ">
                    <IoIosSchool
                      size={24}
                      className="absolute top-[20px] left-[10px] text-secT"
                    />
                    <select
                      name="university"
                      id="university"
                      className="w-full h-[60px] border-2  border-primary2 rounded-[5px] outline-none pl-[50px]  cursor-pointer"
                      {...register("university", { required: true })}
                    >
                      <option value="" className="cursor-pointer ">
                        Select University
                      </option>
                      {institution.map((uni) => (
                        <option key={uni.id} value={uni.name}>
                          {uni.name}
                        </option>
                      ))}
                      <option value=""> OTHERS</option>
                    </select>
                  </div>
                  <small
                    className="text-red-900 text-[14px] font-bold"
                    style={{
                      visibility: errors.university ? "visible" : "hidden",
                    }}
                  >
                    {errors.university?.message}
                  </small>
                </div>
              </div>

              <div className="w-full h-full mt-[30px]">
                <div className="relative w-full h-full flex flex-col-reverse">
                  <label
                    className="absolute top-[4px] left-[50px] text-secH md:text-[12px] leading-[15.22px]"
                    htmlFor="password"
                  ></label>
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
                    className="w-full h-[60px] border-2  border-primary2 rounded-[5px] outline-none "
                    style={{ paddingLeft: "50px" }}
                  />
                  <button
                    type="button"
                    onClick={togglePassword}
                    className="absolute top-1/3 right-[20px] bg-transparent border-none text-red-900 font-bold"
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

              <div className="w-full h-full mt-[30px]">
                <div className="relative w-full h-full flex flex-col-reverse">
                  <label
                    className="absolute top-[4px] left-[50px] text-secH md:text-[12px] leading-[15.22px]"
                    htmlFor="cpassword"
                  ></label>
                  <BiKey
                    size={24}
                    className="absolute top-[20px] left-[10px] text-secT"
                  />
                  <input
                    type={cpasswordVisibile ? "text" : "password"}
                    id="cpassword"
                    name="cpassword"
                    {...register("cpassword")}
                    placeholder="**********"
                    className="w-full h-[60px] border-2  border-primary2 rounded-[5px] outline-none"
                    style={{ paddingLeft: "50px" }}
                  />
                  <button
                    type="button"
                    onClick={toggleCPassword}
                    className="absolute top-1/3 right-[20px] bg-transparent border-none text-red-900 font-bold"
                  >
                    {cpasswordVisibile ? "Hide" : "show"}
                  </button>
                </div>
                <small
                  className="text-red-900 text-[14px] font-bold"
                  style={{
                    visibility: errors.cpassword ? "visible" : "hidden",
                  }}
                >
                  {errors.cpassword?.message}
                </small>
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
                <div className="w-full h-[60px] mt-[40px] flex justify-center bg-primary0Blue opacity-100 hover:opacity-80 text-[16px] md:text-[20px] rounded-[12px] text-primary1 cursor-pointer">
                  <button className="w-full h-full" type="submit">
                    Sign Up
                  </button>
                </div>
              )}
            </div>
            <p className="text-[#54555B] text-[12px] mt-[15px] text-center">
              By siging up, you agree to the{" "}
              <Link to="/term-of-use" smooth="true" duration={500}>
                <span className="text-sec1 cursor-pointer">
                  {" "}
                  Terms of Service
                </span>{" "}
              </Link>
              and{" "}
              <Link to="/privacy-policy" smooth="true" duration={500}>
                <span className="text-sec1 cursor-pointer">Privacy Policy</span>
              </Link>
            </p>
            <p className="text-[#2F3035] text-[16px] text-center md:text-[20px] mt-[10px]">
              Have an account?{" "}
              <Link to="/login" smooth="true" duration={500}>
                <button className="text-primary0Blue cursor-pointer">
                  login
                </button>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
};

export default SignUp;
