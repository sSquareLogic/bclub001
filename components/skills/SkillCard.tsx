import { ISkill } from "@/types/skills.types";
import SkillImage from "./SkillImage";
import SkillDescription from "./SkillDescription";

const SkillCard = ({ image, list, title }: ISkill) => {
  return (
    <div className="skill-card p-[60px] border-[3px] border-GOLD border-solid rounded-xl grid grid-cols-TWO gap-8 bg-white transition-all max-[900px]:flex max-[900px]:flex-col-reverse max-[900px]:gap-[10px] max-xl:text-[54px] max-lg:text-[48px] max-md:text-[42px] max-sm:text-[36px] max-xl:p-[52.5px] max-lg:p-[45px] max-md:p-[37.5px] max-sm:p-[30px]">
      <SkillDescription list={list} title={title} />
      <SkillImage image={image} />
    </div>
  );
};

export default SkillCard;
