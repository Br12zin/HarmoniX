import { Produto } from "@/app/interface/produto";
import { time } from "@/app/services/time/time";


export async function postProdutos(
    nome: string, 
    descricao: string,
    preco: number,
    imagem: string
): Promise<Produto[]> {
  // faz uma requisição GET para a API para obter os usuários
  const response = await fetch("http://localhost:3004/produtos", {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    },
    body: JSON.stringify({
        nome,
        descricao,
        preco,
        imagem,
        data: time() // chama a função time para obter a data atual
    })
  });

  // converte a resposta da API para JSON (formato de dados)
  const data = await response.json();

  // retorna os dados
  return data;
}
