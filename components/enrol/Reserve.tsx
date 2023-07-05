"use client";
import useMediaQuery from "@mui/material/useMediaQuery";
import enrol from "@/settings/enrol";
import Image from "next/image";
import TickListItem from "./TickListItem";
import { v4 } from "uuid";
import Button from "../Button";

const Reserve = () => {
  const breakPoints = {
    xl: useMediaQuery("(max-width: 1280px)"),
    lg: useMediaQuery("(max-width: 1024px)"),
    md: useMediaQuery("(max-width: 768px)"),
    sm: useMediaQuery("(max-width: 640px)"),
  };
  return (
    <div className="enrol-reserve flex flex-col justify-center w-fit mx-auto">
      <div className="flex justify-center">
        <Image
          src={enrol.logo}
          alt="logo"
          unoptimized
          width={200}
          height={200}
          className="w-LOGO h-LOGO object-contain transition-all max-lg:w-[150px] max-lg:h-[150px]"
        />
      </div>
      <div className="rounded-xl border border-solid border-GOLD py-5 px-6 flex flex-col gap-[18px] transition-all max-sm:px-2 max-sm:py-5">
        <div className="flex flex-col gap-[10px] items-center">
          <h3 className="text-white font-bold text-[24px] uppercase">
            {enrol.subscribe.name}
          </h3>
          <span className="inline-block uppercase text-white text-[24px] font-bold rounded-xl border border-solid border-GOLD py-[10px] px-[14px] text-center transition-all max-sm:px-3">
            {enrol.subscribe.price}
          </span>
          <p className=" text-TEXT text-white font-bold">
            {enrol.subscribe.totalPrice}
          </p>
        </div>
        <hr />
        <div className="flex flex-col gap-[18px] mx-auto transition-all max-md:gap-[10px] max-lg:px-3">
          {enrol.subscribe.list.map((item) => (
            <TickListItem text={item} key={v4()} />
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <Button
          text={enrol.subscribe.buttonText}
          link={{ external: true, href: enrol.subscribe.buttonHref }}
          size={
            breakPoints.sm
              ? "24px"
              : breakPoints.md
              ? "26px"
              : breakPoints.lg
              ? "28px"
              : breakPoints.xl
              ? "30px"
              : "32px"
          }
          styling={{
            borderRadius: "12px",
            fontWeight: 900,
            padding: "10px 14px",
            marginTop: breakPoints.sm ? "16px" : "32px",
          }}
        />
      </div>
    </div>
  );
};

export default Reserve;
