import message from "../assets/Chat.png";
import { useGlobalContext } from "../context/AuthContext";
const Sidebar = () => {
  const { user } = useGlobalContext();

  return (
    <main className="fixed hidden md:flex w-[23%] 2xl:w-[25%] top-0 h-screen text-primary1  bg-sec9 dark:bg-navyBlue dark:shadow-secH shadow-2xl pt-[120px] 2xl:pt-[165px] ">
      <div className="w-full px-6">
        <div className="w-full  flex justify-between ">
          Ask EaseReads A.I
          <img src={message} alt="chat" />
        </div>
        <div className="w-full h-full bottom-0">
          <p>{user ? user : ""}</p>
        </div>
      </div>
    </main>
  );
};

export default Sidebar;
