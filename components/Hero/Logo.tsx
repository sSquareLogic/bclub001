import Image from "next/image";

const Logo = () => {
  return (
    <div className="logo w-LOGO h-LOGO absolute top-0 left-[50%] -translate-x-[50%] max-lg:h-40 max-lg:w-40 max-md:w-[100px] max-md:h-[100px]">
      <Image
        src={"/assets/images/logo.svg"}
        alt="logo"
        priority
        loading="eager"
        width={200}
        height={200}
        className="object-contain w-LOGO h-LOGO transition-all max-lg:h-40 max-lg:w-40 max-md:w-[100px] max-md:h-[100px]"
      />
    </div>
  );
};

export default Logo;
