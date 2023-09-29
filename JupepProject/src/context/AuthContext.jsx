import React, {useState, useContext, useEffect,} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import authFetch from "./AxiosInterceptor";



const UserContext = React.createContext();

// eslint-disable-next-line react/prop-types
const UserProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
    
    const [user, setUser] =useState(null)
    const [books, setBooks] =useState([])



    const Login = async (data, e) => {
  e.preventDefault();
  console.log(data)
  setLoading(true)
  try {
    const response = await axios.post(`https://jupeb-site-backend.onrender.com/api/v1/login`, {
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

//  const authFetch = axios.create({
//   withCredentials: true, // Include cookies in the request
// });
const fetchUser = async () => {
    try {
      const { data } = await axios.post("https://jupeb-site-backend.onrender.com/api/v1/showMe", {},
      {
        withCredentials: true, // Include cookies in the request
      }
      );
      setUser(data.username);
    } catch (error) {
      console.log(error.message)
      setUser(null);
    }
    setLoading(false);
  };

   useEffect(() => {
    fetchUser();
  }, []);


const LogOut = async (e, userId) => {
  e.preventDefault();
  setLoading(true)
  try {
    const response = await axios.post('https://jupeb-site-backend.onrender.com/api/v1/logOut',
    {
        withCredentials: true, // Include cookies in the request
      }
    )
   setLoading(false)
   setUser(null);
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
  

}
  
 
 
//   const authFetch = axios.create({
//   // withCredentials: true, 
// });

  const getBooks = async () => {
    try {
      const response = await axios.get("https://jupeb-site-backend.onrender.com/api/v1/books")
    setBooks(response.data)
    } catch (error) {
      console.log("get books error", error.message)
    }
  }

   useEffect(() => {
    getBooks();
  }, []);


  return (
    <UserContext.Provider
     value={{
      loading,
      user,
      books,
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
