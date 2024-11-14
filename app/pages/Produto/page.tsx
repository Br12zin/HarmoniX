"use client"

import CarouselProduto from "@/components/carouselProduto";
import NavMain from "@/components/nav-main"
import { teclado, violao } from "@/components/Produto/data";
import InstrumentsItem from "@/components/Produto/InstrumentsItem";
import { useVisibility } from "@/components/VisibilityContext";



 export default function Produto()  { 
  const { isVisible, onHandleVisibility } = useVisibility();
  const instrumentos = [
    ...teclado.map((instrument) => ({
      ...instrument,
      id: `teclado-${instrument.id}`,
    })),
    ...violao.map((instrument) => ({
      ...instrument,
      id: `violao-${instrument.id}`,
    })),
  ];

  return (
    <div>
      <NavMain isVisible={isVisible} onHandleVisibility={onHandleVisibility} />
        {instrumentos.map((instrument) => (
        
        <InstrumentsItem key={instrument.id} instrumento={instrument}/>
      ))}
      <CarouselProduto/>   
    </div>
  );
}

