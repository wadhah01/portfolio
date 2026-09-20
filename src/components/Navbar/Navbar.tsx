import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import Logo from './Logo';

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const { scrollY } = useScroll();
  const background = useTransform(
    scrollY,
    [0, 100],
    ['rgba(10, 25, 47, 0)', 'rgba(10, 25, 47, 0.9)']
  );

  const navItems = [
    { label: t('nav.about'), target: 'about' },
    { label: t('nav.projects'), target: 'projects' },
    { label: t('nav.education'), target: 'education' },
    { label: t('nav.achievements'), target: 'achievements' },
  ];

  const changeLanguage = (lang: 'en' | 'de') => {
    i18n.changeLanguage(lang);
  };

  return (
    <motion.nav
      style={{ background }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Logo />

        <div className="flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.target}
              to={item.target}
              smooth={true}
              duration={500}
              className="text-white hover:text-gold cursor-pointer transition-colors"
            >
              {item.label}
            </Link>
          ))}

          <div className="flex items-center gap-2 text-sm">
            <button
              onClick={() => changeLanguage('en')}
              className="text-white hover:text-gold transition-colors"
            >
              EN
            </button>

            <span className="text-white/40">|</span>

            <button
              onClick={() => changeLanguage('de')}
              className="text-white hover:text-gold transition-colors"
            >
              DE
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;