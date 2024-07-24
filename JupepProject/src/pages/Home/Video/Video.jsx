import React from "react";
import Layout from "../../../layout/Layout";
import VideoHero from "./VideoHero";
import AcademyStats from "./AcademyStats";
import WhyUs from "./WhyUs";
import AllVideo from "./AllVideos";
import VideoTestimonials from "./VideoTestimonial";
import VideoFAQPage from "./VideoFaq";
import Session from "../../../components/Sessions";
import sessionImage from "../../../assets/OneOnOneSession.jpg";

const Video = () => {
  return (
    <Layout>
      <main>
        <VideoHero />
        <AcademyStats />
        <WhyUs />
        <AllVideo />
        <VideoTestimonials />
        <Session session={sessionImage} background={"dark:bg-darkGray"} />
        <VideoFAQPage />
      </main>
    </Layout>
  );
};

export default Video;
