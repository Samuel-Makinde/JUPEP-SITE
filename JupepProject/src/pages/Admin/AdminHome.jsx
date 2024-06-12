import { useEffect, useState } from "react";
import overviews from "../../data/AdminOverview";
import { useNavigate, Link } from "react-router-dom";
import transaction from "../../data/AdminTransactions";
import users from "../../assets/Admin/user_group.png";
// import AdminInterceptor from "../../component/AdminInterceptor";
import { LoadingSpinnerSmall } from "../../components/LoadingSpinner";

const AdminHome = () => {
  const [userDetails, setUserDetail] = useState(null);
  // for nene
  const [currentPage, setCurrentPage] = useState(1);
  const [transactionsPerPage] = useState(10);

  // const authFetch = AdminInterceptor();
  // const navigate = useNavigate();

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
      <p className="w-full border-b-2 border-black dark:border-primary1 xl:text-2xl font-semibold">
        Dashboard Overview
      </p>
      <div className="w-full  flex justify-between mt-[40px]">
        {overviews.map((overview) => {
          const { id, name, image, amount } = overview;

          return (
            <div
              key={id}
              className="w-[24%] h-40 2xl:h-52 flex flex-col  justify-center dark:bg-primary3 rounded-[10px] shadow-2xl px-2"
            >
              <p className="text-primary7 dark:text-primary1 2xl:text-base md:text-sm font-medium">
                {name}
              </p>
              <div className="w-full flex justify-between mt-5">
                <p className="font-medium text-base xl:text-base md:text-sm">
                  {amount ? amount : <LoadingSpinnerSmall />} <br />
                  Monthly {amount ? amount : <LoadingSpinnerSmall />}
                </p>
                <img src={image} alt="image" />
              </div>
            </div>
          );
        })}
      </div>

      {/* user/loan section */}
      <div className="w-full h-full mt-16 flex justify-between ">
        <div className="w-[49%] h-full">
          <p className="font-semibold xl:text-[16px] md:text-[14px] text-base ">
            Subscribers
          </p>
          <div className="mt-10 w-full h-96  flex flex-col justify-center items-center dark:bg-primary3 rounded-[10px] shadow-2xl px-4 2xl:px-8 ">
            <div className="w-full h-24 2xl:h-28 flex justify-between items-center">
              <p className="xl:text-[16px] md:text-[14px] text-base">
                Total Subscribers
              </p>
              <div className="w-[40%] h-16 2xl:w-24 2xl:h-24 rounded-[10px] bg-sec7 flex flex-col justify-center items-center">
                <img src={users} alt="users" />
                <p className="text-primary1 ">
                  {userDetails ? userDetails.users_record.totalUsers : 0}
                </p>
              </div>
            </div>

            <div className="w-full h-24 2xl:h-28 flex justify-between items-center mt-2">
              <p className="xl:text-[16px] md:text-[14px]">Free Subscribers</p>
              <div className="w-[40%] h-16 2xl:w-24 2xl:h-24 rounded-[10px] bg-secR flex flex-col justify-center items-center">
                <img src={users} alt="users" />
                <p className="text-primary1 ">
                  {userDetails ? userDetails.users_record.activeUsers : 0}
                </p>
              </div>
            </div>

            <div className="w-full h-24 2xl:h-28 flex justify-between items-center mt-2">
              <p className="xl:text-[16px] md:text-[14px]">Plus Subscribers</p>
              <div className="w-[40%] h-16 2xl:w-24 2xl:h-24 rounded-[10px] bg-primary5 flex flex-col justify-center items-center">
                <img src={users} alt="users" />
                <p className="text-primary1 ">
                  {userDetails ? userDetails.users_record.inactiveUsers : 0}
                </p>
              </div>
            </div>
            <div className="w-full h-24 2xl:h-28 flex justify-between items-center mt-2">
              <p className="xl:text-[16px] md:text-[14px]">Pro Subscribers</p>
              <div className="w-[40%] h-16 2xl:w-24 2xl:h-24 rounded-[10px] bg-sec9 flex flex-col justify-center items-center">
                <img src={users} alt="users" />
                <p className="text-primary1 ">
                  {userDetails ? userDetails.users_record.inactiveUsers : 0}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[49%] h-full">
          <p className="font-semibold md:text-[14px] xl:text-[16px] text-[18px]">
            Messages & Support
          </p>
          <div className="mt-10 w-full h-96  flex flex-col justify-center items-center  dark:bg-primary3 rounded-[10px] shadow-2xl px-4 2xl:px-8 ">
            <div className="w-full h-24 2xl:h-28 flex justify-between items-center">
              <p className="md:text-[14px] xl:text-[16px]">Total Messages</p>
              <div className="w-[40%] h-[73px] 2xl:w-[91px] 2xl:h-[93px] rounded-[10px] dark:bg-primary4 bg-sec1 flex flex-col justify-center items-center">
                <p className="dark:text-primary7 text-primary1 mt-1 text-sm">
                  0
                </p>
              </div>
            </div>

            <div className="w-full h-24 2xl:h-28 flex justify-between items-center mt-2">
              <p className="md:text-[14px] xl:text-[16px]">Pending Messages</p>
              <div className="w-[40%] h-[73px] 2xl:w-[91px] 2xl:h-[93px] rounded-[10px] bg-primary5 flex flex-col justify-center items-center">
                <p className="dark:text-primary7 text-primary1 mt-1 text-sm">
                  0
                </p>
              </div>
            </div>

            <div className="w-full h-24 flex justify-between items-center mt-[10px]">
              <p className="md:text-[14px] xl:text-[16px]">Total Supports</p>
              <div className="w-[40%] h-[73px] 2xl:w-[91px] 2xl:h-[93px] rounded-[10px] dark:bg-primary4 bg-sec1 flex flex-col justify-center items-center">
                <p className="dark:text-primary7 text-primary1 text-sm mt-1">
                  0
                </p>
              </div>
            </div>
            <div className="w-full h-24 flex justify-between items-center mt-[10px]">
              <p className="md:text-[14px] xl:text-[16px]">Pending Supports</p>
              <div className="w-[40%] h-[73px] 2xl:w-[91px] 2xl:h-[93px] rounded-[10px] bg-primary5 flex flex-col justify-center items-center">
                <p className="dark:text-primary7 text-primary1 text-sm mt-1">
                  0
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* page views */}
      <div className="w-full h-full mt-16 flex justify-between ">
        <div className="w-[49%] h-full">
          <p className="font-semibold xl:text-[16px] md:text-[14px] text-base ">
            Landing Page Views
          </p>
          <div className="mt-10 w-full h-[480px]  flex flex-col justify-center items-center dark:bg-primary3 rounded-[10px] shadow-2xl px-4 2xl:px-8 ">
            <div className="w-full h-24 2xl:h-28 flex justify-between items-center">
              <p className="xl:text-[16px] md:text-[14px] text-base">
                Landing Page
              </p>
              <div className="w-[40%] h-16 2xl:w-24 2xl:h-24 rounded-[10px] bg-sec7 flex flex-col justify-center items-center">
                <img src={users} alt="users" />
                <p className="text-primary1 ">
                  {userDetails ? userDetails.users_record.totalUsers : 0}
                </p>
              </div>
            </div>

            <div className="w-full h-24 2xl:h-28 flex justify-between items-center mt-2">
              <p className="xl:text-[16px] md:text-[14px]">Books Page</p>
              <div className="w-[40%] h-16 2xl:w-24 2xl:h-24 rounded-[10px] bg-secR flex flex-col justify-center items-center">
                <img src={users} alt="users" />
                <p className="text-primary1 ">
                  {userDetails ? userDetails.users_record.activeUsers : 0}
                </p>
              </div>
            </div>

            <div className="w-full h-24 2xl:h-28 flex justify-between items-center mt-2">
              <p className="xl:text-[16px] md:text-[14px]">Exam Page</p>
              <div className="w-[40%] h-16 2xl:w-24 2xl:h-24 rounded-[10px] bg-sec10 flex flex-col justify-center items-center">
                <img src={users} alt="users" />
                <p className="text-primary1 ">
                  {userDetails ? userDetails.users_record.activeUsers : 0}
                </p>
              </div>
            </div>

            <div className="w-full h-24 2xl:h-28 flex justify-between items-center mt-2">
              <p className="xl:text-[16px] md:text-[14px]">EaseReads A.I</p>
              <div className="w-[40%] h-16 2xl:w-24 2xl:h-24 rounded-[10px] bg-primary5 flex flex-col justify-center items-center">
                <img src={users} alt="users" />
                <p className="text-primary1 ">
                  {userDetails ? userDetails.users_record.inactiveUsers : 0}
                </p>
              </div>
            </div>
            <div className="w-full h-24 2xl:h-28 flex justify-between items-center mt-2">
              <p className="xl:text-[16px] md:text-[14px]">Study Planner</p>
              <div className="w-[40%] h-16 2xl:w-24 2xl:h-24 rounded-[10px] bg-primary6 flex flex-col justify-center items-center">
                <img src={users} alt="users" />
                <p className="text-primary1 ">
                  {userDetails ? userDetails.users_record.inactiveUsers : 0}
                </p>
              </div>
            </div>
            <div className="w-full h-24 2xl:h-28 flex justify-between items-center mt-2">
              <p className="xl:text-[16px] md:text-[14px]">Video</p>
              <div className="w-[40%] h-16 2xl:w-24 2xl:h-24 rounded-[10px] bg-sec9 flex flex-col justify-center items-center">
                <img src={users} alt="users" />
                <p className="text-primary1 ">
                  {userDetails ? userDetails.users_record.inactiveUsers : 0}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[49%] h-full">
          <p className="font-semibold xl:text-[16px] md:text-[14px] text-base ">
            Main Page Views
          </p>
          <div className="mt-10 w-full h-[480px]  flex flex-col justify-center items-center dark:bg-primary3 rounded-[10px] shadow-2xl px-4 2xl:px-8 ">
            <div className="w-full h-24 2xl:h-28 flex justify-between items-center">
              <p className="xl:text-[16px] md:text-[14px] text-base">
                User Dashboard Page
              </p>
              <div className="w-[40%] h-16 2xl:w-24 2xl:h-24 rounded-[10px] bg-sec7 flex flex-col justify-center items-center">
                <img src={users} alt="users" />
                <p className="text-primary1 ">
                  {userDetails ? userDetails.users_record.totalUsers : 0}
                </p>
              </div>
            </div>

            <div className="w-full h-24 2xl:h-28 flex justify-between items-center mt-2">
              <p className="xl:text-[16px] md:text-[14px]">Books Page</p>
              <div className="w-[40%] h-16 2xl:w-24 2xl:h-24 rounded-[10px] bg-secR flex flex-col justify-center items-center">
                <img src={users} alt="users" />
                <p className="text-primary1 ">
                  {userDetails ? userDetails.users_record.activeUsers : 0}
                </p>
              </div>
            </div>

            <div className="w-full h-24 2xl:h-28 flex justify-between items-center mt-2">
              <p className="xl:text-[16px] md:text-[14px]">Exam Page</p>
              <div className="w-[40%] h-16 2xl:w-24 2xl:h-24 rounded-[10px] bg-sec10 flex flex-col justify-center items-center">
                <img src={users} alt="users" />
                <p className="text-primary1 ">
                  {userDetails ? userDetails.users_record.activeUsers : 0}
                </p>
              </div>
            </div>

            <div className="w-full h-24 2xl:h-28 flex justify-between items-center mt-2">
              <p className="xl:text-[16px] md:text-[14px]">EaseReads A.I</p>
              <div className="w-[40%] h-16 2xl:w-24 2xl:h-24 rounded-[10px] bg-primary5 flex flex-col justify-center items-center">
                <img src={users} alt="users" />
                <p className="text-primary1 ">
                  {userDetails ? userDetails.users_record.inactiveUsers : 0}
                </p>
              </div>
            </div>
            <div className="w-full h-24 2xl:h-28 flex justify-between items-center mt-2">
              <p className="xl:text-[16px] md:text-[14px]">Study Planner</p>
              <div className="w-[40%] h-16 2xl:w-24 2xl:h-24 rounded-[10px] bg-primary6 flex flex-col justify-center items-center">
                <img src={users} alt="users" />
                <p className="text-primary1 ">
                  {userDetails ? userDetails.users_record.inactiveUsers : 0}
                </p>
              </div>
            </div>
            <div className="w-full h-24 2xl:h-28 flex justify-between items-center mt-2">
              <p className="xl:text-[16px] md:text-[14px]">Video</p>
              <div className="w-[40%] h-16 2xl:w-24 2xl:h-24 rounded-[10px] bg-sec9 flex flex-col justify-center items-center">
                <img src={users} alt="users" />
                <p className="text-primary1 ">
                  {userDetails ? userDetails.users_record.inactiveUsers : 0}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* recent transaction */}
      <div className="w-full h-full dark:bg-primary3 shadow-2xl rounded-[10px] mt-16  ">
        <div className="w-full h-20 2xl:h-24 flex items-center font-semibold 2xl:text-2xl px-4 2xl:px-8">
          <h2>Recent Transactions</h2>
        </div>
        <div className="w-full h-16  2xl:h-24 bg-primary2 mb-5 px-4 2xl:px-8 font-semibold  flex justify-center items-center">
          <p className="w-[17%]">Date & Time</p>
          <p className="w-[23%]">User Details</p>
          <p className="w-[15%]">Type</p>
          <p className="w-[15%]">Payment Method</p>
          <p className="w-[15%]">Amount</p>
          <p className="w-[15%]">Status</p>
          {/* <p className="w-[10%] ">Action</p> */}
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
                <p className="w-[17%]">
                  {date_time ? date_time : "Not available"}
                  {/* {date_time} */}
                </p>
                <p className="w-[23%]">
                  {userName ? userName : "Not available"} <br />
                  {phoneNumber ? phoneNumber : "Not available"} <br />
                  {email ? email : "Not available"} <br />
                  {school ? school : "Not available"}
                </p>
                <div className="w-[15%] h-[70px] flex  items-center">
                  <p> {plan ? `${plan} plan` : "Not available"}</p>
                </div>
                <p className="w-[15%]">
                  {type ? type : "Not available"}
                  {/* {type} */}
                </p>
                <p className="w-[15%]">{amount}</p>
                <div className="w-[15%]  text-primary3">
                  <p
                    className="w-[80%] h-12 flex justify-center text-primary1 items-center px-4 rounded-[10px] cursor-pointer"
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

export default AdminHome;
