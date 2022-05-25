import React from "react";

const DropdownQuestion = ({ qst }) => {
  return (
    <div>
      <select
        name="industry"
        id="industry"
        className="md:text-[16px] border border-gray-400 rounded-md md:p-5 md:w-80 mt-12"
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
