import { ReactNode } from 'react';

interface TitleCarrinhoProps {
    children: ReactNode;
    tt?: string;
}

export default function TitleCarrinho({ children, tt }: TitleCarrinhoProps) {
return (
    <>
    <h1 className={` text-center text-2xl items-center font-bold text-slate-800 ${tt}`}>{children}
    </h1>
    </>
);
}
