import React from "react";
import Books from "../../../components/Cards/BookData";

const Slidder = () => {
  return (
    <div className=" pb-32 px-4 pt-32   xl:px-20 font-roboto text-primary2 bg-primary4 dark:text-lightGray dark:bg-darkGray font-medium">
      <div className="text-3xl font-bold my-10 md:ml-[80px]">
        <h2 className="">Browse all text book</h2>
        <p className="text-lg mb-10">
          These are the most popular courses among Jupeb Courses learners
          worldwide in year 2024
        </p>

        <h3 className="text-2xl font-semibold mb-4">Recommended for you</h3>
      </div>

      <div className="flex justify-center items-center">
        <Books />
      </div>
    </div>
  );
};

export default Slidder;
