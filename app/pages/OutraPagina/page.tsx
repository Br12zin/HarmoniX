"use client";
import { Produto } from "@/app/interface/produto";
import { getProdutos } from "@/app/services/produto/get";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Produtos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  // Hook useEffect que será executado uma vez após o componente montar (por conta do array de dependência vazio [])
  useEffect(() => {
    async function fetchProdutos() {
      const produtosData = await getProdutos();
      // Função assíncrona interna para buscar os dados dos usuários
      setProdutos(produtosData);
    }
    // Chama a função de busca assim que o componente carrega
    fetchProdutos();
  }, []);
  return (
    // DIV principal com estilização tailwind
    <div className="p-6">
      <table className="w-full border">
        <thead className="bg-gray-800 text-white">
          <tr className="">
            <th className="border p-4">ID</th>
            <th className="border p-4">Nome</th>
            <th className="border p-4">Descrição</th>
            <th className="border p-4">Preço</th>
            <th className="border p-4">Imagem</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((produto) => (
            <tr key={produto.id} className="bg-gray-700">
              <td className="grid-cols border p-4 text-center">{produto.id}</td>
              <td className="grid-cols border p-4 text-center">
                {produto.nome}
              </td>
              <td className="grid-cols border p-4 text-center">
                {produto.descricao}
              </td>
              <td className="grid-cols border p-4 text-center">
                {produto.preco}
              </td>
              <td className="grid-cols border p-4">
                <Image
                  src={produto.imagem}
                  alt="Imagem"
                  width={200}
                  height={200}
                  className="grid-cols mx-auto"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
