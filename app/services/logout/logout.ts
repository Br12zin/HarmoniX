export const handleLogout = async () => {
  try {
    const res = await fetch("http://localhost:8080/logout/", {
      method: "POST", // ou GET, se preferir
      credentials: "include", // 🔥 essencial para enviar o cookie da sessão
    });

    const data = await res.json();

    if (res.ok && data.status === "success") {
      // Redireciona para login, limpa estados locais, etc.
      window.location.href = "/";
    } else {
      alert("Erro ao fazer logout.");
    }
  } catch (err) {
    console.error("Erro no logout:", err);
    alert("Erro ao se desconectar.");
  }
};
