"use client";

import Image from "next/image";
import logoGold from "@/public/img/logo-gold.png";
import Link from "next/link";
import { AppSidebar } from "@/components/app-sidebar";
import { useEffect, useState } from "react";
import IconBag from "@/components/icon-bag";

const NavMain = ({ isVisible, onHandleVisibility, opacity = "0" }) => {
  const [bg, setBg] = useState("bg-transparent");
  const [isClient, setIsClient] = useState(false);
  const fixedGoldColor = "#C7A315"; // Cor fixa igual à da logo

  useEffect(() => {
    setIsClient(true);
    const handleScroll = () => {
      if (typeof window !== "undefined" && window.scrollY > 10) {
        setBg("bg-gradient-to-b from-[#111111] to-[#3f3e3e]");
      } else {
        setBg("bg-transparent");
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  if (!isClient) return null;

  return (
    <nav
      className={`sticky top-0 z-20 ${bg} w-full py-3 transition-all duration-1000`}
    >
      <div className="grid grid-cols-3 items-center px-4 sm:px-8">
        <div className="absolute mb-10">
          <AppSidebar
            mudarVisibilidade={onHandleVisibility}
            isVisible={isVisible}
            btnSideNav={fixedGoldColor}
            fillbtn={fixedGoldColor}
          />
        </div>
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
          <IconBag colorIcon={fixedGoldColor} opacidade={opacity} />
        </Link>
      </div>
    </nav>
  );
};

export default NavMain;