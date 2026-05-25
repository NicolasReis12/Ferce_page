import { motion } from 'framer-motion';
import { Instagram, Youtube, Mail, Zap } from 'lucide-react';
import { INSTAGRAM_URL, YOUTUBE_URL, EMAIL, HOTMART_URL, WHATSAPP_URL } from '../config';

const navLinks = [
  { label: 'Sobre',        href: '#sobre'      },
  { label: 'Galeria',      href: '#galeria'     },
  { label: 'Resultados',   href: '#resultados'  },
  { label: 'Benefícios',   href: '#beneficios'  },
  { label: 'Consultoria',  href: '#consultoria' },
];

const socials = [
  { icon: Instagram, href: INSTAGRAM_URL, label: 'Instagram' },
  { icon: Youtube,   href: YOUTUBE_URL,   label: 'YouTube'   },
  { icon: Mail,      href: `mailto:${EMAIL}`, label: 'Email' },
];

/* WhatsApp SVG */
function WaIcon({ size = 20 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  );
}

export default function Footer() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/5 bg-[#030303]">
      {/* Top accent line */}
      <div className="h-px w-full"
        style={{ background: 'linear-gradient(90deg, transparent, #00AEEF, transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #00AEEF, #0066CC)', boxShadow: '0 0 14px rgba(0,174,239,0.5)' }}>
                <Zap size={18} className="text-white" />
              </div>
              <div>
                <span className="font-bebas text-xl tracking-wider text-white">MATEUS</span>
                <span className="font-bebas text-xl tracking-wider neon-text ml-1">FERCE</span>
              </div>
            </div>
            <p className="font-inter text-white/40 text-sm leading-relaxed mb-6">
              Personal Trainer dedicado a transformar corpos e mentalidades com método
              científico, acompanhamento humanizado e resultados reais.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center text-white/50 hover:text-[#00AEEF] hover:border-[#00AEEF]/30 transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={label}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg glass flex items-center justify-center text-white/50 hover:text-green-400 hover:border-green-400/30 transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                aria-label="WhatsApp"
              >
                <WaIcon size={18} />
              </motion.a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="font-rajdhani font-bold text-white text-sm tracking-widest uppercase mb-5">
              Navegação
            </h4>
            <ul className="space-y-3">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <button
                    onClick={() => scrollTo(href)}
                    className="font-inter text-white/40 hover:text-[#00AEEF] text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-3 h-px bg-[#00AEEF]/40 group-hover:w-5 transition-all duration-200" />
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-rajdhani font-bold text-white text-sm tracking-widest uppercase mb-5">
              Pronto para Começar?
            </h4>
            <p className="font-inter text-white/40 text-sm leading-relaxed mb-5">
              Não espere mais. Vagas limitadas para garantir qualidade no atendimento.
            </p>
            <motion.a
              href={HOTMART_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon font-rajdhani font-bold text-white text-sm tracking-widest uppercase px-6 py-3 rounded-xl inline-block"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              ACESSAR CONSULTORIA
            </motion.a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-inter text-white/25 text-xs">
            © {new Date().getFullYear()} Mateus Ferce. Todos os direitos reservados.
          </p>
          <p className="font-inter text-white/20 text-xs">
            Desenvolvido com ⚡ para resultados reais
          </p>
        </div>
      </div>
    </footer>
  );
}
