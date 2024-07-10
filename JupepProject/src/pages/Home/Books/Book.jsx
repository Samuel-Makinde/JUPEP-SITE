import React from "react";
import HeroSection from "./HeroSection";
import Layout from "../../../layout/Layout";
import ImageGalary from "./ImageGalary";
import FeatureSection from "./FeatureSection";
import BookFAQPage from "./BookFAQ.JSX";
import Session from "./Session";

const Book = () => {
  return (
    <Layout>
      <main className="">
        <HeroSection />
        <ImageGalary />
        <FeatureSection />
        <Session />
        <BookFAQPage />
      </main>
    </Layout>
  );
};

export default Book;
