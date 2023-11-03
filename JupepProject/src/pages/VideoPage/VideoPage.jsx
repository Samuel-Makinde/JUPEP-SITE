// import  { useState } from 'react';
// import Layout from '../../layout/Layout';
// import products from '../../data/Videos';
// import {AiOutlineLike, AiTwotoneLike} from "react-icons/ai"
// import {BiDislike, BiSolidDislike} from "react-icons/bi"

// const VideoPage = () => {
//   const [expanded, setExpanded] = useState({});
//    const [likeStatus, setLikeStatus] = useState({});

//  const toggleLike = (videoId) => {
//     setLikeStatus((prevStatus) => ({
//       ...prevStatus,
//       [videoId]: !prevStatus[videoId],
//     }));
//   };

//   const isLiked = (videoId) => !likeStatus[videoId];
//  const isDisLinked = (videoId) => likeStatus[videoId];
  
//   const toggleExpanded = (subjectName, partNumber) => {
//     const key = `${subjectName}-${partNumber}`;
//     setExpanded((prevExpanded) => ({
//       ...prevExpanded,
//       [key]: !prevExpanded[key],
//     }));
//   };


//    const setNameBackgroundColor = (index) => {
//     const colors = ["#EFEFEF", "#ECC450"];
//     return colors[index % colors.length];
//   };

//    const setPartBackgroundColor = (index) => {
//     const colors = ["#1261B2", "#BA112A", "#60B342"];
//     return colors[index % colors.length];
//   };

//   return (
//     <Layout>
//       <main className="w-full h-full pt-[80px] mb-14">
//         <div className="w-full h-full flex flex-col px-4 md:px-6 lg:px-8 xl:px-12">
//           <div className="text-center text-gray-700">
//             <h2 className="md:text-5xl text-[24px] font-bold">Tutorial Videos</h2>
//             <p className="pt-[15px] md:text-[18px]">
//               Watch Videos That explain all topics in 001, 002, 003 & 004 of each subject. <br /> Each Video represents an explanation of topics in the syllabus.
//             </p>
//           </div>
//           <div className="w-full h-full text-black">
//             {products.subjects.map((subject, index) => (
//               <div key={subject.name}
//               className='mt-[30px] px-4'
//               // style={{
                     
//               //       }}
//               >
//                 <p 
//                 className='h-[60px] px-4 text-[18px] font-semibold pt-[20px]'
//                 onClick={() => toggleExpanded(subject.name, 'subject')} style={{ cursor: 'pointer',  backgroundColor: setNameBackgroundColor(index), }}
//                 >
//                   {subject.name }
//                 </p>
//                 {expanded[`${subject.name}-subject`] && (
//                   <div
//                   className='w-full flex'
//                   >
//                     {subject.parts.map((part) => (
//                       <div key={part.partNumber}
                      
//                       >

//                         <p 
//                         className='px-4 text-[16px] font-medium'
//                         onClick={() => toggleExpanded(subject.name, part.partNumber)} style={{ cursor: 'pointer' }}
                     
//                         >
//                           {part.partNumber} <span>introduction to biology</span>
//                         </p>

//                         {expanded[`${subject.name}-${part.partNumber}`] && (
//                           <div className='w-full sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:grid-flow-row-dense bg-white '>
//                             {part.videos.map((video) => (
//                               <div key={video.id} className='mt-[20px] w-full sm:w-[220px]  md:w-[350px] lg:w-[300px] xl:w-[330px] ' >
//                                 <div className=' '>
//                                     <video src={video.link} className='rounded-[10px]' ></video>

//                                 </div>
//                                 <div className='w-full flex justify-between px-4 mt-[10px]'>
//                                 <p>{video.title}</p>
//                                 <div
//                                 className='w-[100px] h-[40px] flex justify-center items-center bg-[#E5E5E5]'
                               
//                                 >
//                                     <div className='w-full flex justify-around'
//                                       onClick={() => toggleLike(video.id)}
//                                     >
//                                         <div
                                         
