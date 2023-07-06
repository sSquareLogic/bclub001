import Container from "../Container";
import Description from "./Description";
import Reserve from "./Reserve";

const Enrol = () => {
  return (
    <section className="enrol">
      <Container className="grid grid-cols-TWO gap-12 content-center pt-60 pb-44 min-h-[1130px] bg-black transition-all max-lg:grid-cols-ONE max-lg:gap-4 max-xl:pb-[143.5px] max-lg:pb-[111px] max-md:pb-[78.5px] max-sm:pb-[46px] max-xl:pt-[191.5px] max-lg:pt-[143px] max-md:pt-[94.5px] max-sm:pt-[46px]">
        <Description />
        <Reserve />
      </Container>
    </section>
  );
};

export default Enrol;
