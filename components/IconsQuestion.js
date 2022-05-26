import Image from "next/image";
import { useState } from "react";

function IconsQuestion({ id, text, icon }) {
  const [selected, setSelected] = useState(false);
  const handleSelected = () => {
    setSelected(!selected);
  };
  return (
    <div
      className={`${
        selected && "bg-highlight"
      } form-check flex flex-col lg:items-center gap-10 lg:border rounded-xl min-w-[180px] max-w-[220px] py-4 lg:py-6 bg-white focus-within:bg-highlight cursor-pointer`}
      onClick={handleSelected}
    >
      <div className="md:w-14 md:h-18 w-8 h-8 hidden lg:block">
        <Image src={icon} width={100} height={100} objectFit="contain" />
      </div>
      <div className="flex gap-4 items-start lg:items-center">
        <input
          className="relative form-check-input appearance-none h-6 w-6 border-2 border-[#737373] cursor-pointer rounded-sm bg-white checked:bg-accentColor checked:border-accentColor focus:outline-none transition duration-200"
          type="checkbox"
          value=""
          id={id}
          onChange={handleSelected}
          checked={selected && true}
        />
        <div className={`${selected ? "block" : "hidden"} absolute pt-1`}>
          <Image
            src="/icons/check.svg"
            width={24}
            height={24}
            objectFit="contain"
            onClick={handleSelected}
          />
        </div>
        <label
          className="form-check-label inline-block text-secondaryText font-light text-sm md:text-base"
          htmlFor={id}
        >
          {text}
        </label>
      </div>
    </div>
  );
}

export default IconsQuestion;
