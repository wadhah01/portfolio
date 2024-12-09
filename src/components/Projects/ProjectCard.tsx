import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  demoUrl: string;
  githubUrl: string;
  techStack: string[];
}

const ProjectCard = ({ title, description, image, demoUrl, githubUrl, techStack }: ProjectCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (isHovered) {
      timeoutId = setTimeout(() => {
        setIsFlipped(true);
      }, 5000);
    } else {
      setIsFlipped(false);
    }
    return () => clearTimeout(timeoutId);
  }, [isHovered]);

  return (
    <motion.div
      className="relative w-full max-w-sm h-[400px] group perspective mx-auto"
      whileHover={{ scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <motion.div
        className="relative w-full h-full duration-1000 preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Front */}
        <div className="absolute inset-0 backface-hidden">
          <div className="h-full bg-white rounded-xl shadow-xl overflow-hidden">
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-navy">{title}</h3>
              <p className="text-gray-600 mb-4">{description}</p>
              <div className="flex gap-4">
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-navy text-white rounded-lg hover:bg-navy/90 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border border-navy text-navy rounded-lg hover:bg-navy/10 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 backface-hidden rotate-y-180">
          <div className="h-full bg-navy text-white rounded-xl shadow-xl p-6 flex flex-col justify-center items-center">
            <h4 className="text-xl font-bold mb-4">Tech Stack</h4>
            <div className="grid grid-cols-2 gap-4">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="px-4 py-2 bg-white/10 rounded-lg text-center"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;