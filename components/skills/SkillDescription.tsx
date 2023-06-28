import { ISkill } from "@/types/skills.types";
import SkillList from "./SkillList";

interface IProps {
  title: ISkill["title"];
  list: ISkill["list"];
}

const SkillDescription = ({ list, title }: IProps) => {
  return (
    <div className="skill-description flex flex-col gap-8 justify-center">
      <h3 className="uppercase text-TITLE font-bold">{title}</h3>
      <SkillList list={list} />
    </div>
  );
};

export default SkillDescription;
