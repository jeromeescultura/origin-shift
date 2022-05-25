function QuestionContainer(props) {
  return (
    <div
      className={`${props.style} bg-white rounded-3xl lg:py-24 lg:pl-16 lg:pr-24 px-4 py-8 md:px-6 `}
    >
      <div className="flex gap-4 md:gap-12">
        <div>
          <p className="text-4xl md:text-[46px] lg:text-[64px] text-primaryText">
            {props.id}
          </p>
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
