import Image from "next/image";

function Question2() {
  return (
    <div className="bg-white rounded-3xl py-24 pl-16 pr-24">
      <div className="flex gap-12">
        <div>
          <p className="text-[64px] text-primaryText">02</p>
        </div>
        <div>
          <p className="text-[20px] text-secondaryText font-light">
            What sort of changes have been implemented (if any) to help reduce
            the impact your business has on the environment?
          </p>
          <p className="mt-8 font-light">Select none or as many that apply.</p>
          <div>
            <div className="flex mt-12">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12">
                  <Image
                    src="/icons/bulb.svg"
                    width={50}
                    height={50}
                    objectFit="contain"
                  />
                </div>
                <div className="flex flex-col gap-8 mt-2">
                  <p className="text-[20px] font-bold text-secondaryText">
                    Energy sourcing changes
                  </p>
                  <div className="form-check flex items-center gap-4">
                    <input
                      className="form-check-input appearance-none h-8 w-8 border-2 border-[#737373] rounded-sm bg-white checked:bg-darkHighlight checked:border-darkHighlight focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label inline-block text-secondaryText font-light"
                      htmlFor="flexCheckDefault"
                    >
                      Replaced some or all energy inneficient equipment at your
                      site(s) with more efficient ones
                    </label>
                  </div>
                  <div className="form-check flex items-center gap-4">
                    <input
                      className="form-check-input appearance-none h-8 w-8 border-2 border-[#737373] rounded-sm bg-white checked:bg-darkHighlight checked:border-darkHighlight focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label inline-block text-secondaryText font-light"
                      htmlFor="flexCheckDefault"
                    >
                      Switch to an energy plan that carbon offsets your energy
                      use
                    </label>
                  </div>
                  <div className="form-check flex items-center gap-4">
                    <input
                      className="form-check-input appearance-none h-8 w-8 border-2 border-[#737373] rounded-sm bg-white checked:bg-darkHighlight checked:border-darkHighlight focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label inline-block text-secondaryText font-light"
                      htmlFor="flexCheckDefault"
                    >
                      Invested in renewable generators through programs like
                      GreenPower, to feed renewables into the grid
                    </label>
                  </div>
                  <div className="form-check flex items-center gap-4">
                    <input
                      className="form-check-input appearance-none h-8 w-8 border-2 border-[#737373] rounded-sm bg-white checked:bg-darkHighlight checked:border-darkHighlight focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label inline-block text-secondaryText font-light"
                      htmlFor="flexCheckDefault"
                    >
                      Installed solar at your site(s)
                    </label>
                  </div>
                  <div className="form-check flex items-center gap-4">
                    <input
                      className="form-check-input appearance-none h-8 w-8 border-2 border-[#737373] rounded-sm bg-white checked:bg-darkHighlight checked:border-darkHighlight focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label inline-block text-secondaryText font-light"
                      htmlFor="flexCheckDefault"
                    >
                      Added battery storage to your solar system
                    </label>
                  </div>
                  <div className="form-check flex items-center gap-4">
                    <input
                      className="form-check-input appearance-none h-8 w-8 border-2 border-[#737373] rounded-sm bg-white checked:bg-darkHighlight checked:border-darkHighlight focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label inline-block text-secondaryText font-light"
                      htmlFor="flexCheckDefault"
                    >
                      Replaced some or all of your vehicle fleet with electric
                      vehicles
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex mt-12">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 p-2">
                  <Image
                    src="/icons/flame.svg"
                    width={50}
                    height={50}
                    objectFit="contain"
                  />
                </div>

                <div className="flex flex-col gap-8 mt-2">
                  <p className="text-[20px] font-bold text-secondaryText">
                    General operations changes
                  </p>
                  <div className="form-check flex items-center gap-4">
                    <input
                      className="form-check-input appearance-none h-8 w-8 border-2 border-[#737373] rounded-sm bg-white checked:bg-darkHighlight checked:border-darkHighlight focus:outline-none transition duration-200 cursor-pointer"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label inline-block text-secondaryText font-light"
                      htmlFor="flexCheckDefault"
                    >
                      Replaced some or all packaging used for your business to
                      use more sustainable alternatives
                    </label>
                  </div>
                  <div className="form-check flex items-center gap-4">
                    <input
                      className="form-check-input appearance-none h-8 w-8 border-2 border-[#737373] rounded-sm bg-white checked:bg-darkHighlight checked:border-darkHighlight focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label inline-block text-secondaryText font-light"
                      htmlFor="flexCheckDefault"
                    >
                      Introduced recycling and waste reduction processes at
                      office sites
                    </label>
                  </div>
                  <div className="form-check flex items-center gap-4">
                    <input
                      className="form-check-input appearance-none h-8 w-8 border-2 border-[#737373] rounded-sm bg-white checked:bg-darkHighlight checked:border-darkHighlight focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label inline-block text-secondaryText font-light"
                      htmlFor="flexCheckDefault"
                    >
                      Invested in renewable generators through programs like
                      GreenPower, to feed renewables into the grid
                    </label>
                  </div>
                  <div className="form-check flex items-center gap-4">
                    <input
                      className="form-check-input appearance-none h-8 w-8 border-2 border-[#737373] rounded-sm bg-white checked:bg-darkHighlight checked:border-darkHighlight focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label inline-block text-secondaryText font-light"
                      htmlFor="flexCheckDefault"
                    >
                      Optimised supply chain processes to reduce material
                      wastage
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Question2;
