const HeroBg = () => {
  return (
    <div className="hero-bg absolute top-0 left-0 h-full w-full bg-HERO_TOP pointer-events-none">
      <div
        className="relative -z-20 h-[800px] w-full transition-all max-[900px]:h-full"
        style={{
          background: "url(/assets/images/hero-bg.png) center",
        }}
      ></div>
      <div
        className="absolute bottom-0 -z-10 h-[820px] w-full"
        style={{
          background: "url(/assets/images/hero-smoke.png)",
        }}
      ></div>
    </div>
  );
};

export default HeroBg;
