export default function Title({ children }) {
  return (
    <>
      <h1 className="titleFont mb-20 text-center text-5xl font-bold text-slate-800">
        {children}
      </h1>
    </>
  );
}
