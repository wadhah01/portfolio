import { motion } from 'framer-motion';

const DeveloperAnimation = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-[400px] h-[400px]"
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Chair */}
        <motion.path
          d="M150 300 A50 50 0 0 1 250 300"
          stroke="#4A90E2"
          strokeWidth="2"
          fill="none"
        />

        {/* Table Legs */}
        <motion.path
          d="M200 250 L300 350 M300 250 L200 350"
          stroke="#4A90E2"
          strokeWidth="2"
        />

        {/* Table Top */}
        <motion.line
          x1="200"
          y1="250"
          x2="300"
          y2="250"
          stroke="#4A90E2"
          strokeWidth="2"
        />

        {/* Character */}
        <motion.g>
          {/* Body */}
          <rect x="180" y="220" width="40" height="80" rx="20" fill="#4A90E2" />
          
          {/* Head with beanie */}
          <circle cx="200" cy="200" r="20" fill="#4A90E2" />
          <rect x="180" y="190" width="40" height="10" fill="#4A90E2" />
          
          {/* Legs */}
          <line x1="190" y1="300" x2="180" y2="330" stroke="#4A90E2" strokeWidth="2" />
          <line x1="210" y1="300" x2="220" y2="330" stroke="#4A90E2" strokeWidth="2" />
        </motion.g>

        {/* Laptop */}
        <motion.g>
          <rect x="220" y="230" width="60" height="40" fill="#4A90E2" />
          <rect x="220" y="225" width="60" height="5" fill="#4A90E2" />
        </motion.g>

        {/* Plant */}
        <motion.g>
          <rect x="290" y="220" width="10" height="30" fill="#4A90E2" />
          <path
            d="M295 220 C295 220, 295 200, 305 210 M295 220 C295 220, 295 200, 285 210"
            stroke="#4A90E2"
            strokeWidth="2"
            fill="none"
          />
        </motion.g>
      </svg>
    </motion.div>
  );
};

export default DeveloperAnimation;