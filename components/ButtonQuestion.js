function ButtonQuestion({ text, action }) {
  return (
    <button
      className="w-[203px] h-[48px] bg-white  text-[#505050] font-light text-center border rounded-md focus:bg-highlight focus:border-darkHighlight transition duration-200"
      onClick={action}
    >
      {text}
    </button>
  );
}

export default ButtonQuestion;
