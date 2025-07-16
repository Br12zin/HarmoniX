"use client";

import TiposIntrumentos from "@/components/Instrumentos-Tipos";
import NavMain from "@/components/nav-main";
import { useVisibility } from "@/components/VisibilityContext";
import { IProduct } from "@/app/interfaces/IProduct";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

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

        const url = `http://localhost:8080/produtos/?categoria=${encodeURIComponent(categoria)}`;
        console.log("URL da API:", url);

        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log("Resultado da API:", result);

        const produtosCarregados = result.data;
        console.log("Produtos carregados:", produtosCarregados);
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

  console.log("Estado atual dos produtos:", produtos);
  useEffect(() => {
    console.log("products mudou:", produtos);
  }, [produtos]);
  if (loading) {
    return <p>Carregando produtos da categoria {categoria}...</p>;
  }

  if (!produtos || produtos.length === 0) {
    return <p>Não encontramos produtos para a categoria {categoria}.</p>;
  }

  return (
    <>
      <NavMain isVisible={isVisible} onHandleVisibility={onHandleVisibility} />
      <TiposIntrumentos titulo={`${categoria}s`} instrumentoObj={produtos} />
    </>
  );
};

export default Violoes;
