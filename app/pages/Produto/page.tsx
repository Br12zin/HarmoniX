"use client"

import CarouselProduto from "@/components/carouselProduto";
import NavMain from "@/components/nav-main"
import InstrumentsItem from "@/components/Produto/InstrumentsItem";
import { useVisibility } from "@/components/VisibilityContext";



 export default function Produto()  { 
  const { isVisible, onHandleVisibility } = useVisibility();

  return (
    <div>
      <NavMain isVisible={isVisible} onHandleVisibility={onHandleVisibility} />
        <InstrumentsItem/>
      <CarouselProduto/>   
    </div>
  );
}

