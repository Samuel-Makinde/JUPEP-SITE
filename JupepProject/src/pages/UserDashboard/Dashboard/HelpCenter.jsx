import React, { useState } from "react";
import { SmallBox2 } from "../../../components/Cards/Box";
import { Link } from "react-router-dom";
import transaction from "../../../data/AdminTransactions";
import { Modal } from "flowbite-react";

const MAX_MESSAGE_LENGTH = 20;

const truncateMessage = (messages) => {
  if (messages.length > MAX_MESSAGE_LENGTH) {
    return messages.slice(0, MAX_MESSAGE_LENGTH) + "...";
  }
  return messages;
};

const MyHelpCenter = () => {
  const [openModal, setOpenModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [transactionsPerPage] = useState(10);

  const setBackgroundColor = (index) => {
    const colors = ["#EFEFEF", "#FFFFFF"];
    return colors[index % colors.length];
  };

  const setStatusBackgroundColor = (status) => {
    if (status === "success") {
      return "#60B342"; // Green color for success
    } else if (status === "Failed") {
      return "#BA112A"; // Red color for failed
    } else {
      return "#FFD700"; // Default color
    }
  };

  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions =
    transaction && transaction
      ? transaction.slice(indexOfFirstTransaction, indexOfLastTransaction)
      : [];

  const paginate = (pageNumber) => {
    if (pageNumber < 1) {
      setCurrentPage(1);
    } else if (
      pageNumber > Math.ceil(transaction.length / transactionsPerPage)
    ) {
      setCurrentPage(Math.ceil(transaction.length / transactionsPerPage));
    } else {
      setCurrentPage(pageNumber);
    }
  };
  return (
    <main className="lg:pl-[26%] 2xl:pl-[33%] w-full min-h-screen bg-primary1 dark:bg-navyBlue dark:text-primary1  h-full pt-14 px-6 2xl:px-12 pb-8 font-sans">
      <h1>My Exam Practice</h1>
      <div className="w-full dark:border-b-primary1 border-b-secH border-[2px]"></div>

      <div className="lg:flex justify-between mt-5">
        <SmallBox2 title="Total Request" number="4" />
        <SmallBox2 title="Completed" number="4" />
        <SmallBox2 title="Pending" number="4" />
      </div>
      <div className="w-full flex mt-10 text-primary1">
        <button className="p-4 bg-primary0Blue rounded-md">
          Browse TextBooks
        </button>
        <Link to="/video-page" smooth="true" duration={500}>
          <button className="p-4 bg-sec1 ml-5 rounded-md">
            Tutorial Videos
          </button>
        </Link>

        <Link to="/instruction" smooth="true" duration={500}>
          <button className="p-4 bg-sec7 ml-5 rounded-md">
            Practice Exams
          </button>
        </Link>
      </div>

      {/* recent transaction */}
      <div className="w-full h-full dark:bg-primary3 shadow-2xl rounded-[10px] mt-16  ">
        <div className="w-full flex justify-between h-20 2xl:h-24  items-center font-semibold 2xl:text-2xl px-4 2xl:px-8">
          <h2>Help-Center History</h2>
          <button
            onClick={() => setOpenModal(!openModal)}
            className="p-4 text-primary1 bg-sec1 ml-5 rounded-md"
          >
            Create Ticket
          </button>
        </div>
        <div className="w-full h-16  text-primary1 2xl:h-24 bg-primary2 mb-5 px-4 2xl:px-8 font-semibold  flex justify-center items-center">
          <p className="w-[20%]">Date</p>
          <p className="w-[30%]">Message</p>
          <p className="w-[22%]">Status</p>
          <p className="w-[28%]">Response</p>
        </div>

        <div className="w-full  h-full pt-2  dark:text-primary7">
          {currentTransactions.map((transaction, index) => {
            const { id, date_time, status, address, revenue } = transaction;
            return (
              <div
                key={id}
                className="w-full text-sm 2xl:text-base h-28 2xl:h-24 mb-5 px-4 2xl:px-8  flex justify-center items-center capitalize"
                style={{
                  backgroundColor: setBackgroundColor(index),
                }}
              >
                <p className="w-[20%]">
                  {date_time ? date_time : "Not available"}
                </p>
                <p className="w-[30%]">
                  {address ? truncateMessage(address) : "Not available"} <br />
                </p>

                <div className="w-[22%]  text-primary3">
                  <p
                    className="w-[90%] h-12 flex justify-center text-primary1 items-center px-4 rounded-[10px] cursor-pointer"
                    style={{
                      backgroundColor: setStatusBackgroundColor(status),
                    }}
                  >
                    {status ? status : "Not available"}
                  </p>
                </div>
                <p className="w-[28%]">
                  <button
                    className="w-[90%]  h-12 flex justify-center items-center px-4 rounded-[10px] text-primary1 bg-primary10 cursor-pointer"
                    // onClick={() => handleOpenModal(id)}
                  >
                    Response
                  </button>
                </p>
              </div>
            );
          })}
          {/* Pagination */}
          <div className="flex justify-center h-20 mt-10  dark:text-primary1 ">
            {/* Pagination Buttons */}
            <div className="w-72 h-10 border border-primary2 flex items-center rounded-md">
              {/* <p className="ml-3"> Previous</p> */}
              {/* for nene */}
              <button
                className={`ml-3 `}
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <div className="ml-4">
                {transaction &&
                  transaction &&
                  Array.from({
                    length: Math.ceil(transaction.length / transactionsPerPage),
                  }).map((_, index) => (
                    <button
                      className={`w-8 h-full  ${
                        currentPage === index + 1
                          ? "bg-primary0Blue dark:bg-primary1  h-10   text-primary9 "
                          : ""
                      } mr-2`}
                      key={index}
                      onClick={() => paginate(index + 1)}
                    >
                      {index + 1}
                    </button>
                  ))}
              </div>
              <button
                className={`ml-3 `}
                onClick={() => paginate(currentPage + 1)}
                disabled={
                  !transaction ||
                  currentPage ===
                    Math.ceil((transaction?.length || 0) / transactionsPerPage)
                }
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal
        show={openModal}
        size="md"
        popup
        onClose={() => setOpenModal(false)}
        className="mt-7 shadow-lg shadow-black z-50"
      >
        <Modal.Header></Modal.Header>
        <Modal.Body>
          <div className="w-full space-y-6">
            <h3 className="text-xl font-medium text-gray-900 ">
              Create Help Ticket
            </h3>
            <div className="w-full flex flex-col">
              <label htmlFor="topic">Topic</label>
              <select
                name="topic"
                id="topic"
                className="w-full p-3 rounded-md border-sec6 border-[2px]"
              >
                <option value="Payment">Payment</option>
                <option value="Exam">Exam</option>
                <option value="Video">Video</option>
                <option value="TextBooks">TextBooks</option>
              </select>

              <label htmlFor="message" className="mt-10">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="write your message here"
                className="border-sec6 border-[2px] p-4 rounded-md resize-none"
              ></textarea>
              <div className="w-full flex justify-between text-primary1">
                <button
                  onClick={() => setOpenModal(false)}
                  className="w-[45%] p-4 bg-secT mt-8 rounded-md"
                >
                  Close
                </button>
                <button className="w-[45%] p-4 bg-sec7 mt-8 rounded-md">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </main>
  );
};

export default MyHelpCenter;
