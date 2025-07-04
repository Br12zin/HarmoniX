"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Button from "@/components/button";
import Title from "@/components/Title";
import Input from "@/components/Input";
import { CirclePlus } from "lucide-react";
import Link from "next/link";
import BackBtn from "@/components/BackButton";

export default function CadastreSe() {
  const router = useRouter();

  // Estados dos inputs
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmSenha, setConfirmSenha] = useState("");
  const [cliente, setCliente] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [cep, setCep] = useState("");
  const [complemento, setComplemento] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");

  // Função para enviar o cadastro
  const handleCadastro = async () => {
  if (email !== confirmEmail) {
    alert("Os emails não coincidem!");
    return;
  }

  if (senha !== confirmSenha) {
    alert("As senhas não coincidem!");
    return;
  }

  try {
    const res = await fetch("http://localhost:8080/api-backend/clientes/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        senha,
        cliente,
        telefone,
        endereco: {
          logradouro: endereco,
          numero,
          cep,
          complemento,
          cidade,
          estado,
          bairro: "", // adicione um campo de bairro, se necessário
        },
      }),
    });


    if (res.ok) {
      alert("Cadastro realizado com sucesso!");
      router.push("/pages/Login");
    } else {
      const data = await res.json();
      alert(data.message || "Erro ao cadastrar.");
    }
  } catch (error) {
    console.error("Erro:", error);
    alert("Erro ao conectar com a API.");
  }
};


  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-[#ECECEC]">
      <div className="min-h-[25em] min-w-[30%] rounded-xl border-[1px] border-slate-300 bg-[#FFFFFF] px-10 py-10">
        <Link href="/">
          <BackBtn />
        </Link>
        <Title>Cadastre-se</Title>
        <div className="flex">
          <div className="flex flex-col">
            <Input
              placeholder="seuemail@email.com"
              formLogin="me-36"
              className="w-[130%]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            >
              Email
            </Input>
            <Input
              className="mb-0 w-[130%]"
              formLogin="me-36"
              placeholder="seuemail@email.com"
              value={confirmEmail}
              onChange={(e) => setConfirmEmail(e.target.value)}
            >
              Confirmar Email
            </Input>
            <Input
              className="mb-0 w-[130%]"
              formLogin="me-36"
              placeholder="***********"
              tipo="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            >
              Senha
            </Input>
            <Input
              className="mb-0 w-[130%]"
              formLogin="me-36"
              placeholder="***********"
              tipo="password"
              value={confirmSenha}
              onChange={(e) => setConfirmSenha(e.target.value)}
            >
              Confirmar Senha
            </Input>
          </div>

          <div className="flex flex-col">
            <Input
              className="mb-0"
              placeholder="Nome"
              formLogin="me-4"
              value={cliente}
              onChange={(e) => setCliente(e.target.value)}
            >
              Nome
            </Input>

            <div className="flex items-center">
              <Input
                className="mb-0"
                placeholder="(DDD) 91234-5678"
                formLogin="me-4"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
              >
                Telefone
              </Input>
              <button>
                <CirclePlus />
              </button>
            </div>
            <div className="flex">
              <Input
                className="mb-0 w-[100%]"
                formLogin="me-6"
                placeholder="Rua..."
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}
              >
                Endereço
              </Input>
              <Input
                className="mb-0"
                formLogin="w-[36%]"
                placeholder="123..."
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
              >
                Número
              </Input>
            </div>
            <div className="flex">
              <Input
                className="mb-0"
                formLogin="w-[30%] me-6"
                placeholder="00000-000"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
              >
                CEP
              </Input>
              <Input
                className="mb-0"
                placeholder="Casa/Ap/Cond"
                value={complemento}
                onChange={(e) => setComplemento(e.target.value)}
              >
                Complemento
              </Input>
              <Input
                className="mb-0"
                placeholder="Casa/Ap/Cond"
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
              >
                Cidade
              </Input>
              <Input
                className="mb-0"
                placeholder="Casa/Ap/Cond"
                value={estado}
                onChange={(e) => setEstado(e.target.value)}
              >
                Estado
              </Input>
            </div>
          </div>
        </div>

        <Button onClick={handleCadastro}>Cadastrar-se</Button>
       
      </div>
    </div>
  );
}
