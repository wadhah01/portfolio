import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-scroll';
import Logo from './Logo';

const Navbar = () => {
  const { scrollY } = useScroll();
  const background = useTransform(
    scrollY,
    [0, 100],
    ['rgba(10, 25, 47, 0)', 'rgba(10, 25, 47, 0.9)']
  );

  return (
    <motion.nav
      style={{ background }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Logo />
        
        <div className="flex gap-8">
          {['About', 'Projects', 'Education', 'Achievements'].map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              className="text-white hover:text-gold cursor-pointer transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;