"use client";
import useMediaQuery from "@mui/material/useMediaQuery";
import kit from "@/settings/kit";
import GradientTitle from "../GradientTitle";
import Button from "../Button";

const KitContent = () => {
  const breakPoints = {
    xl: useMediaQuery("(max-width: 1280px)"),
    lg: useMediaQuery("(max-width: 1024px)"),
    900: useMediaQuery("(max-width: 900px)"),
    sm: useMediaQuery("(max-width: 640px)"),
    500: useMediaQuery("(max-width: 500px)"),
  };
  return (
    <div className="kit-content flex flex-col gap-6 justify-center transition-all max-[500px]:px-6 max-[400px]:px-0">
      <GradientTitle
        text={kit.title}
        lh={
          breakPoints[500]
            ? "36px"
            : breakPoints.sm
            ? "40px"
            : breakPoints.lg
            ? "48px"
            : breakPoints.xl
            ? "56px"
            : "64px"
        }
        size={
          breakPoints[500]
            ? "36px"
            : breakPoints.sm
            ? "40px"
            : breakPoints.lg
            ? "48px"
            : breakPoints.xl
            ? "56px"
            : "64px"
        }
        align={breakPoints[900] ? "center" : "left"}
      />
      <div className="flex flex-col">
        <p className="text-white text-[32px] leading-9 transition-all max-xl:text-[28px] max-lg:text-[24px] max-md:text-[20px] max-xl:leading-7 max-lg:leading-6 max-md:leading-5 max-[900px]:text-center">
          {kit.text}
        </p>
      </div>
      <div
        className="flex transition-all"
        style={breakPoints[900] ? { justifyContent: "center" } : {}}
      >
        <Button
          text={kit.buttonText}
          link={{ external: true, href: kit.buttonHref }}
          size={"16px"}
          align={breakPoints[900] ? "center" : "left"}
          styling={breakPoints[900] ? { width: "255px" } : {}}
        />
      </div>
    </div>
  );
};

export default KitContent;
