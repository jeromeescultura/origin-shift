import React from "react";
import Image from "next/image";
import logo from "../assets/logo.png";
import { useRouter } from "next/router";

const ProgressBar = ({ step, stepNo }) => {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.push("/");
  };
  return (
    <div className="flex flex-col justify-between items-start mt-16 md:mt-28">
      <div className="flex w-full gap-16">
        <div className="flex items-center grow mb-6 justify-between md:grow-0 md:w-[50%]">
          <p className="text-sm md:text-[20px]">Step {stepNo} of 3</p>
          <button className="border border-[#505050] text-xs md:text-base rounded-full py-2 px-8 focus:bg-black focus:text-white transition-all ease-linear duration-100">
            Save my progress
          </button>
          <div className="w-10 h-10 md:w-20 cursor-pointer md:h-20 md:hidden">
            <Image
              onClick={handleClick}
              src={logo}
              alt="logo"
              height={107}
              width={87}
            />
          </div>
        </div>

        <div className="w-10 h-10 md:w-20 cursor-pointer md:h-20 hidden md:inline ml-auto">
          <Image
            onClick={handleClick}
            src={logo}
            alt="logo"
            height={107}
            width={87}
          />
        </div>
      </div>
      <div className="w-full md:w-[50%] h-[8px] flex flex-row justify-between gap-2 md:gap-2">
        <div className="first-step w-full h-[8px] bg-accentColor"></div>
        <div className="second-step w-full h-[8px] relative bg-[#F1F1F1]">
          <div
            className={`second-step-inner bg-accentColor h-full transition-all ease-linear duration-200 ${step.secondStep}`}
          ></div>
        </div>
        <div className="third-step w-full h-[8px] bg-[#F1F1F1]">
          <div
            className={`third-step-inner bg-accentColor h-full transition-all ease-linear duration-200 ${step.thirdStep}`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
