import Image from "next/image";
export default function Button({ title = "", num1 = "", num2 = "", img = "" }) {
  return (
    <>
      <button className="flex h-[50%] w-[25%] transform flex-col items-center rounded-xl bg-white p-20 transition-transform duration-300 hover:scale-110 hover:shadow-xl">
        <Image src={img} alt="" width={200} height={200} />
        {title && <h3 className="mt-10 text-2xl">{title}</h3>}
        <div className="flex flex-col text-xl hover:scale-110">
          {num1 && <h4>{num1}</h4>}
          {num2 && <h4>{num2}</h4>}
        </div>
      </button>
    </>
  );
}
