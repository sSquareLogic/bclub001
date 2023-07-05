import hero from "@/settings/hero";
import Image from "next/image";
const HeroImg = () => {
  return (
    <div className="hero-img flex justify-end z-10">
      <Image
        src={hero.img}
        priority
        loading="eager"
        alt="hero-img"
        width={600}
        height={600}
        className="w-full h-[600px] object-contain transition-all max-lg:h-auto max-md:px-8 max-[520px]:px-0"
      />
    </div>
  );
};

export default HeroImg;
