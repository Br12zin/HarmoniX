"use client";

import NavMain from "@/components/nav-main";
import { useVisibility } from "@/components/VisibilityContext";
import ContentMarcas from "@/components/content-marcas";

const Casio = () => {
  const { isVisible, onHandleVisibility } = useVisibility();
  return (
    <div className="h-auto min-h-screen w-auto">
      <NavMain isVisible={isVisible} onHandleVisibility={onHandleVisibility} />
      <ContentMarcas source={"/img/casio-logo.png"}></ContentMarcas>
    </div>
  );
};

export default Casio;
