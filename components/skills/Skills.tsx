import React from "react";
import Container from "../Container";
import skills from "@/settings/skills";
import SkillCard from "./SkillCard";
import { v4 } from "uuid";

const Skills = () => {
  return (
    <section className="skills py-20 bg-SKILLS bg-cover bg-center bg-no-repeat relative">
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5))",
        }}
      ></div>
      <Container className="flex flex-col gap-[50px] z-10 relative" isSmall>
        <h2 className="uppercase text-TITLE_LG text-center font-bold">
          {skills.title}
        </h2>
        {skills.items.map((item) => (
          <SkillCard
            image={item.image}
            list={item.list}
            title={item.title}
            key={v4()}
          />
        ))}
      </Container>
    </section>
  );
};

export default Skills;
