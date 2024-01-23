import { useState } from "react";
import { IoSend } from "react-icons/io5";
import Layout from "../../layout/Layout";

const EaseReadsAL = () => {
  const [inputValue, setInputValue] = useState("");
  const [chatMessages, setChatMessages] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const inputHeight = Math.min(
    Math.max(14, Math.ceil(inputValue.length / 20) * 14),
    40
  );

  const handleSendMessage = () => {
    // Assuming you want to add the message to the chat when sending
    if (inputValue.trim() !== "") {
      setChatMessages((prevMessages) => [...prevMessages, inputValue]);
      setInputValue("");
    }
  };

  return (
    <Layout showFooter={false}>
      <main className="w-full max-h-screen font-body  pt-[70px]">
        <div className="w-full h-full ">
          <div className="w-full h-8 bg-primary6 text-primary1 flex justify-center items-center">
            <h1 className="font-roboto ">Ask EaseReads A.I Questions</h1>
          </div>
          <div className="w-full h-[80%] px-4 md:px-8 xl:px-12  text-sm sm:text-base md:text-lg mt-5">
            <div className="chat-area w-full  h-[360px]  font-roboto px-2  mt-10 overflow-y-auto">
              <div className="font-roboto w-full h-20 flex justify-between">
                <p className="w-5/12 text-xs sm:text-sm md:text-base  border-[1px] border-sec5 p-2 sm:p-3 lg:p-6 rounded-3xl">
                  Ask questions 24/7 and get instant answers to it
                </p>
                <p className="w-5/12 text-xs sm:text-sm md:text-base  border-[1px] border-sec5 p-2 sm:p-3 lg:p-6 rounded-3xl">
                  EaseReads A.I, your go to reading buddy
                </p>
              </div>

              {/* <div className="w-full"> */}
              {chatMessages.map((message, index) => (
                <div
                  key={index}
                  className="my-4 w- border-[1px] text-sm sm:text-base p-2 rounded-xl border-primary3"
                >
                  <p className="w-full">{message}</p>
                </div>
              ))}
              {/* </div> */}
            </div>
          </div>
          <form
            action=""
            className="fixed bottom-0 w-full  px-4 md:px-8 xl:px-12 mt-40"
          >
            <div className="relative w-full  ">
              <IoSend
                size={24}
                className="absolute top-[35%] right-4 cursor-pointer"
                onClick={handleSendMessage}
              />
              {/* <input
              type="text"
              className="w-[300px] h-12 max-h-40 border-2 border-sec3 px-2 rounded-3xl outline-none overflow-y-scroll"
              placeholder="ask questions"
            /> */}
              <textarea
                value={inputValue}
                onChange={handleInputChange}
                className=" w-full font-roboto  text-sm sm:text-base  border-2 border-sec3 pl-4 pr-14 md:px-10  py-2 rounded-3xl outline-none  overflow-y-auto scroll-container"
                rows="2"
                placeholder="Ask questions"
              />
            </div>
          </form>
        </div>
      </main>
    </Layout>
  );
};

export default EaseReadsAL;
