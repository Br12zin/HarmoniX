"use client";
import Buttonfale from "@/components/buttonfale";
import NavMain from "@/components/nav-main";
import { useVisibility } from "@/components/VisibilityContext";
import Footer from "@/app/pages/main/components/Footer";

export default function FaleConosco() {
  const { isVisible, onHandleVisibility } = useVisibility();
  return (
    <div className="no-scroll-x no-scroll ">
      <NavMain isVisible={isVisible} onHandleVisibility={onHandleVisibility} />

      <div className="flex flex-col items-center">
        <div className="w-full text-center">
          <h1 className="text-4xl font-bold text-[#C7A315] md:text-5xl">
            Fale Conosco
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Escolha a melhor forma de entrar em contato
          </p>
        </div>
        <div className="flex">
          <div className="centralizador flex h-[50%] w-screen pt-10 pb-20 justify-center ">
            <Buttonfale title="Chat" img="/img/chat.png"  />
            <Buttonfale
            title="Contato telefônico"
            img="/img/telefone_telafaleconosco.png"
          />
          <Buttonfale
            title="E-mail"
            img="/img/e-mail.png"
          />

        </div>
        </div>
        
      </div>
      <Footer
  tamanho=""
  rodape="bg-[#806903]"
  txt="text-black" 
/>
    </div>
  );
}