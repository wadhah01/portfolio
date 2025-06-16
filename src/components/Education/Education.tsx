import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const educationData = [
  {
    degree: "Bachelor in pre-engineering studies",
    institution: "Nabeul Preparatory Engineering Institute",
    location: "Nabeul,Tunisia",
    period: "2018 - 2020",
    description: "Pre-engineering studies including ; Maths,Physics,Chemistry and information technology",
  },
  {
    degree: "Diploma of Software engineering",
    institution: "National School of Electronics and Telecoms of Sfax",
    location: "Sfax,Tunisia",
    period: "2020 - 2023",
    description: "Focus on software development and telecommunication",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-white text-navy">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Education
        </h2>

        {/* Flex container */}
        <div className="flex flex-col lg:flex-row items-start gap-8 max-w-6xl mx-auto">

          {/* Left side */}
          <div className="flex-1">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="mb-8 bg-navy/5 rounded-xl p-6 backdrop-blur-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gold/20 rounded-full">
                    <GraduationCap className="w-6 h-6 text-gold" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-black mb-2">{edu.degree}</h3>
                    <p className="text-lg mb-2">{edu.institution}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-navy-300">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {edu.location}
                      </span>
                    </div>
                    <p className="mt-4 text-navy-300">{edu.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right side PDP */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full lg:w-80 shrink-0"
          >
            <img
              src="/img/pdp.png"
              alt="Profile"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Education;
