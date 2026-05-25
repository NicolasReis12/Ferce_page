import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) { clearInterval(interval); return 100; }
        return prev + Math.random() * 8 + 3;
      });
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505]"
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(0,174,239,0.4) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0,174,239,0.4) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Animated orbs */}
      <motion.div
        className="absolute w-80 h-80 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(0,174,239,0.15) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* Logo */}
      <motion.div
        className="relative z-10 text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="text-6xl md:text-7xl font-bebas tracking-widest neon-text mb-1"
          animate={{ textShadow: [
            '0 0 10px rgba(0,174,239,0.5)',
            '0 0 30px rgba(0,174,239,0.9), 0 0 60px rgba(0,174,239,0.4)',
            '0 0 10px rgba(0,174,239,0.5)',
          ]}}
          transition={{ duration: 2, repeat: Infinity }}
        >
          MATEUS
        </motion.div>
        <div className="text-2xl md:text-3xl font-rajdhani font-light tracking-[0.4em] text-white/60 uppercase">
          Ferce
        </div>
        <div className="mt-3 text-xs font-inter tracking-[0.3em] text-[#00AEEF]/60 uppercase">
          Personal Trainer
        </div>
      </motion.div>

      {/* Progress bar */}
      <motion.div
        className="relative z-10 w-64"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <div className="flex justify-between text-xs font-inter text-white/30 mb-2">
          <span>Carregando</span>
          <span>{Math.min(Math.round(progress), 100)}%</span>
        </div>
        <div className="h-[2px] bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{
              background: 'linear-gradient(90deg, #00AEEF, #33C3FF)',
              boxShadow: '0 0 10px rgba(0,174,239,0.8)',
            }}
            animate={{ width: `${Math.min(progress, 100)}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {[0, 1, 2].map(i => (
            <motion.div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-[#00AEEF]"
              animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }}
              transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
