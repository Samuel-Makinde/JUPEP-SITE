import { useEffect, useState } from "react";
import Layout from "../../layout/Layout";
// import products from '../../data/Videos';
import { AiOutlineLike, AiTwotoneLike } from "react-icons/ai";
import { BiDislike, BiSolidDislike } from "react-icons/bi";
import AxiosInterceptor from "../../components/axiosInterceptor";
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";

const VideoPage = () => {
  const [expanded, setExpanded] = useState({});
  const [likeStatus, setLikeStatus] = useState({});
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const authFetch = AxiosInterceptor();
  const getAllSubjectDetails = async () => {
    setLoading(true);
    try {
      const response = await authFetch.get(
        `https://jupeb-site-backend.onrender.com/api/v1/get-all`
      );
      setLoading(false);
      setProducts(response.data.data);
      console.log("this is the response", response.data);
    } catch (error) {
      setLoading(false);
      console.log("this is the error", error);
    }
  };

  useEffect(() => {
    getAllSubjectDetails();
  }, []);

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
    const colors = ["#EFEFEF", "#ECC450"];
    return colors[index % colors.length];
  };

  const setPartBackgroundColor = (index) => {
    const colors = ["#4190EA", "#1E3A8A"];
    return colors[index % colors.length];
  };

  return (
    <Layout>
      <main className="w-full h-full pt-[100px] font-body pb-14 text-[#2F3035] dark:bg-navyBlue dark:text-lightGray">
        <div className="w-full h-full flex flex-col px-4 md:px-6 lg:px-8 xl:px-12">
          <div className="text-center ">
            <h2 className="md:text-5xl dark:text-primary1 text-[24px] font-roboto font-bold">
              Tutorial Videos
            </h2>
            <p className="pt-[15px] md:text-[18px] font-body">
              Watch Videos That explain all topics in 001, 002, 003 & 004 of
              each subject. <br /> Each Video represents an explanation of a
              topic in the syllabus.
            </p>
          </div>
          <div className="w-full h-full ">
            {products.map((subject, index) => (
              <div key={subject._id} className="mt-[30px] px-4">
                <div
                  className="flex  justify-between items-center cursor-pointer"
                  onClick={() => toggleExpanded(subject.name, "subject")}
                  style={{ backgroundColor: setNameBackgroundColor(index) }}
                >
                  <p
                    className={`h-[60px] px-4 text-[18px] dark:text-secH font-bold  pt-[20px] ${
                      expanded[`${subject.name}-subject`]
                        ? "border-b-[3px] border-[#1261B2]"
                        : ""
                    }`}
                  >
                    {subject.name}
                  </p>
                  <div>
                    {expanded[`${subject.name}-subject`] ? (
                      <span className="cursor-pointer pr-4 font-semibold dark:text-sec1">
                        Hide Content
                      </span>
                    ) : (
                      <span className="cursor-pointer pr-4 font-semibold dark:text-darkBlue">
                        Show Content
                      </span>
                    )}
                  </div>
                </div>
                {expanded[`${subject.name}-subject`] && (
                  <div className="w-full ">
                    {subject.parts.map((part) => (
                      <div key={part.partNumber} className="mt-[30px]">
                        <div
                          className={`px-4 text-[10px] sm:text-[14px] md:text-[16px] text-white dark:text-secH flex justify-between items-center font-semibold cursor-pointer rounded-[15px] ${
                            expanded[`${subject.name}-${part.partNumber}`]
                              ? "border-b-[2px] border-[#1261B2]"
                              : ""
                          }`}
                          style={{
                            backgroundColor: setPartBackgroundColor(index),
                          }}
                          onClick={() =>
                            toggleExpanded(subject.name, part.partNumber)
                          }
                        >
                          <p className="h-[40px] pt-[10px]">
                            {part.partNumber}{" "}
                            <span>introduction to biology</span>
                          </p>
                          <div>
                            {expanded[`${subject.name}-${part.partNumber}`] ? (
                              <div className="h-[30px] bg-[#9F7345] rounded-[10px] flex justify-center items-center">
                                <span className="cursor-pointer pr-[7px]  md:pr-4 font-semibold pt-[10px]  p-4  ">
                                  Hide Videos
                                </span>
                              </div>
                            ) : (
                              <div className="h-[30px] bg-[#9F7345] rounded-[10px] flex justify-center items-center">
                                <span className="cursor-pointer pr-[7px]  md:pr-4 font-semibold pt-[10px]  p-4  ">
                                  Show Videos
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                        {expanded[`${subject.name}-${part.partNumber}`] && (
                          <div className="w-full mb-[50px] sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:grid-flow-row-dense bg-white dark:text-secH ">
                            {part.videos.length === 0 ? (
                              <p className="text-[16px] md:text-[24px]">
                                No available videos for now, please check back
                                later.
                              </p>
                            ) : (
                              part.videos.map((video) => (
                                <div
                                  key={video._id}
                                  className="mt-[40px] w-full sm:w-[200px] md:w-[330px] lg:w-[300px] xl:w-[350px]"
                                >
                                  <div>
                                    <video
                                      src={video.link}
                                      className="rounded-[10px]"
                                    />
                                  </div>
                                  <div className="w-full flex justify-between  mt-[10px]">
                                    <p className="text-[16px] font-semibold w-8/12">
                                      {video.title}
                                    </p>
                                    <div className="w-[100px] h-[40px] flex justify-center items-center bg-[#E5E5E5]">
                                      <div
                                        className="w-full flex justify-around"
                                        onClick={() => toggleLike(video._id)}
                                      >
                                        <div className=" w-3/12">
                                          <p>
                                            {isLiked(video._id) ? (
                                              <AiOutlineLike size={28} />
                                            ) : (
                                              <AiTwotoneLike size={28} />
                                            )}
                                          </p>
                                        </div>
                                        <p className="border-x-2 rounded-[40px] border-[#4190EA]"></p>
                                        <div>
                                          <p>
                                            {isDisliked(video._id) ? (
                                              <BiDislike size={28} />
                                            ) : (
                                              <BiSolidDislike size={28} />
                                            )}
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <p className="w-full  mt-[15px] text-[14px]">
                                    {video.description}
                                  </p>
                                </div>
                              ))
                            )}
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
        {loading && <LoadingSpinner />}
      </main>
    </Layout>
  );
};

export default VideoPage;
