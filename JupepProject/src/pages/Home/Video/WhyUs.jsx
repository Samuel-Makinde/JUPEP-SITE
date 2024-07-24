import React from "react";
import { MdOutlinePersonalVideo } from "react-icons/md";
import users from "../../../assets/Admin/user_group.png";
import { BsPersonVideo3 } from "react-icons/bs";
import { GiTeacher } from "react-icons/gi";

const WhyUs = () => {
  return (
    <section className="text-center  pb-32 px-4 pt-32   xl:px-20 font-roboto text-primary2 dark:text-lightGray dark:bg-darkBlue font-medium">
      <h2 className="text-indigo-600 dark:text-lightGray uppercase tracking-wide mb-4">
        Why Learn with EaseReads
      </h2>
      <h1 className="text-4xl font-bold mb-6 dark:text-lightGray text-secH">
        Watch Jupep Vidoes On All Topics
      </h1>
      <p className="md:px-24 mb-12 dark:text-primary2">
        Watch video on any topic of your choice to get better understanding of
        the topic from top rated <strong>JUPEB INSTRUCTORS</strong> for more
        clarity and understanding
      </p>
      <div className="w-full grid  md:grid-cols-4 gap-8  ">
        <div className="w-full flex flex-col items-center">
          <div className="text-indigo-600 h-12 mx-auto mb-4">
            <MdOutlinePersonalVideo size={40} />
          </div>
          <h3 className="text-xl font-semibold mb-2">Watch On the Go</h3>
          <p className="text-gray-500">
            Watch Jupeb class vidoe any where you are
          </p>
        </div>
        <div className="w-full flex flex-col items-center">
          <div className="text-indigo-600  h-12  mb-4">
            <GiTeacher size={40} />
          </div>
          <h3 className="text-xl font-semibold mb-2">learn from experts</h3>
          <p className="text-gray-500">
            Learn from tutors with years of experince in JUPEP topics
          </p>
        </div>
        <div className="w-full flex flex-col items-center">
          <div className="text-indigo-600 h-12 mb-4">
            <BsPersonVideo3 size={40} />
          </div>
          <h3 className="text-xl font-semibold mb-2">Personal Goal</h3>
          <p className="text-gray-500">
            watch videos on topics you don&apos;t understand for more insight.
          </p>
        </div>
        <div className="w-full flex flex-col items-center">
          <div className="text-indigo-600 h-12 mb-4">
            <img src={users} alt="person" className="bg-[#4F46E5] rounded-md" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Interaction</h3>
          <p className="text-gray-500">
            Interact with fellow like-minded students
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
