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
      } form-check flex flex-col items-center gap-4 border rounded-xl min-w-[200px] max-w-[220px] py-6 bg-white focus-within:bg-highlight cursor-pointer`}
      onClick={handleSelected}
    >
      <div className="w-14 h-18">
        <Image src={icon} width={100} height={100} objectFit="contain" />
      </div>
      <div className="flex gap-4 items-center">
        <input
          className="relative form-check-input appearance-none h-6 w-6 border-2 border-[#737373] rounded-sm bg-white checked:bg-darkHighlight checked:border-darkHighlight focus:outline-none transition duration-200"
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
          className="form-check-label inline-block text-secondaryText font-light"
          htmlFor={id}
        >
          {text}
        </label>
      </div>
    </div>
  );
}

export default IconsQuestion;
