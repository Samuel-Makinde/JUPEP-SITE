import React, { useState } from "react";
import VideoCard from "../../../components/Cards/VideoCard";
import VideoData from "../../../data/Video";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const RecoomendedVideo = () => {
  const [selectedSubject, setSelectedSubject] = useState("Physics");

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    initialSlide: 0,
    autoplaySpeed: 5000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024, // large screen
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768, // medium screen
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480, // small screen
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className=" pb-32 px-4 pt-32   xl:px-20 font-roboto text-primary2 bg-primary4 dark:text-lightGray dark:bg-darkBlue font-medium">
      <h1 className="text-3xl font-bold mb-4 text-secH dark:text-lightGray">
        Recommended Videos
      </h1>
      <p className="text-primary2">
        Watch explanatpry videos on all jupeb topics to get vivid understanding
        on any topic of your choice
      </p>
      <div className="w-full  flex  ">
        {Object.keys(VideoData).map((subject) => (
          <button
            key={subject}
            onClick={() => setSelectedSubject(subject)}
            className={`p-2 m-2 ${
              selectedSubject === subject
                ? "border-b-2 border-primary0Blue  text-primary0Blue"
                : "text-secH dark:text-gray-500 hover:border-b-2 hover:border-primary0Blue"
            }`}
          >
            {subject}
          </button>
        ))}
      </div>
      <Slider {...settings}>
        {VideoData[selectedSubject].map((course, index) => (
          <VideoCard key={`${course.title}-${index}`} course={course} />
        ))}
      </Slider>
      <button className=" px-4 bg-primary0Blue rounded-2xl mt-10 text-white h-16">
        View All Subject Videos
      </button>
    </div>
  );
};

export default RecoomendedVideo;
