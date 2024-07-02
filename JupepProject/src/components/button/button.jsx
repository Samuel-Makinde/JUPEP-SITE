import React from 'react';

const Button = ({
  text,
  onClick,
  className = '',
  children,
  ...props
}) => {
  return (
    <button
      className={`w-full md:w-[220px] mt-[20px] h-[59px] bg-primary0Blue hover:bg-sec3 flex justify-center items-center text-primary1 font-body text-xl rounded-[45px] ${className}`}
      onClick={onClick}
      {...props}
    >
      {text || children}
    </button>
  );
};

export default Button;
