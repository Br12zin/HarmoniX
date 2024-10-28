"use client";
import React, { useState } from "react";
import { ChevronUp, Facebook, Instagram, Phone, Youtube } from "lucide-react";
import {Whatsapp} from 'react-bootstrap-icons';

function Footer() {
const [heightClass, setHeightClass] = useState("h-[3vh]");
const [isExpanded, setIsExpanded] = useState(false);
const [opacity, setOpacity] = useState(50);

const toggleHeight = () => {
    setHeightClass((prevClass) =>
    prevClass === "h-[3vh]" ? "h-[40vh]" : "h-[3vh]",
    );
    setIsExpanded((prev) => !prev);
    setOpacity((prev) => (prev === 50 ? 80 : 50));
};

return (
<div className="w-screen">
    <div
    className={`icon-transition duration-300 ${heightClass} w-screen justify-center bg-[#C7A315] text-center text-white transition-all duration-0 ease-in-out`}
    style={{ opacity: opacity / 80 }}
    >
    <button onClick={toggleHeight}>
        <ChevronUp
        className={`icon-up fixed text-center transition-transform duration-300 ${isExpanded ? "rotacao icon-up" : ""}`}
        />
    </button>
    <div className="oculto flex h-80 w-full">
        <div className="flex h-full w-44 items-center justify-center text-left text-xl text-[#ECECEC]">
        <p>Atendimento: Segunda a sexta 09h às 18h30 Sábado 09h às 17h</p>
        </div>
        <div className="me-6 ms-6 flex h-full w-60 flex-col justify-center">
        <h2 className="mb-5 items-center text-2xl text-[#ECECEC]">Telefones:</h2>
        <div>
            <ul className="items-center text-left text-[#ECECEC]">
            <li className="flex content-around justify-center">
                <Phone className="mr-2 text-xs" />( ) xxxxx-xxxx
            </li>
            <li className="flex content-around justify-center">
                <Phone className="mr-2 text-xs" />( ) xxxx-xxxx
            </li>
            </ul>
        </div>
        </div>
        <div className="ms-20 flex h-full w-80 flex-col items-center justify-center text-left text-xl text-[#ECECEC]">
        <p>
            Loja vitual
            <br /> Formas de pagamento
            <br /> Formas de entrega
            <br /> Política de troca e devolução
            <br /> Política de privacidade
        </p>
        </div>
        <div className="ms-20 flex h-full w-60 items-center justify-center text-black">
            
            <button><a href="https://www.instagram.com/" target="_blank"><Instagram className="me-2 size-8 text-[#ECECEC]" /></a></button>
            <button><a href="https://www.facebook.com/" target="_blank"><Facebook className="me-2 ms-2 size-8 text-[#ECECEC]" /></a></button>
            <button><a href="https://www.youtube.com/" target="_blank"><Youtube className="me-2 ms-2 size-8 text-[#ECECEC]" /></a></button>
            <button><a href="https://web.whatsapp.com/" target="_blank"><Whatsapp className="ms-2 size-8 text-[#ECECEC]" /></a></button>
            
        
        </div>
    </div>
    </div>
</div>
);
}
export default Footer;
