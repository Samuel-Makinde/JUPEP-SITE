import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import futa from "../../assets/Home Landing Image/new futa.jpg";
import Nfuta from "../../assets/Home Landing Image/large futa.jpg";
import styles from "./ImageSlider.module.css";

const ImageSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };

  return (
    <main className={styles.container}>
      <Slider {...settings}>
        <div className="relative w-full h-full border-none font-euclid">
          <img
            className={`rounded-[30px] md:rounded-none md:w-full   border-none ${styles.imageContainer}`}
            src={futa}
            alt="banner"
          />
          <div className="absolute w-full top-[80px] flex items-center justify-center ">
            <h1 className="text-[16px] leading-[20px] w-5/6 xl:text-[100px] xl:leading-[91px] md:text-[60px] md:leading-[70px]  text-white">
              Find, choose and book your preferable hostel with ease
            </h1>
          </div>
        </div>
        <div className="w-full h-full border-none">
          <img
            className={`rounded-[30px] md:rounded-none md:w-full  border-none ${styles.imageContainer}`}
            src={Nfuta}
            alt="scinece"
          />
        </div>
        <div className="w-full h-full border-none">
          <img
            className={`rounded-[30px] md:rounded-none md:w-full   border-none ${styles.imageContainer}`}
            src={futa}
            alt="artPQ"
          />
        </div>
        <div className="w-full h-full border-none">
          <img
            className={`rounded-[30px] md:rounded-none md:w-full  border-none ${styles.imageContainer}`}
            src={Nfuta}
            alt="management"
          />
        </div>
        <div className="w-full h-full border-none">
          <img
            className={`rounded-[30px] md:rounded-none md:w-full  border-none ${styles.imageContainer}`}
            src={futa}
            alt="unilag"
          />
        </div>
        <div className="w-full h-full border-none">
          <img
            className={`rounded-[30px] md:rounded-none md:w-full  border-none ${styles.imageContainer}`}
            src={Nfuta}
            alt="oau"
          />
        </div>
        <div className="w-full h-full border-none">
          <img
            className={`rounded-[30px] md:rounded-none md:w-full  border-none ${styles.imageContainer}`}
            src={futa}
            alt="unilorin"
          />
        </div>
        <div className="w-full h-full border-none">
          <img
            className={`rounded-[30px] md:rounded-none md:w-full  border-none ${styles.imageContainer}`}
            src={Nfuta}
            alt="futa"
          />
        </div>
      </Slider>
    </main>
  );
};

export default ImageSlider;
