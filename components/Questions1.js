import DropdownQuestion from "./DropdownQuestion";
import IconsRadioQuestion from "./IconsRadioQuestion";

function Questions1({ qsts }) {
  const { id, qst, choices } = qsts;
  return (
    <>
      {choices.no && (
        <div className="bg-white rounded-3xl py-24 pl-16 pr-24">
          <div className="flex gap-12">
            <div>
              <p className="text-[64px] text-primaryText">0{id}</p>
            </div>
            <div>
              <p className="text-[20px] text-secondaryText font-light">
                {typeof qst === "object" ? qst[0] : qst}
              </p>
              <div className="flex mt-12">
                <button className="w-[203px] h-[48px] bg-white  text-[#505050 font-light text-center border rounded-r-md focus:z-10 focus:bg-highlight focus:border-darkHighlight">
                  Not really
                </button>
                <button className="w-[203px] h-[48px] bg-white text-[#505050] font-light text-center border rounded-l-md -ml-2 focus:z-10 focus:bg-highlight focus:border-darkHighlight">
                  Yes, I'm considering it
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {choices.industry && <DropdownQuestion question={qsts} />}
      {choices.au && <IconsRadioQuestion question={qsts} />}
    </>
  );
}

export default Questions1;
