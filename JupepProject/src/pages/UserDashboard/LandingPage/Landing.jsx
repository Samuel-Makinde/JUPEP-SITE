import React from "react";
import Hero from "./Hero";
import Layout from "../../../layout/Layout";
import RecoomendedVideo from "./Video";

const Landing = () => {
  return (
    <Layout>
      <main>
        <Hero />
        <RecoomendedVideo />
      </main>
    </Layout>
  );
};

export default Landing;
