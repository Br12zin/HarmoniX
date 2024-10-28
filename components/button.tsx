import Link from "next/link";

export default function Button ({children, caminho, btn}){
  return (
    <>
    <Link href={` ${caminho}`}>
      <div className="flex justify-center">
        <button className={`bg-[#C7A315] py-2 px-7 rounded-full text-white mt-4 ${btn}`}>{children}

        </button>
      </div>
    </Link>
    </>
  );
}