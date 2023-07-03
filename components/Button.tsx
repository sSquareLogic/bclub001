import Link from "next/link";

interface IProps {
  onClick?: () => null;
  size?: string;
  align?: "center" | "left" | "right";
  link?: {
    external: boolean;
    href: string;
  };
  text: string;
}

const Button = ({ onClick, text, link, size, align = "center" }: IProps) => {
  return link ? (
    link.external ? (
      <a
        href={link.href}
        onClick={onClick}
        className="p-[10px] bg-BUTTON_GRADIENT uppercase font-bold text-[24px] max-w-[350px] text-center flex justify-center"
        style={
          size ? { fontSize: size, textAlign: align } : { textAlign: align }
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
          size ? { fontSize: size, textAlign: align } : { textAlign: align }
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
      style={size ? { fontSize: size, textAlign: align } : { textAlign: align }}
    >
      {text}
    </button>
  );
};

export default Button;
