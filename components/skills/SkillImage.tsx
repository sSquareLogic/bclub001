import { ISkill } from "@/types/skills.types";
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
        priority
        className="w-full h-[500px] object-contain transition-all max-[900px]:h-[400px] max-[900px]:w-fit max-md:h-[250px] max-sm:h-[200px] max-[500px]:h-[150px]"
      />
    </div>
  );
};

export default SkillImage;
