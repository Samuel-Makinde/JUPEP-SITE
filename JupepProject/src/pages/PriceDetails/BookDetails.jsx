import React, { useState } from 'react';
import Layout from '../../layout/Layout';
import Card from '../../components/card/card';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ai from "../../assets/Home Landing Image/ai.png"
// import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import peterAkojede from "../../assets/Home Landing Image/peterAkojede.jpg"
import Courses from '../../components/coursecard/data';
import { GoPersonAdd } from "react-icons/go";
import { CiBookmark } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";
import { TiStar } from "react-icons/ti";
import { GiNetworkBars } from "react-icons/gi";
import questions from '../../data/FAQuestions';
import reviews from '../../data/Review';
import { IoSearch } from "react-icons/io5";
import Button from "../../components/button/temp"
import Descriptions from '../../data/description';
// import phyImage from "../../assets/syllabus/phyImage.jpg"
import { useParams, useLocation } from 'react-router-dom';

const BookDetails = () => {
  const location = useLocation();
  const { courseDetails} = location.state
  const { course } = useParams();

  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Layout>
    <div className='px-[60px] py-[60px] bg-[#754fff] h-[450px]'>
      <div className='mt-[50px] ml-[50px]'>
      <h2 className='text-5xl text-[#ffffff] font-bold'>{course}</h2>
      <div className='flex space-x-[20px] text-[#ffffff] pt-[15px]'>
       <div className='flex'><CiBookmark color="#b199ff" className='mt-[3px]' /><p><span className='pl-[5px]'>Bookmark</span></p></div>
     
      <div className='flex'><GoPersonAdd color="#b199ff" className='mt-[3px]' /><p><span className='pl-[5px]'>3 Enrolled</span></p></div>
      {/* <p>30 hours</p> */}
      <div className='flex'><IoTimeOutline color="#b199ff" className='mt-[3px]' /><p><span className='pl-[5px]'>30 hours</span></p></div>
      {/* <p>(140)</p> */}
      <div className='flex'>{[...Array(5)].map ((_, index) => (
        <TiStar color="#f59f0a" key={index} className='mt-[3px]'/>
      ))}<p><span className='pl-[5px]'>140</span></p></div>
      {/* <p>Beginner</p> */}
      <div className='flex'><GiNetworkBars color="#b199ff" className='mt-[3px]' /><p><span className='pl-[5px]'>Beginner</span></p></div>
      </div>
      </div>
   
     <div className=' flex pl-[50px]'>
       <div className='mt-[190px]'>
      <Card className="pt-[180px]" width="690px" height="auto">
             
                <TabContext value={value}>
                  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="basic tabs example">
                      <Tab label="Contents" value="1" />
                      <Tab label="Description" value="2" />
                      <Tab label="Reviews" value="3" />
                      <Tab label="FAQ" value="4" />
                    </TabList>
                  </Box>
                  <TabPanel value="1">
                    {/* for content */}
                    <h2> Course Content!</h2>
             
             <img className="h-[300px] my-[30px]" src={courseDetails.img} alt='subjectImage'/>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut natus vitae dolorem quidem, quibusdam magni illum. Dolor vero modi laudantium ut ratione repellendus dicta nesciunt excepturi illum totam velit officiis molestiae veritatis exercitationem ab assumenda cupiditate aperiam mollitia hic cum, neque, cumque soluta amet? Aspernatur itaque eum nobis blanditiis officiis!</p>
      
    </TabPanel>
                  <TabPanel value="2">
                 {
                  Descriptions.map((description, index) => (
                    <div key={index}>
                      <h2 className='text-2xl '> {description.Title}</h2>
                      <p className="my-[30px] text-[#6d7399]"> {description.courseContent1}</p>
                      <p className="my-[30px] text-[#6d7399]"> {description.courseContent2}</p>

                      <div>
                        <h3 className='text-xl '>{description.contentLearningHeader}</h3>
                        
                        <div className='flex'>
                          <div className='flex flex-col space-y-3 mt-[10px] text-[#6d7399]'>
                      <p className='flex gap-[5px]'><span className='pt-[3px]'>{description.icon}</span>{description.contentLearning1}</p>
                      <p className='flex gap-[5px]'><span className='pt-[3px]'>{description.icon}</span>{description.contentLearning2}</p>
                      <p className='flex gap-[5px]'><span className='pt-[3px]'>{description.icon}</span>{description.contentLearning3}</p>

                          </div>

                          <div className='flex flex-col space-y-2 mt-[10px] text-[#6d7399]'>
                          <p className='flex gap-[5px]'><span className='pt-[3px]'>{description.icon}</span>{description.contentLearning4}</p>
                          <p className='flex gap-[5px]'><span className='pt-[3px]'>{description.icon}</span>{description.contentLearning5}</p>
                          <p className='flex gap-[5px]'><span className='pt-[3px]'>{description.icon}</span>{description.contentLearning6}</p>
                          </div>
                        </div>
                      </div>

                      <div className='space-y-5 mt-[20px] text-[#6d7399]'>
                        <p>{description.footer1}</p>
                        <p>{description.footer2}</p>
                      </div>

                    </div>
                  ))
                 }
                  </TabPanel>
                  {/* 3 */}
                  <TabPanel value="3">

                    <div className='flex justify-between'>
                      <div>
                    <p  className='text-2xl font-bold'>Reviews</p>
                      </div>
                      {/* header */}
                    <div className="relative flex items-center">
            <IoSearch className="absolute left-3 text-gray-400" />
            <input
                type="text"
                placeholder="Search Review"
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
                    </div>
                    <div>
                       {
                        reviews.map((review, index) => (
                          <div key={index} className='flex space-y-[20px] border-b border-b-[#637391]-500'>
                            <div >
                        <img  className="h-[45px] w-[120px] rounded-full border mt-[20px]" src={review.img}/>
                            </div>
                            <div className='flex flex-col ml-[20px] pt-[5px]'>
                              <div className='flex space-x-[10px]'>
                              <h2 className='text-xl font-bold'>{review.name}</h2>
                              <p className='text-[#637391] pt-[3px]'>{review.days}</p>
                              </div>
                             <div className='flex'>
                             {[...Array(5)].map ((_, index) => (
 <review.reviewStar key={index} className="text-yellow-500" />
                              ))}
                             </div>
                              
                              <p className='pt-[5px] text-[#637391]'> {review.text}</p>
                              <div className='flex pt-[12px] space-x-[10px] pb-[20px]'>
                                <p >{review.feedback}</p>
                                <div></div>
                               <button className='cursor-pointer bg-[#754fff] text-[#ffffff] w-[40px] rounded'>Yes</button>
                               <button className='border w-[40px] rounded'>NO</button>
                              </div>

                            </div>
                          </div>
                        ))
                       }
                    </div>
                  </TabPanel>
                  {/* 4 */}
                  <TabPanel value="4">
                   <p className='font-bold text-2xl'> Course - Frequently Asked Questions 
                   </p>
                   {
                    questions.map((question, index) => (
                      <div key={index}>
                        <h2 className='mt-[30px] font-bold text-[17px] text-[#1e293b]'>{question.title}</h2>
                        <h2 className='mt-[8px] text-[15px] text-[#6f7e9e]'>{question.info}</h2>
                      </div>
                    ))
                   }
                  </TabPanel>
                </TabContext>
      </Card>
            </div>
      {/* card 2 */}
      <div className='pl-[60px] mt-[40px]'>
        <Card width="400px" height="600px">
           <img src={ai} alt='ai'/>
           <div className='pl-[20px]'>
            <div className="flex">
              <h2 className="text-2xl font-bold">₦2000</h2> 
              <p className="line-through pt-[10px] pl-[15px] text-[#65758c]">₦2000</p></div>
            <Button className='md:w-[350px]'>Add to cart</Button>
            <Button className='md:w-[350px] '>Purchase Course</Button>
           </div>
        </Card>
      </div>
      </div>
      </div>

    {/* </div> */}
 
<div className='pt-[400px] absolute right-[6.5%]'>
  <Card width='400px' height='250px' className="relative flex">
    <p className="border-b-2 border-gray-300 py-4 w-full right-[0px] pl-[20px] absolute text-xl font-bold">What&apos;s included</p>
    <p className="border-b-2 border-gray-300 py-4 w-full right-[0px] pl-[20px] absolute mt-[60px] text-xl text-[#65758c]">Lifetime Access</p>
    <p className="border-b-2 border-gray-300 py-4 w-full right-[0px] pl-[20px] absolute mt-[120px] text-xl text-[#65758c]">Certificate</p>
    <p className=" py-4 w-full right-[0px] pl-[20px] absolute mt-[180px] text-xl text-[#65758c]">Discussion Forums</p>
  </Card>
 </div>

 <div className='pt-[700px] absolute right-[6.5%]'>
  <Card width='400px' height='280px' className="relative flex">
    <div className='flex gap-[20px]'>
   <img className="h-[120px] w-[120px] rounded-full border" src={peterAkojede} alt="course-image"/>
   <div className='pt-[30px] flex flex-col gap-[20px]'>
    <p className='text-2xl font-bold'>Akojede</p>
    <p className='text-xl text-[#65758c]'><span className='text-[#f5a549] pr-[10px]'>4.5</span> Instructor Rating</p>
   </div>
   </div>

   <div className='flex mt-[30px] justify-around border-t-2 border-b-2'>
    <div className='border-r-2 px-[30px] py-[15px]'>
      <p className='text-xl font-bold'>68</p>
      <p className='text-[#64748f]'>Students</p>
    </div>
    <div className='border-r-2 px-[30px] py-[15px]'>
      <p className='text-xl font-bold'>25</p>
      <p className='text-[#64748f]'>Courses</p>
    </div>
    <div className="px-[30px] py-[15px]">
      <p className='text-xl font-bold'>12,230</p>
      <p className='text-[#64748f]'>Reviews</p>
    </div>
   </div>
    </Card>
 </div>

 <div className="bg-[#f2f6fa] h-[1850px] flex justify-center items-center"> 
 <div className='pt-[1000px] '>
  <p className='text-3xl ml-[20px] mb-[25px] font-[bold]'>Related Courses</p>
               <Courses/>
               </div>
</div>
    </Layout>
  )
}

export default BookDetails