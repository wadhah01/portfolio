import { motion } from 'framer-motion';
import { Award, Calendar } from 'lucide-react';

const certifications = [
  {
    title: "AWS Certified Solutions Architect",
    organization: "Amazon Web Services",
    date: "2023",
    credentialId: "ABC123XYZ",
    description: "Advanced cloud architecture and AWS services expertise"
  },
  {
    title: "Professional Scrum Master I",
    organization: "Scrum.org",
    date: "2022",
    credentialId: "PSM-123456",
    description: "Agile project management and Scrum framework mastery"
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-navy/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Achievements & Certifications
        </h2>
        <div className="max-w-4xl mx-auto grid gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gold/20 rounded-full">
                  <Award className="w-6 h-6 text-gold" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gold mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-lg text-white mb-2">{cert.organization}</p>
                  <div className="flex items-center gap-2 text-gray-300 mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>{cert.date}</span>
                  </div>
                  <p className="text-gray-300">{cert.description}</p>
                  <p className="mt-2 text-sm text-gray-400">
                    Credential ID: {cert.credentialId}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;