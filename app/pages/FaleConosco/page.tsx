"use client";
// import BackBtn from "@/components/BackButton";
import Buttonfale from "@/components/buttonfale";
// import Link from "next/link";
// import Image from "next/image";
import NavMain from "@/components/nav-main";
import { useVisibility } from "@/components/VisibilityContext";



export default function FaleConosco() {
    const { isVisible, onHandleVisibility } = useVisibility();
    return (
      <div className="no-scroll h-screen w-screen bg-[#ECECEC]">
        <NavMain
          isVisible={isVisible}
          onHandleVisibility={onHandleVisibility}
        />
        <div className="flex flex-col items-center">
          <h1 className="text-5xl mt-20">Fale Conosco</h1>
          <div className="centralizador flex h-full mt-20 w-screen items-center justify-center">
            <Buttonfale title="Chat" img="/img/chat.png"></Buttonfale>
            <Buttonfale
              title="Contato telefônico"
              num1="(12) 12345-6789"
              num2="(12) 1234-5678"
              img="/img/telefone_colorido.png"
            ></Buttonfale>
            <Buttonfale
              title="E-mail"
              img="/img/icons/icone email.png"
            ></Buttonfale>
          </div>
        </div>
      </div>
    );
}
