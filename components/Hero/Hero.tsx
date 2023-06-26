import Container from "../Container";
import HeroBg from "./HeroBg";
import HeroImg from "./HeroImg";
import HeroText from "./HeroText";
import Logo from "./Logo";

const Hero = () => {
  return (
    <section className="hero min-h-[1024px] relative">
      <Container
        className="grid grid-cols-TWO relative h-full content-center"
        height="1024px"
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
