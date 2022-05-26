import Image from "next/image";

function NavBar() {
  return (
    <div className="bg-white py-3 mt-2 lg:pt-10 w-[90%] sm:w-[80%] md:w-[90%] lg:w-[95%] xl:w-[80%] mx-auto">
      <div className="w-16 lg:w-20">
        <Image
          src="/images/origin-logo.png"
          width={90}
          height={90}
          objectFit="contain"
          alt="origin-logo"
        />
      </div>
    </div>
  );
}

export default NavBar;
