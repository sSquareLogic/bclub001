import { ISkill } from "@/types/skills.type";
import SkillImage from "./SkillImage";
import SkillDescription from "./SkillDescription";

const SkillCard = ({ image, list, title }: ISkill) => {
  return (
    <div className="skill-card p-[60px] border-[3px] border-GOLD border-solid rounded-xl grid grid-cols-TWO gap-8 bg-white">
      <SkillDescription list={list} title={title} />
      <SkillImage image={image} />
    </div>
  );
};

export default SkillCard;
