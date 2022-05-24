function RadioQuestion({ id, text, action }) {
  return (
    <>
      <input
        className="form-check-input appearance-none rounded-full h-6 w-6 border-2 border-[#737373] bg-white checked:bg-darkHighlight checked:border-white transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer checked:ring-darkHighlight checked:ring-2"
        type="radio"
        name="flexRadioDefault"
        id={id}
      />
      <label
        className="form-check-label inline-block text-secondaryText font-light  stroke-2 stroke-red-700"
        htmlFor={id}
      >
        {text}
      </label>
    </>
  );
}

export default RadioQuestion;
