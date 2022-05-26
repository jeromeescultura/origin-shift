import { useState } from "react";

function ButtonQuestion({ options, action }) {
  const [btn1, setBtn1] = useState(false);
  const [btn2, setBtn2] = useState(false);
  const [btn3, setBtn3] = useState(false);

  const activeStyles =
    "z-50 bg-highlight border-darkHighlight text-xs max-w-[200px] lg:text-base w-full h-[48px] bg-white text-[#505050] font-light text-center border transition duration-200";

  const notActiveStyles =
    "text-xs max-w-[200px] lg:text-base w-full h-[48px] bg-white  text-[#505050] font-light text-center border   transition duration-200";

  const handleClick = (value) => {
    switch (value) {
      case 1:
        setBtn1(!btn1);
        setBtn2(false);
        setBtn3(false);
        break;
      case 2:
        setBtn2(!btn2);
        setBtn1(false);
        setBtn3(false);
        break;
      case 3:
        setBtn3(!btn3);
        setBtn1(false);
        setBtn2(false);
        break;
      default:
        break;
    }
  };
  return (
    <div className="flex flex-col md:flex-row gap-2 md:gap-0 mt-8">
      {options?.length === 1 && (
        <button
          className={btn1 ? activeStyles : notActiveStyles}
          onClick={() => handleClick(1)}
        >
          {item.text}
        </button>
      )}
      {options?.length === 2 && (
        <>
          <button
            className={btn1 ? activeStyles : notActiveStyles}
            onClick={() => handleClick(1)}
          >
            {options[0].text}
          </button>
          <button
            className={btn2 ? activeStyles : notActiveStyles}
            onClick={() => handleClick(2)}
          >
            {options[1].text}
          </button>
        </>
      )}
      {options?.length === 3 && (
        <>
          <button
            className={btn1 ? activeStyles : notActiveStyles}
            onClick={() => handleClick(1)}
          >
            {options[0].text}
          </button>
          <button
            className={btn2 ? activeStyles : notActiveStyles}
            onClick={() => handleClick(2)}
          >
            {options[1].text}
          </button>
          <button
            className={btn3 ? activeStyles : notActiveStyles}
            onClick={() => handleClick(3)}
          >
            {options[2].text}
          </button>
        </>
      )}
    </div>
  );
}

export default ButtonQuestion;
