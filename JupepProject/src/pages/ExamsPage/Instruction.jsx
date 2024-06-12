import { useEffect } from "react";
import Layout from "../../layout/Layout";
import { useNavigate, Link } from "react-router-dom";
const Instruction = () => {
  const navigate = useNavigate();

  const login = sessionStorage.getItem("accessToken");

  useEffect(() => {
    if (!login) {
      // sessionStorage.setItem("page", "/instruction");
      navigate("/login");
    }
  });

  return (
    <Layout showFooter={false}>
      <main className="w-full h-full px-4 md:px-8 xl:px-12 pt-[100px] mb-14 font-body">
        <div className="w-full h-full">
          <h1 className="text-center text-2xl font-roboto font-bold">
            Instruction
          </h1>
          <h1 className="text-center font-roboto">
            Please read all instruction bellow and select approriate subject,
            section and topics
          </h1>

          <div className="mt-10 text-base">
            <h2 className="font-roboto font-bold">Exams Instruction:</h2>
            <ul className="pl-6 md:px-8 xl:px-12 list-disc ">
              <li>
                Make sure you have a stable internet connection before starting
                the exam.
              </li>
              <li>
                Log in to the exam platform using the provided credentials.
              </li>
              <li>
                Do not refresh your page, or open another tab during the exam
                period
              </li>
            </ul>
            <h2 className="font-roboto font-bold mt-6">Environment:</h2>
            <ul className="pl-6 md:px-8 xl:px-12 list-disc ">
              <li>Choose a quiet and well-lit space to take the exam.</li>
              <li>You can take the Exam on your Phone, Tab or Laptop</li>
            </ul>
            <h2 className="font-roboto font-bold mt-6">Exam Format:</h2>
            <ul className="pl-6 md:px-8 xl:px-12 list-disc ">
              <li>Choose a quiet and well-lit space to take the exam.</li>
              <li>You can take the Exam on your Phone, Tab or Laptop</li>
            </ul>

            <h2 className="font-roboto font-bold mt-6">Time Management:</h2>
            <ul className="pl-6 md:px-8 xl:px-12 list-disc ">
              <li>Note the start and end times of the exam.</li>
              <li>
                Manage your time wisely to complete all sections within the
                allotted time.
              </li>
            </ul>

            <h2 className="font-roboto font-bold mt-6">
              Saving and Submission:
            </h2>
            <ul className="pl-6 md:px-8 xl:px-12 list-disc ">
              <li>Submit your completed exam before the deadline.</li>
              <li>
                Do not close the exam window until you receive confirmation of
                successful submission.
              </li>
            </ul>

            <h2 className="font-roboto font-bold mt-6">Complain:</h2>
            <ul className="pl-6 md:px-8 xl:px-12 list-disc ">
              <li>
                In case of any complain, contact us through any mean on the
                contact page
              </li>
            </ul>
          </div>
          <Link to="/select-details" smooth="true" duration={500}>
            <button className="w-full h-[60px] mt-[40px] flex justify-center items-center bg-primary0Blue hover:bg-opacity-80  text-[16px] md:text-[20px] rounded-[12px] text-primary1 cursor-pointer">
              Continue
            </button>
          </Link>
        </div>
      </main>
    </Layout>
  );
};

export default Instruction;
