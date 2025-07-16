interface InputProps {
  placeholder?: string;
  children?: React.ReactNode;
  className?: string;
  variantText?: string;
  formLogin?: string;
  tipo?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string; // Adicionando tipagem para string
}

export default function Input({
  placeholder,
  children,
  className,
  variantText,
  formLogin,
  tipo,
  onChange,
  value,
}: InputProps) {
  return (
    <div className={`flex flex-col ${formLogin}`}>
      <h2 className={`mb-2 text-lg font-semibold${variantText}`}>{children}</h2>
      <input
        className={`mb-6 h-auto w-full rounded-full border-[1px] border-slate-400 bg-[#ECECEC] px-5 py-2 text-lg shadow-md placeholder:text-start placeholder:opacity-40 ${className}`}
        type={tipo}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
