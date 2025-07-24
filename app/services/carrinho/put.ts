import { IProduct } from "@/app/interfaces/IProduct";

export const editCart = async (
  product,
  cliente_id: number,
  quantidade: number,
): Promise<boolean> => {
  const response = await fetch(`http://localhost:8080/carrinho/?cliente_id=${cliente_id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      cliente_id,
      id_produto: product.id_produto,
      quantidade,
    }),
  });

  return response.ok;
};
