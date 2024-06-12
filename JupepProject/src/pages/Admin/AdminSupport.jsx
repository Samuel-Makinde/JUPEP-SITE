import { useState, useEffect } from "react";
import SupportModal from "../../components/SupportModal";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import "../../index.css";
import transactions from "../../data/AdminTransactions";
import { Button, Tooltip } from "flowbite-react";
import users from "../../assets/Admin/user_group.png";

const AdminSupport = () => {
  const [isActive, setIsActive] = useState("all");
  const [openModal, setOpenModal] = useState(false);
  //   const [messages, setMessages] = useState(null);
  const [supportID, setSupportID] = useState(null);
  const [messageLength, setMessageLength] = useState(null);
  const [userDetails, setUserDetail] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [transactionsPerPage] = useState(10);

  const handleOptionClick = (option) => {
    setIsActive(option);
  };

  const setStatusBackgroundColor = (status) => {
    if (status === "completed") {
      return "#60B342";
    } else {
      return "#BA112A"; // Red color for failed,
    }
  };
  const setBackgroundColor = (index) => {
    const colors = ["#EFEFEF", "#FFFFFF"];
    return colors[index % colors.length];
  };

  const MAX_MESSAGE_LENGTH = 20;

  const truncateMessage = (messages) => {
    if (messages.length > MAX_MESSAGE_LENGTH) {
      return messages.slice(0, MAX_MESSAGE_LENGTH) + "...";
    }
    return messages;
  };

  // to change date
  const formatDate = (dateString) => {
    const date = new Date(dateString);

    // Format the day
    const day = date.getDate().toString().padStart(2, "0");

    // Format the month
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const month = months[date.getMonth()];

    // Format the year
    const year = date.getFullYear().toString().slice(-2);

    // Format the time
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");

    return `${day}, ${month} ${year}, ${hours}:${minutes}`;
  };

  const handleOpenModal = (id) => {
    setSupportID(id); // Set the id of the clicked transaction
    setOpenModal(true); // Open the modal
  };

  // pagination
  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = transactions.slice(
    indexOfFirstTransaction,
    indexOfLastTransaction
  );

  const paginate = (pageNumber) => {
    if (pageNumber < 1) {
      setCurrentPage(1);
    } else if (
      pageNumber > Math.ceil(transactions.length / transactionsPerPage)
    ) {
      setCurrentPage(Math.ceil(transactions.length / transactionsPerPage));
    } else {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <main className="pl-[26%] 2xl:pl-[33%] w-full dark:bg-navyBlue  h-full pt-24 px-6 2xl:px-12 pb-8 font-sans">
      <p className="w-full border-b-2 border-primary7 dark:text-primary1 dark:border-primary1 md:text-[14px] xl:text-[16px] font-semibold">
        Messages
      </p>

      {/* user section */}
      <div className="w-full mt-[20px] dark:text-primary1 flex justify-between ">
        <div className="w-[30%]  h-40 2xl:h-52 rounded-[10px] shadow-2xl dark:bg-primary3 px-4 2xl:px-6 flex justify-between">
          <h1 className="mt-7">Total Support</h1>
          <div className="w-16 h-16 2xl:w-24 2xl:h-24 rounded-[10px] py-4 bg-primary5 flex flex-col justify-center items-center mt-20">
            <img src={users} alt="users" />
            <p className="text-primary3 dark:text-primary1">
              {userDetails ? userDetails.users_records.totalUsers : 0}
            </p>
          </div>
        </div>

        <div className="w-[30%] h-40 2xl:h-52 rounded-[10px] shadow-2xl dark:bg-primary3 px-4 2xl:px-6 flex justify-between">
          <h1 className="mt-7">Replied Support</h1>
          <div className="w-16 h-16 2xl:w-24 2xl:h-24  rounded-[10px] py-4 bg-primary9 flex flex-col justify-center items-center mt-20">
            <img src={users} alt="users" />
            <p className="text-primary3 ">
              {userDetails ? userDetails.users_records.activeUsers : 0}
            </p>
          </div>
        </div>

        <div className="w-[30%] h-40 2xl:h-52 rounded-[10px] shadow-2xl dark:bg-primary3 px-4 2xl:px-6 flex justify-between">
          <h1 className="mt-7">Pending Support</h1>
          <div className="w-16 h-16 2xl:w-24 2xl:h-24 rounded-[10px] py-4 bg-sec8 flex flex-col justify-center items-center mt-20">
            <img src={users} alt="users" />
            <p className="text-primary3 dark:text-primary1">
              {userDetails ? userDetails.users_records.inactiveUsers : 0}
            </p>
          </div>
        </div>
      </div>

      {/* messages area */}
      <div className="w-full h-full dark:bg-primary3 shadow-2xl rounded-[10px] 2xl:mt-16 mt-12  ">
        <div className="w-full h-28 2xl:h-32">
          <div className="w-full  2xl:pt-10 pt-8 flex items-center justify-between font-semibold md:text-[14px] xl:text-[16px] px-4 2xl:px-8">
            <div className="w-[60%] flex dark:text-primary1">
              <p
                className={`cursor-pointer ${
                  isActive === "all"
                    ? "border-b-[3px] border-b-solid border-b-primary7 dark:border-b-primary9 border-spacing-x-4"
                    : ""
                }`}
                onClick={() => handleOptionClick("all")}
              >
                All ({100})
              </p>
              <p
                className={`ml-16 cursor-pointer ${
                  isActive === "unread"
                    ? "border-b-[3px] border-b-solid border-b-primary7 dark:border-b-primary9 "
                    : ""
                }`}
                onClick={() => handleOptionClick("unread")}
              >
                Unread (100)
              </p>
            </div>
          </div>

          <div
            className={`pt-5 border-b-2 border-b-secH dark:border-b-sec5 `}
          ></div>
        </div>

        <div className="w-full h-16 2xl:h-24 bg-primary7 dark:bg-primary2 mb-5 px-4 2xl:px-8 text-primary1 flex justify-center items-center">
          <p className="w-[6%]">Id</p>
          <p className="w-[15%]">Date & Time</p>
          <p className="w-[22%]">User Details </p>
          <p className="w-[10%]">Topic</p>
          <p className="w-[19%]">Description</p>
          <p className="w-[15%]">Status</p>
          <p className="w-[12%] ">Action</p>
        </div>

        <div className="w-full text-sm 2xl:text-base h-full pt-2">
          {transactions && transactions.length > 0 ? (
            currentTransactions.map((transaction, index) => {
              const {
                id,
                date_time,
                email,
                phoneNumber,
                userName,
                school,
                address,
              } = transaction;
              return (
                <div
                  key={id}
                  className="w-full h-24 mb-5 px-4 2xl:px-8  flex justify-center items-center capitalize"
                  style={{
                    backgroundColor: setBackgroundColor(index),
                  }}
                >
                  {/* <div className="w-[21%] flex">
                    <input type="checkbox" name="first" id="first" />
                    <input
                      type="radio"
                      name="second"
                      id="second"
                      className="ml-2"
                    />
                    <p className="ml-2">{formatDate(created_at)} </p>
                  </div> */}
                  <p className="w-[6%] ">00{id}</p>
                  <p className="w-[15%] ">{date_time}</p>
                  <p className="w-[22%]">
                    {userName ? userName : "Not available"} <br />
                    {phoneNumber ? phoneNumber : "Not available"} <br />
                    {email ? email : "Not available"} <br />
                    {school ? school : "Not available"}
                  </p>
                  <p className="w-[10%]">Loan</p>
                  <div className="w-[19%] tooltip cursor-pointer">
                    {/* <span className="tooltiptext">{address}</span> */}
                    <p>{truncateMessage(address)}</p>
                  </div>
                  <div className="w-[15%] text-primary1 rounded-[10px]  cursor-pointer">
                    <p
                      className="w-[90%] h-12 flex justify-center items-center px-4 rounded-[10px] cursor-pointer"
                      style={{
                        backgroundColor: setStatusBackgroundColor("pending"),
                      }}
                    >
                      Pending
                    </p>
                  </div>

                  <div className="w-[12%] text-primary3">
                    <button
                      className="w-[90%] h-12 flex justify-center items-center px-4 rounded-[10px] text-primary1 bg-primary10 cursor-pointer"
                      onClick={() => handleOpenModal(id)}
                    >
                      Reply
                    </button>
                    <SupportModal
                      openModal={openModal}
                      setOpenModal={setOpenModal}
                      supportID={supportID}
                      userMessage={address}
                    />
                  </div>
                </div>
              );
            })
          ) : (
            <div className="w-full h-20 flex justify-center pr-10">
              No Message Available
            </div>
          )}
          {/* Pagination Buttons */}
          <div className="flex justify-center h-20 mt-10 dark:text-primary1">
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
                {transactions &&
                  transactions &&
                  Array.from({
                    length: Math.ceil(
                      transactions.length / transactionsPerPage
                    ),
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
                  !transactions ||
                  currentPage ===
                    Math.ceil((transactions?.length || 0) / transactionsPerPage)
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

export default AdminSupport;
