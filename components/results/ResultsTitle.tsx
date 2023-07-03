import results from "@/settings/results";

const ResultsTitle = () => {
  return (
    <h2 className="results-title text-TEXT text-[100px] font-bold uppercase text-center">
      {results.title}
    </h2>
  );
};

export default ResultsTitle;
