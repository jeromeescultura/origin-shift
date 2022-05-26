function ButtonBorder({ text, action }) {
  return (
    <button
      className="w-[220px] text-secondaryBG border-secondaryBG border rounded-full py-3 px-8"
      onClick={action}
    >
      {text}
    </button>
  );
}

export default ButtonBorder;
