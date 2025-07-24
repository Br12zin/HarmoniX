export default function TitleCarrinho({
  children,
  tt = "text-2xl",
}: {
  children: React.ReactNode;
  tt?: string;
}) {
  return (
    <>
      <p
        className={`items-center text-center text-2xl font-bold text-slate-800 ${tt}`}
      >
        {children}
      </p>
    </>
  );
}
