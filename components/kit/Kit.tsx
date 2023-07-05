"use client";
import useMediaQuery from "@mui/material/useMediaQuery";
import Container from "../Container";
import KitContent from "./KitContent";
import KitLogo from "./KitLogo";

const Kit = () => {
  const breakpoint = useMediaQuery("(max-width: 900px)");
  return (
    <section className="kit min-h-[700px] py-6">
      <Container
        className="grid grid-cols-TWO content-center gap-9 pb-20 transition-all max-[900px]:flex max-[900px]:flex-col-reverse max-[900px]:px-10 max-[500px]:px-0"
        height={!breakpoint ? "700px" : "auto"}
      >
        <KitContent />
        <KitLogo />
      </Container>
    </section>
  );
};

export default Kit;