//                                         >
//                                         <p>
//                                     {isLiked(video.id) ? <AiOutlineLike  size={28}/> : <AiTwotoneLike  size={28}/>}
//                                     </p>
//                                         </div>
//                                     <p className='border-x-2 rounded-[40px] border-[#4190EA]'></p>
//                                         <div
//                                         //  onClick={() => toggleDisLike(video.id)}
//                                         >
//                                     <p>
//                                         {isDisLinked(video.id) ? <BiDislike  size={28}/>   : <BiSolidDislike size={28} /> }
//                                     </p>
//                                         </div>
//                                     </div>
                                    
//                                 </div>

//                                 </div>
//                                 <p>{video.description}</p>

//                                 {/* Render other video details here */}
//                               </div>
//                             ))}
//                           </div>
//                         )}
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </main>
//     </Layout>
//   );
// };

// export default VideoPage;


import { useState } from 'react';
import Layout from '../../layout/Layout';
import products from '../../data/Videos';
import { AiOutlineLike, AiTwotoneLike } from 'react-icons/ai';
import { BiDislike, BiSolidDislike } from 'react-icons/bi';

const VideoPage = () => {
  const [expanded, setExpanded] = useState({});
  const [likeStatus, setLikeStatus] = useState({});

  const toggleLike = (videoId) => {
    setLikeStatus((prevStatus) => ({
      ...prevStatus,
      [videoId]: !prevStatus[videoId],
    }));
  };

  const isLiked = (videoId) => !likeStatus[videoId];
  const isDisliked = (videoId) => likeStatus[videoId];

  const toggleExpanded = (subjectName, partNumber) => {
    const key = `${subjectName}-${partNumber}`;
    setExpanded((prevExpanded) => ({
      ...prevExpanded,
      [key]: !prevExpanded[key],
    }));
  };

  const setNameBackgroundColor = (index) => {
    const colors = ['#EFEFEF', '#ECC450'];
    return colors[index % colors.length];
  };

  const setPartBackgroundColor = (index) => {
    const colors = ['#4190EA', '#153A1E', '#ED9275', '#2C6777'];
    return colors[index % colors.length];
  };

  return (
    <Layout>
      <main className="w-full h-full pt-[80px] mb-14 text-[#2F3035]">
        <div className="w-full h-full flex flex-col px-4 md:px-6 lg:px-8 xl:px-12">
          <div className="text-center ">
            <h2 className="md:text-5xl text-[24px] font-bold">Tutorial Videos</h2>
            <p className="pt-[15px] md:text-[18px]">
              Watch Videos That explain all topics in 001, 002, 003 & 004 of each subject. <br /> Each Video represents an explanation of a topic in the syllabus.
            </p>
          </div>
          <div className="w-full h-full ">
            {products.subjects.map((subject, index) => (
              <div key={subject.name} className='mt-[30px] px-4'>
                <div
                  className="flex  justify-between items-center cursor-pointer"
                  onClick={() => toggleExpanded(subject.name, 'subject')}
                  style={{ backgroundColor: setNameBackgroundColor(index) }}
                >
                  <p className={`h-[60px] px-4 text-[18px]  font-bold  pt-[20px] ${expanded[`${subject.name}-subject`] ? 'border-b-[3px] border-[#1261B2]' : ''}`}>
                    {subject.name} 
                  </p>
                  <div>
                    {expanded[`${subject.name}-subject`] ? (
                      <span className="cursor-pointer pr-4 font-semibold">Hide Content</span>
                    ) : (
                      <span className="cursor-pointer pr-4 font-semibold">Show Content</span>
                    )}
                  </div>
                </div>
                {expanded[`${subject.name}-subject`] && (
                  <div className='w-full '>
                    {subject.parts.map((part) => (
                      <div key={part.partNumber} 
                      className='mt-[30px]'
                      >
                        <div
                        className={`px-4 text-[10px] sm:text-[14px] md:text-[16px] text-white flex justify-between items-center font-semibold cursor-pointer rounded-[15px] ${expanded[`${subject.name}-${part.partNumber}`] ? 'border-b-[2px] border-[#1261B2]' : ''}`}
                          style={{ backgroundColor: setPartBackgroundColor(index) }}
                          onClick={() => toggleExpanded(subject.name, part.partNumber)}
                        >

                        <p className='h-[40px] pt-[10px]'>
                          {part.partNumber} <span>introduction to biology</span>
                        </p>
                         <div>
                    {expanded[`${subject.name}-${part.partNumber}`] ? (
                      <div className='h-[30px] bg-[#FF5200] rounded-[10px] flex justify-center items-center'>
                        <span className="cursor-pointer pr-[7px]  md:pr-4 font-semibold pt-[10px]  p-4  ">Hide Videos</span>

                      </div>
                    ) : (
                     <div className='h-[30px] bg-[#FF5200] rounded-[10px] flex justify-center items-center'>
                        <span className="cursor-pointer pr-[7px]  md:pr-4 font-semibold pt-[10px]  p-4  ">Show Videos</span>

                      </div>
                    )}
                  </div>
                        </div>

                        {expanded[`${subject.name}-${part.partNumber}`] && (
                          <div className='w-full mb-[50px] sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:grid-flow-row-dense bg-white '>
                            {part.videos.map((video) => (
                              <div key={video.id} className='mt-[40px] w-full sm:w-[200px] md:w-[330px] lg:w-[300px] xl:w-[350px]'>
                                <div>
                                  <video src={video.link} className='rounded-[10px]' />
                                </div>
                                <div className='w-full flex justify-between px-4 mt-[10px]'>
                                  <p className='text-[16px] font-semibold'>{video.title}</p>
                                  <div className='w-[100px] h-[40px] flex justify-center items-center bg-[#E5E5E5]'>
                                    <div className='w-full flex justify-around' onClick={() => toggleLike(video.id)}>
                                      <div>
                                        <p>
                                          {isLiked(video.id) ? <AiOutlineLike size={28} /> : <AiTwotoneLike size={28} />}
                                        </p>
                                      </div>
                                      <p className='border-x-2 rounded-[40px] border-[#4190EA]'></p>
                                      <div>
                                        <p>
                                          {isDisliked(video.id) ? <BiDislike size={28} /> : <BiSolidDislike size={28} />}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <p className='w-full px-4 mt-[15px] text-[14px]'>{video.description}</p>
                              </div>
                            ))}
                          </div>

                          


                        )}
                      </div>

                     


                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default VideoPage;

// import { useState } from 'react';
// import Layout from '../../layout/Layout';
// import products from '../../data/Videos';
// import { AiOutlineLike, AiTwotoneLike } from 'react-icons/ai';
// import { BiDislike, BiSolidDislike } from 'react-icons/bi';

// const VideoPage = () => {
//   const [expanded, setExpanded] = useState({});
//   const [likeStatus, setLikeStatus] = useState({});
//   const [activePart, setActivePart] = useState(null);

//   const toggleLike = (videoId) => {
//     setLikeStatus((prevStatus) => ({
//       ...prevStatus,
//       [videoId]: !prevStatus[videoId],
//     }));
//   };

//   const isLiked = (videoId) => !likeStatus[videoId];
//   const isDisliked = (videoId) => likeStatus[videoId];

//   const toggleExpanded = (subjectName, partNumber) => {
//     const key = `${subjectName}-${partNumber}`;
//     setExpanded((prevExpanded) => ({
//       ...prevExpanded,
//       [key]: !prevExpanded[key],
//     }));
//     setActivePart(key);
//   };

//   const setNameBackgroundColor = (index) => {
//     const colors = ['#EFEFEF', '#ECC450'];
//     return colors[index % colors.length];
//   };

//   const setPartBackgroundColor = (index) => {
//     const colors = ['#1261B2', '#BA112A', '#60B342'];
//     return colors[index % colors.length];
//   };

//   return (
//     <Layout>
//       <main className="w-full h-full pt-[80px] mb-14">
//         <div className="w-full h-full flex flex-col px-4 md:px-6 lg:px-8 xl:px-12">
//           <div className="text-center text-gray-700">
//             <h2 className="md:text-5xl text-[24px] font-bold">Tutorial Videos</h2>
//             <p className="pt-[15px] md:text-[18px]">
//               Watch Videos That explain all topics in 001, 002, 003 & 004 of each subject. <br /> Each Video represents an explanation of topics in the syllabus.
//             </p>
//           </div>
//           <div className="w-full h-full text-black">
//             {products.subjects.map((subject, index) => (
//               <div key={subject.name} className='mt-[30px] px-4'>
//                 <div
//                   className="flex justify-between items-center cursor-pointer"
//                   onClick={() => toggleExpanded(subject.name, 'subject')}
//                   style={{ backgroundColor: setNameBackgroundColor(index) }}
//                 >
//                   <p className={`h-[60px] px-4 text-[18px] font-semibold pt-[20px] ${expanded[`${subject.name}-subject`] ? 'border-b-[3px] border-[#1261B2]' : ''}`}>
//                     {subject.name}
//                   </p>
//                   <div>
//                     {expanded[`${subject.name}-subject`] ? (
//                       <span className="cursor-pointer pr-4 font-semibold">Hide Content</span>
//                     ) : (
//                       <span className="cursor-pointer pr-4 font-semibold">Show Content</span>
//                     )}
//                   </div>
//                 </div>
//                 {expanded[`${subject.name}-subject`] && (
//                   <div className='w-full '>
//                     {subject.parts.map((part) => (
//                       <div key={part.partNumber} className={`flex md:flex md:flex-wrap ${activePart !== `${subject.name}-${part.partNumber}` ? 'block' : 'hidden'}`}>
//                         <p
//                           className={`px-4 text-[16px] font-medium cursor-pointer ${activePart === `${subject.name}-${part.partNumber}` ? 'border-b-[2px] border-[#1261B2]' : ''}`}
//                           onClick={() => toggleExpanded(subject.name, part.partNumber)}
//                         >
//                           {part.partNumber} <span>introduction to biology</span>
//                         </p>
//                         {expanded[`${subject.name}-${part.partNumber}`] && (
//                           <div className='w-full sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:grid-flow-row-dense bg-white'>
//                             {part.videos.map((video) => (
//                               <div key={video.id} className={`mt-[20px] w-full sm:w-[220px] md:w-[350px] lg:w-[300px] xl:w-[330px] `}>
//                                 <div>
//                                   <video src={video.link} className='rounded-[10px]' />
//                                 </div>
//                                 <div className='w-full flex justify-between px-4 mt-[10px]'>
//                                   <p>{video.title}</p>
//                                   <div className='w-[100px] h-[40px] flex justify-center items-center bg-[#E5E5E5]'>
//                                     <div className='w-full flex justify-around' onClick={() => toggleLike(video.id)}>
//                                       <div>
//                                         <p>
//                                           {isLiked(video.id) ? <AiOutlineLike size={28} /> : <AiTwotoneLike size={28} />}
//                                         </p>
//                                       </div>
//                                       <p className='border-x-2 rounded-[40px] border-[#4190EA]'></p>
//                                       <div>
//                                         <p>
//                                           {isDisliked(video.id) ? <BiDislike size={28} /> : <BiSolidDislike size={28} />}
//                                         </p>
//                                       </div>
//                                     </div>
//                                   </div>
//                                 </div>
//                                 <p>{video.description}</p>
//                               </div>
//                             ))}
//                           </div>
//                         )}
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </main>
//     </Layout>
//   );
// };

// export default VideoPage;

