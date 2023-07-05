import about from "@/settings/about";
import Image from "next/image";

const AboutLogo = () => {
  return (
    <div className="about-logo w-full">
      <Image
        src={about.logo}
        alt="about logo"
        height={992}
        width={600}
        className="w-full h-[992px] object-contain transition-all max-[900px]:hidden"
      />
    </div>
  );
};

export default AboutLogo;
