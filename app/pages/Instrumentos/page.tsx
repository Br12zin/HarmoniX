"use client";

import TiposIntrumentos from "@/components/Instrumentos-Tipos";
import NavMain from "@/components/nav-main";
import { useVisibility } from "@/components/VisibilityContext";
import { teclado } from "@/components/Produto/data";

const Violoes = () => {
  const { isVisible, onHandleVisibility } = useVisibility();

  return (
    <>
      <NavMain isVisible={isVisible} onHandleVisibility={onHandleVisibility} />
      <TiposIntrumentos titulo="Teclados" instrumentoObj={teclado} />
    </>
  );
};

export default Violoes;
