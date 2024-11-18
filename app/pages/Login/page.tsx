"use client";

import Button from "@/components/button";
import Title from "@/components/Title";
import Input from "@/components/Input";
import Link from "next/link";
import BackBtn from "@/components/BackButton";

// import BackButton from "../components/BackButton";
// import Title from "../components/Title";
// import Input from "../components/Input";

export default function Login() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-[#ECECEC]">
      <div className="min-h-[25em] w-[30%] rounded-xl border-[1px] border-slate-300 bg-[#FFFFFF] px-10 py-10">
        <Link rel="stylesheet" href="/">
          <BackBtn btn="iconBack" />
        </Link>

        <Title>Login</Title>
        <Input placeholder="seuemail@email.com">Email</Input>
        <Input
          tipo="password"
          className="bg mb-0 text-center"
          placeholder="***********"
        >
          Senha
        </Input>
        <div className="flex justify-center">
          <Link href="/pages/RedefinirSenha" className="text-[70%]">
            Esqueci minha senha
          </Link>
        </div>
          <Button caminho="/pages/main">Entrar</Button>
      </div>
    </div>
  );
}
