"use client";
import useMediaQuery from "@mui/material/useMediaQuery";
import enrol from "@/settings/enrol";
import GradientTitle from "../GradientTitle";
import { v4 } from "uuid";
import AnimateInView from "@/hox/AnimateInView";

const Description = () => {
  const breakPoints = {
    xl: useMediaQuery("(max-width: 1280px)"),
    lg: useMediaQuery("(max-width: 1024px)"),
    md: useMediaQuery("(max-width: 768px)"),
    sm: useMediaQuery("(max-width: 640px)"),
  };
  return (
    <div
      className="enrol-description flex flex-col gap-12 justify-center transition-all max-sm:gap-5"
      id="enrol"
    >
      <GradientTitle
        text={enrol.title}
        align={!breakPoints.lg ? "left" : "center"}
        size={
          breakPoints.sm
            ? "36px"
            : breakPoints.md
            ? "43px"
            : breakPoints.lg
            ? "50px"
            : breakPoints.xl
            ? "57px"
            : "64px"
        }
      />
      <div className="flex flex-col gap-8">
        {enrol.text.map((item) => (
          <p
            key={v4()}
            dangerouslySetInnerHTML={{ __html: item }}
            className="text-white text-[24px] font-semibold leading-7 transition-all max-lg:text-center"
          ></p>
        ))}
      </div>
    </div>
  );
};

export default Description;
