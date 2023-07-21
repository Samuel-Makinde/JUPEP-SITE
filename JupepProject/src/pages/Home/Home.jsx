// import { useNavigate } from "react-router-dom";
// import { useGlobalContext } from "../../context/AuthContext";
// import { useEffect } from "react";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import Layout from "../../layout/Layout";

const Home = () => {
  // const { currentUser } = useGlobalContext();
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (!currentUser) {
  //     // Handle the case where the user is not signed in
  //     navigate("/login");
  //   }
  // }, [currentUser, navigate]);

  // if (!currentUser) {
  //   // Return null if currentUser is not available
  //   return null;
  // }
  // const url =
  //   "https://firebasestorage.googleapis.com/v0/b/login-practice-664be.appspot.com/o/samuel.resume.pdf?alt=media&token=5fa2cd30-0e77-4c08-869c-781e74809646";
  return (
    <Layout>
      <main className="w-full h-full pt-[90px] md:pt-0 text-2xl">
        <ImageSlider />
        <h1 className="px-4 md:px-8 ">
          {/* Welcome, {currentUser.firstName} {currentUser.lastName}{" "}
        {currentUser.email} */}
          i am the home page
        </h1>
      </main>
    </Layout>
  );
};

export default Home;
