import React from 'react'
import { IoTimeOutline } from "react-icons/io5";
import { GiNetworkBars } from "react-icons/gi";
import { FaRegBookmark } from "react-icons/fa6";

const Coursecard = ({ img, course, hours, level, price, author, authorImg}) => {
  return (
    <div>
       <div className="border rounded-[10px] w-[320px] ml-[15px]">
                <img className="w-full" src={img} alt="courses"/>
                <p className="pl-[20px] pt-[20px] "> {course} </p>
                <div className="flex space-around w-[100px] pl-[20px] pt-[25px]"> <span className="pt-[3px]"><IoTimeOutline size={20} /> </span> <p className="text-xl pl-[8px]">{hours}</p>  <span className="pl-[15px]"> <GiNetworkBars size={20}/></span> <p className="text-xl pl-[10px]">{level}</p></div>
                <p className="py-[30px] pl-[25px]">₦{price}</p>
                
                <div className="border"></div>

                <div className="flex pl-[20px] py-[20px] space-between border-2px-red ">  <img className="w-[30px] rounded-[50px]" src={authorImg} alt="author-image"/> <p className="text-xl pt-[5px] pl-[20px]">{author}</p> <span className="pt-[10px] pl-[25px]"><FaRegBookmark size={20}  /></span></div>
               </div>
    </div>
  )
}

export default Coursecard
