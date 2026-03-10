import React from 'react';
import { motion } from 'motion/react';
import { Globe, Server, Cloud, Workflow } from 'lucide-react';

const TechStack = () => {
  const categories = [
    {
      title: 'Frontend',
      icon: <Globe className="text-accent" />,
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion']
    },
    {
      title: 'Backend',
      icon: <Server className="text-blue-400" />,
      skills: ['Node.js', 'REST APIs', 'Microservices', 'GraphQL', 'PostgreSQL']
    },
    {
      title: 'Infrastructure',
      icon: <Cloud className="text-purple-400" />,
      skills: ['AWS / GCP', 'CI/CD', 'Docker', 'Kubernetes', 'Terraform']
    },
    {
      title: 'Tools',
      icon: <Workflow className="text-yellow-400" />,
      skills: ['Git', 'Jest / Vitest', 'Cypress', 'Vite', 'Postman']
    }
  ];

  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-accent font-bold uppercase tracking-widest text-sm mb-4">Tech Stack</h2>
          <h3 className="text-4xl md:text-5xl font-bold">The Tools I Use</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-3xl hover:border-accent/30 transition-all group"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {cat.icon}
              </div>
              <h4 className="text-xl font-bold mb-6">{cat.title}</h4>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-soft-white/60">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
