import { motion, AnimatePresence } from 'framer-motion';
import { useTerminalAnimation } from './Loading/useTerminalAnimation';
import TerminalWindow from './Loading/TerminalWindow';
import Cursor from './Loading/Cursor';

const LoadingAnimation = () => {
  const { text, isComplete } = useTerminalAnimation();

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-navy z-50"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <TerminalWindow>
            <pre 
              className="font-mono text-sm text-white whitespace-pre-wrap"
              dangerouslySetInnerHTML={{ __html: text }}
            />
            <Cursor />
          </TerminalWindow>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingAnimation;