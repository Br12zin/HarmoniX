"use client";
import NavMain from "@/components/nav-main";
// import { AppSidebar } from "@/components/app-sidebar";
import { useVisibility } from "@/components/VisibilityContext";
import CardMarca from "@/components/cardMarca";
import marcas from "@/app/pages/Marcas/marcas";

const Marcas = () => {
  const { isVisible, onHandleVisibility } = useVisibility();

  return (
    <>
      <NavMain isVisible={isVisible} onHandleVisibility={onHandleVisibility} />
      <h3 className="mt-6 px-4 text-center text-2xl sm:text-3xl">
        Encontre as principais marcas fornecedoras de instrumentos musicais do
        mercado
      </h3>
      <main className="mx-auto my-20 mt-6 grid grid-cols-1 gap-8 px-5 sm:grid-cols-2 sm:px-16 md:grid-cols-3 md:px-4 lg:grid-cols-4 2xl:px-16">
        {marcas.map((marca, index) => (
          <CardMarca
            key={index}
            linkMarca={marca.link}
            image={marca.image}
            Height={marca.height}
            Width={marca.width}
            MarginT={
              typeof marca.marginTop === "string"
                ? Number(marca.marginTop)
                : marca.marginTop
            }
          >
            {marca.texto}
          </CardMarca>
        ))}
      </main>
    </>
  );
};

export default Marcas;
