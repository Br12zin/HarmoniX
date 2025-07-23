"use client";

import Image from "next/image";
import { CreditCard, Star, Barcode } from "lucide-react";
// import { teclado, violao } from "@/components/Produto/data";
import Input from "@/components/Input";
import Button from "@/components/button";
import NavMain from "@/components/nav-main";
import { useVisibility } from "@/components/VisibilityContext";
import CarouselProduto from "@/components/carouselProduto";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IProduct } from "@/app/interfaces/IProduct";
import { fetchProducts } from "@/app/services/produtos/get";
import { formatter } from "@/app/utils/formatadorDeMoeda";
import marcasDinamicas from "../../Marcas/[marca]/marcasDinamicas";
// import { addToCart } from "@/app/services/carrinho/post";

export default function InstrumentsItem() {
  const params = useParams();
  const { id } = params || {};
  const [instrumento, setInstrumento] = useState<IProduct | null>(null);
  const [quantidade, setQuantidade] = useState(1);
  const [error, setError] = useState<string | null>(null);
  const { isVisible, onHandleVisibility } = useVisibility();
  const cliente_id = 7; // Hardcoded for testing; replace with dynamic client ID from auth

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

  const sobreMarca = marcasDinamicas.find((marca) =>
    marca.marca.toLowerCase() === instrumento?.marca.toLowerCase()
      ? marca.cardDescription
      : "",
  );
  console.log("Instrumento:", instrumento);
  console.log("Sobre Marca:", sobreMarca);

  const handleAddToCart = async () => {
    if (instrumento) {
      const addToCart = async (
        product: IProduct,
        cliente_id: number,
        quantidade: number,
      ): Promise<boolean> => {
        const response = await fetch(`http://localhost:8080/carrinho/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            cliente_id: cliente_id,
            id_produto: product.id_produto,
            quantidade: quantidade,
          }),
        });
        console.log("Response:", response);
        return response.ok;
      };

      const success = await addToCart(instrumento, cliente_id, quantidade);
      if (success) {
        alert("Produto adicionado ao carrinho!");
      } else {
        setError(
          "Falha ao adicionar o produto ao carrinho. Verifique o console para detalhes.",
        );
      }
    }
  };
  // import(
  //   `../../../../harmonix-backend/sistema-login/produtos/imagens/${instrumento.imagem}`
  // );

  return (
    <>
      <NavMain isVisible={isVisible} onHandleVisibility={onHandleVisibility} />
      <div className="mt-14 px-4">
        <div className="container mx-auto grid gap-10 md:grid-cols-2">
          {/* Imagem */}
          <div className="flex justify-center">
            <Image
              src={`http://localhost:8080/produtos/imagens/${instrumento.imagem}`}
              alt={instrumento.produto}
              width={550}
              height={700}
              className="h-auto max-w-full rounded-2xl border-2 border-slate-400 border-opacity-45 bg-white px-4"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/placeholder.jpg";
              }}
            />
          </div>

          {/* Informações do produto */}
          <div className="flex flex-col justify-start gap-4 border-t-2 border-[#C7A315] border-opacity-50 pl-0 md:border-l-2 md:border-t-0 md:pl-10">
            <h1 className="font-quiche break-words text-4xl font-bold text-[#C7A315]">
              {instrumento.produto}
            </h1>

            <div className="flex gap-1 text-yellow-400">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>

            <h3 className="text-xl text-slate-400 line-through">
              {formatter.format(Number(instrumento.preco))}
            </h3>

            <div className="flex flex-col gap-1">
              <div className="flex items-baseline gap-2">
                <h2 className="text-3xl font-semibold text-[#C7A315]">
                  {formatter.format(Number(precoComDesconto))}
                </h2>
                <p className="font-bold text-slate-500">à vista</p>
              </div>
              <p className="text-green-400">
                (com 10% de desconto no Pix / Boleto Bancário / 1x no Cartão de
                Crédito)
              </p>
              <p className="text-slate-500">
                {`ou em 10x de R$${parcelado} sem juros no cartão`}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <CreditCard />
              <p>Cartão</p>
              <Barcode />
              <p>Boleto</p>
            </div>
            <div></div>
            <div className="flex gap-2">
              <button
                onClick={() => setQuantidade((q) => (q > 1 ? q - 1 : 1))}
                className="h-10 w-10 rounded-full border border-gray-300 bg-[#C7A315]"
              >
                -
              </button>
              <span className="mx-2 mt-2">{quantidade}</span>
              <button
                onClick={() => setQuantidade((q) => q + 1)}
                className="h-10 w-10 rounded-full border border-gray-300 bg-[#C7A315]"
              >
                +
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Input className="flex-1" />
              <Button btn="mb-5">Calcular Frete</Button>
            </div>

            <Button onClick={handleAddToCart} btn="w-full text-xl font-bold">
              Adicionar ao Carrinho
            </Button>
          </div>
        </div>
      </div>
      <div className="container mx-auto mb-10 mt-20 border-t-2 border-[#C7A315] px-4">
        <div className="my-20 break-words rounded-2xl bg-white p-20 font-sans text-gray-800 shadow-lg">
          {/* Nome do produto */}
          <h1 className="mb-6 text-3xl font-bold text-[#C7A315]">
            {instrumento.produto}
          </h1>

          {/* Descrição do produto */}
          <p className="text-base text-gray-700">{instrumento.descricao}</p>

          {/* Especificações Técnicas */}
          <h2 className="mb-6 mt-6 text-2xl font-semibold text-[#C7A315]">
            Especificações Técnicas
          </h2>
          <p className="text-base text-gray-700">
            {instrumento.especificacoes}
          </p>

          {/* Sobre a Marca */}
          <h2 className="my-6 mt-6 text-2xl font-extrabold text-[#C7A315]">
            Sobre a Marca
          </h2>
          <p className="text-base text-gray-700">
            {sobreMarca?.cardDescription}
          </p>
        </div>
      </div>

      <CarouselProduto />
    </>
  );
}
