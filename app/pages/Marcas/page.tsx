"use client";
import NavMain from "@/components/nav-main";
// import { AppSidebar } from "@/components/app-sidebar";
import { useVisibility } from "@/components/VisibilityContext";
import CardMarca from "@/components/cardMarca";

const Marcas = () => {
  const { isVisible, onHandleVisibility } = useVisibility();

  return (
    <>
      <NavMain isVisible={isVisible} onHandleVisibility={onHandleVisibility} />
      <h3 className="text-center text-3xl">
        Encontre as principais marcas fornecedoras de instrumentos musicais do
        mercado
      </h3>
      <div className="me-12 mt-10 grid grid-cols-4">
        <CardMarca
          linkMarca="http://localhost:3000/pages/Marcas/Casio"
          image="/img/casio-logo.png"
          Height={100}
          Width={250}
          MarginT={30}
        >
          Conheça mais sobre a marca Casio, encontre todos os instrumentos que
          essa marca produz, veja recomendações, tire dúvidas e muito mais!
        </CardMarca>
        <CardMarca
          linkMarca="http://localhost:3000/pages/Marcas/Crafter"
          image="/img/crafter-logo.png"
          Height={200}
          Width={200}
          MarginT={20}
        >
          Conheça mais sobre a marca Crafter, encontre todos os instrumentos que
          essa marca produz, veja recomendações, tire dúvidas e muito mais!
        </CardMarca>
        <CardMarca
          linkMarca="http://localhost:3000/pages/Marcas/Fender"
          Height={76}
          Width={200}
          image="/img/Fender_logo.png"
          MarginT={20}
        >
          Conheça mais sobre a marca Fender, encontre todos os instrumentos que
          essa marca produz, veja recomendações, tire dúvidas e muito mais!
        </CardMarca>
        <CardMarca
          linkMarca="http://localhost:3000/pages/Marcas/Gibson"
          MarginT={20}
          Height={200}
          Width={140}
          image="/img/Gibson_Guitar_logo.svg.png"
        >
          Conheça mais sobre a marca Gibson, encontre todos os instrumentos que
          essa marca produz, veja recomendações, tire dúvidas e muito mais!
        </CardMarca>
        <CardMarca
          linkMarca="http://localhost:3000/pages/Marcas/Ibanez"
          Height={250}
          Width={250}
          image="/img/ibanez-logo.png"
          MarginT={25}
        >
          Conheça mais sobre a marca Ibanez, encontre todos os instrumentos que
          essa marca produz, veja recomendações, tire dúvidas e muito mais!
        </CardMarca>
        <CardMarca
          linkMarca="http://localhost:3000/pages/Marcas/Korg"
          Height={200}
          Width={200}
          image="/img/Korg_logo.png"
          MarginT={25}
        >
          Conheça mais sobre a marca Korg, encontre todos os instrumentos que
          essa marca produz, veja recomendações, tire dúvidas e muito mais!
        </CardMarca>
        <CardMarca
          linkMarca="http://localhost:3000/pages/Marcas/Roland"
          Height={200}
          Width={250}
          image="/img/roland-logo.png"
          MarginT={-20}
        >
          Conheça mais sobre a marca Roland, encontre todos os instrumentos que
          essa marca produz, veja recomendações, tire dúvidas e muito mais!
        </CardMarca>
        <CardMarca
          linkMarca="http://localhost:3000/pages/Marcas/Selmer"
          MarginT={20}
          Height={200}
          Width={120}
          image="/img/henri-selmer-paris-logo.png"
        >
          Conheça mais sobre a marca Selmer, encontre todos os instrumentos que
          essa marca produz, veja recomendações, tire dúvidas e muito mais!
        </CardMarca>
        <CardMarca
          linkMarca="http://localhost:3000/pages/Marcas/Steinway&Sons"
          MarginT={20}
          Height={200}
          Width={300}
          image="/img/Steinway_and_Sons_logo.svg.png"
        >
          Conheça mais sobre a marca Steinway e Sons, encontre todos os
          instrumentos que essa marca produz, veja recomendações, tire dúvidas e
          muito mais!
        </CardMarca>
        <CardMarca
          linkMarca="http://localhost:3000/pages/Marcas/Tagima"
          MarginT={20}
          Height={200}
          Width={200}
          image="/img/tagima-logo.png"
        >
          Conheça mais sobre a marca Tagima, encontre todos os instrumentos que
          essa marca produz, veja recomendações, tire dúvidas e muito mais!
        </CardMarca>
        <CardMarca
          linkMarca="http://localhost:3000/pages/Marcas/Takamine"
          MarginT={20}
          Height={200}
          Width={200}
          image="/img/Takamine_guitar_logo.png"
        >
          Conheça mais sobre a marca Takamine, encontre todos os instrumentos
          que essa marca produz, veja recomendações, tire dúvidas e muito mais!
        </CardMarca>
        <CardMarca
          linkMarca="http://localhost:3000/pages/Marcas/Yamaha"
          MarginT={-10}
          Height={250}
          Width={250}
          image="/img/logo_yamaha.png"
        >
          Conheça mais sobre a marca Yamaha, encontre todos os instrumentos que
          essa marca produz, veja recomendações, tire dúvidas e muito mais!
        </CardMarca>
      </div>
    </>
  );
};

export default Marcas;
