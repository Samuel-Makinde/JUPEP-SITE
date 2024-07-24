import testimonials from "../../../data/VideoTestimonial";
import TestimonialCard from "../../../components/Cards/VideoTestimonial";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const VideoTestimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    initialSlide: 0,
    autoplaySpeed: 5000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024, // large screen
        settings: {
          slidesToShow: 2,
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
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <section className="py-16  text-secH  dark:text-lightGray dark:bg-darkBlue">
      <div className="container mx-auto px-4 text-secH dark:text-lightGray">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">What our learners are saying</h2>
          <p className="text-lg text-primary2 mt-4">
            12+ million people are already learning on Geeks
          </p>
        </div>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default VideoTestimonials;
