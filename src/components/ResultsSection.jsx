import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../config';

/* Before / After placeholder data */
const transformations = [
  {
    id: 1,
    name: 'João P.',
    period: '4 meses',
    before: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&q=80',
    after:  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&q=80',
    stat: '-18kg',
  },
  {
    id: 2,
    name: 'Camila R.',
    period: '3 meses',
    before: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80',
    after:  'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=80',
    stat: '+8kg massa',
  },
];

function StarRating({ count = 5 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
      ))}
    </div>
  );
}

export default function ResultsSection() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="resultados" ref={ref} className="py-24 lg:py-32 overflow-hidden relative">
      {/* Accent */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full pointer-events-none -translate-y-1/2"
        style={{ background: 'radial-gradient(circle, rgba(0,174,239,0.05) 0%, transparent 65%)', transform: 'translate(30%, -50%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="font-rajdhani text-xs font-semibold tracking-[0.3em] uppercase text-[#00AEEF]">
            Transformações Reais
          </span>
          <div className="divider mx-auto mt-2 mb-4" />
          <h2 className="font-bebas text-4xl sm:text-5xl lg:text-6xl text-white leading-none">
            RESULTADOS QUE{' '}
            <span className="gradient-text">FALAM POR SI</span>
          </h2>
        </motion.div>

        {/* Before / After */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {transformations.map(({ id, name, period, before, after, stat }, i) => (
            <motion.div
              key={id}
              className="glass rounded-2xl overflow-hidden neon-border group"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="grid grid-cols-2 gap-0">
                {[
                  { img: before, tag: 'ANTES' },
                  { img: after,  tag: 'DEPOIS' },
                ].map(({ img, tag }) => (
                  <div key={tag} className="relative aspect-square overflow-hidden">
                    <img src={img} alt={tag} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      style={{ filter: tag === 'ANTES' ? 'saturate(0.5) brightness(0.8)' : 'contrast(1.05) saturate(0.9)' }} />
                    <div className="absolute inset-0"
                      style={{ background: 'linear-gradient(to top, rgba(5,5,5,0.7) 0%, transparent 50%)' }} />
                    <div className={`absolute top-3 left-3 font-bebas text-xs tracking-widest px-2 py-1 rounded ${
                      tag === 'ANTES'
                        ? 'bg-white/10 text-white/70'
                        : 'bg-[#00AEEF]/20 text-[#00AEEF]'
                    }`} style={{ border: tag === 'ANTES' ? '1px solid rgba(255,255,255,0.15)' : '1px solid rgba(0,174,239,0.3)' }}>
                      {tag}
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-5 flex items-center justify-between">
                <div>
                  <div className="font-rajdhani font-bold text-white text-sm">{name}</div>
                  <div className="font-inter text-white/40 text-xs">{period} de programa</div>
                </div>
                <div className="font-bebas text-2xl neon-text">{stat}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="font-bebas text-3xl sm:text-4xl text-white">
            O QUE MEUS <span className="gradient-text">ALUNOS DIZEM</span>
          </h3>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map(({ id, name, age, result, text, stars, avatar }, i) => (
            <motion.div
              key={id}
              className="glass-blue rounded-2xl p-6 flex flex-col gap-4 hover:border-[#00AEEF]/30 transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(0,174,239,0.12)' }}
            >
              {/* Quote icon */}
              <Quote size={20} className="text-[#00AEEF]/40" />

              <p className="font-inter text-white/60 text-sm leading-relaxed flex-1">
                "{text}"
              </p>

              <StarRating count={stars} />

              <div className="flex items-center gap-3 pt-2 border-t border-white/5">
                <img
                  src={avatar}
                  alt={name}
                  className="w-10 h-10 rounded-full object-cover ring-2"
                  style={{ ringColor: 'rgba(0,174,239,0.3)' }}
                  onError={e => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=001a2e&color=00AEEF`; }}
                />
                <div>
                  <div className="font-rajdhani font-bold text-white text-sm">{name}, {age}</div>
                  <div className="font-inter text-[#00AEEF] text-xs">{result}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
