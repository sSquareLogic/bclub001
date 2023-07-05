import hero from "@/settings/hero";

const HeroText = () => {
  return (
    <div className="hero-text flex flex-col gap-10 justify-self-center justify-center z-10">
      <div className="flex flex-col gap-8">
        <h1 className="text-4xl text-TITLE_SM font-bold text-white underline uppercase">
          {hero.team}
        </h1>
        <h2 className="uppercase text-TITLE_LG font-bold text-white leading-[70px]">
          {hero.title}
        </h2>
      </div>
      <p
        className="text-white text-TITLE_SM font-normal leading-10"
        dangerouslySetInnerHTML={{ __html: hero.text }}
      ></p>
    </div>
  );
};

export default HeroText;
