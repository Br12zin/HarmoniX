"use client";
import BackBtn from "@/components/BackButton";
import Buttonfale from "@/components/buttonfale";
import Link from "next/link";
import Image from "next/image";


export default function FaleConosco() {
    return (
        <div className="h-screen w-screen bg-[#ECECEC]">
            <div>
                <div className="flex justify-center items-center w-full">
                    <div className="flex-shrink-1 ms-10 me-[-2.5rem]">
                        <Link href="/">
                    <BackBtn btn="iconBack" />
                    </Link>
                    </div>
                    <div className="mx-auto mt-2 ">
                    <Image src="/logo-gold.png" alt="img" width={110} height={110} />
                    </div>
                </div>
            <div className="flex">
                <div className="centralizador flex h-screen w-screen items-center justify-center">
                    <Buttonfale title="Chat" img="/img/chat.png">
                        
                    </Buttonfale>
                        <Buttonfale title="Contato telefônico" num1="(12) 12345-6789" num2="(12) 1234-5678" img="/img/telefone_colorido.png">
                            
                        </Buttonfale>
                            <Buttonfale title="E-mail" img="/img/icons/icone email.png">
                                
                            </Buttonfale>
                </div>
            </div>
        </div>
    </div>
    );
}
