import {NavLink} from "react-router-dom"
import { useState } from "react"
import dashboard from "../assets/Admin/side_dashboard.png"
import dashboardColor from "../assets/Admin/side_dashboard_color.png"
import user from "../assets/Admin/side_user.png"
import userWhite from "../assets/Admin/user_white.png"
import logout from "../assets/Admin/side_logout.png"




const AdminSidebar = () => {
     const [isActive, setIsActive] = useState("/admin")

    const handleOptionClick = (option) => {
    setIsActive(option);
  };
  return (
    <main className="fixed w-[23%] 2xl:w-[25%] top-0 h-screen flex flex-col items-center bg-white shadow-2xl pt-[120px] 2xl:pt-[165px] ">
       
            <NavLink to="/admin/" 
            className={`w-[80%] 2xl:h-[86px] h-[50px] text-[#625E5E] ${isActive === "/admin" ? "rounded-[10px] bg-black text-white" : ""} hover:bg-black  hover:text-white hover:rounded-[10px]`}
            onClick={() => handleOptionClick("/admin")}
            >
            <button className="w-full h-full flex justify-center items-center font-semibold">
                {isActive === "/admin" ? <img src={dashboard} alt="dashborad" className="mr-[20px] " />
                : <img src={dashboardColor} alt="dashborad" className="mr-[20px] " /> }
                <p className="w-[40%] text-left">
                Dashboard
                </p>
            </button>
            </NavLink>
        

       
        <NavLink to="/admin/users" smooth="true" duration={500}
        className={`w-[80%] 2xl:h-[86px] h-[50px] text-[#625E5E]  ${isActive === "/admin/users" ? "rounded-[10px] bg-black text-white" : ""}  mt-[15px] 2xl:mt-[25px] hover:bg-black hover:text-white`}
        onClick={() => handleOptionClick("/admin/users")}
        >
            <button className="w-full h-full flex justify-center items-center font-semibold capitalize">
                {isActive === "/admin/users" ? <img src={userWhite} alt="dashborad" className="mr-[20px] " />
                : <img src={user} alt="dashborad" className="mr-[20px] " /> }
                <p className="w-[40%] text-left">
                Users
                </p>
            </button>
        </NavLink>
        <NavLink to="/admin/users" smooth="true" duration={500}
        className={`w-[80%] 2xl:h-[86px] h-[50px] text-[#625E5E]  ${isActive === "/admin/users" ? "rounded-[10px] bg-black text-white" : ""}  mt-[15px] 2xl:mt-[25px] hover:bg-black hover:text-white`}
        onClick={() => handleOptionClick("/admin/users")}
        >
            <button className="w-full h-full flex justify-center items-center font-semibold capitalize">
                {isActive === "/admin/users" ? <img src={userWhite} alt="dashborad" className="mr-[20px] " />
                : <img src={user} alt="dashborad" className="mr-[20px] " /> }
                <p className="w-[40%] text-left">
                Upload
                </p>
            </button>
        </NavLink>

        <div className="w-[80%] 2xl:h-[86px] h-[50px] text-[#625E5E] rounded-[10px] mt-[15px] 2xl:mt-[25px] hover:bg-black hover:text-white ">
            <NavLink to="/admin-login">
            <button className="w-full h-full flex justify-center items-center font-semibold capitalize">
                <img src={logout} alt="logout" className="mr-[20px] text-black" />
                <p className="w-[40%] text-left">
                logout
                </p>
            </button>
            </NavLink>
        </div>
    </main>
  )
}

export default AdminSidebar


