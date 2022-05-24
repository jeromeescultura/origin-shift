import ButtonQuestion from "./ButtonQuestion";

function Question1() {
  return (
    <div className="bg-white rounded-3xl py-24 pl-16 pr-24">
      <div className="flex gap-12">
        <div>
          <p className="text-[64px] text-primaryText">01</p>
        </div>
        <div>
          <p className="text-[20px] text-secondaryText font-light">
            Are you currently looking to implement any specifiy sustainability
            or energy efficiency goals at your business for the future?
          </p>
          <div className="flex mt-12 -space-x-1">
            <ButtonQuestion text="Not really" />
            <ButtonQuestion text="Yes, I'm considering it" />
            {/* <button className="w-[203px] h-[48px] bg-white  text-[#505050 font-light text-center border rounded-r-md focus:z-10 focus:bg-highlight focus:border-darkHighlight">
              Not really
            </button>
            <button className="w-[203px] h-[48px] bg-white text-[#505050] font-light text-center border rounded-l-md -ml-2 focus:z-10 focus:bg-highlight focus:border-darkHighlight">
              Yes, I'm considering it
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Question1;
