import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, Linkedin, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  text: string;
  avatar: string;
  linkedin?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Daniel Henrique Garcia",
    role: "Backend Developer",
    company: "Tech Solutions",
    text: "Diego is an exceptional engineer who consistently demonstrates strong problem-solving skills and attention to detail. His expertise in frontend architecture and modern web technologies makes him a valuable contributor to any team.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&auto=format&fit=crop",
    linkedin: "#"
  },
  {
    id: 2,
    name: "Vitor Matheus Valandro da Rosa",
    role: "Fullstack Developer",
    company: "Innovation Lab",
    text: "Working with Diego has been a great experience. He has strong technical knowledge, communicates well with the team and always focuses on delivering high quality solutions.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&auto=format&fit=crop",
    linkedin: "#"
  },
  {
    id: 3,
    name: "Sarah Jenkins",
    role: "Product Manager",
    company: "Global Systems",
    text: "Diego has a rare ability to translate complex technical requirements into elegant, user-friendly interfaces. His commitment to code quality and performance is evident in every project he touches.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop",
    linkedin: "#"
  },
  {
    id: 4,
    name: "Marcus Silva",
    role: "Senior DevOps Engineer",
    company: "CloudScale",
    text: "Diego's understanding of CI/CD pipelines and cloud infrastructure is impressive. He doesn't just write code; he builds systems that are robust and easy to maintain.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop",
    linkedin: "#"
  }
];

const Recommendations: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + testimonials.length) % testimonials.length);
  };

  return (
    <section id="recommendations" className="py-24 bg-navy-900 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-soft-white mb-4"
          >
            Recommendations
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            What colleagues and collaborators say about working with me.
          </motion.p>
        </div>

        <div className="relative h-[450px] md:h-[350px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
                scale: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute w-full max-w-4xl"
            >
              <div className="glass p-8 md:p-12 rounded-3xl border border-white/10 flex flex-col md:flex-row gap-8 items-center md:items-start relative group shadow-2xl">
                <Quote className="absolute top-6 right-8 text-accent/10 w-16 h-16 md:w-24 md:h-24 pointer-events-none" />
                
                <div className="shrink-0">
                  <div className="relative">
                    <div className="absolute -inset-2 bg-accent/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                    <img 
                      src={testimonials[currentIndex].avatar} 
                      alt={testimonials[currentIndex].name}
                      className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-accent/50 relative z-10 shadow-xl"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                <div className="flex flex-col h-full text-center md:text-left">
                  <div className="mb-6">
                    <h4 className="text-2xl text-soft-white font-bold mb-1">{testimonials[currentIndex].name}</h4>
                    <p className="text-accent font-medium">{testimonials[currentIndex].role}</p>
                    <p className="text-gray-500 text-sm">{testimonials[currentIndex].company}</p>
                  </div>

                  <p className="text-gray-300 text-lg leading-relaxed italic mb-8">
                    "{testimonials[currentIndex].text}"
                  </p>

                  {testimonials[currentIndex].linkedin && (
                    <div className="mt-auto flex justify-center md:justify-start">
                      <a 
                        href={testimonials[currentIndex].linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-400 hover:text-accent transition-all group/link"
                      >
                        <span className="text-sm font-medium">View Profile</span>
                        <Linkedin size={18} className="group-hover/link:scale-110 transition-transform" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none px-2 md:-mx-12">
            <button
              onClick={() => paginate(-1)}
              className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center text-soft-white hover:bg-white/10 hover:text-accent transition-all pointer-events-auto backdrop-blur-md"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => paginate(1)}
              className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center text-soft-white hover:bg-white/10 hover:text-accent transition-all pointer-events-auto backdrop-blur-md"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-accent w-8' : 'bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
