import faq from "@/settings/faq";
import Container from "../Container";
import FaqItem from "./FaqItem";
import { v4 } from "uuid";

const Faq = () => {
  return (
    <section className="faq">
      <Container
        isSuperSmall
        className="flex flex-col gap-16 items-center pb-96 transition-all max-lg:gap-12 max-md:gap-8 max-sm:gap-5 max-xl:pb-60 max-lg:pb-48 max-md:pb-36 max-sm:pb-12"
      >
        <h2 className="text-white text-TITLE_LG font-bold uppercase px-8 text-center transition-all max-xl:text-[56px] max-lg:text-[48px] max-sm:text-[40px] max-[500px]:text-[32px]">
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
