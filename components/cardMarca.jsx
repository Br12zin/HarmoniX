import Image from "next/image";
import Link from "next/link";

const CardMarca = ({
  image,
  children,
  Height,
  Width,
  MarginT = "",
  linkMarca,
}) => {
  return (
    <Link
      href={linkMarca}
      className="relative flex min-h-[220px] w-full max-w-md flex-col items-center justify-between overflow-hidden rounded-[3.2rem] border border-[#707070] bg-white p-6 px-10 text-center shadow-md sm:px-6 2xl:px-16"
    >
      {/* Imagem no topo */}
      <div className="relative z-0 mt-4">
        <Image
          src={image}
          alt="LogoMarca"
          width={Width}
          height={Height}
          className={MarginT}
        />
      </div>

      {/* Texto no rodapé */}
      <p className="mt-4 text-sm font-medium leading-tight text-[#6A6868]">
        {children}
      </p>
    </Link>
  );
};

export default CardMarca;
