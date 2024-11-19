"use client";

import TiposIntrumentos from "@/components/Instrumentos-Tipos";
import NavMain from "@/components/nav-main";
import { useVisibility } from "@/components/VisibilityContext";
import { violao } from "@/components/Produto/data";

const Violao = () => {
  const { isVisible, onHandleVisibility } = useVisibility();

  return (
    <>
      <NavMain isVisible={isVisible} onHandleVisibility={onHandleVisibility} />
      <TiposIntrumentos titulo="Violões" instrumentoObj={violao} />
    </>
  );
};

export default Violao;
