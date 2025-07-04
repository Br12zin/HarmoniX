

export const fetchProducts = async () => {
  const response = await fetch("http://localhost:8080/produtos", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  return Array.isArray(result.data) ? result.data : [];
};
