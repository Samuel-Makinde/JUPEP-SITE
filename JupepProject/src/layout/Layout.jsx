import PropTypes from 'prop-types';
import Navbar from "./Navbar"

const Layout = ({children}) => {
  return (
    <div>
        <Navbar />
        <main>{children}</main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Layout