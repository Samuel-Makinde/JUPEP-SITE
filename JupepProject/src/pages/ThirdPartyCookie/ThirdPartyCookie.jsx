import iphoneSetting from "../../assets/Thirdpartycookie/pics1.jpg"
import iphoneSafari from "../../assets/Thirdpartycookie/pics2.png"
import iphonedisable from "../../assets/Thirdpartycookie/iph3.png"
import androidBrowser from "../../assets/Thirdpartycookie/and1.png"
import androidSetting from "../../assets/Thirdpartycookie/and2.png"
import androidPrivacy from "../../assets/Thirdpartycookie/and3.png"
import androidCookie from "../../assets/Thirdpartycookie/and4.png"
import androiddisable from "../../assets/Thirdpartycookie/and5.png"
import { Link } from "react-router-dom"









const ThirdPartyCookie = () => {
  return (
    <main className="w-full text-center pt-[50px] px-4 md:px-8 capitalize">
        <h1 className="text-[18px] md:text-[24px]">if you are getting this page, that mean you either have third party cookies and prevent cross site block on your phone setting, web broswer or you need to register your account and login before you can gain access to the book page</h1>
        <div className="w-full flex justify-center mt-[20px]">
          <Link to="/sign-up" smooth="true" duration={500}>
          <button className="w-[150px] h-[57px] bg-[#3B82F6] rounded-[10x] text-white text-[20px]">SignUp</button>
          </Link>
          <Link to="/login" smooth="true" duration={500}>
          <button className="ml-[20px] w-[150px] h-[57px] bg-[#3B82F6] rounded-[10x] text-white text-[20px]">login</button>
          </Link>
        </div>
         <h2 className="text-[24px] md:text-3xl font-bold mt-[30px]">To enable third-party cookies on iphone</h2>
      <div className="pt-[50px] text-3xl font-bold">
        <p>navigate to you iphone settings</p>
        <img
          className="w-[20rem] py-[3rem] mx-auto block"
          src={iphoneSetting}
          alt="pics"
        />
      </div>
      {/* 2 */}
      <div className="pt-[50px] text-3xl font-bold">
        <p>navigate to safari</p>
        <img
          className="w-[20rem] py-[3rem] mx-auto block"
          src={iphoneSafari}
          alt="pics"
        />
      </div>
      {/* 3 */}
      <div className="pt-[50px] text-3xl font-bold">
        <p> Disable BLOCK ALL COOKIES and Prevent Cross-Site Tracking</p>
        <img
          className="w-[20rem] py-[3rem] mx-auto block"
          src={iphonedisable}
          alt="pics"
        />
      </div>
      <div className="pt-[50px] text-3xl font-bold">
        <p className="text-3xl font-bold"> To enable third parties cookies on android devices</p>
        <div className="pt-[50px] text-3xl font-bold">
        <p>Open your chrome tab click on the 3 dot icon by the right</p>
        <img
          className="w-[20rem] py-[3rem] mx-auto block"
          src={androidBrowser}
          alt="pics"
        />
        </div>
        <div>
        <p>Click on Settings</p>
        <img
          className="w-[20rem] py-[3rem] mx-auto block"
          src={androidSetting}
          alt="pics"
        />
        </div>
        <div>
        <p>Click on privacy and security</p>
        <img
          className="w-[20rem] py-[3rem] mx-auto block"
          src={androidPrivacy}
          alt="pics"
        />
        </div>

        <div>
        <p>click on third party cookies</p>
        <img
          className="w-[20rem] py-[3rem] mx-auto block"
          src={androidCookie}
          alt="pics"
        />
        </div>
        <div>
        <p>Allow the third party cookies or untick block third part cookie</p>
        <img
          className="w-[20rem] py-[3rem] mx-auto block"
          src={androiddisable}
          alt="pics"
        />
        </div>
       
      </div>
    </main>
  )
}

export default ThirdPartyCookie