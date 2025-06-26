"use client";

import { Produto } from "@/app/interface/produto";
import { getProdutos } from "@/app/services/produto/get";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Produtos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    async function fetchProdutos() {
      const produtosData = await getProdutos();
      setProdutos(produtosData);
    }
    fetchProdutos();
  }, []);

  return (
    <div className="p-6">
      <table className="w-full border">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="border p-4">ID</th>
            <th className="border p-4">Nome</th>
            <th className="border p-4">Descrição</th>
            <th className="border p-4">Preço</th>
            <th className="border p-4">Imagem</th>
            <th className="border p-4">Data</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((produto) => (
            <tr key={produto.id} className="bg-gray-700 text-white">
              <td className="border p-4 text-center">{produto.id}</td>
              <td className="border p-4 text-center">{produto.nome}</td>
              <td className="border p-4 text-center">{produto.descricao}</td>
              <td className="border p-4 text-center">{produto.preco}</td>
              <td className="border p-4">
                <Image
                  src={produto.imagem}
                  alt="Imagem do produto"
                  width={100}
                  height={100}
                  className="mx-auto"
                />
              </td>
              <td className="border p-4 text-center">
                {produto.data ? new Date(produto.data).toLocaleString("pt-BR") : "Sem data"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
