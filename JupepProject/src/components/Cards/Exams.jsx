import React from "react";
import frame from "../../assets/Home Landing Image/Frame 98.png";
import { Link } from "react-router-dom";

const MAX_MESSAGE_LENGTH = 70;

const truncateMessage = (messages) => {
  if (messages.length > MAX_MESSAGE_LENGTH) {
    return messages.slice(0, MAX_MESSAGE_LENGTH) + "...";
  }
  return messages;
};

const ExamsCard = ({ exam }) => (
  <div className="bg-white min-h-[350px] font-roboto  text-primary5  shadow-md rounded-lg p-3 m-2 ">
    <Link to="/instruction">
      <img
        src={exam.image}
        alt={exam.title}
        className="w-full h-32 object-cover rounded-md"
      />
      <h2 className="text-base mb-4 font-bold mt-2 text-secH">{exam.title}</h2>

      <p className="py-[2px]">
        {" "}
        <strong>Questions</strong>: {exam.question}+ questions
      </p>
      <p className="py-[2px]">
        <strong>Rating </strong>: {exam.rating} ⭐ ({exam.reviews} reviews)
      </p>
      <p className="py-2 tooltip cursor-pointer">
        {/* <span className="tooltiptext">{address}</span> */}
        <strong>Summary </strong>: {truncateMessage(exam.description)}
      </p>
      <div className="w-full mt-[10px] flex">
        <img src={frame} alt="frame" className="" />
        <p className="text-xs sm:text-sm my-auto text-primary3 ">
          Taken by {exam.view}+ people
        </p>
      </div>
    </Link>
  </div>
);

export default ExamsCard;
