import Link from "next/link";

interface IProps {
  onClick?: () => null;
  link?: {
    external: boolean;
    href: string;
  };
  text: string;
}

const Button = ({ onClick, text, link }: IProps) => {
  return link ? (
    link.external ? (
      <a
        href={link.href}
        onClick={onClick}
        className="p-[10px] bg-BUTTON_GRADIENT uppercase font-bold text-[24px] max-w-[350px] text-center"
      >
        {text}
      </a>
    ) : (
      <Link
        href={link.href}
        onClick={onClick}
        className="p-[10px] bg-BUTTON_GRADIENT uppercase font-bold text-[24px] max-w-[350px] text-center"
      >
        {text}
      </Link>
    )
  ) : (
    <button
      type="button"
      onClick={onClick}
      className="p-[10px] bg-BUTTON_GRADIENT uppercase font-bold text-[24px] max-w-[350px] text-center"
    >
      {text}
    </button>
  );
};

export default Button;
