import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Education = () => {
  const { t } = useTranslation();

  const educationData = [
    {
      degree: t('education.preEngineering.degree'),
      institution: t('education.preEngineering.institution'),
      location: t('education.preEngineering.location'),
      period: '2018 - 2020',
      description: t('education.preEngineering.description'),
    },
    {
      degree: t('education.engineering.degree'),
      institution: t('education.engineering.institution'),
      location: t('education.engineering.location'),
      period: '2020 - 2023',
      description: t('education.engineering.description'),
    },
  ];

  return (
    <section id="education" className="py-20 bg-white text-navy">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          {t('education.sectionTitle')}
        </h2>

        <div className="flex flex-col lg:flex-row items-start gap-8 max-w-6xl mx-auto">
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
                    <h3 className="text-xl font-bold text-black mb-2">
                      {edu.degree}
                    </h3>

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

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full lg:w-80 shrink-0"
          >
            <img
              src="/img/pdp.png"
              alt={t('education.profileImageAlt')}
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;