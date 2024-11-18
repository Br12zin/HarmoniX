"use client";

import Image from "next/image";
import logoGold from "@/public/img/logo-gold.png";

import { Search } from "lucide-react";

import Link from "next/link";
import { AppSidebar } from "@/components/app-sidebar";
import { useEffect, useState } from "react";

import IconBag from "@/components/icon-bag";

const NavMain = ({ isVisible, onHandleVisibility, opacity, apagar }) => {
  const [bg, setBg] = useState("bg-transparent");
  const [bgBtnNav, setBgBtnNav] = useState("");
  const [isClient, setIsClient] = useState(false); // Flag para verificar se o código está sendo executado no cliente

  useEffect(() => {
    setIsClient(true); // Marca que o componente foi montado no cliente

    const handleScroll = () => {
      if (typeof window !== "undefined" && window.scrollY > 10) {
        setBg("bg-slate-500");
        setBgBtnNav("#999900");
      } else {
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
    <nav className={`sticky top-0 z-10 transition-all duration-300 ${bg}`}>
      <AppSidebar
        mudarVisibilidade={onHandleVisibility}
        isVisible={isVisible}
        btnSideNav={bgBtnNav}
        fillbtn={bgBtnNav}
      />
      <div className="flex h-[6.3rem] w-full items-center justify-between">
        <div className="ms-[6rem] flex flex-grow justify-center">
          <Link href="/pages/main">
            <Image src={logoGold} alt="Logo Harmonix" className="h-20 w-20" />
          </Link>
        </div>
        <Link href="/pages/Carrinho">
          <div>
            <IconBag colorIcon={bgBtnNav} opacidade={opacity} />
          </div>
        </Link>
      </div>
      <div className={`relative my-2 flex justify-center pb-8 ${apagar}`}>
        <input
          className="font-quiche mx-auto flex w-[800px] rounded-full border border-black border-opacity-30 px-4 py-3 text-sm placeholder-[slate-500] placeholder-opacity-60 shadow-sm shadow-[#00000044] outline-gray-500"
          type="text"
          placeholder="Pesquise Aqui o que você procura"
          style={{ background: "#F2F1F1" }}
        />
        <Link href={"#"} className="absolute top-[0.4rem] ms-[46rem] mt-1 h-4">
          <Search />
        </Link>
      </div>
    </nav>
  );
};

export default NavMain;
