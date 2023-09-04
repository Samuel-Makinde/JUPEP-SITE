import syllabus from "../../data/Syllabus";
import Layout from "../../layout/Layout"


const sub = () => {
  return (
    <Layout>

    <div className="w-full px-4 bg-white">
      {/* front page */}

      <div className="text-center pt-[120px]">
        <h2 className="md:text-5xl text-2xl font-bold">
          Browse Through Jubep Syllabus
        </h2>
        <p className="pt-[20px] text-2xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing.
        </p>
      </div>

      <section className=" ">
        {syllabus.map((item) => (
          <div
            key={item.id}
            className="w-full  pt-[80px]"
          >
              
            <div className="md:pt-[20px]  text-center md:flex md:flex-row md:justify-center md:space-x-[120px] md:pr-[50px]">
              <div className="md:w-[900px] lg:w-[800px]">
                <h2 className="text-4xl font-bold text-center">{item.title}</h2>
                <p className="pt-[20px] md:text-2xl text-xl md:pl-20 text-center">
                  {item.description}
                </p>
                <p className="underline mt-[30px] text-xl text-blue-950   cursor-pointer">
                  {item.download}
                </p>
              </div>
              {/* img */}
              <div className=" sm:py-[40px]">
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