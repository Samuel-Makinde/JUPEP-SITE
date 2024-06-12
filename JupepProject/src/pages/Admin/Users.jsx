import { useEffect, useState } from "react";
import users from "../../assets/Admin/user_group.png";
// import { LoadingSpinner } from "../../components/LoadingSpinner";
import transaction from "../../data/AdminTransactions";
import monthlyData from "../../data/Monthly";

const AdminUsers = () => {
  const [userDetails, setUserDetail] = useState(null);
  const setBackgroundColor = (index) => {
    const colors = ["#EFEFEF", "#FFFFFF"];
    return colors[index % colors.length];
  };
  //   const setStatusBackgroundColor = (index) => {
  //     const colors = ["#1261B2", "#BA112A", "#60B342"];
  //     return colors[index % colors.length];
  //   };
  //   const setBackgroundColor = (index) => {
  //     const colors = ["#EFEFEF", "#FFFFFF"];
  //     return colors[index % colors.length];
  //   };

  const setStatusBackgroundColor = (status) => {
    if (status === "success") {
      return "#60B342"; // Green color for success
    } else if (status === "Failed") {
      return "#BA112A"; // Red color for failed
    } else {
      return "#FFD700"; // Default color
    }
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [transactionsPerPage] = useState(10);

  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions =
    transaction && transaction
      ? transaction.slice(indexOfFirstTransaction, indexOfLastTransaction)
      : [];

  // const paginate = (pageNumber) => setCurrentPage(pageNumber);
  //   for nene
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
    <main className="pl-[26%] 2xl:pl-[33%] w-full dark:bg-navyBlue dark:text-primary1  h-full pt-24 px-6 2xl:px-12 pb-8 font-sans">
      <p className="w-full border-b-2 border-primary7 dark:border-primary1 2xl:text-2xl font-semibold ">
        Users
      </p>

      {/* user section */}
      <div className="w-full mt-[20px] flex justify-between ">
        <div className="w-[30%]  h-40 2xl:h-52 rounded-[10px] shadow-2xl dark:bg-primary3 px-4 2xl:px-6 flex justify-between">
          <h1 className="mt-7">Total Users</h1>
          <div className="w-16 h-16 2xl:w-24 2xl:h-24 rounded-[10px] py-4 bg-primary5 flex flex-col justify-center items-center mt-20">
            <img src={users} alt="users" />
            <p className="text-primary3 dark:text-primary1">
              {userDetails ? userDetails.users_records.totalUsers : 0}
            </p>
          </div>
        </div>

        <div className="w-[30%] h-40 2xl:h-52 rounded-[10px] shadow-2xl dark:bg-primary3 px-4 2xl:px-6 flex justify-between">
          <h1 className="mt-7">Active Users</h1>
          <div className="w-16 h-16 2xl:w-24 2xl:h-24  rounded-[10px] py-4 bg-primary9 flex flex-col justify-center items-center mt-20">
            <img src={users} alt="users" />
            <p className="text-primary3 ">
              {userDetails ? userDetails.users_records.activeUsers : 0}
            </p>
          </div>
        </div>

        <div className="w-[30%] h-40 2xl:h-52 rounded-[10px] shadow-2xl dark:bg-primary3 px-4 2xl:px-6 flex justify-between">
          <h1 className="mt-7">Inactive Users</h1>
          <div className="w-16 h-16 2xl:w-24 2xl:h-24 rounded-[10px] py-4 bg-sec8 flex flex-col justify-center items-center mt-20">
            <img src={users} alt="users" />
            <p className="text-primary3 dark:text-primary1">
              {userDetails ? userDetails.users_records.inactiveUsers : 0}
            </p>
          </div>
        </div>
      </div>

      {/* monthly details */}
      <div className="w-full flex justify-between">
        <table className="table-auto  dark:bg-primary3 dark:text-primary1 mt-16 w-[30%]">
          <thead>
            <tr>
              <th>Month</th>
              <th>Total Users</th>
            </tr>
          </thead>
          <tbody>
            {monthlyData.map((data, index) => (
              <tr
                key={index}
                className="h-14 w-full border-solid border-2  border-primary7"
              >
                <td className="w-50%  pl-[15%]">{data.month}</td>
                <td className="w-50% pl-[15%]">{data.totalJobs}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <table className="table-auto  dark:bg-primary3 dark:text-primary1 mt-16 w-[30%]">
          <thead>
            <tr>
              <th>Subscribtion</th>
              <th>Number</th>
            </tr>
          </thead>
          <tbody>
            {monthlyData.map((data, index) => (
              <tr
                key={index}
                className="h-14 w-full border-solid border-2  border-primary7"
              >
                <td className="w-49%  pl-[15%]">{data.month}</td>
                <td className="w-49% pl-[15%]">{data.totalJobs}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <table className="table-auto  dark:bg-primary3 dark:text-primary1 mt-16 w-[30%]">
          <thead>
            <tr>
              <th>School</th>
              <th>Number</th>
            </tr>
          </thead>
          <tbody>
            {monthlyData.map((data, index) => (
              <tr
                key={index}
                className="h-14 w-full border-solid border-2  border-primary7"
              >
                <td className="w-50%  pl-[15%]">{data.month}</td>
                <td className="w-50% pl-[15%]">{data.totalJobs}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/*  */}

      <div className="w-full h-full dark:bg-primary3 shadow-2xl rounded-[10px] mt-[70px]  ">
        <div className="w-full  h-20 2xl:h-24 flex items-center font-semibold 2xl:text-[24px] px-4 2xl:px-8">
          <h2>Total Users</h2>
        </div>
        <div className="w-full h-16  2xl:h-24 font-semibold bg-primary7 dark:bg-primary2 dark:text-primary1 mb-5 px-4 2xl:px-8 text-primary1 flex justify-center items-center text-[12px] 2xl:text-[18px]">
          <p className="w-[8%]">
            {" "}
            User ID <br /> Number
          </p>
          <p className="w-[23%]">Date.Of.Joining</p>
          <p className="w-[25%]">UserDetails</p>
          <p className="w-[15%]">Subject</p>
          <p className="w-[15%] ">Spend</p>
          <p className="w-[14%]">Status</p>
        </div>

        <div className="w-full h-full pt-2 dark:text-primary7">
          {currentTransactions.map((transaction, index) => {
            const {
              id,
              amount,
              date_time,
              email,
              phoneNumber,
              userName,
              school,
              type,
              plan,
              status,
            } = transaction;
            return (
              <div
                key={id}
                className="w-full text-sm 2xl:text-base h-28 2xl:h-24 mb-5 px-4 2xl:px-8  flex justify-center items-center capitalize"
                style={{
                  backgroundColor: setBackgroundColor(index),
                }}
              >
                <p className="w-[8%]">
                  {id ? id : "Not available"}
                  {/* {date_time} */}
                </p>
                <p className="w-[23%]">
                  {date_time ? date_time : "Not available"}
                  {/* {date_time} */}
                </p>
                <p className="w-[25%]">
                  {userName ? userName : "Not available"} <br />
                  {phoneNumber ? phoneNumber : "Not available"} <br />
                  {email ? email : "Not available"} <br />
                  {school ? school : "Not available"}
                </p>

                <p className="w-[15%]">
                  {type ? type : "Not available"}
                  {/* {type} */}
                </p>
                <p className="w-[15%]">{amount}</p>
                <div className="w-[14%]  text-primary3">
                  <p
                    className="w-[90%] h-12 flex justify-center text-primary1 items-center px-4 rounded-[10px] cursor-pointer"
                    style={{
                      backgroundColor: setStatusBackgroundColor(status),
                    }}
                  >
                    {status ? status : "Not available"}
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

export default AdminUsers;
