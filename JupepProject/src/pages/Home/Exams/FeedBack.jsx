import React from "react";

const FeedBack = () => {
  return (
    <main className="w-full h-full pt-[120px]   text-secH dark:text-lightGray dark:bg-darkGray font-medium font-roboto capitalize pb-20">
      <div className="text-center">
        <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
          FeedBack from Users
        </h2>
        <div className="w-full h-full mx-auto mt-10 px-4 sm:px-6 lg:px-20 md:flex text-center">
          <div className="w-full md:w-[50%] ">
            <div className="w-full md:w-[80%] text-left ">
              <p className="text-gray-700 dark:text-gray-500">
                {" "}
                "I can't express how grateful I am for this platform! The
                practice exams were spot on and really prepared me for the final
                JUPEB exam. Many of the questions I encountered during the
                practice were similar to those on the actual exam, which boosted
                my confidence and performance. I highly recommend this platform
                to anyone preparing for their JUPEB exams!"
              </p>
              <h2 className="mt-4 ">Samuel</h2>
              <p>OAU</p>
            </div>
          </div>
          <div className="w-full md:w-[50%] mt-16 md:mt-0 ">
            <div className="w-full md:w-[80%] text-left">
              <p className="text-gray-700 dark:text-gray-500">
                "This exam preparation platform is a game-changer! The practice
                questions were incredibly helpful and closely matched the type
                of questions I faced in the final JUPEB exam. Thanks to this
                platform, I felt well-prepared and significantly less stressed.
                It's an invaluable resource for any student aiming to excel in
                their JUPEB exams. Great job!"
              </p>
              <h2 className="mt-4 ">Elizabeth</h2>
              <p>UNILAG</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FeedBack;
