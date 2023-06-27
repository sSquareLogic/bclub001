import Image from "next/image";

const AboutLogo = () => {
  return (
    <div className="about-logo w-full">
      <Image
        src={"/assets/images/about.png"}
        alt="about logo"
        height={992}
        width={600}
        unoptimized
        unselectable="off"
        className="w-full h-[992px] object-contain"
      />
    </div>
  );
};

export default AboutLogo;
