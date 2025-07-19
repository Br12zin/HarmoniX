import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import estilos from "./product-carousel.module.css";

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";

import CardInstrumentos from "./cardInstrumentos";
import { IProduct } from "@/app/interfaces/IProduct";
import { fetchProducts } from "@/app/services/produtos/get";

export default function ProductCarrousel({ marca }: { marca: string }) {
  console.log("marca recebida:", marca);

  const [produtos, setProdutos] = useState<IProduct[]>([]); // Alterado para array
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // let url =
    //   "http://localhost:8080/produtos/?marca=" + encodeURIComponent(marca);

    // async function LoadProdutos() {
    //   if (!marca) return;
    //   const response = await fetch(url, {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   });

    //   if (!response.ok) {
    //     throw new Error(`HTTP error! status: ${response.status}`);
    //   }

    //   const result = await response.json();
    //   const produtosCarregados = result.data;
    //   setProdutos(produtosCarregados);
    //   console.log("Produtos carregados:", produtosCarregados);
    // }

    // LoadProdutos();

    const loadProduct = async () => {
      try {
        if (!marca) return;
        const produtosCarregados = await fetchProducts(undefined, marca);
        console.log("Produtos carregados:", produtosCarregados);
        setProdutos(produtosCarregados || []);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
        setProdutos([]);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [marca]); // Adicionado marca como dependência
  console.log("Estado atual dos produtos:", produtos);
  const marcaDecodificada = decodeURIComponent(marca);

  if (loading) {
    return <p>Carregando produtos da marca {marcaDecodificada}...</p>;
  }

  if (!produtos || produtos.length === 0) {
    return <p>Não encontramos produtos para a marca {marcaDecodificada}.</p>;
  }
  return (
    <>
      <Swiper
        style={
          {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            "--swiper-navigation-color": "#C7A315",
            "--swiper-pagination-color": "#C7A315",
          } as React.CSSProperties
        }
        centeredSlides={false}
        grabCursor={true}
        loop={true}
        slidesPerView={4}
        spaceBetween={40}
        keyboard={{
          enabled: true,
        }}
        // breakpoints={{
        //   769: {
        //     slidesPerView: 5,
        //   },
        // }}
        scrollbar={false}
        navigation={true}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className={estilos.swiper}
      >
        {produtos.map((produto) => (
          <SwiperSlide
            key={produto.id_produto}
            className={estilos.swiper_slide}
          >
            <CardInstrumentos
              image={`http://localhost:8080/produtos/imagens/${produto.imagem}`}
              namecard={produto.produto}
              oldPrice={produto.preco.toString()}
              newPrice={(produto.preco - produto.desconto).toString()}
              id={produto.id_produto}
            ></CardInstrumentos>
          </SwiperSlide>
        ))}
        {/* <SwiperSlide className={estilos.swiper_slide}>
          <CardInstrumentos
            image="/img/violãoGianinniBlack.png"
            namecard="Violão Giannini GN-15 Preto"
            oldPrice="200"
            newPrice=" 611,10"
            id="4"
          ></CardInstrumentos>
        </SwiperSlide>

        <SwiperSlide className={estilos.swiper_slide}>
          <CardInstrumentos
            image="/img/violãoGianinniBlack.png"
            namecard="Violão Giannini GN-15 Preto"
            oldPrice="679"
            newPrice=" 611,10"
            id="4"
          ></CardInstrumentos>
        </SwiperSlide>
        <SwiperSlide className={estilos.swiper_slide}>
          <CardInstrumentos
            image="/img/violãoGianinniBlack.png"
            namecard="Violão Giannini GN-15 Preto"
            oldPrice="679"
            newPrice=" 611,10"
            id="4"
          ></CardInstrumentos>
        </SwiperSlide>
        <SwiperSlide className={estilos.swiper_slide}>
          <CardInstrumentos
            image="/img/violãoGianinniBlack.png"
            namecard="Violão Giannini GN-15 Preto"
            oldPrice="679"
            newPrice=" 611,10"
            id="4"
          ></CardInstrumentos>
        </SwiperSlide>
        <SwiperSlide className={estilos.swiper_slide}>
          <CardInstrumentos
            image="/img/violãoGianinniBlack.png"
            namecard="Violão Giannini GN-15 Preto"
            oldPrice="679"
            newPrice=" 611,10"
            id="4"
          ></CardInstrumentos>
        </SwiperSlide>
        <SwiperSlide className={estilos.swiper_slide}>
          <CardInstrumentos
            image="/img/violãoGianinniBlack.png"
            namecard="Violão Giannini GN-15 Preto"
            oldPrice="679"
            newPrice=" 611,10"
            id="4"
          ></CardInstrumentos>
        </SwiperSlide>
        <SwiperSlide className={estilos.swiper_slide}>
          <CardInstrumentos
            image="/img/violãoGianinniBlack.png"
            namecard="Violão Giannini GN-15 Preto"
            oldPrice="679"
            newPrice=" 611,10"
            id="4"
          ></CardInstrumentos>
        </SwiperSlide>
        <SwiperSlide className={estilos.swiper_slide}>
          <CardInstrumentos
            image="/img/violãoGianinniBlack.png"
            namecard="Violão Giannini GN-15 Preto"
            oldPrice="679"
            newPrice=" 611,10"
            id="4"
          ></CardInstrumentos>
        </SwiperSlide>
        <SwiperSlide className={estilos.swiper_slide}>
          <CardInstrumentos
            image="/img/violãoGianinniBlack.png"
            namecard="Violão Giannini GN-15 Preto"
            oldPrice="679"
            newPrice=" 611,10"
            id="4"
          ></CardInstrumentos>
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}
