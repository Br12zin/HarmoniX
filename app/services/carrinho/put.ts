import { IProduct } from "@/app/interfaces/IProduct";
import { BASE_URL, AUTH_TOKEN } from "@/app/config/api";
export const editCart = async (
  product: IProduct,
  cliente_id: number,
  quantidade: number,
): Promise<boolean> => {
  const response = await fetch(
    `${BASE_URL}/carrinho/?cliente_id=${cliente_id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: AUTH_TOKEN,
      },
      body: JSON.stringify({
        cliente_id,
        id_produto: product.id_produto,
        quantidade,
      }),
    },
  );

  return response.ok;
};
