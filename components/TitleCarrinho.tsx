export default function TitleCarrinho({ children, tt }) {
return (
    <>
    <h1 className={`mb-20 text-center text-2xl font-bold text-slate-800 ${tt}`}>{children}
    </h1>
    </>
);
}
