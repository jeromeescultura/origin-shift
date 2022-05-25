function RadioQuestion({ id, text, action }) {
  return (
    <div className="flex items-center -ml-5 md:ml-0">
      <input
        className="form-check-input appearance-none rounded-full h-6 w-6 border-2 border-[#737373] bg-white checked:bg-darkHighlight checked:border-white transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer checked:ring-darkHighlight checked:ring-2"
        type="radio"
        name="flexRadioDefault"
        id={id}
      />
      <label
        className="form-check-label inline-block text-secondaryText text-[11px] font-light  stroke-2 stroke-red-700 ml-5"
        htmlFor={id}
      >
        {text}
      </label>
    </div>
  );
}

export default RadioQuestion;
