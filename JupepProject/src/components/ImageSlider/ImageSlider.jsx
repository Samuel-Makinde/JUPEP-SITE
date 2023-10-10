import { useEffect, useState } from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import art480 from "../../assets/Home Landing Image/art480.jpg"
import mana480 from "../../assets/Home Landing Image/mana480.jpg"
import scinece480 from "../../assets/Home Landing Image/scince480.jpg"
import art768 from "../../assets/Home Landing Image/art768.jpg"
import mana768 from "../../assets/Home Landing Image/mana678.jpg"
import scinece768 from "../../assets/Home Landing Image/scince768.jpg"
import art1280 from "../../assets/Home Landing Image/art1280.jpg"
import mana1280 from "../../assets/Home Landing Image/mana1280.jpg"
import scinece1280 from "../../assets/Home Landing Image/scinece1280.jpg"
import styles from "./ImageSlider.module.css"
// import textbook from "../../assets/Home Landing Image/textbook.jpg"




const ImageSlider = () => {
   const [showOnMobile480, setShowOnMobile480] = useState(false);
  const [showOnTab, setShowOnTab] = useState(false);
  const [showOnDeskTop, setShowOnDeskTop] = useState(false);

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

   useEffect(() => {
    const handleResize = () => {
      setShowOnMobile480(window.innerWidth < 501);
      setShowOnTab(window.innerWidth >= 501 && window.innerWidth < 800);
      setShowOnDeskTop(window.innerWidth >= 800);

    };

    // Add a resize event listener to update the variables when the screen size changes
    window.addEventListener("resize", handleResize);

    // Initial calculation of screen size
    handleResize();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main className={styles.container}>
      <Slider {...settings}>
        {/* <div className="  h-full border-none font-euclid">
          {showOnMobile480 && 
          <img
            className={` w-screen h-[375px] border-none `}
            src={textbook}
            alt="banner"
          />
        }

         {showOnTab && 
            <img
            className={` w-screen h-[610px] md:h-[850px] border-none `}
            src={textbook}
            alt="banner"
            />
          }
        </div> */}
        <div className="  h-full border-none font-euclid">
          {showOnMobile480 && 
          <img
            className={` w-screen   border-none `}
            src={art480}
            alt="banner"
          />

        }
            {showOnTab && 
            <img
            className={` w-screen   border-none `}
            src={art768}
            alt="banner"
            />
          }

           {showOnDeskTop && 
            <img
          className={` w-screen  border-none `}
            src={art1280}
            alt="banner"
            />
          }
         
        </div>
        <div className="  border-none">
          {showOnMobile480 && 
          <img
            className={` w-full border-none `}
            src={scinece480}
            alt="banner"
          />
        }
            {showOnTab && 
            <img
            className={` w-screen  border-none `}
            src={scinece768}
            alt="banner"
            />
          }

           {showOnDeskTop && 
            <img
            className={` w-screen  border-none `}
            src={scinece1280}
            alt="banner"
            />
          }
        </div>
        <div className=" w-full h-full border-none">
           {showOnMobile480 && 
          <img
            className={` w-full   border-none `}
            src={mana480}
            alt="banner"
          />
        }
            {showOnTab && 
            <img
            className={`   border-none `}
            src={mana768}
            alt="banner"
            />
          }

           {showOnDeskTop && 
            <img
            className={` w-screen  border-none `}
            src={mana1280}
            alt="banner"
            />
          }
        </div>
      </Slider>
    </main>
  );
};

export default ImageSlider;
