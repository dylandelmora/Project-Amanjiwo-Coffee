"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

const slideImages = [
  { id: 1, src: "/Foto Amanjiwo Coffee.png", alt: "Coffee Shop View 1" },
  { id: 2, src: "/Foto Kopi 1.png", alt: "Coffee Shop View 2" },
  { id: 3, src: "/Foto Kopi 2.png", alt: "Coffee Shop View 3" },
];

export default function Hero() {
  return (
    <section className="relative h-[120vh] flex items-center justify-center text-center">
      <div className="absolute inset-0 w-full h-full">
        <Swiper
          modules={[Autoplay, EffectFade]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          speed={1500} 
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          effect="fade"
          className="w-full h-full"
        >
          {slideImages.map((image) => (
            <SwiperSlide key={image.id}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority
                className="object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="relative z-10 text-amber-50 px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Kopi Fresh Manual Brew
        </h1>
        <p className="text-base md:text-lg mb-6">
          Nikmati kehangatan kopi premium di malam hari mulai pukul 18.00
        </p>
        <a
          href="#"
          className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400"
        >
          Buka Setiap Malam • Jl. Pahlawan, Semarang
        </a>
      </div>
    </section>
  );
}