import { IProduct } from "@/app/interfaces/IProduct";

export const fetchProducts = async (
  categoria?: string,
): Promise<IProduct[]> => {
  let url = "http://localhost:8080/produtos/";

  if (categoria) {
    url += `?categoria=${encodeURIComponent(categoria)}`;
  }

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

  // Se no seu backend usar `result.data`, mantém isso
  return Array.isArray(result.data) ? result.data : [];
};
