"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";


import Button from "@/components/button";
import Title from "@/components/Title";
import Input from "@/components/Input";
import Link from "next/link";
import BackBtn from "@/components/BackButton";

export default function CadastreSe() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmSenha, setConfirmSenha] = useState("");
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [cep, setCep] = useState("");
  const [bairro, setBairro] = useState("");
  const [complemento, setComplemento] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleBuscarCep = async (cepDigitado: string) => {
    const cepLimpo = cepDigitado.replace(/\D/g, "");
    if (cepLimpo.length !== 8) return;

    try {
      const res = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);
      const data = await res.json();

      if (data.erro) {
        setError("CEP não encontrado.");
        return;
      }

      setEndereco(data.logradouro || "");
      setBairro(data.bairro || "");
      setCidade(data.localidade || "");
      setEstado(data.uf || "");
    } catch (err) {
      console.error("Erro ao buscar CEP:", err);
      setError("Erro ao buscar o CEP.");
    }
  };

  const handleCadastro = async () => {
    if (!email || !senha || !nome || !telefone || !endereco || !numero || !cep || !bairro || !cidade || !estado) {
      setError("Preencha todos os campos obrigatórios!");
      return;
    }

    if (email !== confirmEmail) {
      setError("Os e-mails não coincidem!");
      return;
    }

    if (senha !== confirmSenha) {
      setError("As senhas não coincidem!");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch("http://localhost:8080/clientes/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome,
          email,
          senha,
          telefone,
          endereco: {
            endereco,
            numero,
            cep,
            complemento,
            cidade,
            estado,
            bairro,
          },
        }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Erro ao cadastrar");

      alert("Cadastro realizado com sucesso!");
      router.push("/pages/Login");
    } catch (error) {
      console.error("Erro na requisição:", error);
      setError("Erro ao cadastrar!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-full w-full items-center justify-center bg-[#121212] px-4 py-10 ">
      <div className="w-full max-w-5xl rounded-2xl bg-white/95 p-10 shadow-2xl border border-[#C7A315]">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <Link href="/">
            <BackBtn />
          </Link>
          <Title classe="text-[#1a1a1a] text-3xl font-semibold">Cadastre-se</Title>
          <div className="w-[32px]" />
        </div>

        {/* Erro */}
        {error && (
          <div className="mb-6 rounded bg-red-100 px-4 py-2 text-center text-sm text-red-700 shadow">
            {error}
          </div>
        )}

        {/* Formulário */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
  <Input placeholder="Seu nome completo" value={nome} onChange={(e) => setNome(e.target.value)}>Nome</Input>

  <Input placeholder="seuemail@email.com" tipo="email" value={email} onChange={(e) => setEmail(e.target.value)}>Email</Input>

  <Input placeholder="Confirmar email" tipo="email" value={confirmEmail} onChange={(e) => setConfirmEmail(e.target.value)}>Confirmar Email</Input>

  <Input placeholder="********" tipo="password" value={senha} onChange={(e) => setSenha(e.target.value)}>Senha</Input>

  <Input placeholder="********" tipo="password" value={confirmSenha} onChange={(e) => setConfirmSenha(e.target.value)}>Confirmar Senha</Input>

  {/* Telefone */}
  <Input
    placeholder="(99) 99999-9999"
    value={telefone}
    onChange={(e) => {
      let valor = e.target.value.replace(/\D/g, "");
      if (valor.length > 11) valor = valor.slice(0, 11);

      if (valor.length > 0) {
        valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2");
        if (valor.length > 10) {
          valor = valor.replace(/(\d{5})(\d{4})$/, "$1-$2");
        } else {
          valor = valor.replace(/(\d{4})(\d{4})$/, "$1-$2");
        }
      }

      setTelefone(valor);
    }}
  >
    Telefone
  </Input>

  {/* Endereço e Número */}
  <Input placeholder="Rua Exemplo" value={endereco} onChange={(e) => setEndereco(e.target.value)}>Endereço</Input>

  <Input
    placeholder="123"
    value={numero}
    onChange={(e) => setNumero(e.target.value.replace(/\D/g, ""))}
  >
    Número
  </Input>

  {/* CEP */}
  <Input
    placeholder="00000-000"
    value={cep}
    onChange={(e) => {
      let valor = e.target.value.replace(/\D/g, "");
      if (valor.length > 8) valor = valor.slice(0, 8);

      if (valor.length > 5) {
        valor = valor.replace(/^(\d{5})(\d{0,3})$/, "$1-$2");
      }

      setCep(valor);
      if (valor.length === 9) {
        handleBuscarCep(valor);
      }
    }}
  >
    CEP
  </Input>

  <Input placeholder="Bairro" value={bairro} onChange={(e) => setBairro(e.target.value)}>Bairro</Input>

  <Input placeholder="Casa, Apto, etc." value={complemento} onChange={(e) => setComplemento(e.target.value)}>Complemento</Input>

  <Input placeholder="SP, RJ..." value={estado} onChange={(e) => setEstado(e.target.value)}>Estado</Input>

  <Input placeholder="São Paulo" value={cidade} onChange={(e) => setCidade(e.target.value)}>Cidade</Input>
</div>


        {/* Botão */}
        <div className="mt-10 text-center">
          <Button
            onClick={handleCadastro}
            disabled={loading}
            className="bg-[#C7A315] hover:bg-[#a88f0c] text-white font-semibold px-6 py-2 rounded-xl transition-all"
          >
            {loading ? "Cadastrando..." : "Cadastrar-se"}
          </Button>
        </div>
      </div>
    </div>
  );
}
