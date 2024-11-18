export default function Input({
  placeholder,
  children,
  className,
  variantText,
  formLogin,
  tipo,
}) {
  return (
    <div className={`flex flex-col ${formLogin}`}>
      <h2 className={`mb-2 text-sm font-semibold${variantText}`}>
        {children}
      </h2>
      <input
        className={`mb-6 h-auto w-full rounded-full border-[1px] border-slate-400 bg-[#ECECEC] px-5 py-2 text-lg shadow-md placeholder:text-start placeholder:opacity-40 ${className}`}
        type={tipo}
        placeholder={placeholder}
      />
    </div>
  );
}
