// import React from "react";
import PropTypes from "prop-types";

const Button = ({ onClick, type, children, className }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`bg-primary0Blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-[1.5rem] sm:w-[20rem] md:w-[12rem] h-[3.8rem] ${className}`}
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
