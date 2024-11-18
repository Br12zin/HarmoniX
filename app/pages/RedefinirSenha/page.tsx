import Button from "../../../components/button";
import Title from "../../../components/Title";
import Input from "../../../components/Input";
import Link from "next/link";
import BackBtn from "@/components/BackButton";

// import BackButton from "../components/BackButton";
// import Title from "../components/Title";
// import Input from "../components/Input";

export default function RedefinirSenha() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-[#ECECEC]">
      <div className="min-h-[20em] w-[30%] rounded-xl border-[1px] border-slate-300 bg-[#FFFFFF] px-10 py-10">
        <Link rel="stylesheet" href="/pages/Login">
          <BackBtn btn="iconBack" />
        </Link>
        <Title>Redefinir Senha</Title>
        <Input placeholder="">Email/Telefone</Input>
        <Button caminho="/pages/Login">Enviar</Button>
      </div>
    </div>
  );
}
