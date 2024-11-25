import React from "react";
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

export default function ProductCarrousel() {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#C7A315",
          "--swiper-pagination-color": "#C7A315",
        }}
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
      </Swiper>
    </>
  );
}
