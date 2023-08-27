import React from "react";
import img from "../Pages/img.png";
import syllabus from "./data";

const sub = () => {
  return (
    <div className="w-full md:h-[550px] bg-[#fff3d8]">
      {/* front page */}

      <div className="text-center pt-[50px]">
        <h2 className="md:text-5xl text-2xl font-bold">
          Browse Through Jubep Syllabus
        </h2>
        <p className="pt-[20px] text-2xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing.
        </p>
      </div>
      <div className="w-full md:flex md:justify-evenly">
        <div className="md:text-none text-center pt-[60px]">
          <h3 className="text-4xl font-bold">Jupeb Government Syllabus</h3>
          <p className="pt-[20px] md:text-xl">
            This is the official Jupeb Government syllabus which contain
            001/002/003/ & 004 <br></br>
            and which the Jupeb textbook follow the arrangement in the syllabus.
          </p>
          <p className="underline mt-[30px] text-xl md:pb-0 pb-[80px] pl-[10px] cursor-pointer">
            <a href="/"></a>Download government syllabus
          </p>

          <img
            className="h-[400px] md:hidden block mx-auto my-auto md:mt-0 mt-[10px]"
            src={img}
            alt="book"
          />
        </div>

        <div className="pt-[40px]">
          <img className=" h-[350px] hidden md:block" src={img} alt="book" />
        </div>
      </div>

      <section className="bg-[#fff3d8] pt-[30px]">
        
          {syllabus.map((item) => (
            <div key={item.id} className="w-full  md:flex md:justify-evenly bg-[#fff3d8]">
              <div className="md:text-none text-center">
                <h2 className="text-4xl font-bold">{item.title}</h2>
                <p className="pt-[20px] md:text-xl md:pl-20 text-center">{item.description}</p>
                <p className="underline mt-[30px] text-xl md:pb-0 pb-[80px] pl-[10px] cursor-pointer">
                  {item.download}
                </p>
                <img
                className="h-[400px] md:hidden block mx-auto my-auto md:pt-0 pt-[10px]"
                src={item.img}
                alt={item.picture}
              />
              </div>

              <div className="my-[20px] w-[800px] ml-[80px]">
                <img
                  className="h-[350px] hidden md:block"
                  src={item.img}
                  alt={item.picture}
                />
              </div>
            </div>
          ))}
      </section>
    </div>
  );
};

export default sub;
