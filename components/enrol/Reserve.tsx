import enrol from "@/settings/enrol";
import Image from "next/image";
import TickListItem from "./TickListItem";
import { v4 } from "uuid";
import Button from "../Button";

const Reserve = () => {
  return (
    <div className="enrol-reserve flex flex-col justify-center">
      <div className="flex justify-center">
        <Image
          src={enrol.logo}
          alt="logo"
          unoptimized
          width={200}
          height={200}
          className="w-LOGO h-LOGO object-contain"
        />
      </div>
      <div className="rounded-xl border border-solid border-GOLD py-5 px-6 flex flex-col gap-[18px]">
        <div className="flex flex-col gap-[10px] items-center">
          <h3 className="text-white font-bold text-[24px] uppercase">
            {enrol.subscribe.name}
          </h3>
          <span className="inline-block uppercase text-white text-[24px] font-bold rounded-xl border border-solid border-GOLD py-[10px] px-[14px]">
            {enrol.subscribe.price}
          </span>
          <p className=" text-TEXT text-white font-bold">
            {enrol.subscribe.totalPrice}
          </p>
        </div>
        <hr />
        <div className="flex flex-col gap-[18px] mx-auto">
          {enrol.subscribe.list.map((item) => (
            <TickListItem text={item} key={v4()} />
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <Button
          text={enrol.subscribe.buttonText}
          link={{ external: true, href: enrol.subscribe.buttonHref }}
          size="32px"
          styling={{
            borderRadius: "12px",
            fontWeight: 900,
            padding: "10px 14px",
            marginTop: "32px",
          }}
        />
      </div>
    </div>
  );
};

export default Reserve;
