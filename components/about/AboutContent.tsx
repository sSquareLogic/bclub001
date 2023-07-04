import about from "@/settings/about";
import GradientTitle from "../GradientTitle";
import Button from "../Button";

const AboutContent = () => {
  return (
    <div className="about-content flex flex-col gap-5 justify-center">
      <GradientTitle text={about.title} />
      <div className="flex flex-col gap-4 text-TEXT_LG">
        {about.list.map((item) => (
          <p
            className="text-white"
            dangerouslySetInnerHTML={{ __html: item }}
          ></p>
        ))}
      </div>
      <Button
        text={about.buttonText}
        link={{ external: false, href: about.buttonHref }}
      />
    </div>
  );
};

export default AboutContent;
