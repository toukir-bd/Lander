"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { useState } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Props {
  images: string[];
}

export default function ProductImageSlider({ images }: Props) {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={10}
        className="w-full h-full rounded-[10px]"
        autoplay={{
            delay: 4500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        }}
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <div className="relative aspect-[420/380] w-full cursor-zoom-in" onClick={() => setActiveImage(img)}>
              <Image
                src={img}
                alt={`Product image ${i + 1}`}
                fill
                className="object-cover rounded-[10px]"
                priority={i === 0}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Fullscreen Modal */}
      {activeImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center" onClick={() => setActiveImage(null)}>
          <div className="relative w-full h-full max-w-5xl max-h-[90vh]">
            <Image
              src={activeImage}
              alt="Full view"
              fill
              className="object-contain"
            />
          </div>
          <button className="absolute top-5 right-5 text-2xl font-[500] w-[46px] h-[46px] bg-red-600 text-white rounded-full" onClick={() => setActiveImage(null)}>
            ✕
          </button>
        </div>
      )}
    </>
  );
}
