import React, { useEffect } from "react";
import Question1 from "./Question1";
import Question2 from "./Question2";
import Question3 from "./Question3";
import SliderQuestion from "./sliderQuestion";

const Questions = () => {
  return (
    <div className="space-y-12">
      <Question1 />
      <Question2 />
      <Question3 />
    </div>
  );
};

export default Questions;
