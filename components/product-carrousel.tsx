import React, { useRef, useState } from "react";
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

export default function ProductCarrousel() {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#C7A315",
          "--swiper-pagination-color": "#C7A315",
        }}
        slidesPerView={5}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 5,
            slidesPerGroup: 1,
          },
        }}
        scrollbar={false}
        navigation={true}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className={estilos.swiper}
      >
        <SwiperSlide className={estilos.swiper_slide}>
          <div>abc</div>
        </SwiperSlide>
        <SwiperSlide className={estilos.swiper_slide}>
          <div>abc</div>
        </SwiperSlide>
        <SwiperSlide className={estilos.swiper_slide}>
          <div>abc</div>
        </SwiperSlide>
        <SwiperSlide className={estilos.swiper_slide}>
          <div>abc</div>
        </SwiperSlide>
        <SwiperSlide className={estilos.swiper_slide}>
          <div>abc</div>
        </SwiperSlide>
        <SwiperSlide className={estilos.swiper_slide}>
          <div>abc</div>
        </SwiperSlide>
        <SwiperSlide className={estilos.swiper_slide}>
          <div>abc</div>
        </SwiperSlide>
        <SwiperSlide className={estilos.swiper_slide}>
          <div>abc</div>
        </SwiperSlide>
        <SwiperSlide className={estilos.swiper_slide}>
          <div>abc</div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
