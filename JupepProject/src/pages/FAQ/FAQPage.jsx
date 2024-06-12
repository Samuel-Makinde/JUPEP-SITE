import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import questions from "../../data/FAQuestions";

const FAQPage = () => {
  const [answerQuestion, setAnswerQuestion] = useState(
    questions.map((question) => ({ ...question, toggle: false }))
  );

  const handleToggle = (id) => {
    setAnswerQuestion((prevQuestions) =>
      prevQuestions.map((question) =>
        question.id === id
          ? { ...question, toggle: !question.toggle }
          : question
      )
    );
  };

  return (
    <main className="w-full h-full mt-[120px] text-secH dark:text-lightGray font-medium capitalize pb-20">
      <div className="w-full h-full md:flex md:justify-evenly px-4 md:px-6 lg:px-8 ">
        <div className="md:mt-[22px]">
          <h1 className="md:text-[35px] dark:text-primary1 font-bold font-roboto">
            Frequently Ask Questions
          </h1>
          <a
            href="http://"
            className="text-[16px] font-medium text-sec5 font-roboto "
          >
            Ask questions on official whatsapp Channel
          </a>
        </div>

        <article>
          {answerQuestion.map((question) => {
            const { id, title, info } = question;
            return (
              <div
                key={id}
                className="text-[15px] border-b-[2px] border-blue-950 md:w-[400px] lg:w-[600px]  leading-snug"
              >
                <header
                  className=" h-[80px]   flex justify-between items-center "
                  onClick={() => handleToggle(id)}
                >
                  <h1 className="font-semibold text-[16px] w-11/12 md:text-[19px] font-roboto">
                    {title}
                  </h1>
                  <button>
                    {question.toggle ? <AiOutlineMinus /> : <AiOutlinePlus />}
                  </button>
                </header>
                {question.toggle && <p className="font-body">{info}</p>}
              </div>
            );
          })}
        </article>
      </div>
    </main>
  );
};

export default FAQPage;
