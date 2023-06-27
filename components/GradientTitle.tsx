interface IProps {
  text: string;
}
const GradientTitle = ({ text }: IProps) => {
  return (
    <h2 className="gradient uppercase text-TITLE bg-GRADIENT font-bold">
      {text}
    </h2>
  );
};

export default GradientTitle;
