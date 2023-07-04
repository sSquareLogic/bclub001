import Container from "../Container";
import Description from "./Description";
import Reserve from "./Reserve";

const Enrol = () => {
  return (
    <section className="enroll">
      <Container className="grid grid-cols-ENROL gap-12 content-center pt-60 pb-44 min-h-[1130px] bg-black">
        <Description />
        <Reserve />
      </Container>
    </section>
  );
};

export default Enrol;
