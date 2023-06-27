import { ISkill } from "@/types/skills.type";
import Image from "next/image";

interface IProps {
  image: ISkill["image"];
}

const SkillImage = ({ image }: IProps) => {
  return (
    <div className="skill-image w-full">
      <Image
        src={image}
        alt="card image"
        width={500}
        height={500}
        unoptimized
        unselectable="off"
        className="w-full h-[500px] object-contain"
      />
    </div>
  );
};

export default SkillImage;
