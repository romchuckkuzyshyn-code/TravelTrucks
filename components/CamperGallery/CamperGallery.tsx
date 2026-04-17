"use client";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { CamperGalleryById } from "../../types/campersType";
import css from "./CamperGallery.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
interface CamperGalleryProps {
  gallery: CamperGalleryById[];
  name: string;
}

const CamperGallery = ({ gallery, name }: CamperGalleryProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  return (
    <>
      <Swiper
        style={
          {
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          } as React.CSSProperties
        }
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className={css.mainSwiper}
      >
        {gallery.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <Image src={item.original} alt={name} width={638} height={505} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className={css.thumbSwiper}
      >
        {gallery.map((item) => (
          <SwiperSlide key={item.id}>
            <Image src={item.thumb} alt={name} width={136} height={144} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CamperGallery;
