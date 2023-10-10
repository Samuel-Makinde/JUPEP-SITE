// import React from 'react'
import pics1 from "../ThirdPartyCookie/pics1.jpg";
import pics2 from "../ThirdPartyCookie/pics2.png";
import iph3 from "../ThirdPartyCookie/iph3.png";
import and1 from "../ThirdPartyCookie/and1.png"
import and2 from "../ThirdPartyCookie/and2.png"
import and3 from "../ThirdPartyCookie/and3.png"
import and4 from "../ThirdPartyCookie/and4.png"
import and5 from "../ThirdPartyCookie/and5.png"


const Cookies = () => {

  return (
    <div className="text-center pt-[50px]">
      <h2 className="text-5xl font-bold">To enable third-party cookies on iphone</h2>
      <div className="pt-[50px] text-3xl font-bold">
        <p>navigate to you iphone settings</p>
        <img
          className="w-[20rem] py-[3rem] mx-auto block"
          src={pics1}
          alt="pics"
        />
      </div>
      {/* 2 */}
      <div className="pt-[50px] text-3xl font-bold">
        <p>navigate to safari</p>
        <img
          className="w-[20rem] py-[3rem] mx-auto block"
          src={pics2}
          alt="pics"
        />
      </div>
      {/* 3 */}
      <div className="pt-[50px] text-3xl font-bold">
        <p> Disable BLOCK ALL COOKIES and Prevent Cross-Site Tracking</p>
        <img
          className="w-[20rem] py-[3rem] mx-auto block"
          src={iph3}
          alt="pics"
        />
      </div>
      <div className="pt-[50px] text-3xl font-bold">
        <p className="text-5xl font-bold"> To enable third parties cookies on android devices</p>
        <div className="pt-[50px] text-3xl font-bold">
        <p>Open your chrome tab click on the 3 dot icon by the right</p>
        <img
          className="w-[20rem] py-[3rem] mx-auto block"
          src={and1}
          alt="pics"
        />
        </div>
        <div>
        <p>Click on Settings</p>
        <img
          className="w-[20rem] py-[3rem] mx-auto block"
          src={and2}
          alt="pics"
        />
        </div>
        <div>
        <p>Click on privacy and security</p>
        <img
          className="w-[20rem] py-[3rem] mx-auto block"
          src={and3}
          alt="pics"
        />
        </div>

        <div>
        <p>click on third party cookies</p>
        <img
          className="w-[20rem] py-[3rem] mx-auto block"
          src={and4}
          alt="pics"
        />
        </div>
        <div>
        <p>Enable the third party cookies</p>
        <img
          className="w-[20rem] py-[3rem] mx-auto block"
          src={and5}
          alt="pics"
        />
        </div>
       
      </div>
    </div>
  );
};

export default Cookies;
