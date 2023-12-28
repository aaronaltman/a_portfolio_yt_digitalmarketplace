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
        className="h-[500px] w-[300px]"
      >
        {PRODUCTS.map((product) => (
          <SwiperSlide key={product.id}>
            <Image alt={product.name} src={product.image} fill />
            <p>{product.name}</p>
            <h2>{product.description}</h2>
            <h2>{product.price}</h2>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
