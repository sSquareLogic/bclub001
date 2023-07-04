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
      <p className="text-white font-semibold text-[24px]">{text}</p>
    </div>
  );
};

export default TickListItem;
