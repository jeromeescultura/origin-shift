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
import Questions from "../components/Questions";
import SliderQuestion from "../components/SliderQuestion";

const Assessment = () => {
  const [step, setStep] = useState({
    secondStep: "w-0 opacity-0",
    thirdStep: "w-0 opacity-0",
  });

  const [stepNo, setStepNo] = useState(1);

  const questions = {
    firstStep: [
      {
        id: 1,
        qst: "Are you currently looking to implement any specifiy sustainability or energy efficiency goals at your business for the future?",
        choices: {
          no: "Not really",
          yes: "Yes, I'm considering it",
        },
      },
      {
        id: 2,
        qst: "What sort of changes have been implemented (if any) to help reduce the impact your business has on the environment?",
        choices: {
          energy_source: [
            "Replaced some or all energy inneficient equipment at your site(s) with more efficient ones",
            "Switch to an energy plan that carbon offsets your energy use",
            "Invested in renewable generators through programs like GreenPower, to feed renewables into the grid",
            "Installed solar at your site(s)",
            "Added battery storage to your solar system",
            "Replaced some or all of your vehicle fleet with electric vehicles",
          ],
          general_operations: [
            "Replaced some or all packaging used for your business to use more sustainable alternatives",
            "Introduced recycling and waste reduction processes at office sites",
            "Invested in renewable generators through programs like GreenPower, to feed renewables into the grid",
            "Optimised supply chain processes to reduce material wastage",
          ],
        },
      },
      {
        id: 3,
        qst: "How important is reducing your business’ impact on the environment to you?",
        choices: {
          notImportant: 0,
          considerable: 1,
          neutral: 2,
          important: 3,
          veryImportant: 4,
        },
      },
    ],
    secondStep: [
      {
        id: 1,
        qst: [
          "What type of industry do your work in?",
          "How many business sites are you responsible for the energy management of?",
        ],
        choices: {
          industry: [
            "test",
            "test",
            "test",
            "test",
            "test",
            "test",
            "test",
            "test",
            "test",
            "test",
          ],
          bsites: {
            oneTwo: 1,
            twoFive: 2,
            fiveTen: 3,
            tenPlus: 4,
            noSites: 0,
          },
        },
      },
      {
        id: 2,
        qst: "What sort of energy sources do you rely on?",
        choices: {
          electricity: "electricity",
          natural_gas: "natural gas",
          lpg: "LPG",
        },
      },
      {
        id: 3,
        qst: "Roughly when does your business use the most energy?",
        choices: {
          constant: {
            title: "constant",
            desc: "It requires 24 hour supply (eg. to run refrigeration units or warehouse temperature)",
          },
          mornings: {
            title: "mornings",
            desc: "Roughly between 1am – 9am",
          },
          evenings: {
            title: "evenings",
            desc: "Roughly between 5pm - 1am",
          },
          standard: {
            title: "standard times",
            desc: "Roughly between 5pm - 1am",
          },
          unconstrained: {
            title: "Unconstrained by specific operating hours",
            desc: "Energy use varies greatly depending on business priorities",
          },
        },
      },
      {
        id: 4,
        qst: "Do you have land or roof space where you are allowed to renovate, upgrade or install equipment?",
        choices: {
          yes: "yes",
          no: "no",
          maybe: "i'm not sure",
        },
      },
    ],
  };

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

  console.log(questions.firstStep[2]);

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
      <div className=" bg-assessment-bg bg-no-repeat bg-contain h-full">
        <div className="w-[90%] md:w-[80%] mx-auto h-full">
          <ProgressBar step={step} stepNo={stepNo} />
          <PageIntro assessIntro={assessIntro} activeState={activeState} />
          <div className="space-y-12">
            <Questions questions={questions.firstStep} />
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
