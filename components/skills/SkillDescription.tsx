import { ISkill } from "@/types/skills.types";
import SkillList from "./SkillList";

interface IProps {
  title: ISkill["title"];
  list: ISkill["list"];
}

const SkillDescription = ({ list, title }: IProps) => {
  return (
    <div className="skill-description flex flex-col gap-8 justify-center transition-all max-xl:gap-[10px]">
      <h3 className="uppercase text-TITLE font-bold border-GOLD border-solid border-b-0 pb-[5px] transition-all max-[900px]:border-b-2  max-xl:text-[36px] max-lg:text-[32px] max-md:text-[28px] max-sm:text-[24px]">
        {title}
      </h3>
      <SkillList list={list} />
    </div>
  );
};

export default SkillDescription;
