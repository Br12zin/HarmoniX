import Link from "next/link";

interface ButtonProps {
  children: string;
  caminho?: string;
  btn?: string;
  onClick?: () => void;
}

export default function Button({ children, caminho, btn = "", onClick }: ButtonProps) {
  const baseClasses = `mt-4 rounded-full bg-[#C7A315] px-7 py-2 text-white hover:bg-opacity-70 hover:text-black ${btn}`;

  return (
    <div className="flex justify-center">
      {caminho ? (
        <Link href={caminho} passHref>
          <span className={baseClasses}>{children}</span>
        </Link>
      ) : (
        <button className={baseClasses} onClick={onClick}>
          {children}
        </button>
      )}
    </div>
  );
}
