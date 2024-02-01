import coming from "../../assets/underConstruction.jpeg";
import Layout from "../../layout/Layout";
export const ComingSoon = () => {
  return (
    <Layout>
      <main className="w-full h-screen dark:bg-navyBlue pt-[90px] flex justify-center items-center">
        <img
          src={coming}
          alt="Coming-Soon"
          className="w-[300px] md:w-[450px]"
        />
      </main>
    </Layout>
  );
};
