import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface TerminalWindowProps {
  children: ReactNode;
}

const TerminalWindow = ({ children }: TerminalWindowProps) => {
  return (
    <motion.div
      className="bg-[#1e1e1e] rounded-lg p-6 w-[600px] max-h-[80vh] overflow-auto shadow-xl"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>
      {children}
    </motion.div>
  );
};

export default TerminalWindow;