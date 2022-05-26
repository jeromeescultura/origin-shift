import React from "react";
import ButtonQuestion from "../components/ButtonQuestion";
import CheckboxComponent from "../components/CheckboxComponent";
import CheckboxContainer from "../components/CheckboxContainer";
import SliderQuestion from "../components/SliderQuestion";
import QuestionContainer from "./QuestionContainer";

const StepOneContainer = ({ btnQsts, chkBoxQsts, sldrQsts }) => {
  return (
    <>
      <QuestionContainer id={btnQsts?.id} text={btnQsts?.text}>
        <ButtonQuestion options={btnQsts?.options} />
      </QuestionContainer>
      <QuestionContainer
        id={chkBoxQsts[0]?.id}
        text={chkBoxQsts[0]?.text}
        subText={chkBoxQsts[0]?.subText}
      >
        {chkBoxQsts?.map((item, index) => (
          <CheckboxContainer
            key={index}
            icon={item?.icon}
            title={item?.title}
            questionsList={item?.questionsList}
          />
        ))}
      </QuestionContainer>
      <QuestionContainer id={sldrQsts?.id} text={sldrQsts?.text}>
        <SliderQuestion qst={sldrQsts?.options} />
      </QuestionContainer>
    </>
  );
};

export default StepOneContainer;
