"use client";

import * as React from "react";

import { Button } from "./ui/buttonshadcn";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";
import Link from "next/link";

export function DropDawn({
  Item1,
  Item2,
  Item3,
  Item4,
  Item5,
  Item6,
  Item7,
  Item8,
  Item9,
  mg,
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className={`ms-48 ${mg}`}>
          <Button variant="personalizada" className="bg-white">
            <p className="text-sm font-bold">Selecione um Tipo</p>
            <ChevronDown className="ms-2 text-black"></ChevronDown>
          </Button>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <ScrollArea className="h-56 overflow-y-auto">
          <Link href="/pages/Instrumentos/Violoes" className="font-semibold">
            <DropdownMenuCheckboxItem>{Item1}</DropdownMenuCheckboxItem>
          </Link>
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
          </DropdownMenuCheckboxItem>
        </ScrollArea>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
