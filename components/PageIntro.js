import React from "react";
import Image from "next/image";

const PageIntro = ({ assessIntro, activeState }) => {
  return (
    <div className="relative w-full h-[400px] flex items-center mt-24">
      {assessIntro.map((val, index) => (
        <div
          className={`page-intro-container flex justify-between w-[70%] absolute ${
            activeState === index ? "opacity-100" : "opacity-0"
          }`}
          key={index}
        >
          <div className="intro-disc-container w-[450px]">
            <h1 className="font-bold text-[56px] text-[#FA4616] leading-[64px] mb-[32px]">
              {val.header}
            </h1>
            <p className="text-[16px] leading-[24px]">{val.desc}</p>
          </div>
          <div className="plant-container -mt-28">
            <div className="w-64 h-64">
              <Image
                src={val.plant}
                width={500}
                height={500}
                alt="plant"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PageIntro;
