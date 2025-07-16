"use client";

import TiposIntrumentos from "@/components/Instrumentos-Tipos";
import NavMain from "@/components/nav-main";
import { useVisibility } from "@/components/VisibilityContext";
import { IProduct } from "@/app/interfaces/IProduct";
import { fetchProducts } from "@/app/services/produtos/get";
import { useEffect, useState } from "react";

const Violoes = () => {
  const { isVisible, onHandleVisibility } = useVisibility();
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const fetchedProducts = await fetchProducts();
        setProducts(fetchedProducts);
      } catch (err) {
        console.error("Erro ao carregar produtos:", err);
      }
    };

    loadProducts();
  }, []);

  // PRA VER O CONSOLE DE PRODUCTS PRECISAMOS DE OUTRO USEEFFECT
  // useEffect(() => {
  //   console.log("products mudou:", products);
  // }, [products]);

  return products.length === 0 ? (
    <p>Carregando...</p>
  ) : (
    <>
      <NavMain isVisible={isVisible} onHandleVisibility={onHandleVisibility} />
      <TiposIntrumentos titulo="Instrumentos" instrumentoObj={products} />
    </>
  );
};

export default Violoes;
