import axios from "axios";
import { useNavigate } from "react-router-dom";

const authFetch = axios.create({
    withCredentials: true,
})

authFetch.interceptors.response.use(
    (response) => {
        console.log("got response")
        return response;
    },
    (error) => {
        console.log("error response")
        if (error.response.status === 401 || error.response.status === 404) {
            const navigate = useNavigate();
            navigate('/login');
        }
        return Promise.reject(error);
    }
)

export default authFetch