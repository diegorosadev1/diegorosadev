import React from 'react';
import { motion } from 'motion/react';
import { Workflow, Layers } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-navy-800/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-accent font-bold uppercase tracking-widest text-sm">About Me</h2>
            <h3 className="text-4xl font-bold leading-tight">Engineering Excellence & Modern Solutions</h3>
            <p className="text-soft-white/70 text-lg leading-relaxed">
              Software engineer with 4+ years of experience building scalable web applications. Specialized in modern frontend architectures with React and full-stack solutions using Node.js.
            </p>
            <p className="text-soft-white/70 text-lg leading-relaxed">
              Strong experience designing APIs, building performant user interfaces and integrating cloud-based systems. Passionate about solving complex problems and building reliable, high-quality software.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-3xl font-bold text-accent mb-1">4+</div>
                <div className="text-sm text-soft-white/50">Years Experience</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-3xl font-bold text-accent mb-1">50+</div>
                <div className="text-sm text-soft-white/50">Projects Completed</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-4"
          >
            <div className="glass p-8 rounded-3xl space-y-4">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center text-accent">
                <Workflow size={24} />
              </div>
              <h4 className="text-xl font-bold">Scalable Architecture</h4>
              <p className="text-soft-white/60">Designing systems that grow with your business, ensuring high availability and performance.</p>
            </div>
            <div className="glass p-8 rounded-3xl space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400">
                <Layers size={24} />
              </div>
              <h4 className="text-xl font-bold">Modern Frontend</h4>
              <p className="text-soft-white/60">Crafting immersive user experiences with React, Next.js and cutting-edge CSS techniques.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
