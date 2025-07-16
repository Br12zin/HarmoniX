import Image from "next/image";
import Link from "next/link";

interface GreyCardProps {
  imagem: string;
  titulo: string;
  paragrafo: string;
  link: string;
}

const GreyCard = ({ imagem, titulo, paragrafo, link }: GreyCardProps) => {
  return (
    <Link
      href={link}
      className="flex w-[20rem] sm:w-[30rem] h-[18rem] flex-col items-center rounded-3xl bg-white/60 text-center shadow-lg border border-gray-300 hover:scale-[1.02] hover:shadow-xl transition-all"
    >
      <Image className="mt-5" src={imagem} alt={titulo} width={100} height={100} />
      <h1 className="mt-6 px-6 text-lg font-semibold text-black">{titulo}</h1>
      <p className="mt-2 px-6 text-sm text-gray-800">{paragrafo}</p>
    </Link>
  );
};

export default GreyCard;