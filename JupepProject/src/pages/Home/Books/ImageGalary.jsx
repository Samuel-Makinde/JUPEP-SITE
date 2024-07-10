// import node module libraries
import { useState } from "react";
import { Link } from "react-router-dom";

// import media files
import TemplatesImage from "../../../assets/images/EaseReads.png";

const ImageGalary = () => {
  const [isOpen, setOpen] = useState(false);
  const [YouTubeURL] = useState("JRzWRZahOVU");

  return (
    <section className="bg-[#F1F5F9] px-4 py-5 pt-10 pb-5 bg-light dark:text-lightGray dark:bg-darkGray">
      <div className="container mx-auto mt-10">
        <div className="flex flex-wrap">
          <div className="w-full xl:w-10/12 xl:mx-auto">
            <div className="flex flex-wrap items-center">
              <div className="w-full">
                <div className="mb-5 lg:mb-0 text-center">
                  <h2 className="text-4xl font-bold mb-3 font-sans">
                    Prioritise the authencity of the materials <br /> before you
                    start reading{" "}
                  </h2>
                  <p className="text-base text-gray-600 font-roboto">
                    Select from a variety of Subjects to read from and Preview
                    the text-book syllabus <br /> to have full details of it
                    content
                  </p>
                </div>
              </div>
              {/* <div className="w-full mt-10">
                <img
                  src={TemplatesImage}
                  alt="Templates"
                  className="img-fluid w-full"
                />
              </div> */}
              <div className="flex justify-center space-x-4">
                <div className="relative">
                  <img
                    src={TemplatesImage}
                    alt="Template 1"
                    className="mt-10  rounded-lg shadow-2xl"
                  />
                </div>
                <div className="relative">
                  <img
                    src={TemplatesImage}
                    alt="Template 2"
                    className="-ml-6  mt-5 rounded-lg shadow-2xl"
                  />
                </div>
                <div className="relative z-20">
                  <img
                    src={TemplatesImage}
                    alt="Template 3"
                    className="-ml-10 rounded-lg shadow-2xl "
                  />
                </div>
                <div className="relative  ">
                  <img
                    src={TemplatesImage}
                    alt="Template 4"
                    className="-ml-16 mt-5 rounded-lg shadow-2xl"
                  />
                </div>
                <div className="relative">
                  <img
                    src={TemplatesImage}
                    alt="Template 5"
                    className="-ml-20 mt-10 rounded-lg shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGalary;
