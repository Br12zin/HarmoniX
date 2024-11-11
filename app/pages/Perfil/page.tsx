"use client"
import Link from "next/link";
import Image from "next/image";
import Input from "@/components/Input";
import Buttonshadcn from "@/components/button";
import BackBtnSearch from "@/components/BackBtnSearch";


const Perfil = () => {
  return (
    <div className="bg-{#ECECEC}">
      
      <Link href="/pages/main">
        <BackBtnSearch btns="iconBack"/>
      </Link>
      <div className="flex justify-center p-6">
        <Image src="/logo-gold.png" width={110} height={110} alt="Imagem" />
      </div>
      <div className="flex justify-center text-6xl">
        <h1 className="mb-20">Olá, User</h1>
      </div>
      <div className="align-items-center flex w-full justify-center">
        <div className="me-40">
          <Input
            formLogin="min-w-[20%]"
            placeholder={"Digite seu nome"}
            variantText="text-xl"
          >
            Nome
          </Input>
          <Input
            formLogin="min-w-[20%]"
            placeholder={"Digite seu e-mail"}
            variantText="text-xl"
          >
            E-mail
          </Input>
          <Input
            formLogin="min-w-[20%]"
            placeholder={"Digite sua senha"}
            variantText="text-xl"
          >
            Senha
          </Input>
        </div>
        <div className="">
          <Input
            formLogin="min-w-[20%]"
            placeholder={"Digite seu endereço"}
            variantText="text-xl"
          >
            Endereço
          </Input>
          <Input
            formLogin="min-w-[20%]"
            placeholder={"(DDD) Digite seu número"}
            variantText="text-xl"
          >
            Celular
          </Input>
          <Buttonshadcn
            variant="outline"
            className="mt-4 rounded-full p-6 text-xl text-[#ECECEC]"
          >
            Salvar alterações
          </Buttonshadcn>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
