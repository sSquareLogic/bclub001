import Image from "next/image";

interface IProps {
  title: string;
  text: string;
}

const FaqItem = ({ title, text }: IProps) => {
  return (
    <div className="faq-item relative rounded-xl border border-solid border-white p-[10px] flex flex-col gap-5">
      <h6 className="text-GOLD text-TEXT_LG font-bold pr-10">{title}</h6>
      <p
        dangerouslySetInnerHTML={{ __html: text }}
        className="text-TEXT_LG text-white"
      ></p>
      <Image
        src={"/assets/icons/plus.svg"}
        alt="plus"
        width={34}
        height={34}
        unoptimized
        loading="eager"
        className="w-[34px] h-[34px] object-contain absolute top-[10px] right-[10px]"
      />
    </div>
  );
};

export default FaqItem;
