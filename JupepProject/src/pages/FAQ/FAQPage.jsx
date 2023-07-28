import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import questions from "../../data/FAQuestions";

const FAQPage = () => {
  const [toggle, setToggle] = useState(false);
  //   const [questions, setQuestions] = useState(questions);

  return (
    <main className="w-full h-full mt-[90px]">
      <div className="w-full h-full grid grid-cols-2 px-8">
        <h1>Frequently Ask Questions</h1>
        <article>
          {questions.map((question) => {
            const { id, title, info } = question;
            return (
              <div key={id}>
                <header className="bg-blue-800 text-white">
                  <h1>{title}</h1>
                </header>
              </div>
            );
          })}
        </article>
      </div>
    </main>
  );
};

export default FAQPage;
