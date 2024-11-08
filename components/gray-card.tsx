import Image from "next/image";
import Link from "next/link";

const GreyCard = ({ imagem, titulo, paragrafo }) => {
  return (
    <Link
      href={"#"}
      className="flex w-[31.25rem] flex-col items-center rounded-[3rem] border border-[#7070703d] bg-slate-500/35 shadow-xl"
    >
      <Image
        className="mt-5"
        src={imagem}
        alt="sdfsdf"
        width={115}
        height={115}
      />
      <h1 className="font-quiche mt-6 px-[5.3rem] text-lg font-medium text-white">
        {titulo}
      </h1>
      <p className="mt-2 px-[5.3rem] text-center font-medium text-card">
        {paragrafo}
      </p>
    </Link >
  );
};

export default GreyCard;
