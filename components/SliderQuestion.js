import React, { useState } from "react";

const SliderQuestion = ({ qst }) => {
  const [sliderChoice, setChoice] = useState(3);
  const [ulWidth, setWidth] = useState("w-[50%]");

  const toggleActive = (val) => {
    console.log(val);
    setChoice(val);
    switch (val) {
      case 1:
        setWidth("w-[0%]");
        break;
      case 2:
        setWidth("w-[25%]");
        break;
      case 3:
        setWidth("w-[50%]");
        break;
      case 4:
        setWidth("w-[75%]");
        break;
      case 5:
        setWidth("w-[100%]");
        break;
      default:
        setWidth("w-[50%]");
        break;
    }
  };

  return (
    <div className="-ml-10 md:ml-0 w-[275px] md:w-[735px]">
      <div className="mt-12 bg-[#FFB43255] flex items-center w-[275px] md:w-[735px] md:h-7 rounded-full">
        <ul
          className={`flex h-full rounded-full bg-[#FFB432] transition-all ease-linear duration-100 ${ulWidth}`}
        >
          {qst.map((val, index) => (
            <li
              key={val.id}
              className="flex items-center mr-[50px] md:mr-[159px] ml-1"
            >
              <button
                id={val.id}
                onClick={() => toggleActive(val.id)}
                className={`w-[10px] h-[10px] md:w-[15px] md:h-[15px] rounded-full transition-all ease-linear duration-300 ${
                  val.id > sliderChoice
                    ? "bg-[#FFB432] hover:bg-[#d5982d]"
                    : "bg-white"
                } ${
                  sliderChoice === val.id
                    ? "scale-[250%] md:scale-[400%] bg-[#FFB432] hover:bg-[#FFB432] drop-shadow-sm"
                    : "hover:scale-125 cursor-pointer"
                }`}
              ></button>
            </li>
          ))}
        </ul>
      </div>
      <div className="labels mt-5 md:mt-10 text-sm md:text-[16px] leading-[24px] flex justify-between">
        <label htmlFor={qst[0].id}>Not Important</label>
        <label htmlFor={qst[1].id}>Very Important</label>
      </div>
    </div>
  );
};

export default SliderQuestion;
