"use client";

import Image from "next/image";
import logoGold from "@/public/img/logo-gold.png";

import { Search } from "lucide-react";

import Link from "next/link";
import { AppSidebar } from "@/components/app-sidebar";
import { useEffect, useState } from "react";

import IconBag from "@/components/icon-bag";

const NavMain = ({
  isVisible,
  onHandleVisibility,
  opacity = "0",
  apagar = "0",
}) => {
  const [bg, setBg] = useState("bg-transparent");
  const [bgBtnNav, setBgBtnNav] = useState("");
  const [isClient, setIsClient] = useState(false); // Flag para verificar se o código está sendo executado no cliente

  useEffect(() => {
    setIsClient(true); // Marca que o componente foi montado no cliente

    const handleScroll = () => {
      if (typeof window !== "undefined" && window.scrollY > 10) {
        setBg("bg-gradient-to-b from-[#111111] to-[#3f3e3e]");
        setBgBtnNav("#a7a725");
      } 
      else {
        setBg("bg-transparent");
        setBgBtnNav("");
      }
    };

    // Adiciona o event listener de scroll somente no cliente
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);

      // Limpeza ao desmontar o componente
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []); // Esse useEffect só é executado no cliente

  // Para evitar erro de hidratação, renderiza um placeholder ou nada antes da montagem no cliente
  if (!isClient) {
    return null; // Isso evita a renderização do componente até que ele seja montado no cliente
  }

  return (
    <nav
      className={`sticky top-0 z-10 transition-all duration-300 ${bg} w-full pb-2`}
    >
      <div>
      <div className="absolute mt-12">
        <AppSidebar
          mudarVisibilidade={onHandleVisibility}
          isVisible={isVisible}
          btnSideNav={bgBtnNav}
          fillbtn={bgBtnNav}
        />
      </div>
      <div className="grid  grid-cols-3 items-center px-4 sm:px-8">
        <div></div>
        <Link href="/pages/main" className="justify-self-center">
          <Image
            src={logoGold}
            alt="Logo Harmonix"
            className="h-20 w-20"
            priority
          />
        </Link>

        <Link href="/pages/Carrinho" className="justify-self-end">
          <IconBag colorIcon={bgBtnNav} opacidade={opacity} />
        </Link>
      </div>
      <div
        className={`relative mx-auto my-10 w-full max-w-full px-4 sm:max-w-[800px] ${apagar}`}
      >
        <input
          className="font-quiche w-full rounded-full border border-black border-opacity-30 px-10 py-2 text-sm placeholder-slate-500 placeholder-opacity-60 shadow-sm shadow-[#00000044] outline-gray-500 sm:px-12 sm:py-3"
          type="text"
          placeholder="Pesquise Aqui o que você procura"
          style={{ background: "#F2F1F1" }}
        />
        <Link
          href={"#"}
          className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-500"
        >
          <Search className="h-5 w-5" />
        </Link>
      </div>
      </div>
    </nav>
  );
};

export default NavMain;
