export default function TitleCarrinho({ children, tt }) {
return (
    <>
    <h1 className={` text-center text-2xl items-center font-bold text-slate-800 ${tt}`}>{children}
    </h1>
    </>
);
}
