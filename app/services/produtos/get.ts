import { IProduct } from "@/app/interfaces/IProduct";

export const fetchProducts = async (
  categoria?: string,
  marca?: string,
): Promise<IProduct[]> => {
  const params = new URLSearchParams();

  if (categoria) params.append("categoria", categoria);
  if (marca) params.append("marca", marca);

  const url = `http://localhost:8080/produtos/?${params.toString()}`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "stNOJvYxgbX3bRg3CEGMTNiqnIO3TMMHPi8K3ehLzk3KqcN3tJbDnBdMwWvAj84r2fiKvaAxQC58i1BsR5iqjBzzscwMudNv8xL6",
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const result = await response.json();

  return Array.isArray(result.data) ? result.data : [];
};
