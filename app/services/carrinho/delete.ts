export const deleteItemCart = async (
  id_produto: number,
  cliente_id: number,
): Promise<boolean> => {
  const response = await fetch(
    `http://localhost:8080/carrinho/delete.php?cliente_id=${cliente_id}&id_produto=${id_produto}`,
    {
      method: "DELETE",
    },
  );
  console.log("Response from delete:", response);
  return response.ok;
};
