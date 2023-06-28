import professors from "@/settings/professors";
import { IProfessor } from "@/types/professors.types";
import Image from "next/image";

interface IProps extends IProfessor {
  position?: "first" | "last";
}

const ProfessorsCard = ({ description, image, name, position }: IProps) => {
  return (
    <div
      className="professors-card h-[520px] w-full relative overflow-hidden"
      style={
        position === "first"
          ? { borderTopLeftRadius: "100px" }
          : position === "last"
          ? { borderTopRightRadius: "100px" }
          : {}
      }
    >
      <Image
        src={image}
        alt="professor image"
        height={520}
        width={330}
        className="h-[520px] w-full object-contain"
      />
      <div className="absolute top-[60%] left-0 pt-4 border-t-2 border-solid border-GOLD flex flex-col gap-1 mx-6">
        <h6 className="text-white text-TEXT font-bold uppercase">{name}</h6>
        <p className="text-white text-TEXT_SM">{description}</p>
      </div>
    </div>
  );
};

export default ProfessorsCard;
