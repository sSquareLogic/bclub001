import hero from "@/settings/hero";
import Image from "next/image";
const HeroImg = () => {
  return (
    <div className="hero-img flex justify-end z-10">
      <Image
        src={hero.img}
        alt="hero-img"
        width={600}
        height={600}
        unoptimized
        unselectable="off"
        className="w-[600px] h-[600px] object-contain"
      />
    </div>
  );
};

export default HeroImg;
