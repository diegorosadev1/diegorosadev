import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowLeft, Github, ExternalLink, Star, GitFork, 
  Calendar, CheckCircle2, Layout, Code2, Rocket,
  ChevronRight, Share2
} from 'lucide-react';
import { fetchGithubProjects, EnrichedProject } from '../services/githubService';

const ProjectDetailsPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<EnrichedProject | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadProject = async () => {
      setLoading(true);
      try {
        const projects = await fetchGithubProjects();
        const found = projects.find(p => p.name === slug);
        if (found) {
          setProject(found);
        } else {
          setError('Project not found');
        }
      } catch (err) {
        setError('Failed to load project details');
      } finally {
        setLoading(false);
      }
    };

    loadProject();
    window.scrollTo(0, 0);
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-navy-900 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-accent/20 border-t-accent rounded-full animate-spin" />
          <p className="text-gray-400 animate-pulse">Loading project details...</p>
        </div>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="min-h-screen bg-navy-900 flex flex-col items-center justify-center p-6 text-center">
        <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mb-6 border border-red-500/20">
          <Rocket size={32} className="text-red-400 rotate-180" />
        </div>
        <h1 className="text-3xl font-bold text-soft-white mb-4">{error || 'Project Not Found'}</h1>
        <p className="text-gray-400 mb-8 max-w-md">
          The project you are looking for might have been moved, renamed, or is temporarily unavailable.
        </p>
        <Link 
          to="/projects"
          className="px-8 py-3 bg-accent text-navy-900 font-bold rounded-xl hover:bg-accent/90 transition-all"
        >
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 bg-navy-900 min-h-screen relative overflow-hidden">
      {/* Background Visuals */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-accent/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/4" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-12 mt-25">
          <Link to="/" className="hover:text-accent transition-colors">Home</Link>
          <ChevronRight size={14} />
          <Link to="/projects" className="hover:text-accent transition-colors">Projects</Link>
          <ChevronRight size={14} />
          <span className="text-accent font-medium truncate">{project.displayName}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-12"
            >
              <div className="flex flex-wrap items-center gap-3 mb-6">
                {project.isFeatured && (
                  <span className="bg-accent/10 text-accent text-[10px] font-bold px-3 py-1 rounded-full border border-accent/20 tracking-wider">
                    FEATURED PROJECT
                  </span>
                )}
                {project.metadata?.status && (
                  <span className="bg-blue-500/10 text-blue-400 text-[10px] font-bold px-3 py-1 rounded-full border border-blue-500/20 tracking-wider">
                    {project.metadata.status.toUpperCase()}
                  </span>
                )}
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-soft-white mb-6 leading-tight">
                {project.displayName}
              </h1>
              
              <p className="text-xl text-gray-400 leading-relaxed mb-10">
                {project.displayDescription}
              </p>

              {/* Project Image */}
              <div className="rounded-3xl border border-white/10 overflow-hidden bg-navy-800 shadow-2xl mb-12">
                {project.metadata?.coverImage ? (
                  <img 
                    src={project.metadata.coverImage} 
                    alt={project.displayName}
                    className="w-full h-auto object-cover"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-navy-800 to-navy-900">
                    <Github size={120} className="text-white/5" />
                  </div>
                )}
              </div>

              {/* Architecture & Details */}
              <div className="space-y-12">
                {project.metadata?.architectureHighlights && (
                  <section>
                    <h3 className="text-2xl font-bold text-soft-white mb-6 flex items-center gap-3">
                      <Layout className="text-accent" />
                      Architecture & Key Features
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {project.metadata.architectureHighlights.map((highlight, idx) => (
                        <div key={idx} className="glass p-4 rounded-2xl border border-white/5 flex items-start gap-3">
                          <CheckCircle2 size={20} className="text-accent shrink-0 mt-1" />
                          <span className="text-gray-300">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                <section>
                  <h3 className="text-2xl font-bold text-soft-white mb-6 flex items-center gap-3">
                    <Code2 className="text-accent" />
                    Technical Implementation
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {project.techStack.map(tech => (
                      <span 
                        key={tech} 
                        className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 text-sm font-medium hover:border-accent/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </section>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-8">
              {/* Stats Card */}
              <div className="glass p-8 rounded-3xl border border-white/10 shadow-xl">
                <h4 className="text-soft-white font-bold mb-6 text-lg">Project Stats</h4>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-gray-400">
                      <Star size={18} />
                      <span>GitHub Stars</span>
                    </div>
                    <span className="text-soft-white font-bold">{project.stargazers_count}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-gray-400">
                      <GitFork size={18} />
                      <span>Forks</span>
                    </div>
                    <span className="text-soft-white font-bold">{project.forks_count}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-gray-400">
                      <Calendar size={18} />
                      <span>Last Updated</span>
                    </div>
                    <span className="text-soft-white font-bold">
                      {new Date(project.updated_at).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                    </span>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <a 
                    href={project.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold py-4 rounded-2xl transition-all border border-white/10"
                  >
                    <Github size={20} />
                    View Source Code
                  </a>
                  {(project.homepage || project.metadata?.demoUrl) && (
                    <a 
                      href={project.metadata?.demoUrl || project.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 bg-accent text-navy-900 font-bold py-4 rounded-2xl transition-all hover:bg-accent/90 shadow-[0_0_20px_rgba(121,216,143,0.3)]"
                    >
                      <ExternalLink size={20} />
                      Live Preview
                    </a>
                  )}
                </div>
              </div>

              {/* Share Card */}
              <div className="glass p-6 rounded-3xl border border-white/10 flex items-center justify-between">
                <span className="text-gray-400 font-medium">Share Project</span>
                <button 
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    alert('Link copied to clipboard!');
                  }}
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 transition-all border border-white/5"
                >
                  <Share2 size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
