import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import Notification from "../data/Notification";
import { BsFillSendFill } from "react-icons/bs";

const UserNotificationModal = ({
  openNotification,
  setOpenNft,
  blur,
  setBlur,
}) => {
  const handleClick = () => {
    setBlur(!blur);
    setOpenNft(!openNotification);
  };

  const setStatusBackgroundColor = (status) => {
    if (status === "Annoucement") {
      return "#FFD700"; // Default color
    } else if (status === "Exam practice") {
      return "#BA112A"; // Red color for failed,
    } else {
      return "#60B342"; // Green color for success
    }
  };

  return (
    <main
      className={`w-full transform  ease-in-out duration-500 delay-150 overflow-y-scroll scroll-smooth ${
        openNotification ? "transform  ease-in-out duration-500 delay-150 " : ""
      } h-screen font-roboto `}
    >
      <div className="h-14  bg-gradient-to-r flex justify-center items-center from-indigo-700 to-indigo-400 px-4 text-primary1 text-center">
        <h1>Participate in Ongoing Event on EaseRead</h1>
        <div onClick={handleClick}>
          <FaTimes
            size={30}
            className="text-primary1 ml-5 cursor-pointer dark:text-lightGray w-[18px]   transform ease-in-out delay-300 duration-500  hover:scale-110"
          />
        </div>
      </div>
      <div className="px-2 pt-2 bg-blue-100">
        {Notification && Notification.length > 0
          ? Notification.map((details) => (
              <div
                key={details.id}
                className="bg-primary1 rounded-b-md mt-5 px-3 py-4"
              >
                <div className="flex">
                  <p
                    className="p-1 text-primary1  text-[11px] uppercase rounded-md"
                    style={{
                      backgroundColor: setStatusBackgroundColor(details.type),
                    }}
                  >
                    {details.type}
                  </p>
                  <p className="ml-7 mt-1 text-gray-400 text-[13px]">
                    {" "}
                    {details.date_time}
                  </p>
                </div>
                <h1 className="text-lg  mt-5 text-primary2">
                  {details.header}
                </h1>
                <p className="text-base  mt-5 text-primary2">
                  {details.message}
                </p>
                <div className="w-full mt-7">
                  {details.type === "New Feature" ? (
                    <div className="relative">
                      <textarea
                        name="reply"
                        id="reply"
                        placeholder="Send us your feedback"
                        className="resize-none overflow-ellipsis  py-2 pl-2 pr-10 w-full border-[2px] border-gray-500 rounded-md"
                      ></textarea>
                      <BsFillSendFill
                        size={25}
                        className="absolute top-[20%] right-[8%] cursor-pointer"
                      />
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            ))
          : "You don't have any notification"}
      </div>
    </main>
  );
};

export default UserNotificationModal;
