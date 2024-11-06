import Button from "@/components/button";
import Title from "@/components/Title";
import Input from "@/components/Input";
import Link from "next/link";
// import BackButton from "../components/BackButton";
// import Title from "../components/Title";
// import Input from "../components/Input";

export default function AlteraSenha() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-[#ECECEC]">
      <div className="min-h-[25em] w-[30%] rounded-xl border-[1px] border-slate-300 bg-[#FFFFFF] px-10 py-10">
        
        <div className="iconBack"><Link rel="stylesheet" href="/page" /></div>
        <Title>Alterar Senha</Title>
        <Input placeholder="Nova Senha">Criar nova senha</Input>
        <Input placeholder=" Confirmar Nova Senha">Confirmar Nova Senha</Input>
        <Button>Enviar</Button>
      </div>
    </div>
  );
}
