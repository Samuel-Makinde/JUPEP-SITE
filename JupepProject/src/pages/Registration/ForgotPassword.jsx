import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  // const baseUrl = import.meta.env.EASEREADS_BASE_URL;

  const onSubmit = async (data, e) => {
    e.preventDefault(), setLoading(true);
    axios
      .post(`https://jupeb-site-backend.onrender.com/api/v1/forgot-password`, {
        email: data.email,
      })
      .then((response) => {
        setLoading(false);
        toast.success(response.data.msg, {
          onClose: () => {
            navigate("/login");
          },
        });
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error.response.data.msg, {
          autoClose: false,
          closeOnClick: true,
          onClose: () => {},
        });
      });
  };
  const formSchema = yup.object().shape({
    email: yup
      .string()
      .required("email address is required")
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
    <div className="w-full h-screen py-8 pt-[2rem] px-4 dark:text-lightGray dark:bg-darkBlue ">
      <Link to="/login" smooth="true" duration={500}>
        <div className="w-[37px] h-[37px] flex justify-center bg-primary0Blue mt-[40px] items-center">
          <FaArrowLeftLong size={27} className="text-primary1" />
        </div>
      </Link>
      <h1 className="text-secH dark:text-lightGray text-[24px] font-semibold text-center mt-10">
        Forgot Password
      </h1>
      <p className="text-secH dark:text-lightGray mt-[5px] text-center ">
        input the email address you register with to get a reset password link
      </p>
      <form
        className=" w-full  h-[10rem]  px-4 "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-full flex flex-col justify-center items-center  mt-[40px]">
          <label
            className="w-full sm:w-[345px] md:w-[25rem] font-medium dark:text-lightGray text-secH text-left md:text-[20px] leading-[15.22px]"
            htmlFor="email"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            {...register("email")}
            placeholder="Email address"
            className="w-full sm:w-[345px] md:w-[25rem] h-[50px] border-2  dark:text-secH border-[#B3B4BB] rounded-[12px] outline-none   pl-[10px] mt-[1rem]"
          />
          <small
            className="text-red-900 text-[14px] w-[345px] md:w-[25rem] text-left font-bold"
            style={{
              visibility: errors.email ? "visible" : "hidden",
            }}
          >
            {errors.email?.message}
          </small>

          <button className="w-full sm:w-[345px] md:w-[25rem] mt-[70px] h-[50px]  text-center bg-primary0Blue hover:bg-opacity-80 text-[16px] md:text-[20px] rounded-[12px] text-white cursor-pointer ">
            Submit
          </button>
        </div>
      </form>
      {loading && <LoadingSpinner />}
    </div>
  );
};

export default ForgotPassword;
