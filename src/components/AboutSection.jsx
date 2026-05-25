import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Dumbbell, Target, TrendingUp, Video, Award, Shield } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: 'easeOut' } },
});

const services = [
  {
    icon: Dumbbell,
    title: 'Treino Personalizado',
    desc: 'Planilhas 100% adaptadas ao seu biotipo, nível de condicionamento e objetivos específicos.',
  },
  {
    icon: Target,
    title: 'Emagrecimento',
    desc: 'Protocolo científico para queima de gordura sem perder massa muscular e com qualidade de vida.',
  },
  {
    icon: TrendingUp,
    title: 'Hipertrofia',
    desc: 'Método de periodização avançado para ganho de massa muscular de forma eficiente e duradoura.',
  },
  {
    icon: Video,
    title: 'Consultoria Online',
    desc: 'Acompanhamento semanal por vídeo, suporte via WhatsApp e ajuste contínuo da estratégia.',
  },
];

const certs = [
  { icon: Award,  label: 'CREF Ativo' },
  { icon: Shield, label: 'Nutrição Esportiva' },
  { icon: Award,  label: 'Pós-Graduado em Fisiologia' },
];

export default function AboutSection() {
  const ref     = useRef(null);
  const inView  = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="sobre" ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      {/* BG accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,174,239,0.05) 0%, transparent 65%)', transform: 'translate(30%, -30%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT — image */}
          <motion.div
            className="relative"
            variants={fadeUp(0)}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            {/* Main image */}
            <div className="relative rounded-2xl overflow-hidden neon-border aspect-[4/5] max-w-md mx-auto lg:mx-0">
              <img
                src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=700&q=80"
                alt="Mateus Ferce treinando"
                className="w-full h-full object-cover"
                style={{ filter: 'contrast(1.05) saturate(0.85)' }}
              />
              <div className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(5,5,5,0.6) 0%, transparent 40%)' }} />
            </div>

            {/* Floating cert card */}
            <motion.div
              className="absolute -bottom-6 -right-4 sm:right-4 lg:-right-8 glass-blue px-5 py-4 rounded-xl"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="font-bebas text-3xl neon-text">5+</div>
              <div className="font-inter text-white/60 text-xs">Anos de Experiência</div>
            </motion.div>

            {/* Experience badge */}
            <motion.div
              className="absolute -top-4 -left-4 sm:left-4 lg:-left-8 glass px-4 py-3 rounded-xl border border-white/10"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="font-rajdhani font-semibold text-white/80 text-xs tracking-wider">Online Agora</span>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT — text */}
          <div className="space-y-8">
            {/* Section header */}
            <motion.div variants={fadeUp(0.1)} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
              <span className="font-rajdhani text-xs font-semibold tracking-[0.3em] uppercase text-[#00AEEF]">
                Quem é Mateus Ferce
              </span>
              <div className="divider mt-2 mb-4" />
              <h2 className="font-bebas text-4xl sm:text-5xl lg:text-6xl text-white leading-none">
                DO ESPORTE ÀS{' '}
                <span className="gradient-text">TRANSFORMAÇÕES</span>
              </h2>
            </motion.div>

            <motion.p
              className="font-inter text-white/60 leading-relaxed text-base"
              variants={fadeUp(0.2)}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              Formado em Educação Física com pós-graduação em Fisiologia do Exercício e Nutrição
              Esportiva, <strong className="text-white/90">Mateus Ferce</strong> acumula mais de 5 anos
              de experiência transformando corpos e mentalidades. Atleta desde jovem, entende na prática
              cada fase do processo — do iniciante ao avançado.
            </motion.p>

            <motion.p
              className="font-inter text-white/60 leading-relaxed text-base"
              variants={fadeUp(0.25)}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              Seu método combina <strong className="text-[#00AEEF]">ciência, estratégia e motivação</strong>{' '}
              para entregar resultados reais — sem dietas absurdas nem treinos genéricos.
              Cada aluno recebe um protocolo único, acompanhamento constante e todo o suporte
              necessário para alcançar seus objetivos.
            </motion.p>

            {/* Certifications */}
            <motion.div
              className="flex flex-wrap gap-3"
              variants={fadeUp(0.3)}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              {certs.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 glass px-3 py-2 rounded-lg">
                  <Icon size={14} className="text-[#00AEEF]" />
                  <span className="font-inter text-white/70 text-xs">{label}</span>
                </div>
              ))}
            </motion.div>

            {/* Service cards */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              variants={fadeUp(0.35)}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              {services.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  className="glass-blue p-5 rounded-xl group hover:border-[#00AEEF]/40 transition-all duration-300 cursor-default"
                  whileHover={{ y: -4, boxShadow: '0 8px 30px rgba(0,174,239,0.15)' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.08, duration: 0.5 }}
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                    style={{ background: 'rgba(0,174,239,0.15)' }}>
                    <Icon size={20} className="text-[#00AEEF]" />
                  </div>
                  <h3 className="font-rajdhani font-bold text-white text-sm tracking-wide uppercase mb-1">
                    {title}
                  </h3>
                  <p className="font-inter text-white/50 text-xs leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
