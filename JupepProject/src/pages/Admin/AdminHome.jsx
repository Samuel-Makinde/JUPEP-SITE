
// import users from "../../assets/user_group.png"
import users from "../../assets/Admin/user_group.png"


const AdminHome = () => {
  

  // const setBackgroundColor = (index) => {
  //   const colors = ["#EFEFEF", "#FFFFFF"];
  //   return colors[index % colors.length];
  // };

  //  const setStatusBackgroundColor = (index) => {
  //   const colors = ["#1261B2", "#BA112A", "#60B342"];
  //   return colors[index % colors.length];
  // };

   


  return (
    <main className="pl-[26%] 2xl:pl-[33%] w-full  h-full pt-[100px] px-6 2xl:px-12 mb-8 font-sans">
        <p className="w-full border-b-2 border-black 2xl:text-[24px] font-semibold">
          Dashboard Overview
        </p>

         <div className="w-full mt-[20px] flex justify-between">
            <div className="w-[30%] h-[200px] 2xl:h-[261px] rounded-[10px] shadow-2xl bg-white px-4 2xl:px-6 flex justify-between">
                <h1 className="mt-[30px]">Subscribe Users</h1>
                <div className="w-[71px] h-[73px] 2xl:w-[91px] 2xl:h-[93px] rounded-[10px] bg-[#F4A342] flex flex-col justify-center items-center mt-[80px]">
                  <img src={users} alt="users" />
                  <p className="text-white ">9.5k</p>
                </div>
            </div>

            <div className="w-[30%] h-[200px] 2xl:h-[261px] rounded-[10px] shadow-2xl bg-white px-4 2xl:px-6 flex justify-between">
                <h1 className="mt-[30px]">Free Users</h1>
                <div className="w-[71px] h-[73px] 2xl:w-[91px] 2xl:h-[93px] rounded-[10px] bg-[#60B342] flex flex-col justify-center items-center mt-[80px]">
                  <img src={users} alt="users" />
                  <p className="text-white ">9.5k</p>
                </div>
            </div>

            <div className="w-[30%] h-[200px] 2xl:h-[261px] rounded-[10px] shadow-2xl bg-white px-4 2xl:px-6 flex justify-between">
                <h1 className="mt-[30px]">Total Users</h1>
                <div className="w-[71px] h-[73px] 2xl:w-[91px] 2xl:h-[93px] rounded-[10px] bg-[#BA112A] flex flex-col justify-center items-center mt-[80px]">
                  <img src={users} alt="users" />
                  <p className="text-white ">9.5k</p>
                </div>
            </div>
        </div>
        
    </main>
  )
}

export default AdminHome