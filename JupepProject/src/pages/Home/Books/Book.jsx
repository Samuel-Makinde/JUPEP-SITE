import React from "react";
import HeroSection from "./HeroSection";
import Layout from "../../../layout/Layout";
import ImageGalary from "./ImageGalary";
import FeatureSection from "./FeatureSection";
import BookFAQPage from "./BookFAQ.JSX";
// import Session from "./Session";
import Session from "../../../components/Sessions";
import sessionImage from "../../../assets/OneOnOneSession.jpg";

const Book = () => {
  return (
    <Layout>
      <main className="">
        <HeroSection />
        <ImageGalary />
        <FeatureSection />
        <Session session={sessionImage} background={"dark:bg-darkGray"} />
        <BookFAQPage />
      </main>
    </Layout>
  );
};

export default Book;
