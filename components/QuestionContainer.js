function QuestionContainer(props) {
  return (
    <div
      className={`${props.style} bg-white rounded-3xl md:py-24 md:pl-16 md:pr-24 px-4 py-8`}
    >
      <div className="flex gap-4 md:gap-12">
        <div>
          <p className="text-4xl md:text-[64px] text-primaryText">{props.id}</p>
        </div>
        <div>
          {props.text && (
            <p className="text-base md:text-[20px] text-secondaryText font-light">
              {props.text}
            </p>
          )}
          {props.subText && (
            <p className="mt-8 font-light text-sm md:text-base">
              {props.subText}
            </p>
          )}
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default QuestionContainer;
