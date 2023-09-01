import React from "react";
// import img from "../Pages/img.png";
import syllabus from "./data";

const sub = () => {
  return (
    <div className="w-full bg-[#fff3d8]">
      {/* front page */}

      <div className="text-center pt-[50px]">
        <h2 className="md:text-5xl text-2xl font-bold">
          Browse Through Jubep Syllabus
        </h2>
        <p className="pt-[20px] text-2xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing.
        </p>
      </div>

      <section className="bg-[#fff3d8] pt-[80px]">
        {syllabus.map((item) => (
          <div
            key={item.id}
            className="w-full  bg-[#fff3d8]"
          >
              <h2 className="text-4xl font-bold text-center">{item.title}</h2>
            <div className="md:pt-[20px]  text-center md:flex md:flex-row md:justify-center md:space-x-[120px] md:pr-[50px]">
              <div className="md:w-[900px] lg:w-[800px]">
                <p className="pt-[20px] md:text-2xl text-xl md:pl-20 text-center">
                  {item.description}
                </p>
                <p className="underline mt-[30px] text-xl md:pb-0  pl-[10px] cursor-pointer">
                  {item.download}
                </p>
              </div>
              {/* img */}
              <div className="sm:flex items-center justify-center sm:py-[40px]">
                <img
                  className="h-[230px] lg:w-[220px] md:w-[400px]"
                  src={item.img}
                  alt={item.picture}
                />
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default sub;
