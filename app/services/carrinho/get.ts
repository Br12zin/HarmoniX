export const fetchCarrinho = async () => {
  const url = `http://localhost:8080/carrinho/?cliente_id=7`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const result = await response.json();
  console.log("Carrinho fetched:", result);

  return Array.isArray(result.carrinho) ? result.carrinho : [];
};
