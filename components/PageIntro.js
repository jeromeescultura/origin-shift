import React from "react";
import Image from "next/image";

const PageIntro = ({ assessIntro, activeState }) => {
  return (
    <div className="relative w-[816px] h-[295px] border flex items-center">
      {assessIntro.map((val, index) => (
        <div
          className={`page-intro-container flex justify-start absolute ${
            activeState === index ? "opacity-100" : "opacity-0"
          }`}
          key={index}
        >
          <div className="intro-disc-container w-[554px]">
            <h1 className="font-bold text-[56px] text-[#FA4616] leading-[64px] mb-[32px]">
              {val.header}
            </h1>
            <p className="text-[16px] leading-[24px]">{val.desc}</p>
          </div>
          <div className="plant-container">
            <Image src={val.plant} width={246} height={183} alt="plant" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PageIntro;
