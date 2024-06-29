import React, { useState } from 'react';
import Layout from '../../layout/Layout';
import Card from '../../components/card/card';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';

const BookDetails = () => {

  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Layout>
    <div className='px-[60px] py-[60px] bg-[#754fff]'>
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

    <div className='mt-[100px]'>
      <Card width="500px" height="30%">
       hello world
     
       <div className='mt-[50px]'>
              {/* <Box sx={{ width: '100%', typography: 'body1' }}> */}
                <TabContext value={value}>
                  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="basic tabs example">
                      <Tab label="Item One" value="1" />
                      <Tab label="Item Two" value="2" />
                      <Tab label="Item Three" value="3" />
                    </TabList>
                  </Box>
                  <TabPanel value="1"> <div>
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
    </div></TabPanel>
                  <TabPanel value="2">Item Two Content</TabPanel>
                  <TabPanel value="3">Item Three Content</TabPanel>
                </TabContext>
              {/* </Box> */}
            </div>
      </Card>
      </div>
    </div>

    </Layout>
  )
}

export default BookDetails