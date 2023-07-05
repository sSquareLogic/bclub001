import results from "@/settings/results";

const ResultsTitle = () => {
  return (
    <h2 className="results-title text-TEXT text-[100px] font-bold uppercase text-center leading-[90px] transition-all max-xl:text-[84px] max-lg:text-[68px] max-md:text-[52px] max-sm:text-[36px] max-xl:leading-[84px] max-lg:leading-[68px] max-md:leading-[52px] max-sm:leading-[36px]">
      {results.title}
    </h2>
  );
};

export default ResultsTitle;
