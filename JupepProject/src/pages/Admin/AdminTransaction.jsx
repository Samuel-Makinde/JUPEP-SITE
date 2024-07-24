import users from "../../assets/Admin/user_group.png";
import overviews from "../../data/AdminHeader";
import transactions from "../../data/AdminTransactions";
import { useEffect, useState } from "react";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import monthlyData from "../../data/Monthly";
import UserModal from "../../components/UserModal";

const AdminTransaction = () => {
  //   const [transactions, setTransactions] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [transactionsPerPage] = useState(10);
  const [transId, setTransId] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (id) => {
    setTransId(id); // Set the id of the clicked transaction
    setOpenModal(true); // Open the modal
  };

  const setBackgroundColor = (index) => {
    const colors = ["#EFEFEF", "#FFFFFF"];
    return colors[index % colors.length];
  };

  const setStatusBackgroundColor = (status) => {
    if (status === "success" || status === "Successful Payment") {
      return "#60B342"; // Green color for success
    } else if (
      status === "Failed" ||
      status === "Failed Transactions" ||
      status === "Cancel Transaction"
    ) {
      return "#BA112A"; // Red color for failed,
    } else {
      return "#FFD700"; // Default color
    }
  };

  const setActionBackgroundColor = (index) => {
    const colors = ["#1261B2"];
    return colors[index % colors.length];
  };

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
      <p className="w-full border-b-2 border-primary7 dark:text-primary1 dark:border-primary1 md:text-[16px] xl:text-[18px] font-semibold ">
        Transaction
      </p>

      {/* user section */}
      <div className="w-full flex justify-between mt-10">
        {overviews.map((overview) => {
          const { id, name, amount, index } = overview;

          return (
            <div
              key={id}
              className="w-[24%] h-40 2xl:h-52 flex flex-col  justify-center dark:bg-primary3 rounded-[10px] shadow-2xl px-2 font-sans"
            >
              <p className="dark:text-primary1 text-lg md:text-[14px] xl:text-[16px] font-medium">
                {name}
              </p>
              <div className="w-full flex justify-between mt-5">
                <div
                  className="w-[80%] text-primary1 rounded-[10px]  cursor-pointer"
                  style={{
                    backgroundColor: setStatusBackgroundColor(name),
                  }}
                >
                  <p
                    className={`w-[100%] h-12 flex justify-center items-center px-4`}
                  >
                    N{amount}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* monthly details */}
      <div className="w-full flex justify-between">
        <table className="table-auto  dark:bg-primary3 dark:text-primary1 mt-16 w-[30%]">
          <thead>
            <tr>
              <th>Month</th>
              <th>Success</th>
            </tr>
          </thead>
          <tbody>
            {monthlyData.map((data, index) => (
              <tr
                key={index}
                className="h-14 w-full border-solid border-2  border-primary7"
              >
                <td className="w-40%  pl-[5%]">{data.month}</td>
                <td className="w-60% pl-[0%]">{data.totalJobs}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <table className="table-auto  dark:bg-primary3 dark:text-primary1 mt-16 w-[30%]">
          <thead>
            <tr>
              <th>Month</th>
              <th>Failed</th>
            </tr>
          </thead>
          <tbody>
            {monthlyData.map((data, index) => (
              <tr
                key={index}
                className="h-14 w-full border-solid border-2  border-primary7"
              >
                <td className="w-40%  pl-[5%]">{data.month}</td>
                <td className="w-60% pl-[0%]">{data.totalJobs}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <table className="table-auto  dark:bg-primary3 dark:text-primary1 mt-16 w-[30%]">
          <thead>
            <tr>
              <th>Month</th>
              <th>Canceled</th>
            </tr>
          </thead>
          <tbody>
            {monthlyData.map((data, index) => (
              <tr
                key={index}
                className="h-14 w-full border-solid border-2  border-primary7"
              >
                <td className="w-40%  pl-[5%]">{data.month}</td>
                <td className="w-60% pl-[0%]">{data.totalJobs}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-19">
        {/* <SimpleBarChart /> */}
      </div>
      <div className="w-full h-full dark:bg-primary3  shadow-2xl rounded-[10px] mt-16  ">
        <div className="w-full h-20 2xl:h-24 flex dark:text-primary1 items-center font-semibold md:text-[16px] xl:text-[18px] px-4 2xl:px-8">
          <h2>Transaction History</h2>
        </div>
        <div className="w-full h-16  2xl:h-24 font-semibold bg-primary7 dark:bg-primary2 mb-5 px-4 2xl:px-8 text-primary1 flex justify-center items-center text-xs md:text-[16px] xl:text-[18px]">
          <p className="w-[9%]">Num</p>
          <p className="w-[12%]">Date&Time </p>
          <p className="w-[26%]">User Details</p>
          <p className="w-[15%]">Subject's</p>
          <p className="w-[13%]">Amount</p>
          <p className="w-[15%]">Status</p>
          <p className="w-[10%] ">Action</p>
        </div>

        <div className="w-full h-full pt-2">
          {transactions && transactions.length > 0 ? (
            currentTransactions.map((transaction, index) => {
              const {
                id,
                date_time,
                userName,
                phoneNumber,
                email,
                school,
                Subjects,
                amount,
                type,
                plan,
                status,
              } = transaction;

              return (
                <div
                  key={id}
                  className="w-full h-24 text-xs 2xl:text-base mb-5 px-4 2xl:px-8  flex justify-center items-center capitalize font-semibold"
                  style={{
                    backgroundColor: setBackgroundColor(index),
                  }}
                >
                  <p className="w-[9%]">{id}</p>
                  <p className="w-[12%]">{date_time}</p>
                  <p className="w-[26%]">
                    {userName ? userName : "Not available"} <br />
                    {phoneNumber ? phoneNumber : "Not available"} <br />
                    {email ? email : "Not available"} <br />
                    {Subjects ? Subjects : "Not available"} <br />
                    {school ? school : "Not available"}
                  </p>
                  <div className="w-[15%]  flex  items-center">
                    {type ? type : "Not available"} <br />
                    {plan ? plan : "Not available"} <br />
                    {type ? type : "Not available"} <br />
                  </div>

                  <div className="w-[13%]">
                    <p>{amount}</p>
                  </div>
                  <div className="w-[15%] text-primary1 rounded-[10px]  cursor-pointer">
                    <p
                      style={{
                        backgroundColor: setStatusBackgroundColor(status),
                      }}
                      className="w-[90%] h-12 flex justify-center items-center px-4 rounded-[10px] cursor-pointer"
                    >
                      {status}
                    </p>
                  </div>

                  <div
                    className="w-[10%] text-primary1 rounded-[10px]  cursor-pointer"
                    style={{
                      backgroundColor: setActionBackgroundColor(index),
                    }}
                  >
                    <p
                      className="w-[90%] h-12 flex justify-center items-center px-4  "
                      onClick={() => handleOpenModal(id)}
                    >
                      {/* {action} */}
                      View
                    </p>
                    <UserModal
                      openModal={openModal}
                      setOpenModal={setOpenModal}
                      supportID={transId}
                    />
                  </div>
                </div>
              );
            })
          ) : (
            <LoadingSpinner />
          )}

          {/* new */}
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

export default AdminTransaction;
