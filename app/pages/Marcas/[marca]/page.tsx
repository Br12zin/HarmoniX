"use client";

import NavMain from "@/components/nav-main";
import { useVisibility } from "@/components/VisibilityContext";
import ContentMarcas from "@/components/content-marcas";
import { useParams } from "next/navigation";
import marcasDinamicas from "./marcasDinamicas";

// O nome do componente pode ser mudado e o widthImg pode ser removido
const Marca = () => {
  const params = useParams();
  const { marca } = params as { marca: string };
  const { isVisible, onHandleVisibility } = useVisibility();
  // Filtra o objeto que tenha a marca igual (ignorando case)
  const marcaSelecionada = marcasDinamicas.find(
    (m) => m.marca.toLowerCase() === marca.toLowerCase(),
  );

  if (!marcaSelecionada) {
    return <div>Marca não encontrada</div>;
  }

  console.log("oi" + marcaSelecionada);

  return (
    <div className="">
      <NavMain isVisible={isVisible} onHandleVisibility={onHandleVisibility} />
      <ContentMarcas
        marca={marca}
        source={marcaSelecionada.source}
        widthImg={marcaSelecionada.widthImg}
        heightImg={marcaSelecionada.heightImg}
        cardTitle={marcaSelecionada.cardTitle}
        cardDescription={marcaSelecionada.cardDescription}
        // ProductCarrousel={}
      ></ContentMarcas>
    </div>
  );
};

export default Marca;
