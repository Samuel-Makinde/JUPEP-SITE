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

const BookDetails = () => {

  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Layout>
    <div className='px-[60px] py-[60px] bg-[#754fff] h-[450px]'>
      <div className='mt-[50px]'>
      <h2 className='text-5xl text-[#ffffff]'>Javascript Beginner</h2>
      <div className='flex space-x-[60px] text-[#ffffff] pt-[15px]'>
      <p>Bookmark</p>
      <p>3 Enrolled</p>
      <p>30 hours</p>
      <p>(140)</p>
      <p>Beginner</p>
      </div>
      </div>
   
    <div className=' flex pl-[140px]'>
       <div className='mt-[190px]'>
      <Card className="pt-[180px]" width="900px" height="50% ">
             
                <TabContext value={value}>
                  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="basic tabs example">
                      <Tab label="Item One" value="1" />
                      <Tab label="Item Two" value="2" />
                      <Tab label="Item Three" value="3" />
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
      <div className='pl-[250px]'>
        <Card width="500px" height="600px">
           <img src={ai} alt='ai'/>
           <div className='pl-[20px]'>
            <div className="flex">
              <h2 className="text-4xl font-bold">₦2000</h2> 
              <p className="line-through pt-[10px] pl-[15px] text-[#65758c]">₦2000</p></div>
            <Button className='md:w-[450px]'>Add to cart</Button>
            <Button className='md:w-[450px] '>Purchase Course</Button>
           </div>
        </Card>
      </div>
      </div>
      </div>

    {/* </div> */}
 
<div className='pt-[400px] absolute right-[9%]'>
  <Card width='490px' height='250px' className="relative flex">
    <p className="border-b-2 border-gray-300 py-4 w-full right-[0px] pl-[20px] absolute text-3xl font-bold">What&apos; included</p>
    <p className="border-b-2 border-gray-300 py-4 w-full right-[0px] pl-[20px] absolute mt-[60px] text-2xl text-[#65758c]">Lifetime Access</p>
    <p className="border-b-2 border-gray-300 py-4 w-full right-[0px] pl-[20px] absolute mt-[120px] text-2xl text-[#65758c]">Certificate</p>
    <p className=" py-4 w-full right-[0px] pl-[20px] absolute mt-[180px] text-2xl text-[#65758c]">Discussion Forums</p>
  </Card>
 </div>

 <div className='pt-[700px] absolute right-[9%]'>
  <Card width='490px' height='250px' className="relative flex">
    <div className='flex gap-[20px]'>
   <img className="h-[120px] w-[120px] rounded-full border" src={peterAkojede} alt="course-image"/>
   <div className='pt-[30px] flex flex-col gap-[20px]'>
    <p className='text-2xl font-bold'>Peter Akojede</p>
    <p className='text-xl text-[#65758c]'><span className='text-[#f5a549] pr-[10px]'>4.5</span> Instructore Rating</p>
   </div>
   </div>
    </Card>
 </div>

 <div className="bg-[#f2f6fa] h-[1000px]">
  
  
 
</div>
    </Layout>
  )
}

export default BookDetails