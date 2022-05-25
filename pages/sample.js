import Image from "next/image";
import { useState } from "react";
import ButtonComponents from "../components/ButtonComponents";
import ButtonQuestion from "../components/ButtonQuestion";
import IconsQuestion from "../components/IconsQuestion";
import PageIntro from "../components/PageIntro";
import ProgressBar from "../components/ProgressBar";
import QuestionContainer from "../components/QuestionContainer";
import RadioQuestion from "../components/RadioQuestion";

function sample() {
  const [step, setStep] = useState({
    secondStep: "w-0 opacity-0",
    thirdStep: "w-0 opacity-0",
  });
  const [stepNo, setStepNo] = useState(1);
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

  const assessIntro = [
    {
      header: "Climate action & your business",
      desc: "This initial set of questions are designed to understand what climate action means for you and your business.",
      plant: "/icons/plant.svg",
    },
    {
      header: "Your site & energy needs",
      desc: "To understand what options may be applicable to reduce your business impact from an energy perspective, tell us a little bit about what happens on-site to keep your business running.",
      plant: "/icons/plant2.svg",
    },
    {
      header: "Your program preferences",
      desc: "There are a number of different clean energy projects and services out there that are more suitable than others for you, which depend on certain preferences you may have. Let's understand these further.",
      plant: "/icons/plant3.svg",
    },
  ];

  const iconsQuestions = {
    id: "04",
    text: "What sort of energy sources do you rely on?",
    subText: "Select all that apply.",
    options: [
      {
        id: 1,
        text: "Electricity",
        icon: "/icons/electricity.svg",
      },
      {
        id: 2,
        text: "Natural gas",
        icon: "/icons/gas.svg",
      },
      {
        id: 3,
        text: "LPG",
        icon: "/icons/lpg.svg",
      },
    ],
  };

  const checkboxQuestions = {
    id: "02",
    icon: "/icons/flame.svg",
    title: "General operations changes",
    text: "What sort of changes have been implemented (if any) to help reduce the impact your business has on the environment?",
    subText: "Select none or as many that apply.",
    questions: [
      {
        id: 1,
        text: "Replaced some or all energy inneficient equipment at your site(s) with more efficient ones",
      },
      {
        id: 2,
        text: "Switch to an energy plan that carbon offsets your energy use",
      },
      {
        id: 3,
        text: "Invested in renewable generators through programs like GreenPower, to feed renewables into the grid",
      },
    ],
  };

  const radioQuestions = {
    id: "03",
    text: "How many business sites are you responsible for the energy management of?",
    options: [
      {
        id: 1,
        text: "1-2 sites",
      },
      {
        id: 2,
        text: "2-5 sites",
      },
      {
        id: 3,
        text: "No business sites - I operate out of my home",
      },
    ],
  };

  const buttonQuestions = {
    id: "01",
    text: "Are you currently looking to implement any specifiy sustainability or energy efficiency goals at your business for the future?",
    options: [
      {
        id: 1,
        text: "Not really",
      },
      {
        id: 2,
        text: "Yes, I'm considering it",
      },
    ],
  };
  return (
    <div className="bg-primaryBG">
      <div className="bg-assessment-bg bg-no-repeat h-full">
        <div className="w-[90%] md:w-[80%] mx-auto h-full">
          <ProgressBar step={step} stepNo={stepNo} />
          <PageIntro assessIntro={assessIntro} activeState={activeState} />
          <div className="md:space-y-12">
            {/* Button Questions */}
            <QuestionContainer
              id={buttonQuestions.id}
              text={buttonQuestions.text}
              style={activeState !== 0 && "hidden"}
            >
              <div className="gap-2 mt-4 md:mt-12 md:-space-x-4 flex flex-col md:flex-row">
                {buttonQuestions.options.map(({ id, text }) => (
                  <ButtonQuestion text={text} key={id} />
                ))}
              </div>
            </QuestionContainer>

            {/* Radio Buttons */}

            <QuestionContainer
              id={radioQuestions.id}
              text={radioQuestions.text}
              style={activeState !== 2 && "hidden"}
            >
              <div className="space-y-8 mt-12">
                {radioQuestions.options.map(({ id, text }) => (
                  <div className="form-check flex items-center" key={id}>
                    <RadioQuestion id={id} text={text} />
                  </div>
                ))}
              </div>
            </QuestionContainer>

            <QuestionContainer
              id={iconsQuestions.id}
              text={iconsQuestions.text}
              subText={iconsQuestions.subText}
              style={activeState !== 2 && "hidden"}
            >
              <div className="space-y-8 mt-12">
                <div className="flex flex-col lg:flex-row gap-2 md:gap-4">
                  {iconsQuestions.options.map(({ id, text, icon }) => (
                    <IconsQuestion key={id} id={id} text={text} icon={icon} />
                  ))}
                </div>
              </div>
            </QuestionContainer>

            <div className="flex gap-8 pb-8 md:gap-16 md:py-16">
              {activeState !== 0 && (
                <button
                  className="text-primaryText"
                  onClick={stepBackwardHandler}
                >
                  Back
                </button>
              )}
              <ButtonComponents text="Next" action={stepForwardHandler} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default sample;
