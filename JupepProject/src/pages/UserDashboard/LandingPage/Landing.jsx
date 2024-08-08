import React from "react";
import Hero from "./Hero";
import RecoomendedVideo from "./Video";
import RecoomendedExams from "./Exams";
import UserNavbar from "../../../layout/UserNavbar";

const Landing = () => {
  return (
    <main>
      <UserNavbar />
      <Hero />
      <RecoomendedVideo />
      <RecoomendedExams />
    </main>
  );
};

export default Landing;
