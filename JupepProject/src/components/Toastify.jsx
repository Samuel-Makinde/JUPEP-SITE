import { Toast } from "flowbite-react";
import { HiFire } from "react-icons/hi";

const Toastify = ({ message }) => {
  return (
    <div className=" lg:pl-[26%] 2xl:pl-[33%] px-6 2xl:px-12  dark:bg-navyBlue ">
      <div className="bg-blue-700 p-8 ">
        <Toast>
          <div className="inline-flex  h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-500 dark:bg-cyan-800 dark:text-cyan-200">
            <HiFire className="h-5 w-5" />
          </div>
          <div className="ml-3 text-sm font-normal">{message}.</div>
          {/* <Toast.Toggle /> */}
        </Toast>
      </div>
    </div>
  );
};
export default Toastify;
