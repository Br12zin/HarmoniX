import Image from "next/image";
import Link from "next/link";
import banner1 from "@/public/img/saxophone-yamaha-banner.png";
import banner2 from "@/public/img/trompete-yamaha-banner.png";
import banner3 from "@/public/img/acessorios-banner.png";
import banner4 from "@/public/img/promo-banner.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

const Carousel = () => {
  return (
    <Swiper
      style={{ "--swiper-pagination-color": "#C7A315" }}
      cssMode={true}
      loop={true}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      navigation={true}
      pagination={{ clickable: true }}
      mousewheel={true}
      keyboard={true}
      modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
      className="mySwiper mx-auto mt-6 w-[95%] max-w-6xl rounded-[2rem] shadow-lg"
    >
      {[banner1, banner2, banner3, banner4].map((img, index) => (
        <SwiperSlide key={index}>
          <Link href="#">
            <Image src={img} alt={`banner ${index + 1}`} />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
