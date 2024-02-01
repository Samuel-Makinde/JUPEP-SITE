import { useState, useEffect } from "react";
import axios from "axios";
import { showToast } from "../../components/ShowToast";
import Layout from "../../layout/Layout";
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";
import QustionSpinner from "../../components/loadingSpinner/QustionSpinner";
import ExamResultSpinner from "../../components/loadingSpinner/ExamResultSpinner";

const ExamPage = () => {
  const [loading, isLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [timer, setTimer] = useState(1 * 60); // 30 minutes in seconds
  const [examResults, setExamResults] = useState(null);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    // Fetch questions from your endpoint
    const getQuestions = async () => {
      try {
        const subject = sessionStorage.getItem("subject");
        const getSection = sessionStorage.getItem("section");
        const section = getSection.split(",");
        console.log("this is section", section);
        console.log("this is section typeoff", typeof section);

        const getTopic = sessionStorage.getItem("topic");
        const topic = getTopic.split(",");
        const response = await axios.post(
          `https://jupeb-site-backend.onrender.com/api/v1/get-jupeb-questions`,
          {
            selectedSubject: subject,
            selectedPartNumbers: section,
            selectedTopics: topic,
          }
        );

        setQuestions(response.data.questionDetails);
        // setSelectedOptions(
        //   new Array(response.data.questionDetails.length).fill(null)
        // );
      } catch (error) {
        console.error("Error fetching questions:", error);
        showToast(error.response.data.details);
      }
    };

    getQuestions();
  }, []);

  const handleOptionSelect = (optionId) => {
    const selectedQuestion = questions[currentQuestionIndex].content;
    const selectedAnswer = optionId;

    // Check if the question is already selected, update if yes, add if no
    const existingSelectedIndex =
      selectedOptions &&
      Array.isArray(selectedOptions) &&
      selectedOptions.findIndex(
        (item) => item.questionContent === selectedQuestion
      );

    if (existingSelectedIndex !== -1) {
      // Update the existing entry
      const updatedOptions = [...selectedOptions];
      // updatedOptions[existingSelectedIndex].userAnswer = selectedAnswer;
      updatedOptions[existingSelectedIndex] = {
        ...updatedOptions[existingSelectedIndex],
        userAnswer: selectedAnswer,
      };
      setSelectedOptions(updatedOptions);
      console.log("this is selected options", updatedOptions);
    } else {
      // Add a new entry
      setSelectedOptions([
        ...selectedOptions,
        { questionContent: selectedQuestion, userAnswer: selectedAnswer },
      ]);
      console.log("this is selected options", selectedOptions);
    }
  };

  useEffect(() => {
    console.log("these are the selected option for useeffect", selectedOptions);
  }, [selectedOptions]);

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrevQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
  };

  // submit exam
  const handleSubmit = async () => {
    isLoading(true);
    setCurrentQuestionIndex(0);
    const updatedOptions = [...selectedOptions];

    // Check and add unanswered questions
    questions.forEach((question) => {
      const questionContent = question.content;
      const isAnswered = updatedOptions.some(
        (item) => item.questionContent === questionContent
      );

      if (!isAnswered) {
        updatedOptions.push({
          questionContent: questionContent,
          userAnswer: null, // or some default value for unanswered
        });
      }
    });

    try {
      const subject = sessionStorage.getItem("subject");
      const email = sessionStorage.getItem("email");
      const response = await axios.post(
        `https://jupeb-site-backend.onrender.com/api/v1/score-jupeb-exams`,
        {
          email: email,
          selectedSubject: subject,
          questionDetails: updatedOptions,
        }
      );
      isLoading(false);
      setExamResults(response.data);
      setShowResults(true);
    } catch (error) {
      isLoading(false);
      showToast(error.response.data.msg);
    }
  };

  // submit exam on using all the time
  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 0) {
          clearInterval(countdown);
          handleSubmit(); // Call your function to submit exam
        }
        return prevTimer - 1;
      });
    }, 1000);
    return () => clearInterval(countdown);
  }, [selectedOptions]);

  if (loading) {
    return <ExamResultSpinner />;
  }

  return (
    <Layout showFooter={false}>
      <main className="w-full min-h-screen  pt-[120px] font-body dark:bg-navyBlue">
        <div className="w-full h-full px-4 flex justify-center">
          {showResults ? (
            <div className="w-full md:w-[500px] lg:w-[700px] xl:w-[850px] bg-primary6 text-white p-4 rounded-md">
              <h1 className="text-2xl font-bold mb-4">Exam Result</h1>
              {examResults.results.length > 0 && (
                <div key={currentQuestionIndex}>
                  <p className="capitalize font-roboto">
                    Question:{" "}
                    <span className="ml-2 lowercase">
                      {
                        examResults.results[currentQuestionIndex]
                          .questionContent
                      }{" "}
                    </span>
                  </p>
                  <p className="capitalize font-roboto mt-4">
                    Your Answer:{" "}
                    <span className="ml-2 lowercase">
                      {examResults.results[currentQuestionIndex].userAnswer}{" "}
                    </span>
                  </p>
                  <p className="capitalize font-roboto mt-4">
                    Correct answer:{" "}
                    <span className="ml-2 lowercase">
                      {examResults.results[currentQuestionIndex].correctAnswer}
                    </span>
                  </p>

                  <p className="capitalize font-roboto mt-4">
                    Score:
                    <span className="ml-2 ">
                      {examResults.results[currentQuestionIndex].isCorrect ? (
                        <span
                          role="img"
                          aria-label="Correct"
                          className="text-green-500"
                        >
                          &#10004;
                        </span>
                      ) : (
                        <span
                          role="img"
                          aria-label="Wrong"
                          className="text-red-500"
                        >
                          &#10008;
                        </span>
                      )}
                      {examResults.results[currentQuestionIndex].score}
                    </span>
                  </p>

                  <div className=" w-full mt-4 font-bold text-white">
                    {currentQuestionIndex > 0 && (
                      <button
                        className="bg-sec5 hover:opacity-80 rounded-md  py-2 px-4 mr-2"
                        onClick={handlePrevQuestion}
                      >
                        Previous
                      </button>
                    )}

                    {currentQuestionIndex < examResults.results.length - 1 && (
                      <button
                        className="bg-sec2 ml-8 hover:opacity-80 rounded-md  py-2 px-4"
                        onClick={handleNextQuestion}
                      >
                        Next
                      </button>
                    )}
                  </div>

                  <div className="mt-6">
                    <p>
                      Correct Answers:{" "}
                      <span className="ml-2 ">
                        {
                          examResults.results.filter(
                            (result) => result.isCorrect
                          ).length
                        }{" "}
                        out of {examResults.results.length}
                      </span>{" "}
                    </p>
                    <p>
                      Wrong Answers:{" "}
                      <span className="ml-2 ">
                        {
                          examResults.results.filter(
                            (result) => !result.isCorrect
                          ).length
                        }{" "}
                        out of {examResults.results.length}
                      </span>{" "}
                    </p>
                    <p>
                      Total Percentage:{" "}
                      <span className="ml-2 ">
                        {examResults.percentageScore}%{" "}
                      </span>{" "}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div>
              {questions.length > 0 &&
              currentQuestionIndex < questions.length ? (
                <div className="w-full  md:w-[500px] lg:w-[700px] xl:w-[850px] bg-primary6 text-white p-4 rounded-md">
                  <h1 className="text-2xl font-bold mb-4">
                    Question {currentQuestionIndex + 1}
                  </h1>
                  <p className="capitalize font-roboto">
                    {questions[currentQuestionIndex].content}
                  </p>

                  {questions.length > 0 &&
                  currentQuestionIndex < questions.length &&
                  questions[currentQuestionIndex].answers_suggestion ? (
                    <ul className=" ml-4 ">
                      {questions[currentQuestionIndex].answers_suggestion.map(
                        (option, index) => (
                          <li key={index}>
                            <label>
                              <input
                                type="radio"
                                name="answer"
                                className="mr-4"
                                checked={
                                  selectedOptions &&
                                  selectedOptions.some(
                                    (item) =>
                                      item.questionContent ===
                                      questions[currentQuestionIndex].content
                                  ) &&
                                  selectedOptions.find(
                                    (item) =>
                                      item.questionContent ===
                                      questions[currentQuestionIndex].content
                                  ).userAnswer === option
                                }
                                onChange={() => handleOptionSelect(option)}
                              />
                              {option}
                            </label>
                          </li>
                        )
                      )}
                    </ul>
                  ) : null}

                  <div className=" w-full mt-4 font-bold text-white">
                    {currentQuestionIndex > 0 && (
                      <button
                        className="bg-sec5 hover:opacity-80 rounded-md  py-2 px-4 mr-2"
                        onClick={handlePrevQuestion}
                      >
                        Previous
                      </button>
                    )}

                    {currentQuestionIndex < questions.length - 1 && (
                      <button
                        className="bg-sec2 ml-8 hover:opacity-80 rounded-md  py-2 px-4"
                        onClick={handleNextQuestion}
                      >
                        Next
                      </button>
                    )}

                    {currentQuestionIndex === questions.length - 1 && (
                      <button
                        className="bg-sec7 ml-8 hover:opacity-80 rounded-md py-2 px-4 "
                        onClick={handleSubmit}
                      >
                        Submit
                      </button>
                    )}
                  </div>

                  <div className="mt-4">
                    <p>Total Questions: {questions.length}</p>
                    {/* <p>Current Question: {currentQuestionIndex + 1}</p> */}
                    <p>Questions Answered: {selectedOptions.length}</p>
                    <p className="mt-2">
                      Time Remaining:{" "}
                      <span className="bg-sec8 p-1 rounded-md">
                        {Math.floor(timer / 60)}:{timer % 60}
                      </span>
                    </p>
                  </div>
                </div>
              ) : (
                <p>
                  <QustionSpinner />
                </p>
              )}
            </div>
          )}
        </div>
      </main>
    </Layout>
  );
};

export default ExamPage;
