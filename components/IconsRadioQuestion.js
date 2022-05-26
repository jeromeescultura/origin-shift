import Image from "next/image";
import React, { useState } from "react";

const IconsRadioQuestion = ({ qst }) => {
  const [activeState, changeState] = useState(1);

  return (
    <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 mt-12">
      {qst.map((val, index) => (
        <div
          key={val.id}
          onClick={() => changeState(val.id)}
          className={`w-[219px] h-[178px] flex justify-center flex-col items-center bg-white  text-[#505050] font-light text-center border rounded-md text-[16px]  capitalize cursor-pointer mr-6 transition-all duration-100 ease-linear ${
            activeState === val.id
              ? "bg-highlight border-accentColor"
              : "hover:border-gray-400"
          }`}
        >
          <Image
            src={val.icon}
            width={index === 0 ? 82 : 72}
            height={index === 0 ? 64 : 72}
            alt={val.icon}
          />
          <p className="mt-8">{val.text}</p>
        </div>
      ))}
    </div>
  );
};

export default IconsRadioQuestion;
