import faq from "@/settings/faq";
import Container from "../Container";
import FaqItem from "./FaqItem";
import { v4 } from "uuid";

const Faq = () => {
  return (
    <section className="faq">
      <Container
        isSuperSmall
        className="flex flex-col gap-16 items-center pb-96 pt"
      >
        <h2 className="text-white text-TITLE_LG font-bold uppercase px-8 text-center">
          {faq.title}
        </h2>
        <div className="flex flex-col gap-5">
          {faq.list.map((item) => (
            <FaqItem text={item.text} title={item.title} key={v4()} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Faq;
