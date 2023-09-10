import React, {useState, useContext, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";



const UserContext = React.createContext();

// eslint-disable-next-line react/prop-types
const UserProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
    const [user, setUser] =useState(null)


    const Login = async (data, e) => {
  e.preventDefault();
  console.log(data)
  setLoading(true)
  try {
    const response = await axios.post(`http://localhost:5000/api/v1/login`, {
        email: data.email,
        password: data.password,
      }, {
              withCredentials: true,
})
    setLoading(false)
    setUser(response.data.username)
    navigate("/");
  } catch (error) { 
    setLoading(false)
    toast.error(error.response.data.msg, {
    autoClose: false,
    closeOnClick: true,
    onClose: () => {
  },
});
  }
};

// useEffect(() => {
//     const checkAccessToken = async () => {
//       // Check if there is an access token stored in cookies
//       const accessTokenCookie = document.cookie
//         .split("; ")
//         .find((cookie) => cookie.startsWith("accessToken="));
//         console.log("acesstoken fro memory", accessTokenCookie)
//         console.log("All cookies:", document.cookie);

//       if (accessTokenCookie) {
//         // There is an access token; you can decode and validate it if needed
//         // For simplicity, we'll assume it's valid
//         setLoading(false);
//         console.log("acess token still valid")
//         return;
//       }
//       console.log("accesstoken not valid")


//       // No access token, check for a valid refresh token
//       const refreshTokenCookie = document.cookie
//         .split("; ")
//         .find((cookie) => cookie.startsWith("refreshToken="));
//       if (refreshTokenCookie) {
//         try {
//           // Use the refresh token to obtain a new access token from the server
//           const response = await axios.post(
//             "http://localhost:5000/api/v1/refreshAccessToken",
//             {
//               refreshToken: refreshTokenCookie.split("=")[1],
//             },
//             {
//               withCredentials: true,
//             }
//           );

//           // Update the user state with the new access token
//           setUser(response.data.username);
//         } catch (error) {
//           // Handle errors, e.g., the refresh token is expired
//           console.error("Error refreshing access token:", error);
//         }
//       }

//       setLoading(false);
//     };

//     checkAccessToken();
//   }, []);


const LogOut = async (e, userId) => {
  e.preventDefault();
  setLoading(true)
  try {
    const response = await axios.post('http://localhost:5000/api/v1/logOut', {user: userId} )
   setLoading(false)
    navigate("/");
  } catch (error) {
    toast.error(error.response.data.msg, {
    autoClose: false,
    closeOnClick: true,
    onClose: () => {
  },
});
  }
  

}
  
    
  

  return (
    <UserContext.Provider
     value={{
      loading,
      user,
      setUser,
      Login,
      setLoading,
      LogOut
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
