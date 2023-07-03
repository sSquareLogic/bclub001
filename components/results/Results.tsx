import Container from "../Container";
import ResultsContent from "./ResultsContent";
import ResultsTitle from "./ResultsTitle";

const Results = () => {
  return (
    <section className="results bg-RESULTS">
      <Container className="flex flex-col gap-6 py-[70px]">
        <ResultsTitle />
        <ResultsContent />
      </Container>
    </section>
  );
};

export default Results;
