"use client";
import colors from "@/settings/colors";
import ui from "@/settings/ui";
import { motion, useScroll } from "framer-motion";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const ScrollProgress = ({ children }: IProps) => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        className="progress-bar"
        style={{
          scaleX: ui.scrollProgressBar ? scrollYProgress : 0,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          background: colors.GOLD,
          transformOrigin: "0%",
          zIndex: 100,
          height: 5,
        }}
      ></motion.div>
      {children}
    </>
  );
};

export default ScrollProgress;
