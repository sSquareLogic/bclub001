"use client";
import useMediaQuery from "@mui/material/useMediaQuery";
import about from "@/settings/about";
import GradientTitle from "../GradientTitle";
import Button from "../Button";
import { v4 } from "uuid";

const AboutContent = () => {
  const breakPoints = {
    xl: useMediaQuery("(max-width: 1280px)"),
    lg: useMediaQuery("(max-width: 1024px)"),
    900: useMediaQuery("(max-width: 900px)"),
    md: useMediaQuery("(max-width: 768px)"),
    sm: useMediaQuery("(max-width: 640px)"),
  };
  return (
    <div className="about-content flex flex-col gap-5 transition-all justify-center max-[900px]:gap-10">
      <GradientTitle
        text={about.title}
        align={breakPoints[900] ? "center" : "left"}
        lh={
          breakPoints.xl
            ? "46px"
            : breakPoints.lg
            ? "42px"
            : breakPoints.md
            ? "40px"
            : breakPoints.sm
            ? "38px"
            : "48px"
        }
        size={
          breakPoints.xl
            ? "38px"
            : breakPoints.lg
            ? "36px"
            : breakPoints.md
            ? "34px"
            : breakPoints.sm
            ? "32px"
            : "40px"
        }
      />
      <div className="flex flex-col gap-4">
        {about.list.map((item) => (
          <p
            className="text-white text-TEXT_LG transition-all max-xl:text-[28.5px] max-lg:text-[25px] max-md:text-[21.5px] max-sm:text-[18px] max-[900px]:text-center"
            dangerouslySetInnerHTML={{ __html: item }}
            key={v4()}
          ></p>
        ))}
      </div>
      <div className="flex transition-all max-[900px]:justify-center">
        <Button
          text={about.buttonText}
          link={{ external: false, href: about.buttonHref }}
        />
      </div>
    </div>
  );
};

export default AboutContent;
