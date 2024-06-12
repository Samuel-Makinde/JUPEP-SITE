// Dropdown.js
import { Link } from "react-router-dom";
import { FiBook, FiBookOpen } from "react-icons/fi";

const Dropdown = () => {
  return (
    <div className="flex flex-col bg-primary1 absolute top-[60px] left-0 w-full">
      <Link to="/view-subject" smooth="true" duration={500}>
        <div className="flex items-center py-2 px-4">
          <FiBook size={20} />
          <h1 className="pl-2 cursor-pointer">Read Books</h1>
        </div>
      </Link>

      <Link to="/video-page" smooth="true" duration={500}>
        <div className="flex items-center py-2 px-4">
          <FiBook size={20} />
          <h1 className="pl-2 cursor-pointer">Watch Videos</h1>
        </div>
      </Link>

      <Link to="/video-page" smooth="true" duration={500}>
        <div className="flex items-center py-2 px-4">
          <FiBook size={20} />
          <h1 className="pl-2 cursor-pointer">Ask EaseReads A.I</h1>
        </div>
      </Link>

      <Link to="/video-page" smooth="true" duration={500}>
        <div className="flex items-center py-2 px-4">
          <FiBook size={20} />
          <h1 className="pl-2 cursor-pointer">Take Exams</h1>
        </div>
      </Link>

      <Link to="/video-page" smooth="true" duration={500}>
        <div className="flex items-center py-2 px-4">
          <FiBook size={20} />
          <h1 className="pl-2 cursor-pointer">Study Planner</h1>
        </div>
      </Link>
      {/* Add more secondary options as needed */}
    </div>
  );
};

export default Dropdown;
