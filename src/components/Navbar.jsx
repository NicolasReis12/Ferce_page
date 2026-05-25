import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';
import { HOTMART_URL } from '../config';

const links = [
  { label: 'Sobre',      href: '#sobre'      },
  { label: 'Galeria',    href: '#galeria'     },
  { label: 'Resultados', href: '#resultados'  },
  { label: 'Benefícios', href: '#beneficios'  },
];

const scrollTo = (href) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#050505]/90 backdrop-blur-lg border-b border-[rgba(0,174,239,0.12)] shadow-[0_4px_30px_rgba(0,0,0,0.6)]'
            : 'bg-transparent'
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 group"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #00AEEF, #0066CC)', boxShadow: '0 0 12px rgba(0,174,239,0.5)' }}>
                <Zap size={16} className="text-white" />
              </div>
              <div>
                <span className="font-bebas text-xl tracking-wider text-white">MATEUS</span>
                <span className="font-bebas text-xl tracking-wider neon-text ml-1">FERCE</span>
              </div>
            </motion.button>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              {links.map(({ label, href }) => (
                <motion.button
                  key={href}
                  onClick={() => scrollTo(href)}
                  className="font-rajdhani font-semibold text-sm tracking-widest text-white/70 hover:text-[#00AEEF] uppercase transition-colors duration-200 relative group"
                  whileHover={{ y: -1 }}
                >
                  {label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#00AEEF] group-hover:w-full transition-all duration-300" />
                </motion.button>
              ))}
            </nav>

            {/* CTA button (desktop) */}
            <motion.a
              href={HOTMART_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex btn-neon text-white font-rajdhani font-bold text-sm tracking-widest uppercase px-6 py-2.5 rounded-lg"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              Consultoria
            </motion.a>

            {/* Mobile hamburger */}
            <motion.button
              className="md:hidden text-white/80 hover:text-[#00AEEF] transition-colors"
              onClick={() => setOpen(v => !v)}
              whileTap={{ scale: 0.9 }}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col pt-20"
            style={{ background: 'rgba(5,5,5,0.97)', backdropFilter: 'blur(16px)' }}
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            <nav className="flex flex-col items-center justify-center flex-1 gap-8">
              {links.map(({ label, href }, i) => (
                <motion.button
                  key={href}
                  onClick={() => { scrollTo(href); setOpen(false); }}
                  className="font-bebas text-4xl tracking-widest text-white/80 hover:text-[#00AEEF] transition-colors"
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  {label}
                </motion.button>
              ))}

              <motion.a
                href={HOTMART_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-4 btn-neon text-white font-rajdhani font-bold text-base tracking-widest uppercase px-10 py-3 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
              >
                QUERO COMEÇAR AGORA
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
