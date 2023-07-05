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
      <h6 className="text-GOLD text-TEXT_LG font-bold pr-10">{title}</h6>
      <motion.p
        initial={{ maxHeight: "0px", opacity: "0%" }}
        animate={isOpen ? { maxHeight: "200px", opacity: "100%" } : {}}
        dangerouslySetInnerHTML={{ __html: text }}
        className="text-TEXT_LG text-white lh h-full overflow-hidden"
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
          className="w-[34px] h-[34px] object-contain "
        />
      </motion.div>
    </motion.div>
  );
};

export default FaqItem;
