import { useState } from "react";
import Layout from "../../layout/Layout";
import messageArrow from "../../assets/sendMessage.png";

const EaseReadsAL = () => {
  const [inputValue, setInputValue] = useState("");
  const [chatMessages, setChatMessages] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSendMessage = () => {
    // Assuming you want to add the message to the chat when sending
    if (inputValue.trim() !== "") {
      setChatMessages((prevMessages) => [...prevMessages, inputValue]);
      setInputValue("");
    }
  };

  return (
    <Layout showFooter={false} showSidebar={true}>
      <main className=" md:pl-[26%] h-screen font-body  pt-[40px] dark:bg-navyBlue">
        <div className=" h-[80%]  ">
          {/* <div className="w-full h-8 bg-primary6 text-primary1 flex justify-center items-center">
            <h1 className="font-roboto ">Ask EaseReads A.I Questions</h1>
          </div> */}
          <div className=" h-[100%] flex flex-col px-4 md:px-8 xl:px-12  text-sm sm:text-base md:text-lg mt-5">
            <div className="     font-roboto px-2  mt-10 overflow-y-auto whitespace-pre-line">
              <div className="font-roboto w-full h-20 flex justify-between dark:text-primary1">
                <p className="w-5/12 flex justify-center items-center text-xs sm:text-sm md:text-base  border-[1px] border-sec10 p-2 sm:p-3 lg:p-6 rounded-3xl">
                  Ask questions 24/7 and get instant answers to it
                </p>
                <p className="w-5/12 text-xs flex justify-center items-center sm:text-sm md:text-base  border-[1px] border-sec10 p-2 sm:p-3 lg:p-6 rounded-3xl">
                  EaseReads A.I, your go to reading buddy
                </p>
              </div>

              <div className=" min-h-10 dark:text-lightGray dark:bg-[#343541]">
                {chatMessages.map((message, index) => (
                  <div
                    key={index}
                    className="my-4  max-w-full h-full text-sm sm:text-base p-2 rounded-xl "
                  >
                    <p className="h-full break-words">{message}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <form action="" className="w-full  bottom-0    px-4 md:px-8 xl:px-12  ">
          <div className="relative  ">
            <img
              src={messageArrow}
              alt="arrow"
              className="absolute top-[22%] right-6 md:right-10 cursor-pointer"
              onClick={handleSendMessage}
            />

            <textarea
              value={inputValue}
              onChange={handleInputChange}
              className=" w-full   font-roboto  text-sm sm:text-base  border-2 border-sec10 dark:bg-darkBlue dark:text-primary1 resize-none pl-4 pr-14 md:px-10  py-2 rounded-3xl outline-none  overflow-y-auto scroll-container"
              rows="2"
              placeholder="Ask questions"
            />
          </div>
        </form>
      </main>
    </Layout>
  );
};

export default EaseReadsAL;
