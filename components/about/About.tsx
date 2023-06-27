import Container from "../Container";
import AboutContent from "./AboutContent";
import AboutLogo from "./AboutLogo";

const About = () => {
  return (
    <section className="about min-h-[992px] py-6">
      <Container
        className="grid grid-cols-TWO content-center gap-9"
        height="992px"
      >
        <AboutContent />
        <AboutLogo />
      </Container>
    </section>
  );
};

export default About;
