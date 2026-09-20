import { motion } from 'framer-motion';
import { Award, Calendar } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Achievements = () => {
  const { t } = useTranslation();

  const certifications = [
    {
      title: t('achievements.mtaPython.title'),
      organization: 'Microsoft',
      date: '2019',
      credentialId: 'wb6x3-H9MW',
      description: t('achievements.mtaPython.description'),
    },
    {
      title: t('achievements.az900.title'),
      organization: 'Microsoft',
      date: '2022',
      credentialId: 'ra8n-uSKv',
      description: t('achievements.az900.description'),
    },
    {
      title: t('achievements.sc900.title'),
      organization: 'Microsoft',
      date: '2022',
      credentialId: 'bn6d-iKMo',
      description: t('achievements.sc900.description'),
    },
    {
      title: t('achievements.cyberops.title'),
      organization: 'Cisco',
      date: '2023',
      credentialUrl:
        'https://www.credly.com/badges/b618a602-ae99-4e80-80c6-8bdf01598c58/linked_in_profile',
      description: t('achievements.cyberops.description'),
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-navy/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          {t('achievements.sectionTitle')}
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

                  <p className="text-lg text-white mb-2">
                    {cert.organization}
                  </p>

                  <div className="flex items-center gap-2 text-gray-300 mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>{cert.date}</span>
                  </div>

                  <p className="text-gray-300">{cert.description}</p>

                  {cert.credentialId && (
                    <p className="mt-2 text-sm text-gray-400">
                      {t('achievements.credentialId')}: {cert.credentialId}
                    </p>
                  )}

                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block text-sm text-gold hover:underline"
                    >
                      {t('achievements.viewCredential')}
                    </a>
                  )}
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