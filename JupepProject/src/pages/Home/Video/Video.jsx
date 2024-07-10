import React from "react";
import Layout from "../../../layout/Layout";
import VideoHero from "./VideoHero";
import AcademyStats from "./AcademyStats";
import WhyUs from "./WhyUs";
import AllVideo from "./AllVideos";

const Video = () => {
  return (
    <Layout>
      <main>
        <VideoHero />
        <AcademyStats />
        <WhyUs />
        <AllVideo />
      </main>
    </Layout>
  );
};

export default Video;
