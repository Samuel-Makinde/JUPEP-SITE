import PropTypes from "prop-types";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children, showFooter = true }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      {showFooter && <Footer />}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  showFooter: PropTypes.bool,
};
export default Layout;
