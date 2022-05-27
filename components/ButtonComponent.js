function ButtonComponent({ text, action }) {
  return (
    <button
      className="w-full min-w-[200px] bg-secondaryBG text-white rounded-full px-8 py-3 hover:bg-red-600 "
      onClick={action}
    >
      {text}
    </button>
  );
}

export default ButtonComponent;
