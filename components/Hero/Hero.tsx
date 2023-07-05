"use client";
import Container from "../Container";
import HeroBg from "./HeroBg";
import HeroImg from "./HeroImg";
import HeroText from "./HeroText";
import Logo from "./Logo";
import useMediaQuery from "@mui/material/useMediaQuery";

const Hero = () => {
  const lg = useMediaQuery("(max-width: 1024px)");
  return (
    <section className="hero min-h-[1024px] relative transition-all max-lg:min-h-0">
      <Container
        className="grid grid-cols-HERO relative h-full content-center pt-[200px] pb-14 transition-all max-lg:pt-40 max-md:flex max-md:flex-col-reverse max-md:gap-6 max-md:pt-[100px]"
        height={lg ? "auto" : "1024px"}
      >
        <Logo />
        <HeroText />
        <HeroImg />
      </Container>
      <HeroBg />
    </section>
  );
};

export default Hero;
