import enrol from "@/settings/enrol";
import GradientTitle from "../GradientTitle";
import { v4 } from "uuid";

const Description = () => {
  return (
    <div className="enrol-description flex flex-col gap-12 justify-center">
      <GradientTitle text={enrol.title} size="64px" />
      <div className="flex flex-col gap-8">
        {enrol.text.map((item) => (
          <p
            dangerouslySetInnerHTML={{ __html: item }}
            className="text-white text-[24px] font-semibold"
            key={v4()}
          ></p>
        ))}
      </div>
    </div>
  );
};

export default Description;
