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
      <div className="flex flex-col gap-10 px-8">
        {results.text.map((text) => (
          <p
            className="text-TEXT text-TITLE_SM text-center"
            dangerouslySetInnerHTML={{ __html: text }}
            key={v4()}
          ></p>
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
    </div>
  );
};

export default ResultsContent;
