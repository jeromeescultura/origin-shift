import React from "react";
import Image from "next/image";

const PageIntro = ({ assessIntro, activeState }) => {
  return (
    <div className="relative w-full h-[400px] flex items-center mt-0 md:mt-24">
      {assessIntro.map((val, index) => (
        <div
          className={`page-intro-container flex flex-col md:flex-row justify-between w-full xl:w-[70%] absolute ${
            activeState === index ? "opacity-100" : "opacity-0"
          }`}
          key={index}
        >
          <div className="md:w-[450px] order-2 md:order-1">
            <h1 className="font-bold text-4xl md:text-[56px] md:leading-[64px] text-[#FA4616] mb-[32px]">
              {val.header}
            </h1>
            <p className="text-[16px] leading-[24px]">{val.desc}</p>
          </div>
          <div className="plant-container md:-mt-28 order-1 md:order-2">
            <div className="w-24 h-24 md:w-64 md:h-64">
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
