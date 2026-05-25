import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { GALLERY_IMAGES } from '../config';

export default function GallerySection() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="galeria" ref={ref} className="py-24 lg:py-32 overflow-hidden">
      {/* BG accent */}
      <div className="absolute left-0 pointer-events-none"
        style={{
          width: '400px', height: '400px',
          background: 'radial-gradient(circle, rgba(0,174,239,0.06) 0%, transparent 65%)',
          transform: 'translate(-30%, 0)',
        }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="font-rajdhani text-xs font-semibold tracking-[0.3em] uppercase text-[#00AEEF]">
            Galeria
          </span>
          <div className="divider mx-auto mt-2 mb-4" />
          <h2 className="font-bebas text-4xl sm:text-5xl lg:text-6xl text-white leading-none">
            DENTRO E FORA DA{' '}
            <span className="gradient-text">ACADEMIA</span>
          </h2>
          <p className="font-inter text-white/50 mt-4 max-w-xl mx-auto text-sm">
            Cada imagem conta uma história de dedicação, suor e conquista. Aqui o resultado é real.
          </p>
        </motion.div>

        {/* Swiper */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            effect="coverflow"
            grabCursor
            centeredSlides
            slidesPerView={1.2}
            coverflowEffect={{
              rotate:       30,
              stretch:       0,
              depth:        120,
              modifier:      1.5,
              slideShadows:  true,
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
            navigation
            autoplay={{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }}
            loop
            breakpoints={{
              640:  { slidesPerView: 1.6 },
              768:  { slidesPerView: 2.2 },
              1024: { slidesPerView: 2.8 },
            }}
            className="pb-12"
          >
            {GALLERY_IMAGES.map(({ id, src, alt, label }) => (
              <SwiperSlide key={id}>
                <motion.div
                  className="relative rounded-2xl overflow-hidden aspect-[4/5] group cursor-pointer"
                  style={{ border: '1px solid rgba(0,174,239,0.12)' }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={src}
                    alt={alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    style={{ filter: 'contrast(1.05) saturate(0.85)' }}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: 'linear-gradient(to top, rgba(0,14,26,0.85) 0%, transparent 50%)' }} />

                  {/* Label */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="font-rajdhani font-bold text-sm tracking-widest uppercase text-[#00AEEF]">
                      {label}
                    </span>
                  </div>

                  {/* Corner accent */}
                  <div className="absolute top-3 right-3 w-6 h-6 rounded-full glass-blue flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00AEEF]" />
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
