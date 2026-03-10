import React from 'react';
import { motion } from 'motion/react';
import { Globe, Server, Cloud, Cpu, ChevronRight, Code2, Terminal } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px]" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#79D88F 0.5px, transparent 0.5px)', backgroundSize: '32px 32px' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-widest mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            Available for new projects
          </div>

          <h2 className="text-xl font-medium text-accent mb-2">Diego Rosa</h2>
          <h3 className="text-lg text-soft-white/60 mb-4 font-light tracking-wide uppercase">Frontend Engineer | React | Node.js | Cloud | CI/CD | AI 
          </h3>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
            Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-400">Scalable</span> Web Applications
          </h1>

          <p className="text-xl text-soft-white/60 mb-8 max-w-xl leading-relaxed">
            Software engineer with 4+ years of experience building modern web applications using React, Node.js and cloud technologies.
          </p>

          <div className="flex flex-wrap gap-4 items-center mb-10 text-soft-white/40 text-sm font-medium">
            <span className="flex items-center gap-1.5"><Globe size={16} className="text-accent" /> React.js</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span className="flex items-center gap-1.5"><Server size={16} className="text-accent" /> Node.js</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span className="flex items-center gap-1.5"><Cloud size={16} className="text-accent" /> Cloud</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span className="flex items-center gap-1.5"><Cpu size={16} className="text-accent" /> AI</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#projects" className="px-8 py-4 bg-accent text-navy-900 rounded-xl font-bold flex items-center justify-center gap-2 hover:glow-green transition-all group">
              View Projects <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-all">
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 aspect-[4/5] max-w-md mx-auto shadow-2xl">
            <img
              src="https://scontent.fcpq17-1.fna.fbcdn.net/v/t51.82787-15/513509996_18084435244739400_7936775074144372357_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=13d280&_nc_ohc=pIZRBI-gw7gQ7kNvwGWCvQr&_nc_oc=Adm5be3TfnW1P4MpeL8LQTyqHIUH1i9Xul1xznnTwWc4HpiNpsY0fI3HUPqSv-t1y9Qg-V0eDI2YCUxzPJ1P0kHO&_nc_zt=23&_nc_ht=scontent.fcpq17-1.fna&_nc_gid=0yOQyxSILqHiVTgxzzhRNw&_nc_ss=8&oh=00_AfwyZrZnc2s5EQxUefRlklcpBik7urItbysxKKZUvZRoQw&oe=69B49FA9"
              alt="Diego Rosa"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent opacity-60" />
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-32 h-32 border-t-2 border-r-2 border-accent/30 rounded-tr-3xl" />
          <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-2 border-l-2 border-accent/30 rounded-bl-3xl" />

          <div className="absolute top-1/2 -right-12 glass p-4 rounded-2xl animate-bounce shadow-xl">
            <Code2 className="text-accent" size={32} />
          </div>
          <div className="absolute bottom-12 -left-12 glass p-4 rounded-2xl animate-pulse shadow-xl">
            <Terminal className="text-accent" size={32} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
