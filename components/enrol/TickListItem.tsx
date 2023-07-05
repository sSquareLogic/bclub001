import Image from "next/image";

interface IProps {
  text: string;
}

const TickListItem = ({ text }: IProps) => {
  return (
    <div className="enrol-tick-list-item flex items-center gap-2 w-fit">
      <Image
        src={"/assets/icons/tick.svg"}
        alt="tick"
        unoptimized
        loading="eager"
        width={15}
        height={15}
        className="w-[15px] h-[15px] object-contain"
      />
      <p className="text-white font-semibold text-[24px] transition-all max-xl:text-[22px] max-lg:text-[20px] max-md:text-[18px] max-sm:text-[16px] max-xl:leading-[26px] max-lg:leading-[24px] max-md:leading-[22px] max-sm:leading-[20px]">
        {text}
      </p>
    </div>
  );
};

export default TickListItem;
