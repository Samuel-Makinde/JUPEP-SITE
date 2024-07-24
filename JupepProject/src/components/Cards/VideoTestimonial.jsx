const TestimonialCard = ({ testimonial }) => (
  <div className=" mr-5 bg-white text-secH dark:bg-darkGray dark:text-primary1 rounded-lg shadow-md">
    <div className="mb-4 pt-10 text-center ">
      <svg
        className="w-10 h-10  text-gray-300 mx-auto"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm.931-11.445a1 1 0 01-1.372-.153 1 1 0 01.152-1.373A3.985 3.985 0 0110 4c1.07 0 2.045.421 2.75 1.105a1 1 0 01-.153 1.373 1 1 0 01-1.372-.153A1.987 1.987 0 0010 6c-.552 0-1.053.224-1.414.586a1 1 0 01-1.372.153zm5.99 7.444a1 1 0 01-1.373.153 1 1 0 01.153-1.373A3.985 3.985 0 0014 10c-1.07 0-2.045.421-2.75 1.105a1 1 0 01-.153 1.373 1 1 0 01-1.372-.153A1.987 1.987 0 0110 10c-.552 0-1.053.224-1.414.586a1 1 0 01-1.372.153A1 1 0 016.34 8.659a3.985 3.985 0 00-1.105 2.75 1 1 0 01-1.373.153 1 1 0 01.153-1.373A5.985 5.985 0 0110 8c1.645 0 3.16.672 4.253 1.764a1 1 0 01-.153 1.373 1 1 0 01-1.373-.153 3.985 3.985 0 00-2.75-1.105A1 1 0 018.331 10.38a5.985 5.985 0 014.609 4.609 1 1 0 01-1.009 1.293z"
          clipRule="evenodd"
        />
      </svg>
    </div>
    <p className="text-lg pt-6  mb-14 text-center">{testimonial.review}</p>
    <div
      className={`flex flex-col items-center pb-4 justify-center  ${testimonial.bgColor}  text-white`}
    >
      <img
        className="w-16 h-16 rounded-full mb-4 -mt-7"
        src={testimonial.image}
        alt={testimonial.name}
      />
      <h4 className="text-xl font-semibold">{testimonial.name}</h4>
      <p className="text-sm">{testimonial.role}</p>
    </div>
  </div>
);

export default TestimonialCard;
