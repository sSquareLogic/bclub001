import hero from "@/settings/hero";

const HeroText = () => {
  return (
    <div className="hero-text flex flex-col gap-10 justify-self-center z-10">
      <div className="flex flex-col gap-4 ">
        <h1 className="text-4xl text-TITLE_SM font-bold text-white underline">
          {hero.team}
        </h1>
        <h2 className="uppercase text-TITLE_LG font-bold text-white">
          {hero.title}
        </h2>
      </div>
      <p className="text-white text-TITLE_SM font-normal">{hero.text}</p>
    </div>
  );
};

export default HeroText;
