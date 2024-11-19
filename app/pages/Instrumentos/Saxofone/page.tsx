"use client";

import TiposIntrumentos from "@/components/Instrumentos-Tipos";
import NavMain from "@/components/nav-main";
import { useVisibility } from "@/components/VisibilityContext";

const Violao = () => {
  const { isVisible, onHandleVisibility } = useVisibility();

  return (
    <>
      <NavMain isVisible={isVisible} onHandleVisibility={onHandleVisibility} />
      <TiposIntrumentos titulo="Saxofones" nome="Nome"></TiposIntrumentos>
    </>
  );
};

export default Violao;
