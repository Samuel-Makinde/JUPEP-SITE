import syllabus from "../../data/Syllabus";
import Layout from "../../layout/Layout"


const sub = () => {
  return (
    <Layout>

    <div className="w-full px-4 bg-white">
      {/* front page */}

      <div className="text-center pt-[120px]">
        <h2 className="md:text-5xl text-[24px] font-bold">
          Browse Through Jubep Syllabus
        </h2>
        <p className="pt-[15px] text-[18px] text-gray-700">
          Lorem ipsum dolor, sit amet consectetur adipisicing.
        </p>
      </div>

      <section className="mb-[60px] ">
        {syllabus.map((item) => (
          <div
            key={item.id}
            className="w-full  pt-[80px]"
          >
              
            <div className="md:pt-[20px] text-center flex flex-col md:flex-row justify-center items-center  ">
              <div className="md:w-[900px] lg:w-[800px]">
                <h2 className="text-2xl md:text-3xl  font-bold text-center">{item.title}</h2>
                <p className="pt-[20px] md:text-2xl text-[18px] text-gray-700 md:pl-20 text-center">
                  {item.description}
                </p>
                <p className="underline mt-[20px]  text-[20px] text-blue-950 cursor-pointer font-bold">
                  {item.download}
                </p>
              </div>
              {/* img */}
              <div className="mt-[10px]">
                <img
                  className="h-[230px] lg:w-[220px] md:w-[400px] rounded-[10px]"
                  src={item.img}
                  alt={item.picture}
                />
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
    </Layout>

  );
};

export default sub;