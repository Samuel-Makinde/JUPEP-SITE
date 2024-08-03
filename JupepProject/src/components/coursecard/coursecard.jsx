import React from 'react'
import { IoTimeOutline } from "react-icons/io5";
import { GiNetworkBars } from "react-icons/gi";
import { FaRegBookmark } from "react-icons/fa6";
import { HiStar } from "react-icons/hi";
const Coursecard = ({ img, course, hours, view, subscriber, rating, price, author, authorImg, reviews, page, description, handleClick}) => {
  return (
    <div onClick={handleClick}>
       <div className="border rounded-[10px] w-[290px] ml-[15px] cursor-pointer" onClick={handleClick}>
                <img className="w-full" src={img} alt="courses"/>
                <p className="pl-[10px] pt-[20px] text-2xl font-bold"> {course} </p>
                <div className="flex space-around w-full pl-[10px] pt-[25px]"> 

                  {/* <span className="pt-[3px]"><IoTimeOutline size={20} /> </span> <p className="text-xl pl-[8px]">{hours}</p>   */}

                {/* <span className="pl-[15px]"> <GiNetworkBars size={20}/></span> */}
                <p className='w-full text-xl'>Pages: {page}</p>
                 <p className="text-xl pl-[10px] w-full flex"> Rating: {rating} 
                 <span className='pt-[5px] pl-[5px]'> <HiStar color='#fcd73f' /> </span>
                   </p>
                   
                  </div>
                 <div className='pt-[10px] pl-[10px] flex space-x-[20px] text-xl pr-[2px]'>
                  <p className='text-xl'>Subscriber: {subscriber}</p>
                  <p>Reviews: {reviews}</p>
                 </div>
                 <div className="w-full py-[20px] pl-[10px] text-[18px] pr-[9px]">
                 
                  <p>Summary: {description}</p>
                 </div>
                {/* <p className="py-[30px] pl-[25px]">{price}</p> */}
                <div className="border"></div>
                <div className=" my-[20px] pl-[10px] border-2px-red w-full text-[18px]">  
                  {/* <img className="w-[30px] rounded-[50px]" src={authorImg} alt="author-image"/>  */}
                  
                  <p className=" flex pb-[15px]"> Author: {author}
                    
                  <span className="pt-[6px] pl-[10px]">
                  <FaRegBookmark size={20}  /></span>
                    </p> 
                  
                  <p> View by {view} </p>
                
                  </div>
                 
               </div>
    </div>
  )
}

export default Coursecard
