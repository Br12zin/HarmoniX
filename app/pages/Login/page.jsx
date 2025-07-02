"use client";

import Button from "@/components/button";
import Title from "@/components/Title";
import Input from "@/components/Input";
import Link from "next/link";
import BackBtn from "@/components/BackButton";

export default function Login() {

  // Função de login
  const handleLogin = async() => {
    try{

    }catch (error) {
      console.error("Erro ao fazer login:", error);
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
          placeholder="seuemail@email.com"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        >
          Email
        </Input>
        <Input
          tipo="password"
          className="bg mb-0 text-left"
          placeholder="***********"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
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
