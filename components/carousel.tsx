import Image from "next/image";
import Link from "next/link";

import banner1 from "@/public/img/saxophone-yamaha-banner.png";
import banner2 from "@/public/img/trompete-yamaha-banner.png";
import banner3 from "@/public/img/acessorios-banner.png";
import banner4 from "@/public/img/promo-banner.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import {
  Autoplay,
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper/modules";

const Carousel = () => {
  const pagination = {
    clickable: true,
  };

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#C7A315",
          "--swiper-pagination-color": "#C7A315",
        }}
        cssMode={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={pagination}
        mousewheel={true}
        keyboard={true}
        modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper rounded-[3rem] shadow-md"
      >
        <SwiperSlide>
          <Link href="/pages/Marcas/Yamaha">
            <Image src={banner1} alt="banner 1"></Image>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="#">
            <Image src={banner2} alt="banner 2"></Image>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="#">
            <Image src={banner3} alt="banner 3"></Image>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="#">
            <Image src={banner4} alt="banner 4"></Image>
          </Link>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;
