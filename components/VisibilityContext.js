"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation"; // Mudança para app router

const VisibilityContext = createContext();

export const VisibilityProvider = ({ children }) => {
  const [isVisible, setIsVisible] = useState(true);
  const pathname = usePathname(); // Usar o usePathname para observar mudanças de rota

  // Função para alternar a visibilidade
  const onHandleVisibility = () => setIsVisible((prevState) => !prevState);

  // Efeito para garantir que o estado seja resetado para `true` ao recarregar a página
  useEffect(() => {
    // Resetar o estado de visibilidade para `true` sempre que a página mudar
    setIsVisible(true);
  }, [pathname]); // O efeito será disparado sempre que o pathname mudar

  return (
    <VisibilityContext.Provider value={{ isVisible, onHandleVisibility }}>
      {children}
    </VisibilityContext.Provider>
  );
};

export const useVisibility = () => useContext(VisibilityContext);
