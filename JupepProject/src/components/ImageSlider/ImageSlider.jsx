// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import futa from "../../assets/Home Landing Image/new futa.jpg";
import Nfuta from "../../assets/Home Landing Image/large futa.jpg";
import styles from "./ImageSlider.module.css";
// import Futa768 from '../../assets/Home Landing Image/FUTA 768 w   250 h.jpg'
// import Futa320 from '../../assets/Home Landing Image/FUTA 320 W 250 H.jpg'
import pq from "../../assets/Home Landing Image/p-management.jpg"
import pq420 from "../../assets/Home Landing Image/pq-mana420.jpg"



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
        <div className="  h-full border-none font-euclid">
          <img
            className={`rounded-[30px] md:rounded-none md:w-full   border-none ${styles.imageContainer}`}
            src={pq}
            alt="banner"
          />
         
        </div>
        <div className="  border-none">
          <img
            className={`rounded-[30px] md:rounded-none md:w-full  border-none ${styles.imageContainer}`}
            src={pq420}
            alt="scinece"
          />
        </div>
        <div className=" w-full h-full border-none">
          <img
            className={`rounded-[30px] md:rounded-none md:w-full   border-none ${styles.imageContainer}`}
            src={futa}
            alt="artPQ"
          />
        </div>
        <div className=" w-full h-full border-none">
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
