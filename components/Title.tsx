import { ReactNode } from "react";

export default function Title({ children, classe }: { children: ReactNode, classe ?: string }) {
  return (
    <>
      <h1 className={`titleFont mb-20 text-center text-5xl font-bold text-slate-800 ${classe}`}>
        {children}
      </h1>
    </>
  );
}
