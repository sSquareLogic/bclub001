import React from "react";
import Container from "../Container";
import skills from "@/settings/skills";
import SkillCard from "./SkillCard";
import { v4 } from "uuid";
import AnimateInView from "@/hox/AnimateInView";

const Skills = () => {
  return (
    <section className="skills py-20 bg-SKILLS bg-cover bg-center bg-no-repeat relative transition-all max-2xl:py-[70px] max-xl:py-[60px] max-lg:py-[50px] max-md:py-[40px] max-sm:py-[30px]">
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5))",
        }}
      ></div>
      <AnimateInView type="toTopOpacity">
        <Container
          className="flex flex-col gap-[50px] z-10 relative transition-all max-xl:gap-[45px] max-lg:gap-[40px] max-md:gap-[35px] max-sm:gap-[30px]"
          isSmall
        >
          <h2 className="uppercase text-TITLE_LG text-center font-bold transition-all max-xl:text-[57px] max-lg:text-[50px] max-md:text-[43px] max-sm:text-[36px] max-sm:leading-[44px]">
            {skills.title}
          </h2>
          {skills.items.map((item, index) => (
            <AnimateInView
              key={v4()}
              type={index % 2 === 0 ? "toLeftOpacity" : "toRightOpacity"}
            >
              <SkillCard
                image={item.image}
                list={item.list}
                title={item.title}
              />
            </AnimateInView>
          ))}
        </Container>
      </AnimateInView>
    </section>
  );
};

export default Skills;
