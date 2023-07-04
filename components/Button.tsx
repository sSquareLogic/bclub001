import Link from "next/link";
import { CSSProperties, HTMLAttributes } from "react";

interface IProps {
  onClick?: () => null;
  size?: string;
  align?: "center" | "left" | "right";
  link?: {
    external: boolean;
    href: string;
  };
  text: string;
  styling?: CSSProperties;
}

const Button = ({
  onClick,
  text,
  link,
  size,
  align = "center",
  styling = {},
}: IProps) => {
  return link ? (
    link.external ? (
      <a
        href={link.href}
        onClick={onClick}
        className="p-[10px] bg-BUTTON_GRADIENT uppercase font-bold text-[24px] max-w-[350px] text-center flex justify-center"
        style={
          size
            ? { ...styling, fontSize: size, textAlign: align }
            : { ...styling, textAlign: align }
        }
      >
        {text}
      </a>
    ) : (
      <Link
        href={link.href}
        onClick={onClick}
        className="p-[10px] bg-BUTTON_GRADIENT uppercase font-bold text-[24px] max-w-[350px] text-center flex justify-center"
        style={
          size
            ? { ...styling, fontSize: size, textAlign: align }
            : { ...styling, textAlign: align }
        }
      >
        {text}
      </Link>
    )
  ) : (
    <button
      type="button"
      onClick={onClick}
      className="p-[10px] bg-BUTTON_GRADIENT uppercase font-bold text-[24px] max-w-[350px] text-center flex justify-center"
      style={
        size
          ? { ...styling, fontSize: size, textAlign: align }
          : { ...styling, textAlign: align }
      }
    >
      {text}
    </button>
  );
};

export default Button;
