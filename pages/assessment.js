import React, { useState } from "react";
import ProgressBar from "../components/ProgressBar";
import PageIntro from "../components/PageIntro";
import plant from "../assets/Plant.svg";
import plant2 from "../assets/Plants.svg";
import plant3 from "../assets/Plants2.svg";

const Assessment = () => {
  const [step, setStep] = useState({
    secondStep: "bg-[#F1F1F1]",
    thirdStep: "bg-[#F1F1F1]",
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
    if (step.secondStep === "bg-[#F1F1F1]") {
      setStep({ ...step, secondStep: "bg-[#FFB432]" });
    } else if (step.thirdStep === "bg-[#F1F1F1]") {
      setStep({ ...step, thirdStep: "bg-[#FFB432]" });
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
    if (step.thirdStep === "bg-[#FFB432]") {
      setStep({ ...step, thirdStep: "bg-[#F1F1F1]" });
    } else if (step.secondStep === "bg-[#FFB432]") {
      setStep({ ...step, secondStep: "bg-[#F1F1F1]" });
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
    <div className="container mx-auto mt-10">
      <ProgressBar step={step} stepNo={stepNo} />
      <PageIntro assessIntro={assessIntro} activeState={activeState} />
      <button onClick={stepBackwardHandler}>BACK</button>
      <button onClick={stepForwardHandler}>NEXT</button>
    </div>
  );
};

export default Assessment;
