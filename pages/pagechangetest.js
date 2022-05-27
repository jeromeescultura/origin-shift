import { useEffect, useState } from "react";
import ProgressBar from "../components/ProgressBar";
import PageIntro from "../components/PageIntro";
import ButtonComponent from "../components/ButtonComponent";
import SliderQuestion from "../components/SliderQuestion";
import DropdownQuestion from "../components/DropdownQuestion";
import Image from "next/image";
import { server } from "../config";
import QuestionContainer from "../components/QuestionContainer";
import IconsRadioQuestion from "../components/IconsRadioQuestion";
import ButtonQuestion from "../components/ButtonQuestion";
import RadioQuestion from "../components/RadioQuestion";
import IconsQuestion from "../components/IconsQuestion";

const PageChangeTest = ({ questions }) => {
  const [step, setStep] = useState({
    secondStep: "w-0 opacity-0",
    thirdStep: "w-0 opacity-0",
  });

  const [stepNo, setStepNo] = useState(1);

  const assessIntro = [
    {
      header: "Climate action & your business",
      desc: "This initial set of questions are designed to understand what climate action means for you and your business.",
      plant: "/icons/plant.svg",
    },
    {
      header: "Your site & energy needs",
      desc: "To understand what options may be applicable to reduce your business impact from an energy perspective, tell us a little bit about what happens on-site to keep your business running.",
      plant: "/icons/plant3.svg",
    },
    {
      header: "Your program preferences",
      desc: "There are a number of different clean energy projects and services out there that are more suitable than others for you, which depend on certain preferences you may have. Let's understand these further.",
      plant: "/icons/plant2.svg",
    },
  ];

  const [activeState, changeState] = useState(0);
  const backToTop = () => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };
  const stepForwardHandler = () => {
    backToTop();
    if (step.secondStep === "w-0 opacity-0") {
      setStep({ ...step, secondStep: "w-full opacity-100" });
    } else if (step.thirdStep === "w-0 opacity-0") {
      setStep({ ...step, thirdStep: "w-full opacity-100" });
    }
    setStepNo((prevState) => prevState + 1);
    console.log(stepNo);
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
    backToTop();
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
          {/* STEP ONE */}
          {stepNo === 1 && (
            <div className="space-y-12">
              {/* BUTTON QUESTION */}
              <QuestionContainer
                id={questions[3].buttonQuestion.id}
                text={questions[3].buttonQuestion.text}
              >
                <div className="gap-2 mt-4 md:mt-12 md:-space-x-4 flex flex-col md:flex-row">
                  {" "}
                  <ButtonQuestion
                    text={questions[3].buttonQuestion.options[0].text}
                  />
                  <ButtonQuestion
                    text={questions[3].buttonQuestion.options[1].text}
                  />
                </div>
              </QuestionContainer>

              {/* SLIDER QUESTION */}
              <QuestionContainer
                id={questions[6].sliderQuestion.id}
                text={questions[6].sliderQuestion.text}
              >
                <SliderQuestion qst={questions[6].sliderQuestion.options} />
              </QuestionContainer>
            </div>
          )}
          {/* STEP TWO */}
          {stepNo === 2 && (
            <div className="space-y-12">
              {/* DROPDOWN QUESTION / RADIO QUESTION */}
              <QuestionContainer
                id={questions[4].dropdownQuestion.id}
                text={questions[4].dropdownQuestion.text}
              >
                <DropdownQuestion qst={questions[4].dropdownQuestion.options} />
                <div className="space-y-12">
                  <p className="text-base md:text-[20px] text-secondaryText font-light mt-12">
                    {questions[2].radioQuestion.text}
                  </p>
                  <div className="flex flex-col gap-8">
                    {questions[2].radioQuestion.options.map((val) => (
                      <RadioQuestion key={val.id} id={val.id} text={val.text} />
                    ))}
                  </div>
                </div>
              </QuestionContainer>
              {/* ICONS QUESTION */}
              <QuestionContainer
                id={questions[0].iconsQuestion.id}
                text={questions[0].iconsQuestion.text}
                subText={questions[0].iconsQuestion.subText}
              >
                <div className="flex flex-col -ml-10 md:ml-0 items-center md:flex-row mt-12 space-y-5 md:space-y-0 md:space-x-5 ">
                  {questions[0].iconsQuestion.options.map((val) => (
                    <IconsQuestion
                      key={val.id}
                      id={val.id}
                      text={val.text}
                      icon={val.icon}
                    />
                  ))}
                </div>
              </QuestionContainer>
              {/* RADIO QUESTION */}
              <QuestionContainer
                id={"03"}
                text={"Roughly when does your business use the most energy?"}
              >
                <div className="flex flex-col space-y-12 mt-12">
                  <RadioQuestion id={1} text={"Constant"} />
                  <RadioQuestion id={2} text={"Mornings"} />
                  <RadioQuestion id={3} text={"Evenings"} />
                  <RadioQuestion id={4} text={"Standard times"} />
                  <RadioQuestion
                    id={5}
                    text={"Unconstrained by specific operating hours"}
                  />
                </div>
              </QuestionContainer>
              {/* BUTTON QUESTION */}
              <QuestionContainer
                id={"04"}
                text={
                  "Do you have land or roof space where you are allowed to renovate, upgrade or install equipment?"
                }
              >
                <div className="gap-2 mt-4 md:mt-12 md:-space-x-4 flex flex-col md:flex-row">
                  {" "}
                  <ButtonQuestion text={"Yes"} />
                  <ButtonQuestion text={"No"} />
                  <ButtonQuestion text={"Maybe"} />
                </div>
              </QuestionContainer>
            </div>
          )}
          {/* STEP THREE */}
          {stepNo === 3 && (
            <div className="space-y-12">
              {/* ICONS RADIO QUESTION */}
              <QuestionContainer
                id={questions[5].iconsRadioQuestion.id}
                text={questions[5].iconsRadioQuestion.text}
              >
                <IconsRadioQuestion
                  qst={questions[5].iconsRadioQuestion.options}
                />
              </QuestionContainer>
              {/* RADIO QUESTION */}
              <QuestionContainer
                id={"02"}
                text={
                  "How much of an investment are you willing to make towards helping reduce the climate impact of your business practices?"
                }
              >
                <div className="flex flex-col space-y-12 mt-12">
                  <RadioQuestion id={1} text={"Little to none"} />
                  <RadioQuestion
                    id={2}
                    text={
                      "I am open to investing a bit more, if it is within my means"
                    }
                  />
                  <RadioQuestion
                    id={3}
                    text={
                      "I have secured the capital or appetite of stakeholders to invest more"
                    }
                  />
                </div>
              </QuestionContainer>
              {/* BUTTON QUESTION */}
              <QuestionContainer
                id={"03"}
                text={
                  "Would you be open to making a larger investment to explore bigger projects, if you didn’t need to invest too much capital upfront?"
                }
              >
                <div className="gap-2 mt-4 md:mt-12 md:-space-x-4 flex flex-col md:flex-row">
                  {" "}
                  <ButtonQuestion text={"Yes"} />
                  <ButtonQuestion text={"No"} />
                  <ButtonQuestion text={"I'm not sure"} />
                </div>
              </QuestionContainer>
            </div>
          )}
          <div className="flex gap-8 py-12">
            {stepNo > 1 && <button onClick={stepBackwardHandler}>Back</button>}
            <ButtonComponent text="Next" action={stepForwardHandler} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageChangeTest;

export async function getServerSideProps(context) {
  const questions = await fetch(`${server}/api/questions`).then((rest) =>
    rest.json()
  );

  return {
    props: {
      questions,
    },
  };
}
