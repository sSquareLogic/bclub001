interface IProps {
  text: string;
  size?: string;
}
const GradientTitle = ({ text, size }: IProps) => {
  return (
    <h2
      className="gradient uppercase text-TITLE bg-GRADIENT font-bold"
      style={size ? { fontSize: size } : {}}
    >
      {text}
    </h2>
  );
};

export default GradientTitle;
