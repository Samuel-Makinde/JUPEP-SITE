import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const ResetPassword = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const location = useLocation();
  const queryParam = new URLSearchParams(location.search);

  const onSubmit = async (data, e) => {
    e.preventDefault(), console.log(data);
    setLoading(true);

    try {
      const response = await axios.post(
        `https://jupeb-site-backend.onrender.com/api/v1/reset-password`,
        {
          token: queryParam.get("token"),
          email: queryParam.get("email"),
          password: data.resetPassword,
        }
      );

      toast.success(response.data.msg, {
        onClose: () => {},
      });
      console.log("sending", response);
    } catch (error) {
      setError(true);
      setLoading(false);
      toast.error(error.response.data.msg, {
        autoClose: false,
        closeOnClick: true,
        onClose: () => {},
      });
    }
  };

  const formSchema = yup.object().shape({
    resetPassword: yup
      .string()
      .required("Password is required")
      .matches(
        /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/,
        "Password must be at least 8 characters and must contain at least a capital letter, a number, and a special character (!@#$%^&*)"
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
    <div className="mt-[60px] flex justify-center items-center">
      <form
        className="border-2 w-[18rem] md:w-[30rem] h-[17rem] relative"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="text-center text-2xl font-bold pt-[2rem]"><h2>RESET PASSWORD</h2></div>
        <div>
          <input
            type="password"
            id="resetPassword"
            name="resetPassword"
            {...register("resetPassword")}
            placeholder="Reset Password"
            className="w-[15rem] md:w-[25rem] h-[50px] border-2  border-[#B3B4BB] rounded-[5px] outline-none block ml-[1.2rem] md:ml-[2rem] pl-[10px] mt-[3rem]"
          />
          <small
            className="text-red-900 text-[14px] font-bold pl-[1.2rem] md:pl-[2.2rem]"
            style={{
              visibility: errors.resetPassword ? "visible" : "hidden",
            }}
          >
            {errors.resetPassword?.message}
          </small>
        </div>
        <button
          className="mt-[1rem] absolute right-[2rem] md:right-[4rem]"
          style={{
            width: "max-content",
            backgroundColor: "#39cdcc",
            padding: "0.5rem 1rem",
            color: "#fff",
            fontWeight: "500",
            borderRadius: "5px",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
