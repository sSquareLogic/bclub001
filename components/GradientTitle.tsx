interface IProps {
  text: string;
  size?: string;
  align?: "left" | "right" | "center";
  lh?: string;
}
const GradientTitle = ({ text, size, align = "left", lh }: IProps) => {
  return (
    <h2
      className="gradient uppercase text-TITLE bg-GRADIENT font-bold"
      style={
        size
          ? { fontSize: size, textAlign: align, lineHeight: lh }
          : { textAlign: align, lineHeight: lh }
      }
    >
      {text}
    </h2>
  );
};

export default GradientTitle;
