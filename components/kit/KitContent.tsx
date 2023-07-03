import kit from "@/settings/kit";
import GradientTitle from "../GradientTitle";
import Button from "../Button";

const KitContent = () => {
  return (
    <div className="kit-content flex flex-col gap-6 justify-center">
      <GradientTitle text={kit.title} size="64px" />
      <div className="flex flex-col gap-4 text-[32px]">
        <p className="text-white">{kit.text}</p>
      </div>
      <Button
        text={kit.buttonText}
        link={{ external: true, href: kit.buttonHref }}
        size={"16px"}
        align="left"
      />
    </div>
  );
};

export default KitContent;
