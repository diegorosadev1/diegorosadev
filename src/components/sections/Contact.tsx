import React from "react";
import { motion } from "motion/react";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 bg-navy-800/50 relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-accent font-bold uppercase tracking-widest text-sm mb-4">
              Get In Touch
            </h2>
            <h3 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              Let's Build Something{" "}
              <span className="text-accent">Exceptional</span>
            </h3>
            <p className="text-xl text-soft-white/60 mb-12 max-w-lg">
              I'm always open to discussing new projects, creative ideas or
              opportunities to be part of your visions.
            </p>

            <div className="space-y-6">
              <a
                href="mailto:diego.rosa@example.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:text-navy-900 transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-sm text-soft-white/40 uppercase tracking-widest font-bold">
                    Email Me
                  </div>
                  <div className="text-lg font-medium">
                    diegorosadev1@gmail.com
                  </div>
                </div>
              </a>
              <div className="flex gap-4 pt-6">
                {[
                  {
                    icon: <Github size={24} />,
                    href: "https://github.com/diegorosadev1",
                  },
                  {
                    icon: <Linkedin size={24} />,
                    href: "https://www.linkedin.com/in/diegodossantosrosa/",
                  },
                  {
                    icon: <Twitter size={24} />,
                    href: "https://x.com/Diegodo62053549",
                  },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:scale-110 transition"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass p-10 rounded-[40px]"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-soft-white/40 ml-1">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-navy-900/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-soft-white/40 ml-1">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-navy-900/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-soft-white/40 ml-1">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Project Inquiry"
                  className="w-full bg-navy-900/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-soft-white/40 ml-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full bg-navy-900/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-all resize-none"
                ></textarea>
              </div>
              <button className="w-full py-4 bg-accent text-navy-900 rounded-xl font-bold hover:glow-green transition-all">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
