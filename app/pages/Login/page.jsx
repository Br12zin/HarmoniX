"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Button from "@/components/button";
import Title from "@/components/Title";
import Input from "@/components/Input";
import Link from "next/link";
import BackBtn from "@/components/BackButton";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = async () => {
    try {
      const res = await fetch("http://localhost:8080/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ email, senha }),
      });

      const data = await res.json();

      if (res.ok && data.status === "success") {
        router.push("/pages/main");
      } else {
        alert(data.message || "Email ou senha inválidos.");
      }
    } catch (error) {
      console.error("Erro no login:", error);
      alert("Erro na conexão com o servidor.");
    }
  };

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-[#ECECEC]">
      <div className="min-h-[25rem] w-[30%] rounded-xl border-[1px] border-slate-300 bg-[#FFFFFF] px-10 py-10">
        <Link href="/">
          <BackBtn />
        </Link>

        <Title>Login</Title>

        <Input
          tipo="email"
          placeholder="seuemail@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        >
          Email
        </Input>

        <Input
          tipo="password"
          className="mb-0"
          placeholder="***"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        >
          Senha
        </Input>

        <div className="flex justify-center">
          <Link href="/pages/RedefinirSenha" className="text-[75%]">
            Esqueci minha senha
          </Link>
        </div>

        <Button onClick={handleLogin}>Entrar</Button>
      </div>
    </div>
  );
}
