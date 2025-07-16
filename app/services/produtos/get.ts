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

  const result = await response.json();
  

  // Se no seu backend usar `result.data`, mantém isso
  return Array.isArray(result.data) ? result.data : [];
};
