import { motion } from 'framer-motion';
import { Award, Calendar } from 'lucide-react';

const certifications = [
  {
    title: "Microsoft technology associate: introduction to programming using python",
    organization: "Microsoft",
    date: "2019 ",
    credentialId: "wb6x3-H9MW",
    description: "Fundamentals of programming concepts using Python, covering data types, control flow, functions, and error handling"
  },
  {
    title: "A-Z 900 Microsoft Certified: Azure Fundamentals",
    organization: "Microsoft",
    date: "2022",
    credentialId: "ra8n-uSKv",
    description: "Covers essential cloud concepts, core Azure services, cloud security, governance, compliance, and pricing strategies"
  },
  {
    title: "SC-900 Microsoft : Security, Compliance and identity fundementals",
    organization: "Microsoft",
    date: "2022",
    credentialId: "bn6d-iKMo",
    description: "Introduction to security, compliance, identity, and governance solutions within Microsoft services and cloud environments"
  },
  {
    title: "Cisco Certified CyberOps Associate",
    organization: "Cisco",
    date: "2023",
    credential_url: "https://www.credly.com/badges/b618a602-ae99-4e80-80c6-8bdf01598c58/linked_in_profile",
    description: "Introduction to cybersecurity operations, covering network security monitoring, incident response, security concepts, and threat analysis."
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