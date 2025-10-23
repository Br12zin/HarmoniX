"use client";

import PedidosCard from "@/components/pedidos/pedidosCard";
import { useVisibility } from "@/components/VisibilityContext";
import NavMain from "@/components/nav-main";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function PedidosPage() {
  const { isVisible, onHandleVisibility } = useVisibility();
  // const [filterStatus, setFilterStatus] = useState("all");
  return (
    <main className="dark">
      <NavMain isVisible={isVisible} onHandleVisibility={onHandleVisibility} />

      <PedidosCard />
    </main>
  );
}
