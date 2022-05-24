import React, { useEffect } from "react";
import Question1 from "./Question1";
import Question2 from "./Question2";
import SliderQuestion from "./sliderQuestion";

const Questions = ({ questions }) => {
  return (
    <div className="space-y-12">
      <Question1 />
      <Question2 />
      <SliderQuestion question={questions[2]} />
    </div>
  );
};

export default Questions;
