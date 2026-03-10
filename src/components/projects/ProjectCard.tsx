import React from "react";
import { motion } from "framer-motion";
import { Star, ExternalLink, Github, Calendar, Award } from "lucide-react";
import { EnrichedProject } from "../../services/githubService";

interface ProjectCardProps {
  project: EnrichedProject;
  onClick: (project: EnrichedProject) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const lastUpdated = new Date(project.lastDeploymentDate).toLocaleDateString(
    "pt-BR",
    {
      month: "short",
      year: "numeric",
    },
  );

  const isRecentlyUpdated =
    Date.now() - project.lastDeploymentDate < 7 * 24 * 60 * 60 * 1000;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -8 }}
      onClick={() => onClick(project)}
      className="group relative glass rounded-2xl border border-white/10 overflow-hidden cursor-pointer flex flex-col h-full transition-all duration-300 hover:border-accent/30 hover:shadow-[0_0_30px_rgba(121,216,143,0.1)]"
    >
      {isRecentlyUpdated && (
        <div className="absolute top-4 left-4 z-20 bg-navy-900/80 backdrop-blur-md border border-[#79D88F]/30 text-[#79D88F] text-[10px] font-bold px-3 py-1 rounded-full flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#79D88F] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#79D88F]"></span>
          </span>
          LATEST UPDATE
        </div>
      )}

      {project.isFeatured && (
        <div className="absolute top-4 right-4 z-20 bg-[#79D88F]/90 text-navy-900 text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1 shadow-lg">
          <Award size={12} />
          FEATURED
        </div>
      )}

      <div className="relative h-48 overflow-hidden bg-navy-800">
        {project.metadata?.coverImage ? (
          <img
            src={project.metadata.coverImage}
            alt={project.displayName}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-navy-800 to-navy-900 opacity-50">
            <Github size={48} className="text-white/10" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent opacity-60" />
      </div>

      <div className="p-6 flex flex-col flex-grow relative">
        <h3 className="text-xl font-bold text-[#E6EDF7] group-hover:text-[#79D88F] mb-3 transition-colors truncate">
          {project.displayName}
        </h3>
        <p className="text-gray-400 text-sm line-clamp-3 mb-6 flex-grow">
          {project.displayDescription}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="pt-4 border-t border-white/5 flex items-center justify-between mt-auto">
          <span className="flex items-center gap-1 text-gray-500 text-[10px]">
            <Calendar size={12} /> {lastUpdated}
          </span>
          <div className="flex items-center gap-3">
            <a
              href={project.html_url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-gray-400 hover:text-[#79D88F] transition-colors"
            >
              <Github size={18} />
            </a>
            {project.vercelUrl && (
              <a
                href={project.vercelUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-gray-400 hover:text-[#79D88F] transition-colors"
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// AQUI ESTAVA O ERRO: Adicionado o "export" abaixo
export const ProjectSkeleton: React.FC = () => (
  <div className="glass rounded-2xl border border-white/10 overflow-hidden h-[450px] animate-pulse">
    <div className="h-48 bg-white/5" />
    <div className="p-6 space-y-4">
      <div className="h-6 bg-white/5 rounded w-3/4" />
      <div className="h-4 bg-white/5 rounded w-full" />
      <div className="h-4 bg-white/5 rounded w-2/3" />
    </div>
  </div>
);

export default ProjectCard;
