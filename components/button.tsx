import Link from "next/link";

interface ButtonProps {
  children: string;
  caminho?: string;
  btn?: string;
  onClick?: () => void;
}

export default function Button({ children, caminho, btn, onClick }: ButtonProps) {
  return (
    <>
      <div className="flex justify-center">
        <button
          className={`mt-4 rounded-full bg-[#C7A315] px-7 py-2 text-white ${btn}`}
          onClick={onClick} // Adiciona o suporte ao onClick
        >
          {caminho ? (
            <Link href={caminho} legacyBehavior>
              <a>{children}</a>
            </Link>
          ) : (
            children
          )}
        </button>
      </div>
    </>
  );
}
