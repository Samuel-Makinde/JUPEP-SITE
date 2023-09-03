import React from "react";
import { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BiKey } from "react-icons/bi";

const signin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword((prevState) => !prevState);
  };
  return (
    <div className="h-full md:bg-[#a9c0e4]">
      <form className="text-center pt-[30px] md:pt-[8rem] md:flex md:justify-end md:pr-[8rem]">
        <div className="md:bg-white md:w-[32rem] rounded-[15px] md:pb-[5rem]">
          <h2 className="text-4xl font-bold md:pt-[3rem]">Welcome back</h2>
          <p className="pt-[10px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique
            molestias ipsam repudiandae, minus quasi laudantium?
          </p>

          <div className="w-full relative pt-[60px]">
            <label className="absolute pl-[2rem]" htmlFor="label">
              Email address
            </label>
            <AiOutlineMail
              className="absolute sm:top-[4.5rem] md:top-[4.4rem] sm:left-[2.1rem] md:left-[4.9rem] text-[#85868D]"
              size={25}
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email@gmail.com"
              className="border-[1px] border-black h-[2.9rem] w-[16rem] md:w-[23rem] rounded-[5px] pt-[20px] pl-[2rem]"
            />
          </div>

          <div className="w-full relative pt-[2rem]">
            <label className="absolute pl-[2rem] md:pt-[2rem]" htmlFor="label">
              Password
            </label>
            <BiKey
              size={25}
              className="absolute top-[4.5rem] md:top-[4.4rem] left-[2.1rem] md:left-[4.9rem] text-[#85868D]"
            />
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="*******"
              className="border-[1px] border-black h-[2.9rem] w-[16rem] md:w-[23rem] rounded-[5px] pt-[20px] md:mt-[2rem] pl-[2rem]"
            />
            <button
              type="button"
              onClick={togglePassword}
              className="absolute md:top-2/3 top-[40px] md:right-[5rem] right-[3rem] bg-transparent border-none"
            >
              {showPassword ? "Hide" : "show"}
            </button>
          </div>
          <p className="text-[#4D5DED] text-[12px] md:text-[15px] leading-[15.22px] mt-[5px] cursor-pointer ml-[10rem] md:ml-[15rem]">
            Forgot Password?
          </p>
          <p className="text-[12px] md:text-[15px] mt-[20px] md:mt-[3rem] mr-[9rem] md:mr-[13.3rem]">
            <input type="checkbox" id="checkbox" /> Keep me logged in.
          </p>

          <button className="w-[17rem] md:w-[23rem] h-[2.9rem] bg-[#4D5DED] rounded-[8px] mt-[2rem] md:mt-[2rem]  text-white">
            Log in
          </button>
          <p className="pt-[1rem] md:pt-[2rem]">
            Dont have an account?{" "}
            <button className="text-[#4D5DED]">Sign up.</button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default signin;
