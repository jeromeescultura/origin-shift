import Head from "next/head";
import Image from "next/image";
import Button from "../components/button";

export default function Home() {
  return (
    <div className="h-screen bg-gray-500 flex flex-col">
      <div className="bg-white py-2 pl-8">
        <div className="w-16">
          <Image
            src="/images/origin-logo.png"
            width={90}
            height={90}
            objectFit="contain"
          />
        </div>
      </div>
      <div className="relative flex justify-center flex-grow ">
        <div className="w-full h-full">
          <Image
            src="/images/hero.png"
            width={1440}
            height={660}
            objectFit="cover"
            layout="fill"
          />
        </div>

        <div className="absolute top-28 w-[90%] md:w-[80%]">
          <h2 className="text-4xl md:text-[56px] md:leading-[64px] text-primaryText md:max-w-[450px] font-bold ">
            Business energy that's affordable &amp; future proof
          </h2>
          <p className="text-secondaryText max-w-[520px] text-[20px] mt-8 font-light">
            By taking our sustainability assessment, we will connect your
            business to the right products and services that drive value for you
            and the environment.
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-16">
            <Button text="Start assessment" />
            <button className="text-primaryText border-primaryText border rounded-full py-2 px-8">
              Let's have a chat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
