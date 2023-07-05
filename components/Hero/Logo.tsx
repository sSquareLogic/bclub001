import Image from "next/image";

const Logo = () => {
  return (
    <div className="logo w-LOGO h-LOGO absolute top-0 left-[50%] -translate-x-[50%]">
      <Image
        src={"/assets/images/logo.svg"}
        alt="logo"
        priority
        loading="eager"
        width={200}
        height={200}
        className="object-contain w-LOGO h-LOGO"
      />
    </div>
  );
};

export default Logo;
