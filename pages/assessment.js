import React, { useState } from "react";
import ProgressBar from "../components/ProgressBar";
import PageIntro from "../components/PageIntro";
import Question1 from "../components/Question1";
import Question2 from "../components/Question2";
import Question3 from "../components/Question3";
import Button from "../components/Button";
import plant from "../assets/Plant.svg";
import plant2 from "../assets/Plants.svg";
import plant3 from "../assets/Plants2.svg";

const Assessment = () => {
  const [step, setStep] = useState({
    secondStep: "w-0 opacity-0",
    thirdStep: "w-0 opacity-0",
  });

  const [stepNo, setStepNo] = useState(1);

  const assessIntro = [
    {
      header: "Climate action & your business",
      desc: "This initial set of questions are designed to understand what climate action means for you and your business.",
      plant: plant,
    },
    {
      header: "Your site & energy needs",
      desc: "To understand what options may be applicable to reduce your business impact from an energy perspective, tell us a little bit about what happens on-site to keep your business running.",
      plant: plant2,
    },
    {
      header: "Your program preferences",
      desc: "There are a number of different clean energy projects and services out there that are more suitable than others for you, which depend on certain preferences you may have. Let’s understand these further.",
      plant: plant3,
    },
  ];

  const [activeState, changeState] = useState(0);

  const stepForwardHandler = () => {
    if (step.secondStep === "w-0 opacity-0") {
      setStep({ ...step, secondStep: "w-full opacity-100" });
    } else if (step.thirdStep === "w-0 opacity-0") {
      setStep({ ...step, thirdStep: "w-full opacity-100" });
    }
    setStepNo((prevState) => prevState + 1);
    changeState((prevState) => {
      if (activeState >= 2) {
        return 2;
      } else {
        return prevState + 1;
      }
    });
    if (stepNo >= 3) {
      setStepNo(3);
    }
  };

  const stepBackwardHandler = () => {
    if (step.thirdStep === "w-full opacity-100") {
      setStep({ ...step, thirdStep: "w-0 opacity-0" });
    } else if (step.secondStep === "w-full opacity-100") {
      setStep({ ...step, secondStep: "w-0 opacity-0" });
    }
    setStepNo((prevState) => prevState - 1);
    changeState((prevState) => {
      if (activeState <= 0) {
        return 0;
      } else {
        return prevState - 1;
      }
    });
    if (stepNo <= 1) {
      setStepNo(1);
    }
  };
  return (
    <div className="bg-primaryBG">
      <div className=" bg-assessment-bg bg-no-repeat h-full">
        <div className="w-[90%] md:w-[80%] mx-auto h-full">
          <ProgressBar step={step} stepNo={stepNo} />
          <PageIntro assessIntro={assessIntro} activeState={activeState} />
          <div className="space-y-12">
            <Question1 />
            <Question2 />
            <Question3 />
          </div>

          <div className="flex gap-8">
            <button onClick={stepBackwardHandler}>Back</button>
            <Button text="Next" action={stepForwardHandler} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assessment;
