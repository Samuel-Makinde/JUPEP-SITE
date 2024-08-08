import React from "react";
import { Tooltip } from "flowbite-react";
import { IoMdInformationCircle } from "react-icons/io";

const TooltipIcon = ({ message }) => {
  return (
    <div className="inline-block">
      <Tooltip content="this is new" trigger="hover" animation="duration-500">
        <button className="relative z-10 p-1 bg-blue-500 rounded-full text-white focus:outline-none">
          <IoMdInformationCircle size={22} />
        </button>
      </Tooltip>
    </div>
  );
};

export default TooltipIcon;
