"use client";
import Footer from "@/components/Footer";
import Button from "@/components/button";
import { ChevronRight } from "lucide-react";
import Video from "@/app/components/Video";
import Link from "next/link";

// import { Ghost } from "lucide-react";

const Home = () => {
  return (
    <div className="flex-end 100vh body no-scroll absolute h-[100%] w-screen justify-center">
      <div className="flex justify-end p-6 pb-2">
        <Video />
        <Button
          caminho="/pages/Login"
          btn="me-4 bg-opacity-0 hover:bg-opacity-70 hover:text-black"
          onClick={undefined}
        >
          entrar
        </Button>

        <Button
          onClick={undefined}
          caminho="/pages/CadastreSe"
          btn="me-16 bg-opacity-0 hover:bg-opacity-70 hover:text-black"
        >
          cadastrar-se
        </Button>
      </div>
      <div>
        <Link
          href="/pages/main"
          className="align-items-center me-24 flex justify-end text-center text-xs text-white hover:text-slate-300"
        >
          Continuar sem login
          <ChevronRight suppressHydrationWarning className="align-items-center me-2 ms-1 size-4 rounded-full bg-background text-center"></ChevronRight>
        </Link>
      </div>
      <div className="absolute inset-x-0 bottom-0 flex">
        <Footer rodape="" txt="" />
      </div>
    </div>
  );
};

export default Home;
