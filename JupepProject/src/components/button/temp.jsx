import React from "react";
import PropTypes from "prop-types";

const Button = ({ onClick, type, children, className }) => {
  return (
    <button
      className={`cursor-pointer mt-[20px] h-[59px] bg-primary0Blue hover:bg-sec3 flex justify-center items-center text-primary1 font-body text-xl rounded-[45px] md:w-[220px] ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Button;
