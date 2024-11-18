import Button from "../../../components/button";
import Title from "../../../components/Title";
import Input from "../../../components/Input";
import { CirclePlus } from "lucide-react";
import Link from "next/link";
import BackBtn from "@/components/BackButton";

//const categoria1:string = ""

// import BackButton from "../components/BackButton";
// import Title from "../components/Title";
// import Input from "../components/Input";

export default function CadastreSe() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-[#ECECEC]">
      <div className="min-h-[25em] min-w-[30%] rounded-xl border-[1px] border-slate-300 bg-[#FFFFFF] px-10 py-10">
        <Link rel="stylesheet" href="/">
          <BackBtn btn="iconBack" />
        </Link>
        <Title>Cadastre-se</Title>
        <div className="flex">
          <div className="flex flex-col">
            <Input
              placeholder="seuemail@email.com"
              formLogin="me-36"
              className="w-[130%]"
            >
              Email
            </Input>
            <Input
              className="mb-0 w-[130%]"
              formLogin="me-36"
              placeholder="seuemail@email.com"
            >
              Confirmar Email
            </Input>
            <Input
              className="mb-0 w-[130%]"
              formLogin="me-36"
              placeholder="***********"
            >
              Senha
            </Input>
            <Input
              className="mb-0 w-[130%]"
              formLogin="me-36"
              placeholder="***********"
            >
              Confirmar Senha
            </Input>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center">
              <Input
                className="mb-0"
                placeholder="(DDD) 91234-5678"
                formLogin="me-4"
              >
                Telefone
              </Input>
              <CirclePlus />
            </div>
            <div className="flex">
              <Input className="mb-0 w-[100%]" formLogin="me-6">
                Endereço
              </Input>
              <Input className="mb-0" formLogin="w-[36%]">
                Número
              </Input>
            </div>
            <div className="flex">
              <Input className="mb-0" formLogin="w-[30%] me-6">
                CEP
              </Input>
              <Input className="mb-0">Complemento</Input>
            </div>
          </div>
        </div>

        <Button caminho="/pages/Login">Cadastrar-se</Button>
      </div>
    </div>
  );
}
