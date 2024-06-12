// import React from "react";
import PropTypes from "prop-types";

const Button = ({ onClick, type, children }) => {
  return (
    <button onClick={onClick} type={type}>
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
