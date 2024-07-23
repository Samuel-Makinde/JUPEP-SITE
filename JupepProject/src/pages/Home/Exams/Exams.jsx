import React from "react";
import Hero from "./Hero";
import Layout from "../../../layout/Layout";
import FeaturesSection from "./Feature";
import Benefits from "./Benefits";
import CallToAction from "./CallToAction";
import FeedBack from "./FeedBack";
import ExamFAQPage from "./ExamFaq";

export const Exams = () => {
  return (
    <Layout>
      <div>
        <Hero />
        <FeaturesSection />
        <Benefits />
        <FeedBack />
        <CallToAction />
        <ExamFAQPage />
      </div>
    </Layout>
  );
};
