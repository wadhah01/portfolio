import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import Timeline from './Timeline'; // Adjust path based on your folder structure

const educationData = [
  {
    degree: "Master's in Computer Science",
    institution: "University of Technology",
    location: "Tunisia",
    period: "2018 - 2020",
  },
  {
    degree: "Bachelor's in Software Engineering",
    institution: "National Institute of Applied Sciences",
    location: "Tunisia",
    period: "2015 - 2018",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-navy text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Education
        </h2>
        <div className="flex gap-12">
          {/* Education Section */}
          <div className="flex-1">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="mb-8 bg-white/5 rounded-xl p-6 backdrop-blur-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gold/20 rounded-full">
                    <GraduationCap className="w-6 h-6 text-gold" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gold mb-2">{edu.degree}</h3>
                    <p className="text-lg mb-2">{edu.institution}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {edu.location}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Timeline Section */}
          <div className="flex-1">
            <Timeline />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
