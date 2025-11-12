import { IProduct } from "@/app/interfaces/IProduct";
import { BASE_URL, AUTH_TOKEN } from "@/app/config/api";
export const fetchProducts = async (
  categoria?: string,
  marca?: string,
): Promise<IProduct[]> => {
  const params = new URLSearchParams();

  if (categoria) params.append("categoria", categoria);
  if (marca) params.append("marca", marca);

  const url = `${BASE_URL}/produtos/?${params.toString()}`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: AUTH_TOKEN,
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const result = await response.json();

  return Array.isArray(result.data) ? result.data : [];
};
