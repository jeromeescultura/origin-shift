function Button({ text }) {
  return (
    <button className="bg-primaryText text-white rounded-full px-8 py-2 hover:bg-red-600">
      {text}
    </button>
  );
}

export default Button;
