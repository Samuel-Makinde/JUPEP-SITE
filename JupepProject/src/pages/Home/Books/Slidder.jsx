import React from "react";
// import Books from "../../../components/Cards/BookData";
import BookCard from "../../../components/Cards/Book";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import questions from "../../../data/Books";

const Slidder = () => {
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
    <div className=" pb-32 px-4 pt-32   xl:px-20 font-roboto text-primary2 bg-[#F1F5F9] dark:text-lightGray dark:bg-darkGray font-medium">
      <div className="text-3xl font-bold my-10 ">
        <h3 className="text-2xl font-semibold ">Recommended Jupeb TextBooks</h3>
        <p className="text-base text-secT mb-10">
          Read Jupeb Textbooks that contain all topics in section 001/002/003 &
          004
        </p>
      </div>

      <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {questions &&
          questions.map((book, index) => <BookCard key={index} book={book} />)}
      </div>
    </div>
  );
};

export default Slidder;
