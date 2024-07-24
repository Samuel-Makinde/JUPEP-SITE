import React from "react";
import frame from "../../assets/Home Landing Image/Frame 98.png";

const MAX_MESSAGE_LENGTH = 70;

const truncateMessage = (messages) => {
  if (messages.length > MAX_MESSAGE_LENGTH) {
    return messages.slice(0, MAX_MESSAGE_LENGTH) + "...";
  }
  return messages;
};

const VideoCard = ({ course }) => (
  <div className="bg-white min-h-[400px] font-roboto  text-primary5  shadow-md rounded-lg p-4 m-2 ">
    <img
      src={course.image}
      alt={course.title}
      className="w-full h-32 object-cover rounded-md"
    />
    <h2 className="text-base min-h-[60px] font-bold mt-2 text-secH">
      {course.title}
    </h2>

    <p className="py-[2px]">Duration: {course.duration}</p>
    <p className="py-[2px]">
      Rating: {course.rating} ⭐ ({course.reviews} reviews)
    </p>
    <p className="py-2 tooltip cursor-pointer">
      {/* <span className="tooltiptext">{address}</span> */}
      Summary: {truncateMessage(course.description)}
    </p>
    <div className="w-full mt-[10px] flex">
      <img src={frame} alt="frame" className="" />
      <p className="text-xs sm:text-sm my-auto text-primary3 ">
        Viewed By {course.view} people
      </p>
    </div>
    {/* <p>Instructor: {course.instructor}</p> */}
  </div>
);

export default VideoCard;
