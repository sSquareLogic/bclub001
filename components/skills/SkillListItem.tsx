import { ISkillPoint } from "@/types/skills.types";
import Image from "next/image";

const SkillListItem = ({ text, highlightedText = "" }: ISkillPoint) => {
  return (
    <div className="skill-list-item flex items-center gap-[6px]">
      <Image
        src={"/assets/icons/list-bullet.svg"}
        alt="list bullet"
        height={10}
        width={10}
        className="object-contain w-[10] h-[10]"
      />
      <p className="text-TEXT">
        {text} <span className="uppercase font-bold">{highlightedText}</span>
      </p>
    </div>
  );
};

export default SkillListItem;
