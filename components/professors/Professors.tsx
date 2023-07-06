"use client";
import professors from "@/settings/professors";
import Container from "../Container";
import GradientTitle from "../GradientTitle";
import ProfessorsCard from "./ProfessorsCard";
import { v4 } from "uuid";
import useMediaQuery from "@mui/material/useMediaQuery";
import AnimateInView from "@/hox/AnimateInView";

const Professors = () => {
  const breakPoints = {
    xl: useMediaQuery("(max-width: 1280px)"),
    lg: useMediaQuery("(max-width: 1024px)"),
    900: useMediaQuery("(max-width: 900px)"),
    sm: useMediaQuery("(max-width: 640px)"),
    500: useMediaQuery("(max-width: 500px)"),
  };
  return (
    <section className="professors bg-black py-20 transition-all max-md:py-16 max-sm:py-10">
      <Container
        isSmall
        className="flex flex-col gap-20 transition-all max-xl:gap-16 max-lg:gap-12 max-md:gap-8 max-[500px]:gap-6"
      >
        <GradientTitle
          text="conoce a tus profesores"
          size={
            breakPoints[500]
              ? "32px"
              : breakPoints.sm
              ? "40px"
              : breakPoints.lg
              ? "48px"
              : breakPoints.xl
              ? "56px"
              : "64px"
          }
          align="center"
        />
        <div className="grid grid-cols-THREE gap-10 transition-all max-[900px]:grid-cols-ONE max-[900px]:px-[15%] max-[500px]:px-[35px]">
          {professors.map((professor, index) => (
            <AnimateInView
              key={v4()}
              type={index % 2 === 0 ? "toTopOpacity" : "toBottomOpacity"}
              delay={`${100 + 50 * (index + 1)}`}
              margin="0%"
            >
              <ProfessorsCard
                description={professor.description}
                image={professor.image}
                name={professor.name}
                position={!breakPoints[900] ? professor.position : undefined}
              />
            </AnimateInView>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Professors;
