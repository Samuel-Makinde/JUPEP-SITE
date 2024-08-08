import React, { useState } from "react";
import { SmallBox2 } from "../../../components/Cards/Box";
import { Link } from "react-router-dom";
import transaction from "../../../data/AdminTransactions";

const MyExams = () => {
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
        <SmallBox2 title="Total Subject" number="4" />
        <SmallBox2 title="Number" number="4" />
        <SmallBox2 title="Average Score" number="4" />
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
        <div className="w-full h-20 2xl:h-24 flex items-center font-semibold 2xl:text-2xl px-4 2xl:px-8">
          <h2>Exam Practice History</h2>
        </div>
        <div className="w-full h-16 text-primary1 2xl:h-24 bg-primary2 mb-5 px-4 2xl:px-8 font-semibold  flex justify-center items-center">
          <p className="w-[25%]">Date</p>
          <p className="w-[33%]">Subject</p>
          <p className="w-[15%]">Score</p>
          <p className="w-[27%]">Review</p>
        </div>

        <div className="w-full  h-full pt-2 dark:text-primary7">
          {currentTransactions.map((transaction, index) => {
            const { id, NoU, date_time, type, status, Subjects } = transaction;
            return (
              <div
                key={id}
                className="w-full text-sm 2xl:text-base h-28 2xl:h-24 mb-5 px-4 2xl:px-8  flex justify-center items-center capitalize"
                style={{
                  backgroundColor: setBackgroundColor(index),
                }}
              >
                <p className="w-[25%]">
                  {date_time ? date_time : "Not available"}
                  {/* {date_time} */}
                </p>
                <p className="w-[33%]">
                  {Subjects ? Subjects : "Not available"} <br />
                  Questions: {NoU ? NoU : "Not available"} <br />
                </p>
                <p className="w-[15%]">
                  {NoU ? NoU : "Not available"}
                  {/* {type} */}
                </p>
                <div className="w-[27%]  text-primary3">
                  <p
                    className="w-[98%] h-12 flex justify-center text-primary1 items-center px-4 rounded-[10px] cursor-pointer"
                    style={{
                      backgroundColor: setStatusBackgroundColor(status),
                    }}
                  >
                    View Questions
                    {/* {status} */}
                  </p>
                </div>
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
    </main>
  );
};

export default MyExams;
