import { motion } from 'framer-motion';

export const LoadingAnimation = () => {
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 2, ease: "easeInOut" }
    }
  };

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-navy z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 2.5 }}
    >
      <svg width="100" height="100" viewBox="0 0 100 100">
        <motion.path
          d="M20 80L35 20L50 60L65 20L80 80"
          stroke="#FFD700"
          strokeWidth="4"
          fill="none"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
        />
      </svg>
    </motion.div>
  );
};

export default LoadingAnimation;