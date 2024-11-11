"use client";

// src/context/SidebarContext.js
import { createContext, useContext, useState } from "react";
// import DarkerBackground from "./background-escurecida";

// Cria o contexto
const VisibilityContext = createContext();

// Provedor do contexto
export const VisibilityProvider = ({ children }) => {
  const [isVisible, setIsVisible] = useState(true);

  // Função para alternar a visibilidade
  const onHandleVisibility = () => setIsVisible((prevState) => !prevState);

  return (
    <VisibilityContext.Provider value={{ isVisible, onHandleVisibility }}>
      {/* {!isVisible && <DarkerBackground onClick={() => onHandleVisibility()} />} */}

      {children}
    </VisibilityContext.Provider>
  );
};

// Hook personalizado para consumir o contexto
export const useVisibility = () => useContext(VisibilityContext);
