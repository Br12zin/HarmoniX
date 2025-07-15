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
        headers: {
          "Content-Type": "application/json",
        },
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

      if (!res.ok) {
        throw new Error(data.message || "Erro ao cadastrar");
      }

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
    <div className="flex min-h-screen w-full flex-col items-center bg-[#ECECEC] py-10">
      <div className="w-[900px] rounded-xl border border-slate-300 bg-white px-10 py-8 shadow-md">
        {/* Botão de voltar */}
        <div className="mb-4">
          <Link href="/">
            <BackBtn />
          </Link>
        </div>

        {/* Título */}
        <Title>Cadastre-se</Title>

        {/* Mensagem de erro */}
        {error && (
          <div className="mb-4 text-red-500 text-center">
            {error}
          </div>
        )}

        {/* Formulário */}
        <div className="grid">
          <div className="grid grid-cols-3 gap-7">
            <Input
              placeholder="Seu nome completo"
              formLogin="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            >
              Nome
            </Input>
            <Input
              placeholder="seuemail@email.com"
              tipo="email"
              formLogin="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            >
              Email
            </Input>
            <Input
              placeholder="Confirmar email"
              tipo="email"
              formLogin="confirmarEmail"
              value={confirmEmail}
              onChange={(e) => setConfirmEmail(e.target.value)}
            >
              Confirmar Email
            </Input>
            <Input
              placeholder="***********"
              tipo="password"
              formLogin="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            >
              Senha
            </Input>
            <Input
              placeholder="***********"
              tipo="password"
              formLogin="confirmarSenha"
              value={confirmSenha}
              onChange={(e) => setConfirmSenha(e.target.value)}
            >
              Confirmar Senha
            </Input>
            <div className="grid gap-2">
              <Input
                placeholder="(DDD) 91234-5678"
                formLogin="telefone"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
              >
                Telefone
              </Input>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-7">
            <Input
              placeholder="Rua Exemplo"
              formLogin="endereco"
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
            >
              Endereço
            </Input>
            <div className="flex gap-2">
              <Input
                placeholder="123"
                className="w-[100px]"
                formLogin="numero"
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
              >
                Número
              </Input>
              <Input
                placeholder="00000-000"
                className="w-[150px]"
                formLogin="cep"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
              >
                CEP
              </Input>
            </div>
            <Input
              placeholder="Bairro"
              formLogin="bairro"
              value={bairro}
              onChange={(e) => setBairro(e.target.value)}
            >
              Bairro
            </Input>
            <Input
              placeholder="Casa, Apto, etc."
              formLogin="complemento"
              value={complemento}
              onChange={(e) => setComplemento(e.target.value)}
            >
              Complemento
            </Input>
            <Input
              placeholder="SP, RJ..."
              formLogin="estado"
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
            >
              Estado
            </Input>
            <Input
              placeholder="São Paulo"
              formLogin="cidade"
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
            >
              Cidade
            </Input>
          </div>
        </div>

        {/* Botão de envio */}
        <div className="mt-10 text-center">
          <Button onClick={handleCadastro} >
            {loading ? "Cadastrando..." : "Cadastrar-se"}
          </Button>
        </div>
      </div>
    </div>
  );
}