import Layout from "../../layout/Layout";
import group from "../../assets/About Image/group.jpg";
import arrow from "../../assets/About Image/arrow.jpg";
import learning from "../../assets/About Image/learning.jpg";
import reading from "../../assets/About Image/reading.jpg";
import Button from "../../components/button/button";
import { FaArrowRight } from "react-icons/fa";

const About = () => {
  return (
    <Layout>
      <div className="">
        {/* 1ST PART */}
        <div className="w-full sm:px-[2rem] lg:flex md:flex-col-2 md:flex-row pt-[6rem] lg:space-b md:px-[5rem] ">
          <div className="pt-[3rem] md:h-auto md:mx-auto md:h-[23rem]  lg:pt-[3rem]">
            <img
              className="lg:w-[45rem] md:w-[35rem] sm:w-[25rem]"
              src={learning}
              alt="service"
            />
          </div>
          <div className="sm:w-full sm:pt-[3rem] lg:pl-[5rem] lg:w-3/5 sm:pt-[1rem] lg:pt-[6rem]">
            <h2 className="sm:text-xl md:text-2xl pb-[1rem]">About Us</h2>
            <h4 className="sm:text-xl md:text-3xl font-bold pb-[1rem] text-sec2 md:w-3/4 ">
              Unleashing Curiosity and Empowering Young Minds
            </h4>
            <p className="pt-[10px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              deleniti dolor doloremque, adipisci itaque quibusdam ipsum
              distinctio eius veritatis, perspiciatis perferendis omnis
              Aspernatur fugit ad illum similique incidunt quisquam dicta
              molestiae. Maiores ab numquam magnam facere omnis? Eum, ut off
              cupiditate est eveniet fugiat obcaecati ipsa, optio repellendu
              dolore quae. Lorem ipsum dolor sit amet consectetur, adipisici
              elit. Laborum quo rem quas similique nemo itaque, quod neque n
              quos blanditiis at, enim corrupti molestiae veritatis a cumque
              quae dicta dignissimos facere repellendus obcaecati! Cum tenet
              possimus ea recusandae asperiores doloribus accusantium,
              praesentium esse hic, molestias sequi soluta reprehenderit in
              distinctio nulla sed cumque unde, ratione temporibus facere
              tempora magni nam.Cum tenetur possimus ea recusandae asperiore
            </p>
            <Button
              className="mt-[4rem] flex items-center justify-center"
              type="button"
            >
              <span className="flex items-center">
                Enroll
                <FaArrowRight className="ml-[1rem]" />
              </span>
            </Button>
          </div>
        </div>

        {/* <div className="lg:pl-[5rem] lg:pr-[3rem]"> */}
        {/* 2nd Part */}
        <div className="bg-primary4 lg:flex md:flex-col-2 md:flex-row mt-[5rem] lg:py-[7rem] sm:px-[2rem] md:px-[5rem]">
          <div className="lg:pr-[4rem] pt-[1rem] lg:w-3/5">
            <h2 className="sm:text-xl md:text-3xl  font-bold pb-[1rem] text-sec2">
              Our Mission
            </h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            deleniti dolor doloremque, adipisci itaque quibusdam ipsum cumque ut
            distinctio eius veritatis, perspiciatis perferendis omnis illo.
            Aspernatur fugit ad illum similique incidunt quisquam dicta
            molestiae. Maiores ab numquam magnam facere omnis? Eum, ut officia
            cupiditate est eveniet fugiat obcaecati ipsa, optio repellendus
            dolore quae. Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Laborum quo rem quas similique nemo itaque, quod neque natus
            quos blanditiis at, enim corrupti molestiae veritatis a cumque quae
            dicta dignissimos facere repellendus obcaecati! Cum tenetur possimus
            ea recusandae asperiores doloribus accusantium, praesentium esse
            hic, molestias sequi soluta reprehenderit in distinctio nulla sed
            cumque unde, ratione temporibus facere tempora magni nam.Cum tenetur
          </div>
          <div className="md:pt-[3rem] lg:pt-[3rem] lg:pr-[2rem] lg:pl-[10rem] sm:py-[5rem] lg:py-[0]">
            <img
              className="sm:w-[35rem] md:h-auto md:mx-auto md:h-[25rem] lg:w-[50rem] lg:pl-[1rem]"
              src={arrow}
              alt="service"
            />
          </div>
        </div>

        {/* 3rd Part */}
        <div className="w-full lg:flex md:flex-col-2 md:flex-row pt-[4rem] lg:space-b sm:px-[2rem] md:px-[5rem]">
          <div className="pt-[3rem] md:h-auto md:mx-auto md:h-[23rem]  lg:pt-[3rem]">
            <img
              className=" md:w-[45rem] md:w-[35rem] sm:w-[25rem]"
              src={group}
              alt="service"
            />
          </div>
          <div className="sm:w-full sm:pt-[2rem] lg:pl-[5rem] lg:w-3/5 lg:pt-[7rem]">
            <h2 className="sm:text-xl md:text-3xl font-bold pb-[1rem] text-sec2">
              Our Vision
            </h2>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              deleniti dolor doloremque, adipisci itaque quibusdam ipsum cumque
              ut distinctio eius veritatis, perspiciatis perferendis omnis illo.
              Aspernatur fugit ad illum similique incidunt quisquam dicta
              molestiae. Maiores ab numquam magnam facere omnis? Eum, ut officia
              cupiditate est eveniet fugiat obcaecati ipsa, optio repellendus
              dolore quae. Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Laborum quo rem quas similique nemo itaque, quod neque natus
              quos blanditiis at, enim corrupti molestiae veritatis a cumque
              quae dicta dignissimos facere repellendus obcaecati! Cum tenetur
            </p>

            <p className="pt-[3rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              deleniti dolor doloremque, adipisci itaque quibusdam ipsum cumque
              ut distinctio eius veritatis, perspiciatis perferendis omnis illo.
              Aspernatur fugit ad illum similique incidunt quisquam dicta
              molestiae. Maiores ab numquam magnam facere omnis? Eum, ut officia
            </p>
          </div>
        </div>

        {/* 4th Part */}
        <div className="bg-primary4 lg:flex md:flex-col-2 md:flex-row mt-[5rem] lg:py-[7rem] sm:px-[2rem] md:px-[5rem]">
          <div className="lg:pr-[4rem] sm:pt-[3rem] md:pt-[3rem] lg:pt-[12rem] lg:w-3/5">
            <h2 className="sm:text-xl md:text-3xl  font-bold pb-[1rem] text-sec2">
              Our Commitment
            </h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            deleniti dolor doloremque, adipisci itaque quibusdam ipsum cumque ut
            distinctio eius veritatis, perspiciatis perferendis omnis illo.
            Aspernatur fugit ad illum similique incidunt quisquam dicta
            molestiae. Maiores ab numquam magnam facere omnis? Eum, ut officia
            cupiditate est eveniet fugiat obcaecati ipsa, optio repellendus
            dolore quae. Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Laborum quo rem quas similique nemo itaque, quod neque natus
            quos blanditiis at, enim corrupti molestiae veritatis a cumque quae
            dicta dignissimos facere repellendus obcaecati! Cum tenetur possimus
            ea recusandae asperiores doloribus accusantium, praesentium esse
            hic, molestias sequi soluta reprehenderit in distinctio nulla sed
            cumque unde, ratione temporibus facere tempora magni nam.Cum tenetur
          </div>
          <div className="sm:py-[3rem] md:pt-[3rem] lg:pt-[3rem] lg:pr-[2rem] lg:pl-[3rem]">
            <img
              className="sm:w-[35rem] md:h-auto md:mx-auto md:h-[23rem] lg:w-[50rem] lg:pl-[1rem]"
              src={reading}
              alt="service"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
