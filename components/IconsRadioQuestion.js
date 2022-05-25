import Image from "next/image";
import React, { useState } from "react";

const IconsRadioQuestion = ({ question }) => {
  const [activeState, changeState] = useState(0);

  const { id, qst, choices } = question;
  return (
    <div className="bg-white rounded-3xl py-24 pl-16 pr-24">
      <div className="flex gap-12">
        <div>
          <p className="text-[64px] text-primaryText">0{id}</p>
        </div>
        <div>
          <p className="text-[20px] text-secondaryText font-light">{qst}</p>
          <div className="flex mt-12">
            {/* <div className="w-[203px] h-[48px] bg-white  text-[#505050] font-light text-center border rounded-md  focus:bg-highlight focus:border-darkHighlight">
              Not really
            </div>
            <div className="w-[203px] h-[48px] bg-white text-[#505050] font-light text-center border rounded-md  focus:bg-highlight focus:border-darkHighlight">
              Yes, I'm considering it
            </div> */}
            {Object.keys(choices).map((val, index) => (
              <div
                key={val}
                onClick={() => changeState(index)}
                className={`w-[219px] h-[178px] flex justify-center flex-col items-center bg-white  text-[#505050] font-light text-center border rounded-md text-[16px]  capitalize cursor-pointer mr-6 ${
                  activeState === index
                    ? "bg-highlight border-darkHighlight"
                    : "hover:border-gray-400"
                }`}
              >
                <Image
                  src={index === 0 ? "/icons/au.png" : "/icons/world.png"}
                  width={index === 0 ? 82 : 72}
                  height={index === 0 ? 64 : 72}
                  alt="australia"
                />
                <p className="mt-8">{choices[val]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IconsRadioQuestion;
