"use client";

import * as React from "react";

import { Button } from "@/components/ui/buttonshadcn";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";

export function DropDawn({ itens, mg }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className={`ms-48 ${mg}`}>
          <Button variant="personalizada" className="bg-[#ececec]">
            <p className="text-sm font-bold">Selecione um Tipo</p>
            <ChevronDown className="ms-2 text-black"></ChevronDown>
          </Button>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-[#ececec]">
        <ScrollArea className="h-56 overflow-y-auto">
          {itens.map((item, index) => (
            <Link key={index} href={item.link} className="font-semibold">
              <DropdownMenuCheckboxItem>{item.nome}</DropdownMenuCheckboxItem>
            </Link>
          ))}

          {/* ; /*{" "}
          <DropdownMenuCheckboxItem>
            <p className="font-semibold">{Item2}</p>
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>
            <p className="font-semibold">{Item3}</p>
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>
            <p className="font-semibold">{Item4}</p>
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>
            <p className="font-semibold">{Item5}</p>
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>
            <p className="font-semibold">{Item6}</p>
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>
            <p className="font-semibold">{Item7}</p>
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>
            <p className="font-semibold">{Item8}</p>
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>
            <p className="font-semibold">{Item9}</p>
          </DropdownMenuCheckboxItem>{" "}
          */}
        </ScrollArea>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
