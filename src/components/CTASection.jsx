import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Clock, Users, CheckCircle2 } from 'lucide-react';
import { HOTMART_URL } from '../config';

const perks = [
  'Acesso imediato após confirmação',
  'Planilha personalizada em 24h',
  'Suporte WhatsApp de segunda a sexta',
  'Satisfação garantida ou reembolso',
];

const urgency = [
  { icon: Users, label: 'Apenas 8 vagas restantes' },
  { icon: Clock, label: 'Matrícula encerra em breve' },
];

export default function CTASection() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="consultoria" ref={ref} className="relative py-28 lg:py-40 overflow-hidden">
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 animate-gradient"
        style={{
          background: 'linear-gradient(135deg, #050505 0%, #041120 25%, #00386b 50%, #041120 75%, #050505 100%)',
          backgroundSize: '300% 300%',
        }}
      />

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,174,239,1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0,174,239,1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />

      {/* Animated orbs */}
      {[
        { size: 600, x: '-20%', y: '-30%', delay: 0 },
        { size: 500, x: '70%',  y: '60%',  delay: 2 },
        { size: 300, x: '50%',  y: '-10%', delay: 4 },
      ].map(({ size, x, y, delay }, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: size, height: size,
            left: x, top: y,
            background: 'radial-gradient(circle, rgba(0,174,239,0.12) 0%, transparent 65%)',
          }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 5 + i, repeat: Infinity, ease: 'easeInOut', delay }}
        />
      ))}

      {/* Scan line */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(0,174,239,0.3), transparent)' }}
          animate={{ top: ['-2%', '102%'] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'linear', repeatDelay: 1 }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 glass-blue px-4 py-2 rounded-full text-[#00AEEF] text-xs font-rajdhani font-bold tracking-widest uppercase mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="w-2 h-2 rounded-full bg-[#00AEEF] animate-pulse" />
          Consultoria Premium Online
        </motion.div>

        {/* Headline */}
        <motion.h2
          className="font-bebas leading-none mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <span className="block text-5xl sm:text-6xl lg:text-8xl text-white">
            SEU NOVO CORPO
          </span>
          <span className="block text-4xl sm:text-5xl lg:text-7xl gradient-text mt-1">
            COMEÇA HOJE.
          </span>
        </motion.h2>

        {/* Sub */}
        <motion.p
          className="font-inter text-white/60 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Pare de esperar o momento perfeito. O momento perfeito é agora.
          Com o método Mateus Ferce, você vai ter o suporte, a estrutura e
          a motivação para alcançar os resultados que sempre quis.
        </motion.p>

        {/* Perks */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {perks.map(perk => (
            <div key={perk} className="flex items-center gap-2 text-white/70 text-sm font-inter">
              <CheckCircle2 size={15} className="text-[#00AEEF] flex-shrink-0" />
              {perk}
            </div>
          ))}
        </motion.div>

        {/* Urgency */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          {urgency.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 glass px-4 py-2 rounded-lg">
              <Icon size={14} className="text-amber-400" />
              <span className="font-rajdhani font-semibold text-amber-400 text-xs tracking-wider uppercase">
                {label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Big CTA */}
        <motion.a
          href={HOTMART_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-neon font-rajdhani font-bold text-white text-lg sm:text-xl tracking-widest uppercase px-12 sm:px-16 py-5 sm:py-6 rounded-2xl inline-flex items-center gap-3"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ACESSAR CONSULTORIA
          <ArrowRight size={22} />
        </motion.a>

        {/* Guarantee */}
        <motion.p
          className="mt-6 font-inter text-white/30 text-xs"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          🔒 Compra 100% segura via Hotmart · Garantia de 7 dias
        </motion.p>
      </div>
    </section>
  );
}
