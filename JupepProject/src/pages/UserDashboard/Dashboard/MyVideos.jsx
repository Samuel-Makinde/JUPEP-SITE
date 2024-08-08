import React from "react";
import { SmallBox2 } from "../../../components/Cards/Box";
import bookDetails from "../../../data/MyBookLearning";
import { Link } from "react-router-dom";
import MyBookCard from "../../../components/Cards/Leaning";

const MyVideos = () => {
  return (
    <main className="lg:pl-[26%] 2xl:pl-[33%] w-full min-h-screen bg-primary1 dark:bg-navyBlue dark:text-primary1  h-full pt-14 px-6 2xl:px-12 pb-8 font-sans">
      <h1>My Jupeb Videos</h1>
      <div className="w-full dark:border-b-primary1 border-b-secH border-[2px]"></div>

      <div className="lg:flex justify-between mt-5">
        <SmallBox2 title="Total Purchase" number="4" />
        <SmallBox2 title="Total Videos" number="4" />
        <SmallBox2 title="Ongoing" number="4" />
      </div>
      <div className="w-full flex mt-10 text-primary1">
        <button className="p-4 bg-primary0Blue rounded-md">
          Browse TextBooks
        </button>
        <Link to="/video-page" smooth="true" duration={500}>
          <button className="p-4 bg-sec1 ml-5 rounded-md">
            Tutorial Videos
          </button>
        </Link>

        <Link to="/instruction" smooth="true" duration={500}>
          <button className="p-4 bg-sec7 ml-5 rounded-md">
            Practice Exams
          </button>
        </Link>
      </div>

      {/* my learning */}
      <h1 className="mt-16">My Videos</h1>
      <div className="w-full dark:border-b-primary1 border-b-secH border-[2px]"></div>
      <div className=" lg:flex justify-between mt-7">
        {bookDetails && bookDetails.length > 0 ? (
          bookDetails.map((detail) => (
            <MyBookCard key={detail.id} book={detail} />
          ))
        ) : (
          <p>You have not purchase any video to watch</p>
        )}
      </div>
    </main>
  );
};

export default MyVideos;
