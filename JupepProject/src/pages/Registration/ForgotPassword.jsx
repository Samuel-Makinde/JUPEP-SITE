import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useState } from "react"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForgotPassword = () => {
    const [loading, setLoading] = useState(false)
    
    const onSubmit = async(data, e) => {
        e.preventDefault(),
        console.log(data)
        setLoading(true)
        axios.post(`https://jupeb-site-backend.onrender.com/api/v1/forgot-password`, {
            email:data.email
        })
        .then((response) => {
            toast.success(response.data.msg, {
                onClose: () => {
                },
            })
            console.log("sending", response);
        }).catch((error) => {
            setLoading(false)
            toast.error(error.response.data.msg, {
                autoClose: false,
                closeOnClick: true,
                onClose: () => {}
            })
        })
    }
    const formSchema = yup.object().shape({
        email: yup
          .string()
          .required("")
          .matches(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Invalid email address"
          ),
      });
      const {
        register,
        handleSubmit,
        formState: {errors }, 
      } = useForm({
        resolver: yupResolver(formSchema),
      });

  return (
    <div className="mt-[7rem] flex justify-center items-center">
      <form className="border-2 w-[18rem] md:w-[30rem] h-[10rem] relative" onSubmit={handleSubmit(onSubmit)}>
        <div>

        <input
          type="email"
          id="email"
          name="email"
          {...register("email")}
          placeholder="Email address"
          className="w-[15rem] md:w-[25rem] h-[50px] border-2  border-[#B3B4BB] rounded-[5px] outline-none block md:ml-[2rem] ml-[1.3rem] pl-[10px] mt-[1rem]"
          />
           <small
            className="text-red-900 text-[14px] font-bold md:pl-[2.2rem] pl-[1.5rem]"
            style={{
              visibility: errors.email ? "visible" : "hidden",
            }}
          >
            {errors.email?.message}
          </small>
          </div>
        <button
          className="mt-[1rem] absolute right-[2rem] md:right-[4rem]"
          style={{ width: "max-content", backgroundColor: "#39cdcc", padding: "0.5rem 1rem", color: "#fff", fontWeight: "500", borderRadius: "5px" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
