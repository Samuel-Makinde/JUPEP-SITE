import ExamsCard from "../../../components/Cards/Exams";
import examdDetails from "../../../data/Exam";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const RecoomendedExams = () => {
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
    <div className=" pb-32 px-4 pt-4   xl:px-20 font-roboto text-primary2 bg-primary4 dark:text-lightGray dark:bg-darkBlue font-medium">
      <h1 className="md:text-3xl text-xl font-bold mb-4 text-secH dark:text-lightGray">
        Exams Details
      </h1>
      <p className="text-primary2 mb-4">
        Practice any Subject Exams of your choice
      </p>
      <Slider {...settings}>
        {examdDetails.map((exam, index) => (
          <ExamsCard key={`${exam.title}-${index}`} exam={exam} />
        ))}
      </Slider>
      <Link to="/instruction">
        <button className=" px-4 bg-sec2 rounded-2xl mt-10 text-white h-14">
          Start Practing
        </button>
      </Link>
    </div>
  );
};

export default RecoomendedExams;
