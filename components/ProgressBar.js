import React from "react";
import Image from "next/image";
import logo from "../assets/logo.png";

const ProgressBar = ({ step, stepNo }) => {
  return (
    <div className="progress-bar-container flex justify-between items-end mt-28">
      <div className="progress-status-container">
        <div className="steps-save-progress flex justify-between w-[554px] text-[20px] items-center mb-6">
          <p>Step {stepNo} of 3</p>
          <button className="border border-[#505050] text-[16px] leading-[30px] rounded-full py-2 px-8 hover:bg-black hover:text-white transition-all ease-linear duration-100">
            Save my progress
          </button>
        </div>
        <div className="progress-bar w-full h-[8px] flex flex-row justify-between">
          <div className="first-step w-44 h-[8px] bg-[#FFB432]"></div>
          <div className="second-step w-44 h-[8px] relative bg-[#F1F1F1]">
            <div
              className={`second-step-inner bg-[#FFB432] h-full transition-all ease-linear duration-200 ${step.secondStep}`}
            ></div>
          </div>
          <div className="third-step w-44 h-[8px] bg-[#F1F1F1]">
            <div
              className={`third-step-inner bg-[#FFB432] h-full transition-all ease-linear duration-200 ${step.thirdStep}`}
            ></div>
          </div>
        </div>
      </div>
      <div className="logo">
        <Image src={logo} alt="logo" height={107} width={87} />
      </div>
    </div>
  );
};

export default ProgressBar;
