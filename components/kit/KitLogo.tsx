import kit from "@/settings/kit";
import Image from "next/image";

const KitLogo = () => {
  return (
    <div className="kit-logo w-full">
      <Image
        src={kit.img}
        alt="kit logo"
        height={700}
        width={720}
        className="w-full h-[700px] object-contain transition-all max-[900px]:h-auto"
      />
    </div>
  );
};

export default KitLogo;
