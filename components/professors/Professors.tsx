import professors from "@/settings/professors";
import Container from "../Container";
import GradientTitle from "../GradientTitle";
import ProfessorsCard from "./ProfessorsCard";
import { v4 } from "uuid";

const Professors = () => {
  return (
    <section className="professors bg-black py-20">
      <Container isSmall className="flex flex-col gap-20">
        <GradientTitle text="conoce a tus profesores" size="64px" />
        <div className="grid grid-cols-THREE gap-10">
          {professors.map((professor) => (
            <ProfessorsCard
              description={professor.description}
              image={professor.image}
              name={professor.name}
              position={professor.position}
              key={v4()}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Professors;
