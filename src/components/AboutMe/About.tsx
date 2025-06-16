import React from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import AbtmeLottie from './lottie/AbtmeLottie.json';

const About: React.FC = () => {
  return (
    <div id="about-me" className="min-h-screen bg-white text-black relative">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl animate-pulse -top-48 -left-48" />
        <div className="absolute w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl animate-pulse -bottom-48 -right-48" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-between min-h-screen container mx-auto px-4">
        {/* Left Section */}
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
            About <span className="text-gold">Me</span>
          </motion.h1>

          <motion.p
  className="text-xl mb-12 text-gray-700"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.6, duration: 0.8 }}
>
  I'm Wadhah, a software developer passionate about building innovative solutions with a sense of humor. Currently, I work as a Full Stack Developer focusing on Backend, building scalable systems in a 9-5 role.
</motion.p>

<motion.p
  className="text-xl mb-12 text-gray-700"
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ delay: 0.8, duration: 0.8 }}
>
Beyond my current role, I've built server-side and client-side applications for web, mobile, and blockchain projects using technologies like React, Angular, Node.js, Java, Spring Boot, and Solidity. I’m also experienced with databases including MongoDB, MySQL, and PostgreSQL, through a mix of freelance work, internships, and full-time positions.</motion.p>


        </motion.div>

        {/* Lottie Animation on the Right */}
        <motion.div
          className="flex items-center justify-center w-full max-w-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Lottie
            animationData={AbtmeLottie}
            loop={true}
            autoplay={true}
            style={{ width: '400px', height: '400px' }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
