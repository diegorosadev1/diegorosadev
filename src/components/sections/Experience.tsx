import React from 'react';
import { motion } from 'motion/react';

const Experience = () => {
 const experiences = [
  {
    role: "Frontend Engineer",
    company: "Self-employed",
    period: "Feb 2025 - Present",
    description:
      "Developing modern full-stack web applications, contributing from frontend implementation to architecture, infrastructure, and deployment. Working with React (Vite), Next.js, TypeScript, Node.js and NestJS to build scalable systems and well-structured APIs. Experience integrating LLMs such as Groq and Gemini to automate workflows and build conversational interfaces."
  },
  {
    role: "Front-end Developer Pleno",
    company: "Mobiis",
    period: "Mar 2024 - Jan 2025",
    description:
      "Developed and evolved interfaces for B2B logistics products, focusing on performance, scalability, and architectural organization. Built responsive applications with React and TypeScript, integrated REST APIs, implemented testing with Jest and React Testing Library, and collaborated with designers and product managers to deliver high-quality solutions."
  },
  {
    role: "Front-end Developer Junior",
    company: "Synvia",
    period: "Jul 2022 - Sep 2023",
    description:
      "Worked on healthcare applications focusing on usability, accessibility, and performance. Developed reusable components using React and Angular, integrated internal REST APIs, implemented automated tests with Jest and React Testing Library, and participated actively in agile ceremonies and code reviews."
  },
  {
    role: "Software Developer Intern",
    company: "CAEP",
    period: "Apr 2021 - Jun 2022",
    description:
      "Developed and maintained web interfaces for pharmaceutical systems. Worked primarily with Angular and Bootstrap, implemented components in React, fixed layout issues and bugs, improved accessibility, and supported the maintenance of legacy systems."
  }
];

  return (
    <section id="experience" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-accent font-bold uppercase tracking-widest text-sm mb-4">Career Path</h2>
          <h3 className="text-4xl font-bold">Professional Experience</h3>
        </div>

        <div className="space-y-12 relative before:absolute before:left-0 md:before:left-1/2 before:top-0 before:bottom-0 before:w-px before:bg-white/10">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-accent -translate-x-1/2 glow-green z-10" />
              
              <div className="md:w-1/2 pl-8 md:pl-0">
                <div className={`glass p-8 rounded-3xl ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <span className="text-accent font-bold text-sm mb-2 block">{exp.period}</span>
                  <h4 className="text-2xl font-bold mb-1">{exp.role}</h4>
                  <h5 className="text-soft-white/50 font-medium mb-4">{exp.company}</h5>
                  <p className="text-soft-white/60 leading-relaxed">{exp.description}</p>
                </div>
              </div>
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
