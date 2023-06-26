import { ReactNode } from "react";

interface IProps {
  height?: string;
  isSmall?: boolean;
  className?: string;
  children: ReactNode;
}

const Container = ({ className, isSmall, children, height }: IProps) => {
  return (
    <div
      className={`${isSmall ? "container-small" : "container"}`}
      style={height ? { height } : {}}
    >
      {className ? <div className={className}>{children}</div> : children}
    </div>
  );
};

export default Container;
