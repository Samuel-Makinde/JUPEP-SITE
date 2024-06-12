import { useNavigate } from "react-router-dom";
import axios from "axios";
import AxiosInterceptor from "../../components/axiosInterceptor";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useCallback, useEffect, useState } from "react";
import Layout from "../../layout/Layout";
import { showToast } from "../../components/ShowToast";
import Select from "react-select";
import JupebSubjects from "../../data/JupebSubjects";

const SelectDetail = () => {
  const [isLoading, setLoading] = useState(false);
  const [loading, setloading] = useState(false);

  const [subject, setSubject] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState("");
  const [partNumber, setPartNumber] = useState([]);
  const [selectedPartNumber, setSelectedPartNumber] = useState([]);
  const [topic, setTopic] = useState([]);
  const [selectedTopics, setSelectedTopics] = useState([]);

  const navigate = useNavigate();

  const options = subject.map((subject) => ({
    value: subject,
    label: <div>{subject}</div>,
  }));

  //   const authFetch = AxiosInterceptor();
  const selectSubject = async () => {
    try {
      console.log("this is jupeb", JupebSubjects);
      setSubject(JupebSubjects);
      console.log("this is subject", subject);
    } catch (error) {
      console.log(error);
      showToast(error.response.data.msg);
    }
  };

  useEffect(() => {
    selectSubject();
  }, []);

  // const handleSubjectChange = async (selectedOption) => {
  //   // Update the selected subject when the dropdown value changes
  //   console.log("This is selected option", selectedOption);
  //   setSelectedSubject(selectedOption.value);
  //   console.log("this is the currect subject", selectedSubject);

  //   // Fetch subject parts when the selected subject changes
  //   try {
  //     setloading(true);

  //     if (!selectedSubject.trim()) {
  //       showToast("Please select a Subject");
  //       return;
  //     }
  //     const response = await axios.post(
  //       `https://jupeb-site-backend.onrender.com/api/v1/getSubjectPartNumber`,
  //       {
  //         selectedSubject: selectedOption.value,
  //       }
  //     );
  //     setloading(false);
  //     setPartNumber(response.data.partNumbers);
  //   } catch (error) {
  //     setloading(false);
  //     console.log(error);
  //     showToast(error.response.data.msg);
  //   }
  // };

  const handleSubjectChange = async (selectedOption) => {
    // Update the selected subject when the dropdown value changes
    console.log("This is selected option", selectedOption);
    setSelectedSubject(selectedOption.value);
  };

  useEffect(() => {
    // Fetch subject parts when the selected subject changes
    const fetchData = async () => {
      try {
        setloading(true);

        if (!selectedSubject.trim()) {
          showToast("Please select a Subject");
          return;
        }

        const response = await axios.post(
          `https://jupeb-site-backend.onrender.com/api/v1/getSubjectPartNumber`,
          {
            selectedSubject: selectedSubject,
          }
        );

        setloading(false);
        setPartNumber(response.data.partNumbers);
      } catch (error) {
        setloading(false);
        console.log(error);
        showToast(error.response.data.msg);
      }
    };

    fetchData(); // Call the fetchData function when selectedSubject changes
  }, [selectedSubject]); // Add selectedSubject as a dependency to the useEffect hook

  const getAllTopic = async () => {
    setLoading(true);
    console.log("this is topic section");
    try {
      const part = selectedPartNumber;
      console.log("type of part", Array.isArray(part) ? "array" : typeof part);
      console.log("length part", part);

      if (part.length === 0) {
        showToast("Please select at least a Subject section");
        return;
      }
      const topicsResponse = await axios.post(
        `https://jupeb-site-backend.onrender.com/api/v1/get-topic-name`,
        {
          selectedSubject: selectedSubject,
          selectedPartNumbers: selectedPartNumber,
        }
      );
      setLoading(false);
      console.log("this is topic response", topicsResponse);
      setTopic(topicsResponse.data.filteredTopics);
    } catch (error) {
      setLoading(false);
      showToast(error.topicsResponse.data.details);
    }
  };

  const handlePartChange = (selectedOptions) => {
    // Update the selected parts when the dropdown value changes
    const selectedPartValues = selectedOptions.map((option) => option.value);
    setSelectedPartNumber(selectedPartValues);
  };

  const handleTopicChange = (selectedOptions) => {
    // Update the selected parts when the dropdown value changes
    const selectedTopicsValues = selectedOptions.map((option) => option.value);
    setSelectedTopics(selectedTopicsValues);
  };

  useEffect(() => {
    console.log("these are the selected part", selectedPartNumber);
  }, [selectedPartNumber]);

  useEffect(() => {
    console.log("these are the selected topics", selectedTopics);
  }, [selectedTopics]);

  const customStyles = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      height: "60px",
      boxShadow: "none",
      border: state.isFocused ? "2px solid #FFD700" : "2px solid #203B8A",
      backgroundColor: "#D1D5DB",
      // color: "#111827",
    }),
  };

  const handleMenuOpen = () => {
    // This function will be called when the dropdown menu is opened
    getAllTopic();
  };

  const handleSubmit = async () => {
    sessionStorage.setItem("subject", selectedSubject);
    sessionStorage.setItem("section", selectedPartNumber);
    sessionStorage.setItem("topic", selectedTopics);
    navigate("/exam-page");
  };

  return (
    <Layout showFooter={false}>
      <main className="w-full min-h-screen pt-20 font-roboto dark:bg-navyBlue dark:text-secH ">
        <div className="w-full  h-full px-4 flex flex-col justify-center items-center ">
          <h1 className="text-center font-roboto font-bold text-base dark:text-primary1  md:text-xl mt-8 capitalize">
            Please fill all the fields below
          </h1>

          <div className="w-full  md:w-96 h-16 mt-10 outline-none">
            <Select
              options={options}
              onChange={handleSubjectChange}
              placeholder="Select Subject"
              isSearchable={false}
              styles={customStyles}
            />
          </div>

          {/* get subject part number */}
          <div
            className="w-full md:w-96 h-full mt-[30px] "
            // onClick={selectSubjectPart}
          >
            <Select
              options={partNumber.map((part) => ({
                value: part,
                label: <div>{part}</div>,
              }))}
              onChange={handlePartChange}
              placeholder="Select Subject section"
              isSearchable={false}
              isMulti
              isLoading={loading}
              styles={customStyles}
            />
          </div>

          <div
            className="w-full md:w-96 h-full mt-[30px] "
            // onClick={getAllTopic}
          >
            <Select
              options={topic.map((toc) => ({
                value: toc,
                label: <div>{toc}</div>,
              }))}
              onChange={handleTopicChange}
              placeholder="Select Topics"
              isSearchable={false}
              isMulti
              styles={customStyles}
              isLoading={isLoading}
              onMenuOpen={handleMenuOpen}
            />
            <p className="flex mt-3 dark:text-primary1">
              <AiOutlineInfoCircle size={18} />{" "}
              <span className="text-xs pl-3 ">
                {" "}
                select maximum of 7 topics to get depth knowledge of each topic{" "}
              </span>
            </p>
          </div>
          <button
            onClick={handleSubmit}
            className="h-[60px] w-full md:w-96 bg-primary0Blue hover:bg-opacity-80  text-[16px] md:text-[20px] rounded-[12px] font-bold text-primary1 cursor-pointer mt-12"
          >
            Continue
          </button>
        </div>
      </main>
    </Layout>
  );
};

export default SelectDetail;
