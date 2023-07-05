"use client";
import useMediaQuery from "@mui/material/useMediaQuery";
import Container from "../Container";
import AboutContent from "./AboutContent";
import AboutLogo from "./AboutLogo";

const About = () => {
  const breakpoint = useMediaQuery("(max-width: 900px)");
  return (
    <section className="about min-h-[992px] py-6 transition-all max-[900px]:min-h-fit max-[900px]:py-[88px] max-[900px]:px-[5px]">
      <Container
        className="grid grid-cols-TWO content-center gap-9 transition-all max-[900px]:grid-cols-ONE"
        height={!breakpoint ? "992px" : "auto"}
      >
        <AboutContent />
        <AboutLogo />
      </Container>
    </section>
  );
};

export default About;
