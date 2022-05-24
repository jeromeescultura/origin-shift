import React, { useState } from "react";
import ProgressBar from "../components/ProgressBar";
import PageIntro from "../components/PageIntro";
import Question1 from "../components/Question1";
import Question2 from "../components/Question2";
import CheckboxQuestion from "../components/CheckboxQuestion";
import Button from "../components/Button";
import plant from "/icons/plant.svg";
import plant2 from "/icons/plant2.svg";
import plant3 from "/icons/plant3.svg";
import Image from "next/image";
import RadioQuestion from "../components/RadioQuestion";
import ButtonQuestion from "../components/ButtonQuestion";

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
      desc: "There are a number of different clean energy projects and services out there that are more suitable than others for you, which depend on certain preferences you may have. Let's understand these further.",
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
            {/* Button Questions */}
            <div
              className={`${
                activeState === 0 ? "block" : "hidden "
              } bg-white rounded-3xl py-24 pl-16 pr-24`}
            >
              <div className="flex gap-12">
                <div>
                  <p className="text-[64px] text-primaryText">
                    {buttonQuestions.id}
                  </p>
                </div>
                <div>
                  <p className="text-[20px] text-secondaryText font-light">
                    {buttonQuestions.text}
                  </p>
                  <div className="space-y-8 mt-12 -space-x-1">
                    {buttonQuestions.options.map(({ id, text }) => (
                      <ButtonQuestion text={text} key={id} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Checkbox Form SAMPLE */}
            <div
              className={`${
                activeState === 1 ? "block" : "hidden"
              } bg-white rounded-3xl py-24 pl-16 pr-24`}
            >
              <div className="flex gap-12">
                <div>
                  <p className="text-[64px] text-primaryText">
                    {checkboxQuestions.id}
                  </p>
                </div>
                <div>
                  <p className="text-[20px] text-secondaryText font-light">
                    What sort of changes have been implemented (if any) to help
                    reduce the impact your business has on the environment?
                  </p>
                  <p className="mt-8 font-light">
                    Select none or as many that apply.
                  </p>
                  <div className="flex mt-12">
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 p-2">
                        <Image
                          src={checkboxQuestions.icon}
                          width={50}
                          height={50}
                          objectFit="contain"
                        />
                      </div>
                      <div className="flex flex-col gap-8 mt-2">
                        <p className="text-[20px] font-bold text-secondaryText">
                          {checkboxQuestions.title}
                        </p>
                        {checkboxQuestions.questions.map(({ text, id }) => (
                          <CheckboxQuestion text={text} id={id} key={id} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Radio Buttons */}
            <div
              className={`${
                activeState === 2 ? "block" : "hidden "
              } bg-white rounded-3xl py-24 pl-16 pr-24`}
            >
              <div className="flex gap-12">
                <div>
                  <p className="text-[64px] text-primaryText">
                    {radioQuestions.id}
                  </p>
                </div>
                <div>
                  <p className="text-[20px] text-secondaryText font-light">
                    {radioQuestions.text}
                  </p>
                  <div className="space-y-8 mt-12">
                    {radioQuestions.options.map(({ id, text }) => (
                      <div className="form-check flex items-center" key={id}>
                        <RadioQuestion id={id} text={text} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* <Question1 /> */}
            {/* <Question2 /> */}
            {/* <Question3 /> */}
          </div>

          <div className="flex gap-16 my-16">
            {activeState !== 0 && (
              <button
                className="text-primaryText"
                onClick={stepBackwardHandler}
              >
                Back
              </button>
            )}
            <Button text="Next" action={stepForwardHandler} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assessment;
