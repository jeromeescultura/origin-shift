import { useEffect, useState } from "react";
import { server } from "../config";

import ProgressBar from "../components/ProgressBar";
import PageIntro from "../components/PageIntro";
import ButtonComponent from "../components/ButtonComponent";
import QuestionContainer from "../containers/QuestionContainer";
import ButtonQuestion from "../components/ButtonQuestion";
import IconsQuestion from "../components/IconsQuestion";
import CheckboxContainer from "../components/CheckboxContainer";
import RadioQuestion from "../components/RadioQuestion";
import SliderQuestion from "../components/SliderQuestion";
import StepOneContainer from "../containers/StepOneContainer";

const Assessment = ({ questions }) => {
  const [buttonQuestions, setButtonQuestions] = useState({});
  const [checkboxQuestions, setCheckboxQuestions] = useState([]);
  const [radioQuestions, setRadioQuestions] = useState({});
  const [iconsQuestions, setIconsQuestions] = useState({});
  const [sliderQuestion, setSliderQuestion] = useState({});

  useEffect(() => {
    questions.map((item) => {
      if (item.buttonQuestion !== undefined) {
        setButtonQuestions(item.buttonQuestion);
      } else if (item.checkboxQuestion !== undefined) {
        setCheckboxQuestions(item.checkboxQuestion);
      } else if (item.radioQuestion !== undefined) {
        setRadioQuestions(item.radioQuestion);
      } else if (item.iconsQuestion !== undefined) {
        setIconsQuestions(item.iconsQuestion);
      } else if (item.sliderQuestion !== undefined) {
        setSliderQuestion(item.sliderQuestion);
      }
    });
  }, [questions]);


  const [step, setStep] = useState({
    secondStep: "w-0 opacity-0",
    thirdStep: "w-0 opacity-0",
  });

  const [stepNo, setStepNo] = useState(1);

  const [stepPage, setPage] = useState(questions[stepNo - 1]);

  const assessIntro = [
    {
      header: "Climate action & your business",
      desc: "This initial set of questions are designed to understand what climate action means for you and your business.",
      plant: "/icons/plant.svg",
    },
    {
      header: "Your site & energy needs",
      desc: "To understand what options may be applicable to reduce your business impact from an energy perspective, tell us a little bit about what happens on-site to keep your business running.",
      plant: "/icons/plant.svg",
    },
    {
      header: "Your program preferences",
      desc: "There are a number of different clean energy projects and services out there that are more suitable than others for you, which depend on certain preferences you may have. Let's understand these further.",
      plant: "/icons/plant.svg",
    },
  ];

  const [activeState, changeState] = useState(0);

  const backToTop = () => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };

  const stepForwardHandler = () => {
    if (step.secondStep === "w-0 opacity-0") {
      setStep({ ...step, secondStep: "w-full opacity-100" });
    } else if (step.thirdStep === "w-0 opacity-0") {
      setStep({ ...step, thirdStep: "w-full opacity-100" });
    }
    setStepNo((prevState) => prevState + 1);
    setPage(questions[stepNo - 1]);
    changeState((prevState) => {
      if (activeState >= 2) {
        return 2;
      } else {
        return prevState + 1;
      }
    });
    if (stepNo >= 3) {
      setStepNo(3);
      setPage(questions[stepNo - 1]);
    }
    backToTop();
  };

  const stepBackwardHandler = () => {
    backToTop();
    if (step.thirdStep === "w-full opacity-100") {
      setStep({ ...step, thirdStep: "w-0 opacity-0" });
    } else if (step.secondStep === "w-full opacity-100") {
      setStep({ ...step, secondStep: "w-0 opacity-0" });
    }
    setStepNo((prevState) => prevState - 1);
    setPage(questions[stepNo - 1]);
    changeState((prevState) => {
      if (activeState <= 0) {
        return 0;
      } else {
        return prevState - 1;
      }
    });
    if (stepNo <= 1) {
      setStepNo(1);
      setPage(questions[stepNo - 1]);
    }
  };

  return (
    <div className="bg-primaryBG h-full pb-16">
      <div className="bg-assessment-bg bg-no-repeat bg-contain h-full">
        <div className="w-[90%] md:w-[80%] mx-auto h-full">
          <ProgressBar step={step} stepNo={stepNo} />
          <PageIntro assessIntro={assessIntro} activeState={activeState} />
          <div className="space-y-8">
            {/* Step 1 */}
            {stepNo === 1 && (
              <StepOneContainer
                btnQsts={buttonQuestions}
                chkBoxQsts={checkboxQuestions}
                sldrQsts={sliderQuestion}
              />
            )}

            {/* Step 2 */}

            {stepNo === 2 && (
              <>
                <QuestionContainer
                  id={radioQuestions?.id}
                  text={radioQuestions?.text}
                >
                  {radioQuestions &&
                    radioQuestions.options?.map((item, index) => (
                      <RadioQuestion id={index} text={item.text} key={index} />
                    ))}
                </QuestionContainer>
                <QuestionContainer
                  id={iconsQuestions.id}
                  text={iconsQuestions.text}
                  subText={iconsQuestions.subText}
                >
                  <div className="space-y-8 mt-12">
                    <div className="flex flex-col lg:flex-row gap-2 md:gap-4">
                      {iconsQuestions.options?.map((item, index) => (
                        <IconsQuestion
                          key={index}
                          id={index}
                          text={item.text}
                          icon={item.icon}
                        />
                      ))}
                    </div>
                  </div>
                </QuestionContainer>
              </>
            )}
          </div>
          <div className="flex gap-16 mt-16">
            {stepNo !== 1 && (
              <button
                className="text-primaryText"
                onClick={stepBackwardHandler}
              >
                Back
              </button>
            )}
            {stepNo !== 3 ? (
              <ButtonComponent text="Next" action={stepForwardHandler} />
            ) : (
              <ButtonComponent
                text="View recommendations"
                action={stepForwardHandler}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assessment;

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
