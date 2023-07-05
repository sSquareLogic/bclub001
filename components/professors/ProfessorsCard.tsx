import professors from "@/settings/professors";
import { IProfessor } from "@/types/professors.types";
import Image from "next/image";

interface IProps extends IProfessor {
  position?: "first" | "last";
}

const ProfessorsCard = ({ description, image, name, position }: IProps) => {
  return (
    <div
      className="professors-card h-[520px] w-full relative overflow-hidden transition-all max-xl:h-auto"
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
        className="h-[520px] w-full object-contain transition-all max-xl:h-auto"
      />
      <div className="absolute top-[60%] left-0 pt-4 border-t-2 border-solid border-GOLD flex flex-col gap-1 mx-6 transition-all max-xl:top-[55%] max-[900px]:top-[80%] max-md:top-[70%] max-[500px]:top-[60%]">
        <h6 className="text-white text-TEXT font-bold uppercase transition-all max-xl:text-TEXT_SM max-[900px]:text-TEXT max-[900px]:text-white">
          {name}
        </h6>
        <p className="text-white text-TEXT_SM leading-5 transition-all max-xl:text-[14px] max-[900px]:text-TEXT_SM">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProfessorsCard;
