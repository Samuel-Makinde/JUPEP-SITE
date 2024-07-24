import React, { useState } from 'react';
import Layout from '../../layout/Layout';
import Card from '../../components/card/card';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ai from "../../assets/Home Landing Image/ai.png"
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import Button from '../../components/button/Button';
import peterAkojede from "../../assets/Home Landing Image/peterAkojede.jpg"
import Courses from '../../components/coursecard/data';
import { GoPersonAdd } from "react-icons/go";
import { CiBookmark } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";
import { TiStar } from "react-icons/ti";
import { GiNetworkBars } from "react-icons/gi";
import { useParams } from 'react-router-dom';

const BookDetails = () => {

  const [value, setValue] = useState('1');
  const { course } = useParams();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Layout>
    <div className='px-[60px] py-[60px] bg-[#754fff] h-[450px]'>
      <div className='mt-[50px]'>
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
      <Card className="pt-[180px]" width="500px" height="60% ">
             
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
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Javasript</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </TabPanel>
                  <TabPanel value="2">Item Two Content</TabPanel>
                  <TabPanel value="3">Item Three Content</TabPanel>
                </TabContext>
      </Card>
            </div>
      {/* card 2 */}
      <div className='pl-[250px] mt-[40px]'>
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
    <p className='text-2xl font-bold'>Peter Akojede</p>
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