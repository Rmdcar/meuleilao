"use client";

import styles from "./page.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Home() {
  return (
    <div className={styles.initialDiv}>
      <Swiper
        className={styles.swiper}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        autoplay={{
          delay: 3000, // Transição automática a cada 3 segundos
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide className={styles.swiperSlide}>
          <div className={styles.slideContent}>
            <h1 className={styles.title}>Meu Leilão - o melhor site de leilões que você já viu</h1>
            <img
              src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Descrição da imagem 1"
              className={styles.carouselImage}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <div className={styles.slideContent}>
            <h1 className={styles.title}>Meu Leilão - Pesquise todos imóveis da Caixa</h1>
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Descrição da imagem 2"
              className={styles.carouselImage}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <div className={styles.slideContent}>
            <h1 className={styles.title}>Meu Leilão - use nossa calculadora</h1>
            <img
              src="https://images.unsplash.com/photo-1588373731788-510100bfd700?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Descrição da imagem 3"
              className={styles.carouselImage}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}