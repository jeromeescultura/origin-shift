import React from "react";

const DropdownQuestion = ({ question }) => {
  const { id, qst, choices } = question;
  return (
    <div className="bg-white rounded-3xl py-24 pl-16 pr-24">
      <div className="flex gap-12">
        <div>
          <p className="text-[64px] text-primaryText">0{id}</p>
        </div>
        <div>
          <p className="text-[20px] text-secondaryText font-light">{qst[0]}</p>
          <select
            name="industry"
            id="industry"
            className="text-[16px] border border-gray-400 rounded-md p-5 w-80 mt-12"
          >
            <option selected>Please select</option>
            {choices.industry.map((val, index) => (
              <option value={val} key={index} className="capitalize">
                {val}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default DropdownQuestion;
