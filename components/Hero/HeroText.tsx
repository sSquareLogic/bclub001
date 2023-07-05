import hero from "@/settings/hero";

const HeroText = () => {
  return (
    <div className="hero-text flex flex-col gap-10 justify-self-center justify-center z-10 transition-all max-md:gap-[10px]">
      <div className="flex flex-col gap-8 transition-all max-md:gap-[5px]">
        <h1 className="text-4xl text-TITLE_SM font-bold text-white underline uppercase transition-all max-xl:text-3xl max-lg:text-2xl max-md:text-center max-[400px]:text-xl">
          {hero.team}
        </h1>
        <h2 className="uppercase text-TITLE_LG font-bold text-white leading-tight transition-all max-xl:text-[56px] max-lg:text-[40px] max-md:text-center max-[520px]:text-[34px] max-[400px]:text-[30px]">
          {hero.title}
        </h2>
      </div>
      <p
        className="text-white text-TITLE_SM font-normal leading-none max-xl:text-3xl max-lg:text-2xl max-md:text-center max-md:px-10 max-[520px]:text-[21px] max-[400px]:text-lg max-[400px]:px-2"
        dangerouslySetInnerHTML={{ __html: hero.text }}
      ></p>
    </div>
  );
};

export default HeroText;
