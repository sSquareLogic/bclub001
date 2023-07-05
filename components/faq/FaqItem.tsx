"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface IProps {
  title: string;
  text: string;
}

const FaqItem = ({ title, text }: IProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <motion.div
      initial={{ gap: "0" }}
      animate={isOpen ? { gap: "20px" } : {}}
      className="faq-item relative rounded-xl border border-solid border-white p-[10px] flex flex-col cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <h6 className="text-GOLD text-TEXT_LG font-bold pr-10 transition-all max-xl:text-[28px] max-lg:text-[24px] max-sm:text-[20px]">
        {title}
      </h6>
      <motion.p
        initial={{ maxHeight: "0px", opacity: "0%" }}
        animate={isOpen ? { maxHeight: "150px", opacity: "100%" } : {}}
        dangerouslySetInnerHTML={{ __html: text }}
        className="text-TEXT_LG text-white h-full overflow-hidden lh max-xl:text-[28px] max-xl:leading-7 max-lg:text-[24px] max-lg:leading-6 max-md:text-[20px] max-md:leading-5 max-sm:text-[16px] max-sm:leading-4"
      ></motion.p>
      <motion.div
        className="absolute top-[10px] right-[10px]"
        initial={{ rotate: "0deg" }}
        animate={isOpen ? { rotate: "45deg" } : {}}
      >
        <Image
          src={"/assets/icons/plus.svg"}
          alt="plus"
          width={34}
          height={34}
          unoptimized
          loading="eager"
          className="w-[34px] h-[34px] object-contain transition-all max-lg:w-7 max-lg:h-7 max-md:w-6 max-md:h-6 max-sm:w-[18px] max-sm:h-[18px]"
        />
      </motion.div>
    </motion.div>
  );
};

export default FaqItem;
