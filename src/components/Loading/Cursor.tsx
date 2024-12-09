import { motion } from 'framer-motion';

const Cursor = () => (
  <motion.span
    className="inline-block w-2 h-4 bg-white ml-1"
    animate={{ opacity: [1, 0] }}
    transition={{ duration: 0.8, repeat: Infinity }}
  />
);

export default Cursor;