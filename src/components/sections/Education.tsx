import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  GraduationCap, Calendar, Award, Code2, 
  ExternalLink, FileText, CheckCircle2 
} from 'lucide-react';
import CertificateModal from '../modal/education/CertificateModal';

interface EducationEntry {
  id: string;
  institution: string;
  logo: string;
  degree: string;
  period: string;
  description: string;
  skills: string[];
  attachment: {
    name: string;
    url: string;
  };
}

const educationData: EducationEntry[] = [
  {
    id: '1',
    institution: 'Estácio',
    logo: 'https://picsum.photos/seed/estacio/100/100',
    degree: 'Systems Analysis and Development',
    period: '2021 — 2024',
    description: 'Degree focused on software engineering principles including systems analysis, software architecture, programming, testing and system maintenance.',
    skills: ['Algorithms', 'Software Architecture', 'Databases', 'Software Engineering'],
    attachment: {
      name: 'University Diploma',
      url: 'https://picsum.photos/seed/diploma/1200/800'
    }
  },
  {
    id: '2',
    institution: 'Labenu',
    logo: 'https://picsum.photos/seed/labenu/100/100',
    degree: 'Full Stack Web Development',
    period: '2020 — 2021',
    description: 'Intensive software engineering program focused on modern web development, including frontend and backend technologies, APIs, agile development practices and real-world projects.',
    skills: ['React', 'Node.js', 'APIs', 'Testing', 'Agile Development'],
    attachment: {
      name: 'Full Stack Developer Certificate',
      url: 'https://picsum.photos/seed/certificate/1200/800'
    }
  }
];

const Education: React.FC = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<{ url: string, title: string } | null>(null);

  return (
    <section id="education" className="py-24 bg-navy-900 relative overflow-hidden">
      {/* Background Visuals */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2" />
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#79D88F 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-20 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold mb-6 uppercase tracking-widest"
          >
            <GraduationCap size={14} />
            Academic Path
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-soft-white mb-6"
          >
            Education<span className="text-accent">.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl text-lg md:text-xl leading-relaxed"
          >
            Academic background and professional training in software development, 
            focused on engineering excellence and continuous learning.
          </motion.p>
        </div>

        {/* Timeline Layout */}
        <div className="relative space-y-12">
          {/* Vertical Line (Desktop) */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-white/10 to-transparent hidden lg:block" />

          {educationData.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative lg:pl-24"
            >
              {/* Timeline Dot (Desktop) */}
              <div className="absolute left-[29px] top-8 w-4 h-4 rounded-full bg-navy-900 border-2 border-accent z-10 hidden lg:block shadow-[0_0_10px_rgba(121,216,143,0.5)]" />

              <div className="group glass p-8 md:p-10 rounded-3xl border border-white/10 hover:border-accent/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(121,216,143,0.05)] relative overflow-hidden">
                {/* Hover Glow */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-all duration-500" />

                <div className="flex flex-col md:flex-row gap-8 items-start">
                  {/* Institution Logo */}
                  <div className="shrink-0 w-20 h-20 rounded-2xl bg-navy-800 border border-white/10 p-2 flex items-center justify-center overflow-hidden shadow-xl">
                    <img 
                      src={edu.logo} 
                      alt={edu.institution} 
                      className="w-full h-full object-cover rounded-xl"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-soft-white mb-2 group-hover:text-accent transition-colors">
                          {edu.degree}
                        </h3>
                        <div className="flex items-center gap-2 text-gray-400 font-medium">
                          <span className="text-accent/80">{edu.institution}</span>
                          <span className="text-white/10">•</span>
                          <div className="flex items-center gap-1.5 text-sm">
                            <Calendar size={14} className="text-gray-500" />
                            {edu.period}
                          </div>
                        </div>
                      </div>

                      {/* Attachment Link */}
                      <button 
                        onClick={() => setSelectedCertificate({ url: edu.attachment.url, title: edu.attachment.name })}
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-accent/10 border border-accent/20 text-accent text-sm font-bold hover:bg-accent hover:text-navy-900 transition-all group/btn"
                      >
                        <Award size={16} className="group-hover/btn:scale-110 transition-transform" />
                        {edu.attachment.name}
                        <ExternalLink size={14} />
                      </button>
                    </div>

                    <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-3xl">
                      {edu.description}
                    </p>

                    {/* Skills Chips */}
                    <div className="flex flex-wrap gap-3">
                      <div className="flex items-center gap-2 text-gray-500 text-xs font-bold uppercase tracking-widest mr-2">
                        <Code2 size={14} />
                        Core Skills:
                      </div>
                      {edu.skills.map(skill => (
                        <span 
                          key={skill}
                          className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-medium flex items-center gap-2 hover:border-accent/30 hover:bg-accent/5 transition-all"
                        >
                          <CheckCircle2 size={12} className="text-accent/50" />
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Continuous Learning Footer */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-8 glass rounded-3xl border border-white/5 text-center"
        >
          <p className="text-gray-400 italic">
            "Education is not the learning of facts, but the training of the mind to think." 
            <span className="block mt-2 text-accent font-bold">— Albert Einstein</span>
          </p>
        </motion.div>
      </div>

      {/* Certificate Viewer Modal */}
      <CertificateModal 
        isOpen={!!selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
        imageUrl={selectedCertificate?.url || ''}
        title={selectedCertificate?.title || ''}
      />
    </section>
  );
};

export default Education;
