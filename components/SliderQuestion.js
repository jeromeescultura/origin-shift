import React, { useState } from "react";

const SliderQuestion = ({ question }) => {
  const { id, qst, choices } = question;

  const [sliderChoice, setChoice] = useState(2);
  const [ulWidth, setWidth] = useState("w-[50%]");

  const toggleActive = (val) => {
    console.log(val);
    setChoice(val);
    switch (val) {
      case 0:
        setWidth("w-[0%]");
        break;
      case 1:
        setWidth("w-[25%]");
        break;
      case 2:
        setWidth("w-[50%]");
        break;
      case 3:
        setWidth("w-[75%]");
        break;
      case 4:
        setWidth("w-[100%]");
        break;
      default:
        setWidth("w-[50%]");
        break;
    }
  };

  return (
    <div className="bg-white rounded-3xl py-24 pl-16 pr-24">
      <div className="flex gap-12">
        <div>
          <p className="text-[64px] text-primaryText">0{id}</p>
        </div>
        <div>
          <p className="text-[20px] text-secondaryText font-light">{qst}</p>
          <div className="mt-12 bg-[#FFB43255] flex items-center w-[735px] h-7 rounded-full">
            <ul
              className={`flex h-full rounded-full bg-[#FFB432] transition-all ease-linear duration-100 ${ulWidth}`}
            >
              {Object.keys(choices).map((val, index) => (
                <li
                  key={choices[val]}
                  className="flex items-center mr-[159px] ml-1"
                >
                  <button
                    id={val}
                    onClick={() => toggleActive(choices[val])}
                    className={`w-[15px] h-[15px] rounded-full transition-all ease-linear duration-300 ${
                      choices[val] > sliderChoice
                        ? "bg-[#FFB432] hover:bg-[#d5982d]"
                        : "bg-white"
                    } ${
                      sliderChoice === choices[val]
                        ? "scale-[400%] bg-[#FFB432] hover:bg-[#FFB432] drop-shadow-sm"
                        : "hover:scale-125 cursor-pointer"
                    }`}
                  ></button>
                </li>
              ))}
            </ul>
          </div>
          <div className="labels mt-10 text-[16px] leading-[24px] flex justify-between">
            <label htmlFor="notImportant">Not Important</label>
            <label htmlFor="veryImportant">Very Important</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderQuestion;
