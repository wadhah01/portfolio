import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Typed from 'typed.js';
import { Github, Linkedin, FileText } from 'lucide-react';
import Lottie from 'lottie-react';
import { useTranslation } from 'react-i18next';
import HiAnimation from './lottie/HiAnimation.json';

const Hero = () => {
  const typedRef = useRef<HTMLSpanElement | null>(null);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (!typedRef.current) return;

    const typedStrings = t('hero.typed', { returnObjects: true }) as string[];

    const typed = new Typed(typedRef.current, {
      strings: typedStrings,
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    return () => typed.destroy();
  }, [t, i18n.language]);

  return (
    <div
      id="about"
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-navy via-navy/95 to-navy"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl animate-pulse -top-48 -left-48" />
        <div className="absolute w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl animate-pulse -bottom-48 -right-48" />

        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gold/20 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                y: [
                  Math.random() * window.innerHeight,
                  Math.random() * -100,
                  Math.random() * window.innerHeight,
                ],
                opacity: [0.2, 1, 0.2],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-between min-h-screen container mx-auto px-4">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {t('hero.greeting')} <span className="text-gold">Wadhah</span>
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-3xl mb-8 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <span ref={typedRef}></span>
          </motion.h2>

          <motion.p
            className="text-xl mb-12 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {t('hero.description')}
          </motion.p>

          <motion.div
            className="flex gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <a
              href="https://github.com/wadhah01"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-white/5 hover:bg-gold/20 transition-colors duration-300"
              title="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>

            <a
              href="https://www.linkedin.com/in/wadhah-agoubi-28224b170/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-white/5 hover:bg-gold/20 transition-colors duration-300"
              title="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Wadhah_Agoubi_Resume.pdf"
              className="p-4 rounded-full bg-white/5 hover:bg-gold/20 transition-colors duration-300"
              title={t('hero.resumeTitle')}
            >
              <FileText className="w-6 h-6" />
            </a>
          </motion.div>
        </motion.div>

        {/* Lottie Animation on the right side */}
        <div className="flex items-center justify-center w-full max-w-lg">
          <Lottie
            animationData={HiAnimation}
            loop={true}
            autoplay={true}
            style={{ width: '400px', height: '400px' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;