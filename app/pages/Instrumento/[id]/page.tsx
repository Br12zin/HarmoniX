"use client";

import Image from "next/image";
import { CreditCard, Star, Barcode } from "lucide-react";
// import { teclado, violao } from "@/components/Produto/data";
import Input from "@/components/Input";
import Button from "@/components/button";
import NavMain from "@/components/nav-main";
import { useVisibility } from "@/components/VisibilityContext";
import CarouselProduto from "@/components/carouselProduto";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IProduct } from "@/app/interfaces/IProduct";
import { fetchProducts } from "@/app/services/get";

interface InstrumentsItemProps {
  params: {
    id: string;
  };
}

export default function InstrumentsItem() {
  const params = useParams();
  const { id } = params || {};
  const router = useRouter();
  const [instrumento, setInstrumento] = useState<IProduct | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState<string | null>(null);
  const { isVisible, onHandleVisibility } = useVisibility();
  const id_cliente = 3; // Hardcoded for testing; replace with dynamic client ID from auth

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const products = await fetchProducts();
        const foundProduct = products.find(
          (p: { id_produto: unknown }) => Number(p.id_produto) === Number(id),
        );
        setInstrumento(foundProduct || null);
      } catch (err) {
        setError("Erro ao carregar o produto.");
        console.error(err);
      }
    };
    loadProduct();
  }, [id]);
  if (error) {
    return <p>{error}</p>;
  }
  if (!instrumento) {
    return <p>Carregando...</p>;
  }
  const precoComDesconto: number = Number(
    instrumento.preco - instrumento.desconto,
  );
  const parcelado = (precoComDesconto / 10).toFixed(2);

  // const handleAddToCart = async () => {
  //   if (instrumento) {
  //     const success = await addToCart(instrumento, id_cliente, quantity);
  //     if (success) {
  //       alert("Produto adicionado ao carrinho!");
  //     } else {
  //       setError(
  //         "Falha ao adicionar o produto ao carrinho. Verifique o console para detalhes.",
  //       );
  //     }
  //   }
  // };
  // import(
  //   `../../../../harmonix-backend/sistema-login/produtos/imagens/${instrumento.imagem}`
  // );

  return (
    <>
      <NavMain isVisible={isVisible} onHandleVisibility={onHandleVisibility} />
      <div className="mt-14">
        <div className="container mx-auto flex">
          <div className="mx-auto max-w-[50em]">
            <Image
              src={`http://localhost:8080/produtos/imagens/${instrumento.imagem}`}
              alt={instrumento.produto}
              width={550}
              height={700}
              className="rounded-2xl border-2 border-slate-400 border-opacity-45 bg-white px-8"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/placeholder.jpg"; // Fallback image
              }}
            />
          </div>
          <div className="mx-auto max-w-[35em] border-l-2 border-[#C7A315] border-opacity-50 ps-10">
            <h1 className="font-quiche text-wrap text-4xl font-bold text-[#C7A315]">
              {instrumento.produto}
            </h1>
            <div className="text-yellow-400">
              <p className="mt-5 flex">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </p>
            </div>
            <h3 className="mt-5 text-xl text-slate-400 line-through">
              R$ {instrumento.preco}
            </h3>
            <div className="box-border flex flex-wrap items-baseline">
              <h2 className="mt-5 text-3xl font-semibold text-[#C7A315]">
                R$ {precoComDesconto}
              </h2>
              <p className="ms-2 font-bold text-slate-500">à vista</p>
              <p className="text-green-400">
                (com 10% de desconto no Pix / Boleto Bancário / 1x no Cartão de
                Crédito)
              </p>
              <p className="text-slate-500">
                {`ou em 10x de R$${parcelado} sem juros no cartão`}
              </p>
            </div>
            <div className="flex">
              <CreditCard />
              <p className="mx-2"> Cartão </p>
              <Barcode />
              <p className="mx-2"> Boleto </p>
            </div>
            <div className="flex items-center">
              <Input className="m-0" />
              <Button btn="mt-0 mb-5 ms-4">Calcular Frete</Button>
            </div>
            <Button
              // onClick={handleEnviar}
              btn="mt-0 mb-3 ms-4 w-screen text-xl font-bold mx-auto"
            >
              Comprar
            </Button>
          </div>
        </div>
      </div>
      <div className="container mx-auto mb-10 mt-20 border-t-2 border-[#C7A315]">
        <h1 className="mt-4 text-center text-4xl text-[#C7A315]"></h1>
        <div className="mb-10 bg-gray-50 p-6 font-sans text-gray-900">
          <h1 className="mb-4 text-2xl font-bold">{instrumento.produto}</h1>
          <p className="mb-4">{instrumento.descricao}</p>
          <h2 className="mb-2 mt-6 text-xl font-semibold">
            Especificações Técnicas
          </h2>
          <ul className="mb-4 space-y-1">
            <p className="mb-4">{instrumento.especificacoes}</p>
          </ul>
          <h2 className="mb-2 mt-6 text-xl font-semibold">Sobre a Marca</h2>
          <p className="mb-4">{instrumento.especificacoes}</p>
        </div>
      </div>
      <CarouselProduto />
    </>
  );
}
function setError(arg0: string) {
  throw new Error("Function not implemented.");
}
