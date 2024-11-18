import React, { useState } from "react";

const PaymentForm: React.FC = () => {
  const [titular, setTitular] = useState("");
  const [cpf, setCpf] = useState("");
  const [numero, setNumero] = useState("");
  const [mes, setMes] = useState("");
  const [ano, setAno] = useState("");
  const [cvv, setCvv] = useState("");
  const [parcela, setParcela] = useState("");
  const [salvarCartao, setSalvarCartao] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Pedido Confirmado!");
  };

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "0 auto",
        padding: "1rem",
        border: "1px solid #ccc",
        borderRadius: "8px",
      }}
    >
      <h2>Pagamento com Cartão de Crédito</h2>
      <form onSubmit={handleSubmit}>
        <label>Cartões Salvos</label>
        <select>
          <option>Informar um novo cartão abaixo</option>
          {/* Adicione mais opções aqui se necessário */}
        </select>

        <div
          style={{
            margin: "1rem 0",
            display: "flex",
            gap: "0.5rem",
            flexWrap: "wrap",
          }}
        >
          {/* Bandeiras dos cartões */}
          {["visa", "mastercard", "elo", "discover", "jcb", "hipercard"].map(
            (bandeira) => (
              <img
                key={bandeira}
                src={`/${bandeira}.png`}
                alt={bandeira}
                style={{ height: "24px" }}
              />
            ),
          )}
        </div>

        <label>Titular</label>
        <input
          type="text"
          placeholder="Nome igual aparece impresso no cartão"
          value={titular}
          onChange={(e) => setTitular(e.target.value)}
          required
        />

        <label>CPF ou CNPJ titular do cartão</label>
        <input
          type="text"
          placeholder="Digite o CPF ou CNPJ"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          required
        />

        <label>Número</label>
        <input
          type="text"
          placeholder="Digite o número do cartão"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
          required
        />

        <label>Validade</label>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <select value={mes} onChange={(e) => setMes(e.target.value)} required>
            <option value="">Mês</option>
            {[...Array(12).keys()].map((m) => (
              <option key={m + 1} value={m + 1}>
                {m + 1 < 10 ? `0${m + 1}` : m + 1}
              </option>
            ))}
          </select>
          <select value={ano} onChange={(e) => setAno(e.target.value)} required>
            <option value="">Ano</option>
            {[...Array(10).keys()].map((a) => (
              <option key={2023 + a} value={2023 + a}>
                {2023 + a}
              </option>
            ))}
          </select>
        </div>

        <label>Cód. CVV</label>
        <input
          type="text"
          placeholder="3 ou 4 dígitos"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
          required
        />

        <label>Parcela</label>
        <select
          value={parcela}
          onChange={(e) => setParcela(e.target.value)}
          required
        >
          <option>Escolha a quantidade de parcelas</option>
          {[1, 2, 3, 4, 5, 6, 10, 12].map((p) => (
            <option key={p} value={p}>
              {p}x
            </option>
          ))}
        </select>

        <div
          style={{ display: "flex", alignItems: "center", margin: "1rem 0" }}
        >
          <input
            type="checkbox"
            checked={salvarCartao}
            onChange={(e) => setSalvarCartao(e.target.checked)}
          />
          <label style={{ marginLeft: "0.5rem" }}>
            Salvar meu cartão protegido para futuras compras se aprovado
          </label>
        </div>

        <button
          type="submit"
          style={{
            padding: "0.75rem",
            width: "100%",
            backgroundColor: "#28a745",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            fontSize: "1rem",
            cursor: "pointer",
          }}
        >
          Confirmar Pedido
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
