import { Children, ReactNode } from "react";

interface IProps {
  isSmall?: boolean;
  className: string;
  children: ReactNode;
}

const Container = ({ className, isSmall, children }: IProps) => {
  return (
    <div className={`${isSmall ? "container-small" : "container"}`}>
      {className ? <div className={className}>{children}</div> : children}
    </div>
  );
};

export default Container;
