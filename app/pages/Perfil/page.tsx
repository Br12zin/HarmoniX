"use client";
// import Image from "next/image";
import Input from "@/components/Input";
import Button from "@/components/button";
import NavMain from "@/components/nav-main";
import { useVisibility } from "@/components/VisibilityContext";

const Perfil = () => {
  const { onHandleVisibility, isVisible } = useVisibility();
  return (
    <div className="no-scroll">
      <NavMain
        isVisible={isVisible}
        onHandleVisibility={onHandleVisibility}
      />
      <div className="flex justify-center text-6xl">
        <h1 className="mb-20 text-white">Olá, User</h1>
      </div>
      <div className="align-items-center flex w-full justify-center">
        <div className="me-40">
          <Input
            formLogin="min-w-[20%]"
            placeholder={"Digite seu nome"}
            variantText="text-xl text-white"
          >
            Nome
          </Input>
          <Input
            formLogin="min-w-[20%]"
            placeholder={"Digite seu e-mail"}
            variantText="text-xl text-white"
          >
            E-mail
          </Input>
          <Input
            formLogin="min-w-[20%]"
            placeholder={"Digite sua senha"}
            variantText="text-xl text-white"
          >
            Senha
          </Input>
        </div>
        <div className="">
          <Input
            formLogin="min-w-[20%]"
            placeholder={"Digite seu endereço"}
            variantText="text-xl text-white"
          >
            Endereço
          </Input>
          <Input
            formLogin="min-w-[20%]"
            placeholder={"(DDD) Digite seu número"}
            variantText="text-xl text-white"
          >
            Celular
          </Input>
          <Button>Salvar alterações</Button>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
