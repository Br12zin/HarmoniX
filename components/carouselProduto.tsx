"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import Card from "./card";
import { violao, teclado } from "./Produto/data";
import InstrumentItemCard from "./Produto/InstrumentItemCard";
import InstrumentsList from "./Produto/InstrumentsList";

export default function CarouselProduto() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={100}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="mb-10 rounded-3xl">
          <InstrumentsList />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
