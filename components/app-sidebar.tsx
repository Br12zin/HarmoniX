import perfil from "@/public/img/icons/icone-rosto-de-pessoa-ouvindo-musica-com-auriculares.png";
import configuracao from "@/public/img/icons/icone-configuracao.png";
import favoritos from "@/public/img/icons/icone-favorito.png";
import avaliacoes from "@/public/img/icons/icone-estrela.png";
import carrinho from "@/public/img/icons/carrinho.png";
import telefone from "@/public/img/icons/icone-telefone.png";
import { CustomTrigger, SidebarProvider, SidebarTrigger } from "./ui/sidebar";

import casa from "@/public/img/icons/icone-casa.png";
// export function CustomTrigger() {
//   const { toggleSidebar } = useSidebar();

//   return (        <Button
//           ref={ref}
//           data-sidebar="trigger"
//           variant="ghost"
//           size="icon"
//           className={cn("ms-10 mt-7 flex w-8 items-center", className)}
//           onClick={(event) => {
//             onClick?.(event);
//             toggleSidebar();
//           }}
//           {...props}
//         >
//           <Image
//             src="/assets/icons/de-volta.png"
//             alt="Icone do Menu"
//             className="w-14"
//             width={56}
//             height={56}
//             quality={100}
//           ></Image>

//           <span className="sr-only">Toggle Sidebar</span>
//         </Button>)
// }

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";

import Image from "next/image";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/pages/main",
    image: casa,
  },
  {
    title: "Perfil",
    url: "/pages/Perfil",
    image: perfil,
  },
  // {
  //   title: "Configurações",
  //   url: "#",
  //   image: configuracao,
  // },
  {
    title: "Favoritos",
    url: "#",
    image: favoritos,
  },
  {
    title: "Avaliações",
    url: "#",
    image: avaliacoes,
  },
  {
    title: "Meus Pedidos",
    url: "/pages/Carrinho",
    image: carrinho,
  },
  {
    title: "Fale Conosco",
    url: "/pages/FaleConosco",
    image: telefone,
  },
];

export function AppSidebar({
  mudarVisibilidade,
  isVisible,
  btnSideNav,
  fillbtn,
}) {
  // const [isVisible, setIsVisible] = useState(true);
  // function onHandleVisibibility() {
  //   setIsVisible(!isVisible);
  // }

  return (
    <>
      <SidebarProvider className="absolute w-0" defaultOpen={false}>
        <Sidebar className="bg-white">
          <SidebarContent>
            <SidebarGroup>
              <div className="flex">
                <CustomTrigger
                  onClick={() => mudarVisibilidade()}
                  className="hover:bg-transparent"
                  fillbtnnav={fillbtn}
                />
                <SidebarGroupLabel className="mb-8 ms-[9.5rem] mt-8">
                  <Image
                    src="/img/logo-gold.png"
                    alt="logo Harmonix"
                    className="mt-8 flex h-[6.81] w-[6.81] justify-center"
                    width={109}
                    height={109}
                  ></Image>
                </SidebarGroupLabel>
              </div>
              <SidebarGroupContent className="ms-16 w-auto">
                <SidebarMenu className="mt-20">
                  {items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton className="py-12" asChild>
                        <a href={item.url}>
                          <div key={item.title} className="flex">
                            <Image
                              className="me-10 h-10 w-10"
                              src={item.image}
                              alt={item.title}

                              // ajuste a largura conforme necessário
                              // ajuste a altura conforme necessário
                            />
                            <span className="fontJeanne py-2 text-[2.5rem]">
                              {item.title}
                            </span>
                          </div>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        {isVisible && (
          <SidebarTrigger
            onClick={() => mudarVisibilidade()}
            className={btnSideNav}
            fillbtnnav={fillbtn}
          />
        )}
      </SidebarProvider>
    </>
  );
}
