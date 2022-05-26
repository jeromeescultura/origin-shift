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
    <div className="w-full">
      <div className="mt-12 bg-[#FFB43255] flex items-center w-full md:h-7 rounded-full relative">
        <div
          className={`flex  rounded-full bg-accentColor  transition-all ease-linear duration-100 h-full min-h-[10px] ${ulWidth}`}
        ></div>
        <div className="w-full absolute ">
          <ul className="flex h-full rounded-full  transition-all ease-linear duration-100  w-full justify-between">
            {qst &&
              qst.map((val, index) => (
                <li key={val.id} className="flex items-center">
                  <button
                    id={val.id}
                    onClick={() => toggleActive(val.id)}
                    className={`w-[10px] h-[10px] md:w-[15px] md:h-[15px] rounded-full transition-all ease-linear duration-300 ${
                      val.id > sliderChoice
                        ? "bg-accentColor hover:bg-[#d5982d]"
                        : "bg-white"
                    } ${
                      sliderChoice === val.id
                        ? "scale-[250%] md:scale-[400%] bg-accentColor hover:bg-accentColor drop-shadow-sm"
                        : "hover:scale-125 cursor-pointer"
                    }`}
                  ></button>
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div className="labels mt-5 md:mt-10 text-sm md:text-[16px] leading-[24px] flex justify-between">
        <label>Not Important</label>
        <label>Very Important</label>
      </div>
    </div>
  );
};

export default SliderQuestion;
