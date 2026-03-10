import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'motion/react';
import { Rocket, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { fetchGithubProjects, EnrichedProject } from '../../services/githubService';
import ProjectCard, { ProjectSkeleton } from '../projects/ProjectCard';

const ProjectsPreview: React.FC = () => {
  const [projects, setProjects] = useState<EnrichedProject[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await fetchGithubProjects();
        setProjects(data);
      } catch (err) {
        console.error('Failed to load projects:', err);
      } finally {
        setLoading(false);
      }
    };
    loadProjects();
  }, []);

  const featuredProjects = useMemo(() => 
    projects.filter(p => p.isFeatured).slice(0, 3), 
  [projects]);

  // If no featured projects, just show the first 3
  const displayProjects = featuredProjects.length > 0 ? featuredProjects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-24 bg-navy-900 relative overflow-hidden">
      {/* Background Visuals */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] -translate-y-1/2" />
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#79D88F 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-bold mb-4 uppercase tracking-wider"
            >
              <Rocket size={12} />
              Featured Work
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-soft-white mb-4"
            >
              Selected Projects<span className="text-accent">.</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-lg"
            >
              A glimpse into my most impactful engineering work and creative experiments.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link 
              to="/projects"
              className="group flex items-center gap-2 text-soft-white hover:text-accent font-semibold transition-all"
            >
              View All Projects
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            [1, 2, 3].map(i => <ProjectSkeleton key={i} />)
          ) : (
            displayProjects.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onClick={(p) => navigate(`/projects/${p.name}`)}
              />
            ))
          )}
        </div>

        <div className="mt-16 text-center md:hidden">
          <Link 
            to="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-soft-white font-bold hover:bg-white/10 transition-all"
          >
            View All Projects
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;
