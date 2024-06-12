import PropTypes from "prop-types";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const Layout = ({ children, showFooter = true, showSidebar = false }) => {
  return (
    <div>
      <Navbar />
      {showSidebar && <Sidebar />}
      <main>{children}</main>
      {showFooter && <Footer />}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  showFooter: PropTypes.bool,
  showSidebar: PropTypes.bool,
};
export default Layout;
