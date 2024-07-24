import { useState } from "react";
import { Link } from "react-router-dom";
// import ModalVideo from "react-modal-video";
import { List } from "flowbite-react";

// import media files
import BGThumb from "../../../assets/Video/bg-thumb.svg";
import GirlImage from "../../../assets/Video/girl-image.png";
import Frame1 from "../../../assets/Video/frame-1.svg";
import Frame2 from "../../../assets/Video/frame-2.svg";
import Target from "../../../assets/Video/target.svg";
import Sound from "../../../assets/Video/sound.svg";
import Trophy from "../../../assets/Video/trophy.svg";
import PlayBtn from "../../../assets/Video/play-btn.svg";
import { HiCheckCircle } from "react-icons/hi";

const VideoHero = () => {
  const [isOpen, setOpen] = useState(false);
  const [YouTubeURL] = useState("hns6IABNVn4");

  return (
    <section className="w-full h-full pt-[120px] px-4   xl:px-20 text-secH dark:text-lightGray dark:bg-darkBlue font-medium capitalize pb-32">
      <div className="w-full mx-auto">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
            <div>
              <List>
                <List.Item icon={HiCheckCircle}>
                  Most trusted JUPEB education platform
                </List.Item>
              </List>
              <h1 className="text-3xl lg:text-5xl font-bold mb-3 mt-8">
                Watch Video On Each Jupep Syllabus Topic
              </h1>
              <p className="lg:pr-10 mb-5 font-roboto text-primary2">
                Start, continue, or forward your jupeb reading journey by
                watching explanatory video on each jupeb syllabus topic to get
                better understanding taught by expert with years of experince in
                teaching jupeb students
              </p>
              <Link to="/sign-up">
                <button className="bg-sec2   text-base text-primary1 bg-opacity-80 hover:bg-opacity-100 p-4 rounded-md mb-2 mb-md-0 font-bold">
                  Get started for free
                </button>
              </Link>
              {/* <button
                onClick={() => setOpen(true)}
                className="popup-youtube text-lg text-inherit ml-3 inline-flex items-center"
              >
                <img src={PlayBtn} alt="Play button" className="mr-2" />
                Watch Demo
              </button> */}
              {/* <ModalVideo
                channel="youtube"
                autoplay
                isOpen={isOpen}
                videoId={YouTubeURL}
                onClose={() => setOpen(false)}
              /> */}
            </div>
          </div>
          <div className="w-full lg:w-2/5 flex justify-center  lg:justify-end">
            <div className="relative">
              <img src={BGThumb} alt="Background thumbnail" />
              <img
                src={GirlImage}
                alt="Hero"
                className="absolute right-0 bottom-0"
              />
              <img
                src={Frame1}
                alt="instructor"
                className="absolute top-0 right-0 -mr-10 md:-mr-20"
              />
              <img
                src={Frame2}
                alt="chart"
                className="absolute bottom-0 left-0 -ml-24 -mb-28"
              />
              <img
                src={Target}
                alt="target"
                className="absolute buttom-0 right-0 -mb-40 -ml-16 lg:-ml-4 "
              />
              <img
                src={Sound}
                alt="sound"
                className="absolute top-0 left-0 mt-72 -ml-24"
              />
              <img
                src={Trophy}
                alt="trophy"
                className="absolute top-0 left-0 -ml-20 lg:-ml-32"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoHero;
