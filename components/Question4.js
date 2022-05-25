function Question3() {
  return (
    <div className="bg-white rounded-3xl py-24 pl-16 pr-24">
      <div className="flex gap-12">
        <div>
          <p className="text-[64px] text-primaryText">03</p>
        </div>
        <div>
          <p className="text-[20px] text-secondaryText font-light">
            How important is reducing your business’ impact on the environment
            to you?
          </p>
          <div className="flex mt-12">
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-highlight">
              <div className="bg-darkHighlight h-2.5 rounded-full w-[45%]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Question3;
