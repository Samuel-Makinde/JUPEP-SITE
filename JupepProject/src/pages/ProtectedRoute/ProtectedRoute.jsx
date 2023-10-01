import {Routes, Route, redirect } from "react-router-dom"
import { useGlobalContext } from "../../context/AuthContext"
import PropTypes from "prop-types";


const ProtectedRoute = ({children, ...rest}) => {
const {user} = useGlobalContext()

return (
    <main>
        <Routes>

        <Route
         {...rest}
         render={() => {
             return user ? children : redirect("/login");
            }}
            ></Route>
        </Routes>
    </main>
  )
}

ProtectedRoute.propTypes = {
   children: PropTypes.node.isRequired,
};

export default ProtectedRoute