import about from "@/settings/about";
import GradientTitle from "../GradientTitle";
import Button from "../Button";

const AboutContent = () => {
  return (
    <div className="about-content flex flex-col gap-5 justify-center">
      <GradientTitle text={about.title} />
      <div className="flex flex-col gap-4 text-TEXT_LG">
        <p className="text-white">
          <span className="uppercase text-white">
            Force academy™ <br />
          </span>
          Es la formación más completa para capacitarte como un barbero de{" "}
          <span className="text-GOLD">élite</span>.
        </p>
        <p className="text-white">
          Dónde aprenderás los <span className="text-GOLD">fundamentos</span> y
          las <span className="text-GOLD">herramientas</span> enseñadas por
          barberos <span className="text-GOLD">premiados</span>, también la{" "}
          <span className="text-GOLD">mentalidad</span> perfecta para emprender
          tu <span className="text-GOLD">propio</span> negocio.
        </p>
        <p className="text-white">
          En esta formacíon también aprenderás el uso de las redes sociales,
          campañas de marketing, creación y edición de contenido.
        </p>
      </div>
      <Button
        text={about.buttonText}
        link={{ external: false, href: about.buttonHref }}
      />
    </div>
  );
};

export default AboutContent;
