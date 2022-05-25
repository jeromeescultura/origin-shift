function ButtonComponents({ text, action }) {
  return (
    <button
      className="bg-secondaryBG text-white rounded-full px-8 py-2 hover:bg-red-600 "
      onClick={action}
    >
      {text}
    </button>
  );
}

export default ButtonComponents;
