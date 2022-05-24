import Button from "../components/button";
import Question1 from "../components/Question1";
import Question2 from "../components/Question2";
import Question3 from "../components/Question3";

function sample() {
  return (
    <div className="bg-primaryBG w-full">
      <div className="w-[80%] mx-auto flex flex-col gap-16 py-20">
        <Question1 />
        <Question2 />
        <Question3 />
        <div>
          <Button text="Next" />
        </div>
      </div>
    </div>
  );
}

export default sample;
