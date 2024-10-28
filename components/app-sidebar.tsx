import home from "@/public/img/icons/icone-casa.png";
import perfil from "@/public/img/icons/icone-rosto-de-pessoa-ouvindo-musica-com-auriculares.png";
import configuracao from "@/public/img/icons/icone-configuracao.png";
import favoritos from "@/public/img/icons/icone-favorito.png";
import avaliacoes from "@/public/img/icons/icone-estrela.png";
import carrinho from "@/public/img/icons/carrinho.png";
import telefone from "@/public/img/icons/icone-telefone.png";
import { SidebarProvider } from "@/components/ui/sidebar";
import logoGold from "@/public/img/logo-gold.png"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import Image from "next/image";

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: home,
  },
  {
    title: "Perfil",
    url: "#",
    icon: perfil,
  },
  {
    title: "Configurações",
    url: "#",
    icon: configuracao,
  },
  {
    title: "Favoritos",
    url: "#",
    icon: favoritos,
  },
  {
    title: "Avaliações",
    url: "#",
    icon: avaliacoes,
  },
  {
    title: "Meus Pedidos",
    url: "#",
    icon: carrinho,
  },
  {
    title: "Fale Conosco",
    url: "#",
    icon: telefone,
  },
];

export function AppSidebar() {
  return (
    <SidebarProvider>
      <Sidebar side="left">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>
              <Image
              src={logoGold}
              alt="Logo da empresa"
              width={54}
              height={54}
              ></Image>
              </SidebarGroupLabel>
              <SidebarGroupContent>
                  <SidebarMenu>
                      {items.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild>
                          <a href={item.url}>
                            <span>{item.title}</span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      ))}
                  </SidebarMenu>
              </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
    
  );
}
