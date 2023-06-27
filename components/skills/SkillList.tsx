import { ISkill } from "@/types/skills.type";
import SkillListItem from "./SkillListItem";
import { v4 } from "uuid";

interface IProps {
  list: ISkill["list"];
}

const SkillList = ({ list }: IProps) => {
  return (
    <div className="skill-list flex flex-col gap-[10px]">
      {list.map((listItem) => (
        <SkillListItem
          key={v4()}
          text={listItem.text}
          highlightedText={listItem.highlightedText}
        />
      ))}
    </div>
  );
};

export default SkillList;
