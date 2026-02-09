import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";
// @ts-ignore
import "swiper/css/pagination";

import { Quote } from "lucide-react";
import type { Testimonial } from "../types";

export const TestimonialSlider: React.FC<{ testimonials: Testimonial[] }> = ({
  testimonials,
}) => (
  <Swiper
    modules={[Navigation, Pagination, A11y]}
    spaceBetween={20}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    breakpoints={{
      768: { slidesPerView: 2, spaceBetween: 24 },
      1024: { slidesPerView: 3, spaceBetween: 28 },
    }}
    className="!pb-14"
  >
    {testimonials.map((t) => (
      <SwiperSlide key={t.id}>
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ type: "spring", stiffness: 300, damping: 24 }}
          className="relative h-full rounded-[2rem] border border-slate-200/70 bg-white/70 backdrop-blur shadow-[0_18px_50px_rgba(2,6,23,0.06)] overflow-hidden"
        >
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent/40 via-primary/20 to-accent/40" />
          <div className="p-7 flex flex-col h-full">
            <div className="flex items-center gap-4 mb-5">
              <img
                src={t.image}
                alt={t.name}
                className="w-14 h-14 rounded-2xl object-cover border border-white shadow-sm"
              />
              <div className="min-w-0">
                <div className="font-bold text-primary truncate">{t.name}</div>
                <div className="text-sm text-slate-500 truncate">
                  {t.university}, {t.country}
                </div>
              </div>
              <div className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-white">
                <Quote className="h-4 w-4 text-slate-700" />
              </div>
            </div>

            <p className="text-slate-700 leading-relaxed flex-1">
              <span className="text-slate-500">“</span>
              {t.quote}
              <span className="text-slate-500">”</span>
            </p>

            <div className="mt-6 flex items-center justify-between">
              <div className="text-[11px] uppercase tracking-[0.28em] text-slate-500 font-heading">
                Verified student
              </div>
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className="h-1.5 w-1.5 rounded-full bg-accent/80"
                    aria-hidden="true"
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </SwiperSlide>
    ))}
  </Swiper>
);
