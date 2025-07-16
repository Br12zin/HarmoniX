"use client";
// import React, { useState } from "react";
import { Facebook, Instagram, Phone, Youtube } from "lucide-react";
import { Whatsapp } from "react-bootstrap-icons";

function Footer({ rodape, txt, tamanho }: { rodape: string; txt: string; tamanho: string}) {




  return (
    <div className={`flex justify-center bg-[#C7A315] text-center h-[20rem] ${tamanho} icon-transition duration-300 ${rodape}`}>

        <div className="grid grid-cols-4">
          <div className={`flex h-full items-center justify-center text-xl text-[#000000] ${txt}`}>
            <p>Atendimento: Segunda a sexta 09h às 18h30 Sábado 09h às 17h</p>
          </div>
          <div className=" flex h-full  flex-col justify-center">
            <h2 className={`${txt} mb-5 items-center text-2xl text-[#000000]`}>
              Telefones:
            </h2>
            <div>
              <ul className={`items-center text-left text-[#000000] ${txt}`}>
                <li className="flex  justify-center">
                  <Phone suppressHydrationWarning className="mr-2 text-xs" />(12) 98352-2837
                </li>
                <li className="flex justify-center">
                  <Phone suppressHydrationWarning className="mr-2 text-xs" />(12) 3424-0038
                </li>
              </ul>
            </div>
          </div>
          <div className={` flex h-full items-center justify-center  text-xl text-[#000000] ${txt}`}>
            <p>
              Loja vitual
              <br /> Formas de pagamento
              <br /> Formas de entrega
              <br /> Política de troca e devolução
              <br /> Política de privacidade
            </p>
          </div>
          <div className=" flex h-full items-center justify-center text-black">
            <button>
              <a href="https://www.instagram.com/" target="_blank">
                <Instagram suppressHydrationWarning className="me-2 size-8 text-[#000000]" />
              </a>
            </button>
            <button>
              <a href="https://www.facebook.com/" target="_blank">
                <Facebook suppressHydrationWarning className="me-2 ms-2 size-8 text-[#000000]" />
              </a>
            </button>
            <button>
              <a href="https://www.youtube.com/" target="_blank">
                <Youtube suppressHydrationWarning className="me-2 ms-2 size-8 text-[#000000]" />
              </a>
            </button>
            <button>
              <a href="https://web.whatsapp.com/" target="_blank">
                <Whatsapp suppressHydrationWarning className="ms-2 size-8" fill="#000000" />
              </a>
            </button>
          </div>
        </div>
      </div>
  );
}
export default Footer;
