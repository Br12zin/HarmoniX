"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { violao, teclado } from "./Produto/data";
import InstrumentItemCard from "./Produto/InstrumentItemCard";

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
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="mb-10 rounded-3xl">
          <InstrumentItemCard position={0} instrumento={violao} />
        </SwiperSlide>
        <SwiperSlide className="mb-10 rounded-3xl">
          <InstrumentItemCard position={3} instrumento={violao} props="p-10" />
        </SwiperSlide>
        <SwiperSlide className="mb-10 rounded-3xl">
          <InstrumentItemCard position={2} instrumento={teclado} />
        </SwiperSlide>
        <SwiperSlide className="mb-10 rounded-3xl">
          <InstrumentItemCard position={1} instrumento={violao} />
        </SwiperSlide>
        <SwiperSlide className="mb-10 rounded-3xl">
          <InstrumentItemCard position={0} instrumento={teclado} />
        </SwiperSlide>
        <SwiperSlide className="mb-10 rounded-3xl">
          <InstrumentItemCard position={2} instrumento={violao} />
        </SwiperSlide>
        <SwiperSlide className="mb-10 rounded-3xl">
          <InstrumentItemCard position={1} instrumento={teclado} />
        </SwiperSlide>
        <SwiperSlide className="mb-10 rounded-3xl">
          <InstrumentItemCard position={5} instrumento={violao} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
