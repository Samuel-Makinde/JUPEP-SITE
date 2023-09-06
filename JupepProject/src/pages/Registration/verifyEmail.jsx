import { Link } from "react-router-dom"
import {IoIosArrowBack} from 'react-icons/io'
import {MdEmail} from "react-icons/md"
import logo from "../../assets/Home Landing Image/college.jpeg"

const VerifyEmail = () => {
  return (
    <main className="w-full h-full  md:bg-gray-200">
        <div className="w-full flex flex-col  md:flex justify-center items-center">
            <div className="bg-white w-full px-5  md:w-[500px]">
                <div className="w-full flex mt-[35px] justify-between">
                    <Link to="/signup" smooth="true" duration={500}>
                        <div className="w-[24px] h-[24px] bg-[#D3D7FB] rounded-[60px]  cursor-pointer " >
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
                        <h1 className="text-[24px] md:text-[32px] font-medium ">Verify Your Account</h1>
                        <p className="text-[16px] text-[#85868D] ">Please check your email inbox to verify your account</p>
                        <p className="text-[16px] text-[#85868D] ">Didn’t receive any email?<span className="text-blue-800 font-semibold cursor-pointer">Resend link</span>.</p>
                    </div>
                </div>
                
            </div>
        </div>
    </main>
  )
}

export default VerifyEmail