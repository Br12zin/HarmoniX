"use client";

import TiposIntrumentos from "@/components/Instrumentos-Tipos";
import NavMain from "@/components/nav-main";
import { useVisibility } from "@/components/VisibilityContext";
import { IProduct } from "@/app/interfaces/IProduct";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchProducts } from "@/app/services/produtos/get";

const Violoes = () => {
  const params = useParams();
  const { categoria } = params as { categoria: string };
  console.log("Categoria recebida:", categoria);
  const { isVisible, onHandleVisibility } = useVisibility();
  const [produtos, setProdutos] = useState<IProduct[]>([]); // Alterado para array
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        if (!categoria) return;
        const produtosCarregados = await fetchProducts(categoria);

        setProdutos(produtosCarregados || []);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
        setProdutos([]);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [categoria]); // Adicionado categoria como dependência
  const categoriaDecodificada = decodeURIComponent(categoria);

  console.log("Estado atual dos produtos:", produtos);
  useEffect(() => {
    console.log("products mudou:", produtos);
  }, [produtos]);
  if (loading) {
    return <p>Carregando produtos da categoria {categoriaDecodificada}...</p>;
  }

  if (!produtos || produtos.length === 0) {
    return (
      <p>Não encontramos produtos para a categoria {categoriaDecodificada}.</p>
    );
  }

  return (
    <>
      <NavMain isVisible={isVisible} onHandleVisibility={onHandleVisibility} />
      <TiposIntrumentos
        titulo="Confira nossas ofertas imperdíveis"
        instrumentoObj={produtos}
      />
    </>
  );
};

export default Violoes;
