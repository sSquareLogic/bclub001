import { ReactNode } from "react";

interface IProps {
  height?: string;
  isSmall?: boolean;
  isSuperSmall?: boolean;
  className?: string;
  children: ReactNode;
}

const Container = ({
  className,
  isSmall,
  isSuperSmall,
  children,
  height,
}: IProps) => {
  return (
    <div
      className={`${
        isSuperSmall
          ? "container-supersmall"
          : isSmall
          ? "container-small"
          : "container"
      }`}
      style={height ? { height } : {}}
    >
      {className ? <div className={className}>{children}</div> : children}
    </div>
  );
};

export default Container;
