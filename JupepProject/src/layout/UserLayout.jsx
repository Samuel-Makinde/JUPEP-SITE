import PropTypes from "prop-types";

import UserSidebar from "./UserSidebar";
import UserNavbar from "./UserNavbar";
import { useState } from "react";

const UserLayout = ({ children }) => {
  const [blur, setBlur] = useState(false);
  return (
    <div>
      <UserNavbar setBlur={setBlur} blur={blur} />
      <main className={`${blur ? "blur-sm" : ""} transition-all duration-200`}>
        {children}
      </main>
      <UserSidebar setBlur={blur} />
    </div>
  );
};

UserLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserLayout;
