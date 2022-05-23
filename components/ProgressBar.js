import React from "react";
import Image from "next/image";
import logo from "../assets/logo.png";

const ProgressBar = () => {
  return (
    <div>
      <div className="progress-bar-container flex justify-between items-end">
        <div className="progress-status-container">
          <div className="steps-save-progress flex justify-between w-[554px] text-[20px] items-center mb-6">
            <p>Step 1 of 3</p>
            <button className="border border-[#505050] text-[16px] leading-[30px] rounded-full py-2 px-8 hover:bg-black hover:text-white transition-all ease-linear duration-100">
              Save my progress
            </button>
          </div>
          <div className="progress-bar w-full h-[8px] flex flex-row justify-between">
            <div className="first-step w-44 h-[8px] bg-[#FFB432]"></div>
            <div className="second-step w-44 h-[8px] bg-[#F1F1F1]"></div>
            <div className="third-step w-44 h-[8px] bg-[#F1F1F1]"></div>
          </div>
        </div>
        <div className="logo">
          <Image src={logo} alt="logo" height={107} width={87} />
        </div>
      </div>

      <button className="">NEXT</button>
    </div>
  );
};

export default ProgressBar;
