import bell from "../assets/Admin/bell_icn.png";
import usersImage from "../assets/Admin/Ellipse 246.png"
import logo from "../assets/logo/ease read logoooreduced png-09.png"


const AdminNavbar = () => {



 
  return (

    <main className="fixed w-full h-[78px] 2xl:h-[128px]  bg-white shadow-2xl flex justify-between items-center px-8 z-20 ">
      <div className=" h-[28px] md:h-full  md:flex items-center  cursor-pointer ">
          <img src={logo} alt="logo"  className=" h-[30px] md:h-[34px]" />
        </div>

      

      <div className=" 2xl:w-[321px] w-[260px] flex justify-between items-center">
        <img src={bell} alt="bell" className="w-[20px] h-[28px] 2xl:w-[28px] 2xl:h-[38px]" />
        <img src={usersImage} alt="users" className="w-[48px] h-[48px] 2xl:w-[67px] 2xl:h-[67px]" />
        <div className="">
          <p className="text-[20px] 2xl:text-[24px] font-semibold">Taye Ogundiran</p>
          <p className="text-[#707070] text-[16px] 2xl:text-[18px] font-semibold">Admin</p>
        </div>
      </div>
    </main>
  );
};

export default AdminNavbar;