function ButtonComponent({ text, action }) {
  return (
    <button
      className="w-[220px] bg-secondaryBG text-white rounded-full px-4 py-3 hover:bg-red-600 "
      onClick={action}
    >
      {text}
    </button>
  );
}

export default ButtonComponent;
