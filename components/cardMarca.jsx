import Image from "next/image";
import Link from "next/link";

const CardMarca = ({ image, children, Height, Width, MarginT, linkMarca }) => {
  console.log("margin" + MarginT + Width);
  return (
    <Link
      href={linkMarca}
      className="mb-10 ms-12 h-[12.5rem] w-[26.25rem] rounded-[3.2rem] border border-[#707070] bg-white shadow-md"
    >
      <div className="flex flex-col items-center px-16 text-center">
        <Image
          style={{ margin: MarginT }}
          className={`absolute h-auto w-[${Width}] z-0`}
          src={image}
          alt="LogoMarca"
          width={Width}
          height={Height}
        ></Image>
        <p className="pt-28 text-sm font-medium leading-tight text-[#6A6868]">
          {children}
        </p>
      </div>
    </Link>
  );
};

export default CardMarca;
