import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ChevronDown, Play } from 'lucide-react';
import ParticlesBackground from './ParticlesBackground';
import { HOTMART_URL } from '../config';

/* ── Typewriter ─────────────────────────────────────── */
const phrases = ['SEU CORPO.', 'SUA MENTE.', 'SUA VIDA.'];

function Typewriter() {
  const [idx, setIdx]   = useState(0);
  const [text, setText] = useState('');
  const [del, setDel]   = useState(false);

  useEffect(() => {
    const phrase = phrases[idx];
    const speed  = del ? 45 : 100;
    const t = setTimeout(() => {
      if (!del) {
        setText(phrase.slice(0, text.length + 1));
        if (text.length + 1 === phrase.length)
          setTimeout(() => setDel(true), 1800);
      } else {
        setText(phrase.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setDel(false);
          setIdx(i => (i + 1) % phrases.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, idx]);

  return (
    <span className="neon-text font-bebas">
      {text}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity }}
        className="ml-0.5"
      >|</motion.span>
    </span>
  );
}

/* ── Animated counter ────────────────────────────────── */
function Counter({ end, suffix = '', duration = 2200 }) {
  const [count, setCount] = useState(0);
  const ref  = useRef(null);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !done.current) {
        done.current = true;
        let start = null;
        const tick = (ts) => {
          if (!start) start = ts;
          const pct = Math.min((ts - start) / duration, 1);
          const ease = 1 - Math.pow(1 - pct, 3);
          setCount(Math.floor(ease * end));
          if (pct < 1) requestAnimationFrame(tick);
          else setCount(end);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

const stats = [
  { value: 500, suffix: '+', label: 'Alunos Transformados' },
  { value: 100, suffix: 'kg+', label: 'Eliminados por Alunos' },
  { value: 5,   suffix: '+',   label: 'Anos de Experiência' },
];

/* ── Main component ──────────────────────────────────── */
export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imgY  = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #050505 0%, #050e1a 50%, #050505 100%)' }}
    >
      {/* Grid lines background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,174,239,1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0,174,239,1) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Particles */}
      <ParticlesBackground count={70} />

      {/* Big ambient orbs */}
      <motion.div
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,174,239,0.08) 0%, transparent 65%)' }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,119,204,0.1) 0%, transparent 65%)' }}
        animate={{ scale: [1.2, 1, 1.2] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* LEFT — text */}
          <motion.div style={{ y: textY }} className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 glass-blue px-4 py-1.5 rounded-full text-[#00AEEF] text-xs font-rajdhani font-semibold tracking-widest uppercase mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#00AEEF] animate-pulse" />
              Personal Trainer Premium
            </motion.div>

            {/* Main headline */}
            <motion.h1
              className="font-bebas leading-none mb-4"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <span className="block text-6xl sm:text-7xl lg:text-8xl xl:text-9xl text-white">
                TRANSFORME
              </span>
              <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mt-1 h-[1.15em]">
                <Typewriter />
              </span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              className="font-inter text-white/60 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Método científico, acompanhamento 100% online e resultados
              <strong className="text-white/90"> reais e duradouros.</strong> Mais de{' '}
              <strong className="text-[#00AEEF]">500 alunos</strong> já transformaram
              o corpo e a mentalidade com o Mateus Ferce.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
            >
              <motion.a
                href={HOTMART_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-neon font-rajdhani font-bold text-white text-base tracking-widest uppercase px-8 py-4 rounded-xl inline-flex items-center justify-center gap-2"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                <Zap size={18} />
                QUERO COMEÇAR AGORA
              </motion.a>

              <motion.button
                onClick={() => document.querySelector('#sobre')?.scrollIntoView({ behavior: 'smooth' })}
                className="glass font-rajdhani font-semibold text-white/80 text-base tracking-wider uppercase px-8 py-4 rounded-xl inline-flex items-center justify-center gap-2 hover:text-[#00AEEF] hover:border-[#00AEEF]/30 transition-colors"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Play size={16} />
                Saiba Mais
              </motion.button>
            </motion.div>
          </motion.div>

          {/* RIGHT — image */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            style={{ y: imgY }}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Glow ring */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(0,174,239,0.18) 0%, transparent 70%)' }} />

            {/* Image frame */}
            <div className="relative w-64 sm:w-80 lg:w-[360px] xl:w-[400px] aspect-[3/4]">
              {/* Decorative border */}
              <div className="absolute -inset-1 rounded-2xl"
                style={{ background: 'linear-gradient(135deg, rgba(0,174,239,0.5), transparent, rgba(0,119,204,0.3))', padding: '1px' }}>
                <div className="w-full h-full rounded-2xl bg-[#080E18]" />
              </div>

              <img
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80"
                alt="Mateus Ferce – Personal Trainer"
                className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                style={{ filter: 'contrast(1.05) saturate(0.9)' }}
              />

              {/* Overlay gradient bottom */}
              <div className="absolute inset-0 rounded-2xl"
                style={{ background: 'linear-gradient(to top, rgba(5,5,5,0.7) 0%, transparent 50%)' }} />

              {/* Badge overlay */}
              <motion.div
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass-blue px-6 py-3 rounded-xl whitespace-nowrap"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="font-rajdhani font-bold text-[#00AEEF] text-sm tracking-wider uppercase">
                  ⚡ +500 Alunos Transformados
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          className="mt-20 grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto lg:mx-0"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          {stats.map(({ value, suffix, label }) => (
            <div key={label} className="text-center">
              <div className="font-bebas text-3xl sm:text-4xl lg:text-5xl neon-text">
                <Counter end={value} suffix={suffix} />
              </div>
              <div className="font-inter text-white/40 text-xs sm:text-sm mt-1 leading-tight">
                {label}
              </div>
              <div className="divider mx-auto mt-2" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/30"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="font-inter text-xs tracking-widest uppercase">Role</span>
        <ChevronDown size={20} />
      </motion.div>
    </section>
  );
}

/* need Zap in same file */
function Zap({ size, className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className={className}>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}
