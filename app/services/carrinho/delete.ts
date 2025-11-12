import { BASE_URL, AUTH_TOKEN } from "@/app/config/api";

export const deleteItemCart = async (
  id_produto: number,
  cliente_id: number,
): Promise<boolean> => {
  const response = await fetch(
    `${BASE_URL}/carrinho/delete.php?cliente_id=${cliente_id}&id_produto=${id_produto}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: AUTH_TOKEN,
      },
    },
  );
  console.log("Response from delete:", response);
  return response.ok;
};
