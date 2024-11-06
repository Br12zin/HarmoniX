import Image from "next/image";
export default function Button({ title, num1, num2, img }) {
return (
<>
    <button className="flex flex-col items-center rounded-xl bg-white p-20 w-[25%] h-[50%] hover:shadow-xl hover:scale-110 transition-transform duration-300 transform">
    <Image src={img} alt="" width={200} height={200} />
    {title && <h3 className="mt-10 text-2xl">{title}</h3>}
    <div className="flex flex-col text-xl hover:scale-110 ">
        {num1 && <h4>{num1}</h4>}
        {num2 && <h4>{num2}</h4>}
    </div>
    </button>
</>
);
}