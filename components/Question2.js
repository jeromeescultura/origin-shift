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
          {/* ds */}
        </div>
      </div>
    </div>
  );
}

export default Question2;
