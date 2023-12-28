"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { PRODUCTS } from "@/lib/constants";

type urlsProps = {
  urls: string[];
};

export default function ImageSlider() {
  return (
    <section className="">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="h-screen max-w-6xl"
      >
        {PRODUCTS.map((product) => (
          <SwiperSlide>
            <Image alt={product.name} src={product.image} fill />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
