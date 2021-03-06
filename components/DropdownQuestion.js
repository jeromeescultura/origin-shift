import React from "react";

const DropdownQuestion = ({ qst }) => {
  return (
    <div>
      <select
        name="industry"
        id="industry"
        className="md:text-[16px] bg-white border border-gray-400 rounded-md p-4 w-full mt-12"
      >
        <option defaultValue>Please select</option>
        {qst.map((val) => (
          <option value={val.text} key={val.id} className="capitalize">
            {val.text}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownQuestion;
