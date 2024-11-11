"use client"

import NavMain from "@/components/nav-main"
import { useVisibility } from "@/components/VisibilityContext";
import Image from "next/image";
import { CreditCard, Star, Barcode } from "lucide-react";
import Button from "@/components/button";
import Input from "@/components/Input";



export default function Produto(){

  const { isVisible, onHandleVisibility } = useVisibility();

  return (
    <div>
      <NavMain isVisible={isVisible} onHandleVisibility={onHandleVisibility} />

      <div className="mt-14">
        <div className="container mx-auto flex">
          <div className="mx-auto max-w-[50em]">
            <Image
              src="/img/violaoGibson.jpg"
              alt=""
              width={250}
              height={300}
              className="rounded-2xl border-2 border-slate-400 border-opacity-45"
            />
          </div>
          <div className="mx-auto max-w-[35em] border-l-2 border-[#C7A315] border-opacity-50 ps-10">
            <h1 className="font-quiche text-wrap text-4xl font-bold text-[#C7A315]">
              Violão Epiphone Jumbo Eletroacústico Aço J-200EC Studio - Vintage
              Sunburst
            </h1>
            <div className="text-yellow-400">
              <p className="mt-5 flex">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </p>
            </div>
            <h3 className="mt-5 text-xl text-slate-400 line-through">
              R$ 8.749,00
            </h3>
            <div className="box-border flex flex-wrap items-baseline">
              <h2 className="mt-5 text-3xl font-semibold text-[#C7A315]">
                R$ 7.874,10
              </h2>
              <p className="ms-2 font-bold text-slate-500">á vista</p>
              <p className="text-green-400">
                (com 10% de desconto no Pix / Boleto Bancário / 1 x no Cartão de
                Crédito)
              </p>
              <p className="text-slate-500">
                ou em 10x de R$ 874,90 sem juros no cartão
              </p>
            </div>
            <div className="flex">
              <CreditCard />
              <p className="mx-2"> Cartão </p>
              <Barcode />
              <p className="mx-2"> Boleto </p>
            </div>
            <div className="flex items-center">
              <Input className="m-0" />
              <Button btn="mt-0 mb-3 ms-4">Calcular Frete</Button>
            </div>
            <Button btn="mt-0 mb-3 ms-4 w-screen text-xl font-bold mx-auto">Comprar</Button>
          </div>
        </div>
      </div>
      <div className="container mx-auto mb-10 mt-20 border-t-2 border-[#C7A315]">
        <h1 className="mt-4 text-center text-4xl text-[#C7A315]"></h1>
        <div className="bg-gray-50 p-6 font-sans text-gray-900">
          <h1 className="mb-4 text-2xl font-bold">
            Violão Epiphone Jumbo Eletroacústico Aço J-200EC Studio
          </h1>

          <p className="mb-4">
            O J-200EC faz uma homenagem ao rei dos Flattops – o clássico Gibson
            SJ-200. Esse violão da linha Inspired by Gibson é um Super Jumbo com
            cutaway, vem com fundo e laterais em select maple, tampo sólido em
            spruce para garantir aquele timbre insuperável, e um confortável
            braço em maple com perfil Slimtaper D, escala em pau ferro, 20
            trastes médios e marcação em formato de coroa. A ponte tem o
            lendário formato Moustache e o escudo apresenta o grafismo do
            icônico J-200. E a grande novidade é que agora ele vem equipado com
            um captador de rastilho Fishman Sonicore e um pré-amp Fishman Presys
            com afinador embutido.
          </p>

          <h2 className="mb-2 mt-6 text-xl font-semibold">Destaques</h2>
          <ul className="mb-4 list-inside list-disc space-y-1">
            <li>Corpo em Select Maple</li>
            <li>Marcações em formato de coroa</li>
            <li>20 trastes médios jumbo</li>
            <li>Escala em pau ferro</li>
          </ul>

          <h2 className="mb-2 mt-6 text-xl font-semibold">
            Especificações Técnicas
          </h2>
          <ul className="mb-4 space-y-1">
            <li>
              <span className="font-medium">Marca:</span> Epiphone
            </li>
            <li>
              <span className="font-medium">Modelo:</span> J-200 EC Studio
            </li>
            <li>
              <span className="font-medium">Cor:</span> Vintage Sunburst
            </li>
            <li>
              <span className="font-medium">Estilo do corpo:</span> Super Jumbo
            </li>
            <li>
              <span className="font-medium">Corpo:</span> Select Maple
            </li>
            <li>
              <span className="font-medium">Tampo:</span> Solid Spruce
            </li>
            <li>
              <span className="font-medium">Fundo:</span> Select Maple
            </li>
            <li>
              <span className="font-medium">Binding:</span> Headstock = 1-layer
            </li>
            <li>
              <span className="font-medium">Acabamento do corpo:</span> Gloss
            </li>
            <li>
              <span className="font-medium">Shape do braço:</span> 1960's
              SlimTaper D-shape
            </li>
            <li>
              <span className="font-medium">Medida do braço:</span> 647.7
              mm/25.5 in
            </li>
            <li>
              <span className="font-medium">Escala:</span> Pau ferro
            </li>
            <li>
              <span className="font-medium">Raio da escala:</span> 304.8 mm/12
              in
            </li>
            <li>
              <span className="font-medium">Trastes:</span> 20
            </li>
            <li>
              <span className="font-medium">Tamanho do traste:</span> Médio
              Jumbo
            </li>
            <li>
              <span className="font-medium">Nut:</span> PVC
            </li>
            <li>
              <span className="font-medium">Largura do nut:</span> 42.67
              mm/1.679 in
            </li>
            <li>
              <span className="font-medium">Marcações:</span> Pearloid "Crown"
              inlays
            </li>
            <li>
              <span className="font-medium">Acabamento do hardware:</span>{" "}
              Dourado
            </li>
            <li>
              <span className="font-medium">Ponte:</span> Pau Ferro; Classic
              "Moustache" shape
            </li>
            <li>
              <span className="font-medium">Tarraxas:</span> Grover Rotomatic;
              18:1 ratio
            </li>
            <li>
              <span className="font-medium">Escudo:</span> Imitation Tortoise
              with Iconic J-200 Graphics
            </li>
            <li>
              <span className="font-medium">Truss Rod:</span> 2-way; Ajustável
            </li>
            <li>
              <span className="font-medium">Truss Rod Cover:</span> 2-Layer;
              (B/W); With "EJ" in Silkprint
            </li>
            <li>
              <span className="font-medium">Under Saddle Pickup:</span> Fishman
              Sonicore
            </li>
            <li>
              <span className="font-medium">Controles:</span> Fishman Presys
              with Volume control, Phase and Contour switches, and a built-in
              tuner with LED display
            </li>
            <li>
              <span className="font-medium">Output Jack:</span> 1/4"
            </li>
            <li>
              <span className="font-medium">Preamp:</span> Fishman Presys
            </li>
            <li>
              <span className="font-medium">Espessura das cordas:</span> .012
              .016 .024 .032 .042 .053
            </li>
          </ul>

          <h2 className="mb-2 mt-6 text-xl font-semibold">Sobre a Marca</h2>
          <p className="mb-4">
            A Epiphone é uma das fabricantes Americanas de instrumentos mais
            tradicionais e reverenciadas. Desde 1873, a companhia tem
            desenvolvido e fabricado instrumentos para todos os estilos e
            completou mais de 140 anos de história. A trajetória da empresa se
            inicia de um improvável crescimento de uma loja de reparação para
            uma das líderes na fabricação de itens de qualidade. Epiphone foi
            comprada por Chicago Musical Instrument Company, que também era
            proprietária da Gibson Guitar Corporation, em 1957. Epiphone foi a
            maior rival da Gibson no mercado das guitarras semiacústicas. Suas
            guitarras profissionais, incluindo a Emperor, Deluxe, Broadway e
            Triumph, concorreram com (e algumas até superaram) algumas das
            guitarras da Gibson.
          </p>
          <p className="mb-4">
            O nome "Epiphone" é a combinação do apelido do nome do filho do
            proprietário e fundador, Epaminondas Stathpoulos "Epi", que assumiu
            o controle da marca com a morte do pai em 1915, e "phone" (do Grego
            "phon-", "som"/"voz"), e também na alusão do significado de uma
            palavra "Epifania".
          </p>

          <p className="mt-4 text-sm text-gray-600">
            Imagens meramente ilustrativas. Todos os nossos produtos são
            originais, acompanham Nota Fiscal e Garantia de Fábrica, ou do
            Distribuidor Oficial Autorizado.
          </p>
        </div>
      </div>
    </div>
  );
}

