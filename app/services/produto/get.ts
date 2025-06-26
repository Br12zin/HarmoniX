import { Produto } from "@/app/interface/produto";

export async function getProdutos(): Promise<Produto[]> {
  // faz uma requisição GET para a API para obter os usuários
  const response = await fetch("http://localhost:3004/produtos");

  // converte a resposta da API para JSON (formato de dados)
  const data = await response.json();

  // retorna os dados
  return data;
}
