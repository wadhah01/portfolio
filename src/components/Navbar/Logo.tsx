import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <motion.div
      className="flex items-center gap-1 font-mono text-xl"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.span
        className="text-gold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        &lt;
      </motion.span>
      <motion.span
        className="font-semibold italic bg-gradient-to-r from-gold to-gold/80 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        Wadhah Agoubi
      </motion.span>
      <motion.span
        className="text-gold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        /&gt;
      </motion.span>
    </motion.div>
  );
};

export default Logo;