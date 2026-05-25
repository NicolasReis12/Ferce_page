import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  ClipboardList, Headphones, Salad, BarChart3,
  FlameKindling, Repeat, ShieldCheck, Trophy,
} from 'lucide-react';
import { HOTMART_URL } from '../config';

const benefits = [
  {
    icon: ClipboardList,
    title: 'Planilha 100% Personalizada',
    desc: 'Treinos desenvolvidos exclusivamente para o seu biotipo, objetivo e disponibilidade de tempo.',
  },
  {
    icon: Headphones,
    title: 'Suporte Diário no WhatsApp',
    desc: 'Tire dúvidas, envie feedbacks e receba orientações em tempo real com o Mateus.',
  },
  {
    icon: Salad,
    title: 'Estratégia Nutricional',
    desc: 'Orientação alimentar estratégica alinhada ao seu treino, sem dietas extremas ou restritivas.',
  },
  {
    icon: BarChart3,
    title: 'Acompanhamento de Evolução',
    desc: 'Check-ins semanais com análise de métricas, fotos e ajustes necessários no protocolo.',
  },
  {
    icon: FlameKindling,
    title: 'Motivação Constante',
    desc: 'Você nunca vai treinar sozinho — o Mateus está junto em cada etapa da sua jornada.',
  },
  {
    icon: Repeat,
    title: 'Periodização Científica',
    desc: 'Progressão de cargas e volume baseada em ciência para maximizar seus resultados ao longo do tempo.',
  },
  {
    icon: ShieldCheck,
    title: 'Segurança e Prevenção',
    desc: 'Execução correta, evitando lesões e garantindo longevidade nos seus treinos.',
  },
  {
    icon: Trophy,
    title: 'Resultados Reais e Duradouros',
    desc: 'Mais de 500 alunos já comprovaram: o método funciona e os resultados não voltam atrás.',
  },
];

export default function BenefitsSection() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="beneficios" ref={ref} className="py-24 lg:py-32 relative overflow-hidden">
      {/* Dark BG */}
      <div className="absolute inset-0"
        style={{ background: 'linear-gradient(160deg, #050505 0%, #060d18 50%, #050505 100%)' }} />

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,174,239,1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0,174,239,1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />

      {/* Orbs */}
      <motion.div
        className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,174,239,0.07) 0%, transparent 60%)' }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="font-rajdhani text-xs font-semibold tracking-[0.3em] uppercase text-[#00AEEF]">
            Por Que Escolher
          </span>
          <div className="divider mx-auto mt-2 mb-4" />
          <h2 className="font-bebas text-4xl sm:text-5xl lg:text-6xl text-white leading-none">
            TUDO QUE VOCÊ PRECISA{' '}
            <br className="hidden sm:block" />
            PARA <span className="gradient-text">EVOLUIR</span>
          </h2>
          <p className="font-inter text-white/50 mt-4 max-w-2xl mx-auto text-sm">
            A consultoria completa que vai te guiar do ponto A ao ponto B sem desperdício de tempo,
            dinheiro ou energia.
          </p>
        </motion.div>

        {/* Benefits grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {benefits.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              className="group relative glass-blue rounded-2xl p-6 overflow-hidden cursor-default"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -6, boxShadow: '0 16px 40px rgba(0,174,239,0.15)' }}
            >
              {/* Hover shimmer */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'linear-gradient(135deg, rgba(0,174,239,0.04) 0%, transparent 60%)' }} />

              {/* Icon */}
              <motion.div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: 'rgba(0,174,239,0.1)', border: '1px solid rgba(0,174,239,0.2)' }}
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Icon size={22} className="text-[#00AEEF]" />
              </motion.div>

              <h3 className="font-rajdhani font-bold text-white text-sm tracking-wide uppercase mb-2 leading-snug">
                {title}
              </h3>
              <p className="font-inter text-white/45 text-xs leading-relaxed">
                {desc}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00AEEF]/30 to-transparent
                opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA banner */}
        <motion.div
          className="relative rounded-2xl overflow-hidden p-8 sm:p-12 text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(0,174,239,0.12) 0%, rgba(0,119,204,0.08) 50%, rgba(0,174,239,0.12) 100%)',
            border: '1px solid rgba(0,174,239,0.2)',
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {/* Shimmer */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute w-px h-full bg-gradient-to-b from-transparent via-[#00AEEF]/30 to-transparent"
              animate={{ left: ['-5%', '105%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear', repeatDelay: 2 }}
            />
          </div>

          <div className="relative z-10">
            <h3 className="font-bebas text-3xl sm:text-4xl lg:text-5xl text-white mb-3">
              PRONTO PARA COMEÇAR SUA{' '}
              <span className="neon-text">TRANSFORMAÇÃO?</span>
            </h3>
            <p className="font-inter text-white/60 text-sm sm:text-base max-w-xl mx-auto mb-8">
              Vagas limitadas. Cada aluno recebe atenção individual e personalizada.
              Garanta a sua agora.
            </p>
            <motion.a
              href={HOTMART_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon font-rajdhani font-bold text-white text-base tracking-widest uppercase px-10 py-4 rounded-xl inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              QUERO ACESSAR A CONSULTORIA
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
