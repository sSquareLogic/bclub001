interface IProps {
  text: string;
  size?: string;
  align?: "left" | "right" | "center";
}
const GradientTitle = ({ text, size, align = "left" }: IProps) => {
  return (
    <h2
      className="gradient uppercase text-TITLE bg-GRADIENT font-bold"
      style={size ? { fontSize: size, textAlign: align } : { textAlign: align }}
    >
      {text}
    </h2>
  );
};

export default GradientTitle;
