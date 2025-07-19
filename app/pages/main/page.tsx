"use client";

import Link from "next/link";
import { Search, Loader2, X } from "lucide-react";
import GreyCard from "@/app/pages/main/components/gray-card";
import Carousel from "@/app/pages/main/components/carousel";
import NavMain from "@/components/nav-main";
import Footer from "@/app/pages/main/components/Footer";
import { useVisibility } from "@/components/VisibilityContext";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

let timeout: NodeJS.Timeout;

const Main = () => {
  const { isVisible, onHandleVisibility } = useVisibility();
  const [query, setQuery] = useState("");
  const [resultados, setResultados] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    clearTimeout(timeout);

    if (query.trim() === "") {
      setResultados([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    timeout = setTimeout(() => {
      buscarProdutos();
    }, 500);

    return () => clearTimeout(timeout);
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setResultados([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const buscarProdutos = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/produtos/?q=${encodeURIComponent(query)}`,
      );
      const json = await response.json();

      if (json.status === "success") {
        setResultados(json.data);
      } else {
        setResultados([]);
      }
    } catch (error) {
      console.error("Erro na busca:", error);
      setResultados([]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && resultados.length > 0) {
      router.push(`/Instrumento/${resultados[0].id_produto}`);
      setResultados([]);
    }
  };

  return (
    <div className="bg-main flex min-h-screen flex-col">
      <NavMain isVisible={isVisible} onHandleVisibility={onHandleVisibility} />

      {/* 🔍 Campo de busca */}
      <div
        className="relative mx-auto mt-6 w-full max-w-[700px] px-4"
        ref={dropdownRef}
      >
        <div className="relative">
          <input
            type="text"
            placeholder="Pesquise aqui o que você procura"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full rounded-full border border-gray-300 bg-[#F2F1F1] px-12 py-3 text-sm shadow-sm outline-none transition placeholder:text-gray-500 focus:ring-2 focus:ring-yellow-500"
          />

          {/* Ícones lado direito */}
          <div className="absolute right-3 top-1/2 z-10 flex -translate-y-1/2 items-center gap-2 text-gray-500">
            {loading ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : query ? (
              <button
                onClick={() => setQuery("")}
                className="rounded-full bg-gray-200 p-1 shadow transition hover:bg-gray-300"
              >
                <X className="h-4 w-4 text-gray-700" />
              </button>
            ) : (
              <Search className="h-5 w-5" />
            )}
          </div>
        </div>

        {/* Resultados */}
        {/* Resultados */}
        {query && resultados.length > 0 && (
          <div className="absolute left-0 right-0 z-10 mt-2 w-full max-w-[700px] overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg">
            {resultados.slice(0, 5).map((item, index) => (
              <Link
                href={`/Instrumento/${item.id_produto}`}
                key={index}
                className="flex items-center gap-3 px-4 py-3 transition hover:bg-gray-100"
              >
                {/* Imagem do produto */}
                <img
                  src={`http://localhost:8080/produtos/imagens/${item.imagem}`}
                  alt={item.produto}
                  className="h-12 w-12 flex-shrink-0 rounded-md border border-gray-200 object-cover"
                />

                {/* Texto do produto */}
                <div className="flex w-full min-w-0 flex-col">
                  <span className="max-w-full truncate text-sm font-semibold text-black">
                    {item.produto.length > 60
                      ? item.produto.slice(0, 60) + "…"
                      : item.produto}
                  </span>
                  <span className="text-sm text-gray-600">
                    {item.nome_marca}
                  </span>
                  <span className="text-sm text-gray-500">
                    {item.nome_categoria}
                  </span>
                </div>
              </Link>
            ))}

            {/* Botão para ver mais */}
            {resultados.length > 5 && (
              <Link
                href={`/pages/Busca?q=${encodeURIComponent(query)}`}
                className="block border-t px-4 py-3 text-center text-sm font-medium text-[#C7A315] hover:bg-gray-50"
              >
                Ver todos os resultados
              </Link>
            )}
          </div>
        )}
      </div>

      {/* 🎠 Outros componentes da página */}
      <Carousel />
      <section className="flex flex-wrap justify-center gap-8 px-4 py-12 sm:gap-10">
        <GreyCard
          imagem="/img/instruments-2.png"
          titulo="Instrumentos"
          paragrafo="Encontre os melhores instrumentos musicais, com o melhor preço e as melhores recomendações"
          link="/pages/CategoriaMarcas"
        />
        <GreyCard
          link="/pages/Marcas"
          imagem="/img/brand-1.png"
          titulo="Marcas"
          paragrafo="Encontre as principais marcas fornecedoras de instrumentos musicais do mercado"
        />
      </section>
      <Footer
        tamanho=""
        rodape="bg-gradient-to-b from-slate-100 to-[#C7A315]"
        txt="text-[#000000]"
      />
    </div>
  );
};

export default Main;
