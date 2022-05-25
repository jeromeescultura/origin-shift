import SliderQuestion from "./sliderQuestion";

function Questions3({ qsts }) {
  const { id, qst, choices } = qsts;
  return <>{choices.notImportant && <SliderQuestion question={qsts} />}</>;
}

export default Questions3;
