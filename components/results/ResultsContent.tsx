import AnimateInView from "@/hox/AnimateInView";
import results from "@/settings/results";
import Image from "next/image";
import { v4 } from "uuid";

const ResultsContent = () => {
  return (
    <div className="results-content flex flex-col gap-8">
      <div className="flex justify-center">
        <Image
          src={"/assets/icons/results-quote.svg"}
          alt="quote"
          width={160}
          height={40}
          unoptimized
          className="w-[160px] h-10 object-contain"
        />
      </div>
      <div className="flex flex-col gap-10 px-8 transition-all max-[500px]:px-0">
        {results.text.map((text, index) => (
          <AnimateInView
            key={v4()}
            type={index % 2 === 0 ? "toRightOpacity" : "toLeftOpacity"}
          >
            <p
              className="text-TEXT text-TITLE_SM text-center leading-[44px] transition-all max-xl:text-[33px] max-lg:text-[30px] max-md:text-[27px] max-sm:text-[24px] max-[400px]:text-[20px] max-xl:leading-[40px] max-lg:leading-[36px] max-md:leading-[32px] max-sm:leading-[28px] max-[400px]:leading-[24px]"
              dangerouslySetInnerHTML={{ __html: text }}
            ></p>
          </AnimateInView>
        ))}
      </div>
      <div className="flex justify-center rotate-180">
        <Image
          src={"/assets/icons/results-quote.svg"}
          alt="quote"
          width={160}
          height={40}
          unoptimized
          className="w-[160px] h-10 object-contain"
        />
      </div>
      <AnimateInView type="toBottomOpacity">
        <div className="flex justify-center">
          <a href="/" className="w-[200px] h-[200px]">
            <Image
              src={"/assets/images/ig.png"}
              alt="instagram"
              width={200}
              height={200}
              unoptimized
              className="w-[200px] h-[200px] object-contain"
            />
          </a>
        </div>
      </AnimateInView>
    </div>
  );
};

export default ResultsContent;
