import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { showToast } from "../components/ShowToast";

const UserContext = React.createContext();

// eslint-disable-next-line react/prop-types
const UserProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [books, setBooks] = useState([]);
  // const [userId, setUserId] = useState(null);
  // const [userId, setUserId] = useState([])
  const baseUrl = import.meta.env.EASEREADS_BASE_URL;

  const Login = async (data, e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        `https://jupeb-site-backend.onrender.com/api/v1/login`,
        {
          email: data.email,
          password: data.password,
        },
        {
          withCredentials: true,
        }
      );
      setLoading(false);
      const name = response.data.data.username;
      const userName = name.split(" ");
      const firstName = userName[0];
      const lastNameInitial =
        userName.length > 1 ? userName[userName.length - 1][0] : "";
      setUser(firstName + lastNameInitial);

      sessionStorage.setItem("accessToken", response.data.accessToken);
      sessionStorage.setItem("refreshToken", response.data.refreshToken);
      sessionStorage.setItem("UserId", response.data.data.UserId);
      sessionStorage.setItem("username", response.data.data.username);
      sessionStorage.setItem("email", response.data.data.email);

      // setUserId(response.data.data.UserId);
      // setUserId(response.data.data.UserId)
      // console.log("user id", setUserId)
      showToast(response.data.msg);
      // const page = sessionStorage.getItem("page");
      // if (page) {
      //   console.log("coming to page", page);
      //   setTimeout(() => navigate(page), 100); // Adjust the delay as needed
      // }
      navigate("/");
    } catch (error) {
      setLoading(false);
      showToast(error.response.data.msg);
    }
  };



  useEffect(() => {
    const storedUsername = sessionStorage.getItem("username");
    if (storedUsername) {
      setUser(storedUsername);
    }
    // else {
    //     fetchUser();
    // }
  }, []);

  const LogOut = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userId = sessionStorage.getItem("UserId");
      const response = await axios.post(
        `https://jupeb-site-backend.onrender.com/api/v1/logOut`,
        { user: userId } // Include the user ID in the request body
      );
      setLoading(false);
      setUser(null);
      sessionStorage.removeItem("username");
      sessionStorage.removeItem("UserId");
      sessionStorage.removeItem("accessToken");
      sessionStorage.removeItem("refreshToken");
      sessionStorage.removeItem("role");

      showToast(response.data.msg);
      navigate("/");
    } catch (error) {
      setLoading(false);
      showToast(error.response.data.msg);
    }
  };



  return (
    <UserContext.Provider
      value={{
        loading,
        user,
        books,
        setUser,
        Login,
        setLoading,
        LogOut,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(UserContext);
};

export { UserContext, UserProvider };
